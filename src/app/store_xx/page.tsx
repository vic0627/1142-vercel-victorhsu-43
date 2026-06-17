import Image from 'next/image';
import Hero_xx from './_components/home/Hero_xx';
import FeaturedProducts from './_components/home/FeaturedProducts_xx';
import { Suspense } from 'react';
import LoadingContainer from './_components/global/LoadingContainer';

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <>
      <Hero_xx />
      {/* <LoadingContainer /> */}
      <Suspense fallback={<LoadingContainer />}>
        <FeaturedProducts />
      </Suspense>
    </>
  );
}
