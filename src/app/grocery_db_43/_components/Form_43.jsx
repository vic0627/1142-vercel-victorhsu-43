'use client';

import { createGrocery } from '@/actions/grocery_43';

const Form_43 = () => {
  return (
    <form action={createGrocery}>
      <h4>grocery bud (db)</h4>
      <div className='form-control'>
        <input
          type='text '
          className='form-input'
          name='name'
        />
        <button type='submit' className='btn'>
          add item
        </button>
      </div>
    </form>
  );
};
export default Form_43;
