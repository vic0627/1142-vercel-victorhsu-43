'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export const fetchCategory_xx = async () => {
  const categories = await prisma.category_xx.findMany();
  return categories;
};

export const deleteProduct_xx = async (formData: FormData) => {
  const id = Number(formData.get('id'));

  if (isNaN(id)) {
    throw new Error('Invalid product ID');
  }

  await prisma.shop_xx.deleteMany({
    where: { pid: id },
  });

  revalidatePath('/mid_xx');
};
