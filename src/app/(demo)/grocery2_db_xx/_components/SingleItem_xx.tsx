'use client';

import DeleteButton_xx from './DeleteButton_xx';
import { editGrocery } from '@/actions/grocery.action_xx';

type GroceryItem = {
  id: string;
  name: string;
  completed: boolean;
};

const SingleItem_xx = ({ item }: { item: GroceryItem }) => {
  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={item.completed}
        name='completed'
        onChange={() => editGrocery(item.id, !item.completed)}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.completed ? 'line-through' : undefined,
        }}
      >
        {item.name}
      </p>
      <DeleteButton_xx id={item.id} />
    </div>
  );
};
export default SingleItem_xx;
