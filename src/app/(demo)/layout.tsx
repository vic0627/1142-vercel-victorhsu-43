import type { Metadata } from 'next';
// import { Geist, Geist_Mono } from 'next/font/google';
import '../globals.css';

import localFont from 'next/font/local';

import NavbarMain_xx from '@/components/NavbarMain_xx';
import { ThemeProvider } from '@/components/providers/ThemeProvider';

const geistLocalFont = localFont({
  src: '../_assets/fonts/geist.woff2',
  display: 'swap',
});

const geistMonoLocalFont = localFont({
  src: '../_assets/fonts/geist-mono.woff2',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Next.js Introduction',
  description: 'Given for basic understanding of Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${geistLocalFont.className} ${geistMonoLocalFont.className} antialiased`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <NavbarMain_xx />
          <main className='max-w-3xl mx-auto py-4'>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
