import SingleItem_xx from './SingleItem_xx';
import { fetchGrocery } from '@/actions/grocery.action_xx';

const Items_xx = async () => {
  const items = await fetchGrocery();
  return (
    <div className='items'>
      {items.map((item) => {
        return <SingleItem_xx key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items_xx;
