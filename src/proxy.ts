import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextRequest, NextResponse, NextFetchEvent } from 'next/server';

const isOfflineMode = process.env.NEXT_PUBLIC_APP_MODE === 'offline';

// Offline mode: simply pass through all requests
const offlineMiddleware = (req: NextRequest) => {
  return NextResponse.next();
};

// Export a single middleware that picks the correct one
export default function middleware(req: NextRequest, event: NextFetchEvent) {
  if (isOfflineMode) {
    return offlineMiddleware(req);
  }
  return onlineMiddleware(req, event);
}

const isPublicRoute = createRouteMatcher([
  '/',
  '/store_xx',
  '/store_xx/products_xx(.*)',
  '/store_xx/about_xx',
]);
const isAdminRoute = createRouteMatcher(['/store_xx/admin_xx(.*)']);

const onlineMiddleware = clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();
  const isAdminUser = userId === process.env.ADMIN_USER_ID;

  if (isAdminRoute(req) && !isAdminUser) {
    return NextResponse.redirect(new URL('/store_xx', req.url));
  }

  if (!isPublicRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
