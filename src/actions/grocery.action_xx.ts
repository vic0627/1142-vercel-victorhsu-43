'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { nanoid } from 'nanoid';

export const fetchGrocery = async () => {
  const items = await prisma.grocery.findMany();
  return items;
};

export const createGrocery = async (formDate: FormData) => {
  const name = formDate.get('name') as string;
  const id = nanoid();
  const completed = false;
  const newItem = { id, name, completed };
  try {
    const result = await prisma.grocery.create({
      data: newItem,
    });
    revalidatePath('/grocery_db_xx');
  } catch (error) {
    console.log(error);
  }
};

export const removeGrocery = async (id: string, formData: FormData) => {
  // const id = formData.get('id') as string;
  await prisma.grocery.delete({ where: { id } });
  revalidatePath('/grocery_db_xx');
};

export const editGrocery = async (id: string, completed: boolean) => {
  try {
    const updatedGrocery = await prisma.grocery.update({
      where: { id },
      data: {
        completed,
      },
    });
    revalidatePath('/grocery_db_xx');
  } catch (error) {
    console.log('Error updating grocery: ', error);
    throw error;
  }
};
