import Link from 'next/link';
import LogoStore_xx from './LogoStore_xx';
import { ModeToggle } from './ModeToggle';
import { Button } from '@/components/ui/button';
import StoreSignInOutAuth_xx from './StoreSignInOutAuth_xx';
import NavSearch_xx from './NavSearch_xx';
import CartButton_xx from './CartButton_xx';

const NavbarStore_xx = () => {
  return (
    <div className='flex items-center justify-around mx-auto py-4 bg-amber-100 dark:bg-gray-700'>
      <LogoStore_xx />
      <NavSearch_xx />
      <div className='flex items-center gap-4'>
        <Link href='/'>
          <Button variant='secondary'>TKUdemo</Button>
        </Link>
        <CartButton_xx />
        <ModeToggle />
        <StoreSignInOutAuth_xx />
      </div>
    </div>
  );
};

export default NavbarStore_xx;
