import FeaturedBlogs_xx from './_components/home/FeaturedBlogs_xx';
import { Suspense } from 'react';
import LoadingContainer from './_components/global/LoadingContainer';

export const dynamic = 'force-dynamic';

export default function Quiz2_xx() {
  return (
    <>
      <Suspense fallback={<LoadingContainer />}>
        <FeaturedBlogs_xx />
      </Suspense>
    </>
  );
}
