import BreadCrumbs_xx from '../../_components/single-product/BreadCrumbs_xx';
import { fetchSingleProduct } from '../../_utils/action';
import Image from 'next/image';
import { formatCurrency } from '../../_utils/format';
import FavoriteToggleButton_xx from '../../_components/products/FavoriteToggleButton_xx';
import AddToCart_xx from '../../_components/single-product/AddToCart_xx';
import ProductRating_xx from '../../_components/single-product/ProductRating_xx';

const SingleProductPage_xx = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  // console.log('Fetching product with id:', id);
  const product = await fetchSingleProduct(id);
  // console.log('Fetched product:', product);
  const { name, image, company, description, price } = product;
  const dollarsAmount = formatCurrency(price);
  return (
    <section>
      <BreadCrumbs_xx name={product.name} />
      <div className='mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16'>
        {/* IMAGE FIRST COL */}
        <div className='relative h-full'>
          <Image
            src={image}
            alt={name}
            fill
            sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw'
            priority
            className='w-full rounded-md object-cover'
          />
        </div>
        {/* PRODUCT INFO SECOND COL */}
        <div>
          <div className='flex gap-x-8 items-center'>
            <h1 className='capitalize text-3xl font-bold'>{name}</h1>
            <FavoriteToggleButton_xx productId={id} />
          </div>
          <ProductRating_xx productId={id} />
          <h4 className='text-xl mt-2'>{company}</h4>
          <p className='mt-3 text-md bg-muted inline-block p-2 rounded-md'>
            {dollarsAmount}
          </p>
          <p className='mt-6 leading-8 text-muted-foreground'>{description}</p>
          <AddToCart_xx productId={id} />
        </div>
      </div>
    </section>
  );
};
export default SingleProductPage_xx;
