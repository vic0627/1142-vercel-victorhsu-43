'use client';

import { createUser2 } from '@/actions/user.action_xx';

import { useFormStatus, useFormState } from 'react-dom';

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button type='submit' className={btnStyle} disabled={pending}>
      {pending ? 'submitting...' : 'Submit'}
    </button>
  );
};

const Form_xx = () => {
  const [message, formAction] = useFormState(createUser2, null);
  return (
    <form action={formAction} className={formStyle}>
      {message && <p>{message}</p>}
      <h2 className='text-2xl capitalize'>create user</h2>
      <label htmlFor='name' className='font-bold'>
        Name
      </label>
      <input type='text' name='name' required className={inputStyle} />
      <label htmlFor='email' className='font-bold'>
        Email
      </label>
      <input type='text' name='email' required className={inputStyle} />
      <SubmitButton />
    </form>
  );
};

const formStyle = 'max-w-lg flex flex-col gap-y-4  shadow rounded p-8';
const inputStyle = 'border shadow rounded py-2 px-3 text-gray-700';
const btnStyle =
  'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize';

export default Form_xx;
