import { deleteAllBlog_xx } from '../../_utils/action';

const DeleteAllBlogs_xx = () => {
  return (
    <form action={deleteAllBlog_xx}>
      <button
        type='submit'
        className='text-red-700 bg-red-200 hover:bg-red-300 capitalize px-2 py-1 text-base rounded'
      >
        delete all
      </button>
    </form>
  );
};

export default DeleteAllBlogs_xx;
