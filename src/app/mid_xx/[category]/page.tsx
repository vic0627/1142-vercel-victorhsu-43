import Product_xx from '../_components/Product_xx';
import Wrapper from '../_assets/wrappers/Shop_xx';

import { prisma } from '@/lib/prisma';

type Product = {
  pid: number;
  pname: string | null;
  cat_id: number | null;
  price: number | null;
  img_url: string | null;
  remote_img_url: string | null;
};

const FetchProductsByCategory_xx = async ({
  params,
}: {
  params: Promise<{ category: string }>;
}) => {
  const { category } = await params;
  console.log('category param:', category);

  const categoryRecord = await prisma.category_xx.findFirst({
    where: { cname: category },
  });

  if (!categoryRecord) {
    return <div>Category not found</div>;
  }

  const shop_xx = await prisma.shop_xx.findMany({
    where: { cat_id: categoryRecord.cid },
  });

  console.log('Products by category :', shop_xx);

  return (
    <Wrapper>
      <div className='shop-page'>
        <div className='section-title'>
          <h4> Hsingtai Chung, 123456789 </h4>
        </div>
        <div className='collection-page'>
          <h1 className='title'>{category}</h1>
          <div className='items'>
            {shop_xx?.map((item: Product) => {
              const { pid, img_url, pname, price } = item;
              return (
                <Product_xx
                  key={pid}
                  pid={pid}
                  img_url={img_url}
                  pname={pname}
                  price={price}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default FetchProductsByCategory_xx;
