import FormInput from '../../../_components/form/FormInput';
import { SubmitButton } from '../../../_components/form/Buttons';
import FormContainer from '../../../_components/form/FormContainer';
import { createProductAction2 } from '../../../_utils/action';
import ImageInput from '../../../_components/form/ImageInput';
import PriceInput from '../../../_components/form/PriceInput';
import TextAreaInput from '../../../_components/form/TextAreaInput';
import { faker } from '@faker-js/faker';
import CheckboxInput from '../../../_components/form/CheckboxInput';

export const dynamic = 'force-dynamic';

const CreateProductPage = () => {
  const name = faker.commerce.productName();
  const company = faker.company.name();
  const description = faker.lorem.paragraph({ min: 10, max: 12 });

  return (
    <section>
      <h1 className='text-2xl font-semibold mb-8 capitalize'>create product</h1>
      <div className='border p-8 rounded-md'>
        <FormContainer action={createProductAction2}>
          <div className='grid gap-4 md:grid-cols-2 my-4'>
            <FormInput
              type='text'
              name='name'
              label='product name'
              defaultValue={name}
            />
            <FormInput
              type='text'
              name='company'
              label='company'
              defaultValue={company}
            />
            <PriceInput />
            <FormInput
              type='text'
              name='image'
              label='ImageUrl'
              defaultValue={`/images/store/product-1.jpg`}
            />
          </div>
          <TextAreaInput
            name='description'
            labelText='product description'
            defaultValue={description}
          />
          <div>
            <CheckboxInput name='featured' label='featured' />
          </div>
          <SubmitButton text='create product' className='mt-8' />
        </FormContainer>
      </div>
    </section>
  );
};
export default CreateProductPage;
