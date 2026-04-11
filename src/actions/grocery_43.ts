'use server';

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const fetchGrocery = async () => {
  const items = await prisma.grocery.findMany();
  return items;
}

export const createGrocery = async (formdata: FormData) => {
  const name = formdata.get('name') as string;
  const newItem = { name, completed: false };
  try {
    await prisma.grocery.create({ data: newItem });
    revalidatePath('/grocery_db_43');
  } catch (error) {
    console.error(error);
  }
}
