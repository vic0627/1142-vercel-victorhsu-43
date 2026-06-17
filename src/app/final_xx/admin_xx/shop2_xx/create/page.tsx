import FormInput from '../../../_components/form/FormInput';
import { SubmitButton } from '../../../_components/form/Buttons';
import FormContainer from '../../../_components/form/FormContainer';
import { createProductAction2 } from '../../../_utils/action';
import ImageInput from '../../../_components/form/ImageInput';
import PriceInput from '../../../_components/form/PriceInput';
import TextAreaInput from '../../../_components/form/TextAreaInput';
import CheckboxInput from '../../../_components/form/CheckboxInput';

export const dynamic = 'force-dynamic';

const CreateProductPage = () => {
  return (
    <section>
      <h1 className='text-2xl font-semibold mb-8 capitalize'>create product</h1>
      <div className='border p-8 rounded-md'>
        <FormContainer action={createProductAction2}>
          <div className='grid gap-4 md:grid-cols-2 my-4'>
            <FormInput
              type='text'
              name='pname'
              label='product name'
              defaultValue=''
            />
            <FormInput
              type='number'
              name='cat_id'
              label='category id'
              defaultValue=''
            />
            <FormInput
              type='text'
              name='img_url'
              label='ImageUrl'
              defaultValue={`/images/midterm/hats/brown-brim.png`}
            />
            <FormInput
              type='text'
              name='remote_img_url'
              label='Remote ImageUrl'
              defaultValue={`https://i.ibb.co/ZYW3VTp/brown-brim.png`}
            />
            <FormInput
              type='number'
              name='price'
              label='Price ($)'
              defaultValue=''
            />
          </div>

          <SubmitButton text='create product' className='mt-8' />
        </FormContainer>
      </div>
    </section>
  );
};
export default CreateProductPage;
