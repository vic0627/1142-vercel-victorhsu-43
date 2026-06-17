import { fetchCategory_xx } from './_utils/action';
import Wrapper from './_assets/wrapper/Shop_xx';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function FinalHome_xx() {
  const categories_xx = await fetchCategory_xx();
  console.log(categories_xx);
  return (
    <>
      <Wrapper>
        <div className='shop-page'>
          <div className='section-title'>
            <h4> Victor Hsu, 213410243 </h4>
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
                    <Link href={`/final_xx/${cname}`} className='content'>
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
    </>
  );
}
