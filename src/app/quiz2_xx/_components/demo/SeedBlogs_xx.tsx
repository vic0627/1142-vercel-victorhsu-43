import { SeedBlog_xx } from '../../_utils/action';

const SeedBlogs_xx = () => {
  return (
    <form action={SeedBlog_xx}>
      <button
        type='submit'
        className='text-blue-700 bg-blue-200 hover:bg-blue-300 capitalize px-2 py-1 text-base rounded'
      >
        seed all
      </button>
    </form>
  );
};

export default SeedBlogs_xx;
