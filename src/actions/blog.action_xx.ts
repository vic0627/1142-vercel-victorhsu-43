'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { blogData2_xx } from './data/blogData';

export const deleteBlog_xx = async (id: number) => {
  await prisma.blog_xx.delete({ where: { id } });
  revalidatePath('/quiz1_xx/p1_xx');
};

export const deleteAllBlog_xx = async () => {
  await prisma.blog_xx.deleteMany();
  revalidatePath('/quiz1_xx/p1_xx');
};

export const SeedBlog_xx = async () => {
  // console.log('blogData2_xx:', blogData2_xx);
  await prisma.blog_xx.createMany({
    data: blogData2_xx,
    skipDuplicates: true,
  });
  revalidatePath('/quiz1_xx/p1_xx');
};
