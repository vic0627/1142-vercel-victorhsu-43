import Wrapper from './_assets/wrappers/Shop_xx';
import Link from 'next/link';

import { prisma } from '@/lib/prisma';

const fetchCategory_xx = async () => {
  const categories = await prisma.category2_43.findMany();
  return categories;
};

const StaticPage_xx = async () => {
  const categories_xx = await fetchCategory_xx();
  // console.log('Fetched categories:', categories_xx);
  return (
    <Wrapper>
      <div className='shop-page'>
        <div className='section-title'>
          <h4> Hsingtai Chung, 123456789 </h4>
        </div>
        <div className='homepage'>
          <div className='directory-menu'>
            {categories_xx?.map((item) => {
              const { cid, cname, size, image_url } = item;
              return (
                <div className={`${size} menu-item`} key={cid}>
                  <img
                    className='background-image'
                    src={image_url || 'default.jpg'}
                    alt=''
                  />
                  <Link href={`/mid_xx/${cname}`} className='content'>
                    <h1 className='title'>{item.cname}</h1>
                    <span className='subtitle'>SHOP NOW</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default StaticPage_xx;
