import { SignOutButton } from '@clerk/nextjs';
import { toast } from 'sonner';

const StoreSignOut_xx = () => {
  const handleLogout = () => {
    toast('You have been signed out.');
  };
  return (
    <SignOutButton redirectUrl='/store_xx'>
      <button className='w-full text-left' onClick={handleLogout}>
        Logout
      </button>
    </SignOutButton>
  );
};

export default StoreSignOut_xx;
