import EmptyList from '../global/EmptyList';
import SectionTitle from '../global/SectionTitle';
import ProductsGrid_xx from '../products/ProductsGrid_xx';
import { fetchFeaturedProducts } from '../../_utils/action';

const FeaturedProducts_xx = async () => {
  const products = await fetchFeaturedProducts();
  // console.log('featured products', products);
  return (
    <section className='pt-24'>
      <SectionTitle text='featured products' />
      <ProductsGrid_xx products={products} />
    </section>
  );
};
export default FeaturedProducts_xx;
