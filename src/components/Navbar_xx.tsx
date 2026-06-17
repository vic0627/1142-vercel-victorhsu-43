import Link from 'next/link';

const Navbar_xx = () => {
  return (
    <nav className='max-w-3xl mx-auto py-4 flex gap-x-4'>
      <Link href='/'>Home</Link>
      <Link href='/mid_xx'>Mid_xx</Link>
      <Link href='/counter_xx'>Counter_xx</Link>
      <Link href='/tours_xx'>Tours_xx</Link>
      <Link href='/actions_xx'>Actions_xx</Link>
      <Link href='/users_db_xx'>Users_db_xx</Link>
      <Link href='/grocery_xx'>Grocery_xx</Link>
      <Link href='/grocery2_db_xx'>Grocery2_db_xx</Link>
    </nav>
  );
};

export default Navbar_xx;
