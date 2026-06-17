import { prisma } from '@/lib/prisma';
import Link from 'next/link';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { IconButton } from '../../../_components/form/Buttons';
import FormContainer from '../../../_components/form/FormContainer';
import { deleteProductAction } from '../../../_utils/action';

export const dynamic = 'force-dynamic';

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
    <section>
      <div className='space-y-2'>
        <div className='flex items-center justify-between mr-16'>
          <h1 className='text-2xl text-bold capitalize'>{category}</h1>
          <div className='flex items-center gap-x-4'>
            <Button asChild variant='default'>
              <Link href='/final_xx/admin_xx/shop2_xx/create'>Create New</Link>
            </Button>
          </div>
        </div>
      </div>
      <Separator className='my-4' />
      <Table>
        <TableCaption className='capitalize'>
          total products : {products.length}
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Product ID</TableHead>
            <TableHead>Product Name</TableHead>
            <TableHead>Category ID</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products?.map((item) => {
            const { pid, pname, cat_id, price } = item;
            return (
              <TableRow key={pid}>
                <TableCell>
                  <Link href='#'>{pid}</Link>
                </TableCell>
                <TableCell>
                  <Link href='#'>{pname}</Link>
                </TableCell>
                <TableCell>{cat_id}</TableCell>
                <TableCell>{price}</TableCell>
                <TableCell className='flex items-center gap-x-2'>
                  <Link href={`/final_xx/admin_xx/shop2_xx/edit/${pid}`}>
                    <IconButton actionType='edit' />
                  </Link>
                  <DeleteShop pid={pid} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </section>
  );
};

function DeleteShop({ pid }: { pid: string }) {
  const deleteShop = deleteProductAction.bind(null, { pid });
  return (
    <FormContainer action={deleteShop}>
      <IconButton actionType='delete' />
    </FormContainer>
  );
}
export default FetchProductsByCategory_xx;
