import Product_xx from '../_components/shop/Product_xx';
import Wrapper from '../_assets/wrapper/Shop_xx';

import { prisma } from '@/lib/prisma';

type Product = {
  pid: string;
  pname: string;
  cat_id: number;
  price: number;
  img_url: string;
  remote_img_url: string;
};

const fetchProducts = async (category: string) => {
  const cat = await prisma.category2_43.findFirst({
    where: { cname: category },
  });
  if (!cat) return [];
  const products = await prisma.shop2_43.findMany({
    where: { cat_id: cat.cid },
  });
  return products;
};

const FetchProductsByCategory_xx = async ({
  params,
}: {
  params: Promise<{ category: string }>;
}) => {
  const { category } = await params;
  console.log('category param:', category);
  const products = await fetchProducts(category);
  console.log(products);
  return (
    <Wrapper>
      <div className='shop-page'>
        <div className='section-title'>
          <h4> Victor Hsu, 213410243 </h4>
        </div>
        <div className='collection-page'>
          <h1 className='title'>{category}</h1>
          <div className='items'>
            {products?.map((item: Product) => {
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
