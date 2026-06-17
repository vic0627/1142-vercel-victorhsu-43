import EmptyList from '../global/EmptyList';
import SectionTitle from '../global/SectionTitle';
import BlogsGrid2_xx from '../blogs/BlogsGrid2_xx';
import { fetchFeaturedBlogs } from '../../_utils/action';

const FeaturedBlogs_xx = async () => {
  const blogs = await fetchFeaturedBlogs();
  // console.log('featured blogs', blogs);
  return (
    <section className='pt-24'>
      <SectionTitle text='featured blogs from local PostgreSQL' />
      <BlogsGrid2_xx blogs={blogs} />
    </section>
  );
};
export default FeaturedBlogs_xx;
