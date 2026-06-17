import Wrapper from '../../_assets/wrapper/Blog2_xx';
import Blog2_xx from '../../_components/demo/Blog2_xx';
import { typeBlog2_xx } from '../../_utils/action';

const BlogsGrid2_xx = ({ blogs }: { blogs: typeBlog2_xx[] }) => {
  return (
    <Wrapper>
      <section className='blogs'>
        <div className='blogs-center2'>
          {blogs?.map((item) => {
            const { id, title, descrip, category, img } = item;
            return (
              <Blog2_xx
                id={id}
                title={title}
                descrip={descrip}
                category={category}
                img={img}
              />
            );
          })}
        </div>
      </section>
    </Wrapper>
  );
};
export default BlogsGrid2_xx;
