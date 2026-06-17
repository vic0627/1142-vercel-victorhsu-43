'use client';

import { useParams } from 'next/navigation';

const TourDetailPage_xx = async () => {
  // const param = await params;
  const params = useParams();
  console.log('params id', params.id);
  return (
    <div>
      <h2 className='text-2xl'>ID: </h2>
    </div>
  );
};

export default TourDetailPage_xx;
