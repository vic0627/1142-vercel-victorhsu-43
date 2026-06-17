import {
  fetchAdminProductDetails,
  updateProductAction,
} from '../../../../_utils/action';
import FormContainer from '../../../../_components/form/FormContainer';
import FormInput from '../../../../_components/form/FormInput';
import PriceInput from '../../../../_components/form/PriceInput';
import { SubmitButton } from '../../../../_components/form/Buttons';

const EditProductPage_xx = async ({
  params,
}: {
  params: Promise<{ pid: string }>;
}) => {
  const { pid } = await params;
  const shop = await fetchAdminProductDetails(pid);
  console.log('shop details', shop);
  const { pname, cat_id, img_url, remote_img_url, price } = shop;
  return (
    <section>
      <h1 className='text-2xl font-semibold mb-8 capitalize'>update product</h1>
      <div className='border p-8 rounded-md'>
        <FormContainer action={updateProductAction}>
          <div className='grid gap-4 md:grid-cols-2 my-4'>
            <input type='hidden' name='pid' value={pid} />
            <FormInput
              type='text'
              name='pname'
              label='product name'
              defaultValue={pname}
            />
            <FormInput
              type='number'
              name='cat_id'
              label='category id'
              defaultValue={String(cat_id)}
            />
            <FormInput
              type='text'
              name='img_url'
              label='ImageUrl'
              defaultValue={img_url}
            />
            <FormInput
              type='text'
              name='remote_img_url'
              label='Remote ImageUrl'
              defaultValue={remote_img_url}
            />
            <FormInput
              type='number'
              name='price'
              label='Price ($)'
              defaultValue={String(price)}
            />
          </div>

          <SubmitButton text='update product' className='mt-8' />
        </FormContainer>
      </div>
    </section>
  );
};
export default EditProductPage_xx;
