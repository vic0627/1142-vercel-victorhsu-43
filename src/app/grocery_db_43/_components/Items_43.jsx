

import SingleItem from './SingleItem_43';
import { fetchGrocery } from '@/actions/grocery_43'

const Items = async () => {
  const items = await fetchGrocery();
  return (
    <div className='items'>
      {items.map((item) => {
        return (
          <SingleItem
            key={item.id}
            item={item}
          />
        );
      })}
    </div>
  );
};
export default Items;
