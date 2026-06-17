import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LuShoppingCart } from 'react-icons/lu';

const CartButton_xx = () => {
  const numItemsInCart = 3;
  return (
    <Button
      asChild
      variant='secondary'
      size='icon'
      className='flex justify-center items-center relative'
    >
      <Link href='/store_xx/cart_xx'>
        <LuShoppingCart />
        <span className='absolute -top-2 -right-2 bg-primary text-white h-4 w-4 rounded-full flex justify-center items-center text-xs'>
          {numItemsInCart}
        </span>
      </Link>
    </Button>
  );
};
export default CartButton_xx;
