import ProductsContainer_xx from '../_components/products/ProductsContainer_xx';

export const dynamic = 'force-dynamic';

const ProductPage_xx = async ({
  searchParams,
}: {
  searchParams: Promise<{ layout?: string; search?: string }>;
}) => {
  const { layout = 'grid', search = '' } = await searchParams;
  return <ProductsContainer_xx layout={layout} search={search} />;
};

export default ProductPage_xx;
