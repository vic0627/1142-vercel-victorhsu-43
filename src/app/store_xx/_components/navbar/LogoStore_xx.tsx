import Link from 'next/link';
import Image from 'next/image';

const LogoStore_xx = () => {
  return (
    <Link href='/store_xx'>
      <Image
        src='/images/midterm/assets/crown.svg'
        alt='Logo'
        width={36}
        height={36}
      />
    </Link>
  );
};

export default LogoStore_xx;
