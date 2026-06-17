import { removeUser } from '@/actions/user.action_xx';

const DeleteButton_xx = ({ id }: { id: number }) => {
  const removeUserWithId = removeUser.bind(null, id);
  return (
    <form action={removeUserWithId}>
      <input type='hidden' name='name' value='random' />
      <button
        type='submit'
        className='bg-red-500 text-white p-2 text-xs rounded'
      >
        delete
      </button>
    </form>
  );
};

export default DeleteButton_xx;
