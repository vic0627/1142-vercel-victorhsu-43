import { auth } from '@clerk/nextjs/server';
import StoreSignInOut_xx from './StoreSignInOut_xx';

const StoreSignInOutAuth_xx = async () => {
  const { userId } = await auth();
  const isAdminUser = userId === process.env.ADMIN_USER_ID;
  return <StoreSignInOut_xx isAdminUser={isAdminUser} />;
};

export default StoreSignInOutAuth_xx;
