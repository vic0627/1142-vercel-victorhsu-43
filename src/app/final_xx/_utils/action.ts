'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { Prisma } from '@/generated/prisma/client';
import { redirect } from 'next/navigation';

import { shop2Schema } from './schemas';

import { validateWithZodSchema } from './schemas';

export type typeShop2_xx = Prisma.Shop2_43GetPayload<object>;

const renderError = (error: unknown): { message: string } => {
  console.log(error);
  return {
    message: error instanceof Error ? error.message : 'an error occurred',
  };
};

export const fetchCategory_xx = async () => {
  const categories = await prisma.category2_43.findMany();
  return categories;
};

export const deleteProduct_xx = async (formData: FormData) => {};

export const fetchAdminShops = async () => {
  const shops = await prisma.shop2_43.findMany();
  return shops;
};

export const deleteProductAction = async (prevState: { pid: string }) => {
  const { pid } = prevState;
  try {
    const shop = await prisma.shop2_43.delete({
      where: {
        pid,
      },
    });
    revalidatePath(`/final_xx/admin_xx`);
    return { message: 'blog removed' };
  } catch (error) {
    return renderError(error);
  }
};

export const fetchAdminProductDetails = async (pid: string) => {
  const shop = await prisma.shop2_43.findUnique({
    where: { pid },
  });
  if (!shop) redirect('/final_xx/admin_xx/shop_xx');
  return shop;
};

export const updateProductAction = async (
  prevState: any,
  formData: FormData
) => {
  try {
    const pid = formData.get('pid') as string;
    const rawData = Object.fromEntries(formData);
    const { id, $ACTION_REF_1, $ACTION_1, $ACTION_KEY, ...cleanData } = rawData;
    const validatedFields = validateWithZodSchema(shop2Schema, cleanData);

    await prisma.shop2_43.update({
      where: {
        pid,
      },
      data: {
        ...validatedFields,
      },
    });
    revalidatePath(`/final_xx/admin_xx/shop2_xx/edit/${pid}`);
    return { message: 'Blog updated successfully' };
  } catch (error) {
    return renderError(error);
  }
};

export const createProductAction2 = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  // const user = await getAuthUser();

  try {
    const raw = Object.fromEntries(formData);
    const validatedFields = shop2Schema.parse(raw);
    await prisma.shop2_43.create({
      data: { ...validatedFields },
    });
    return { message: 'shop product created' };
  } catch (error) {
    return renderError(error);
  }
};
