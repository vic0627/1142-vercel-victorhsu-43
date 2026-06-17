'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { Prisma } from '@/generated/prisma/client';
import { redirect } from 'next/navigation';

import { blogSchema } from './schemas';
import blogData2_xx from '../_assets/data/blog2Data2.json';

import { validateWithZodSchema } from './schemas';

export type typeBlog2_xx = Prisma.Blog2_xxGetPayload<object>;

const renderError = (error: unknown): { message: string } => {
  console.log(error);
  return {
    message: error instanceof Error ? error.message : 'an error occurred',
  };
};

export const fetchFeaturedBlogs = async () => {
  const blogs2 = await prisma.blog2_xx.findMany({
    where: {
      featured: true,
    },
  });
  return blogs2;
};

export const fetchAllBlogs = async ({ search = '' }: { search: string }) => {
  return prisma.blog2_xx.findMany({
    where: {
      OR: [
        { title: { contains: search, mode: 'insensitive' } },
        { category: { contains: search, mode: 'insensitive' } },
      ],
    },
  });
};

export const deleteBlog_xx = async (id: string) => {
  await prisma.blog2_xx.delete({ where: { id } });
  revalidatePath('/quiz2_xx');
};

export const deleteAllBlog_xx = async () => {
  await prisma.blog2_xx.deleteMany();
  revalidatePath('/quiz2_xx/admin_xx/blogs_xx');
};

export const SeedBlog_xx = async () => {
  // console.log('blogData2_xx:', blogData2_xx);
  await prisma.blog2_xx.createMany({
    data: blogData2_xx,
    skipDuplicates: true,
  });
  revalidatePath('/quiz2_xx/admin_xx/blogs_xx');
};

export const fetchAdminBlogs = async () => {
  // await getAdminUser();
  const blogs = await prisma.blog2_xx.findMany();
  return blogs;
};

export const deleteBlogAction = async (prevState: { blogId: string }) => {
  const { blogId } = prevState;
  // await getAdminUser();
  try {
    const blog = await prisma.blog2_xx.delete({
      where: {
        id: blogId,
      },
    });
    // await deleteImage(blog.image);
    revalidatePath(`/quiz2_xx/admin_xx/blogs_xx`);
    return { message: 'blog removed' };
  } catch (error) {
    return renderError(error);
  }
};

export const createBlogAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  // const user = await getAuthUser();

  try {
    const title = formData.get('title') as string;
    const category = formData.get('category') as string;
    const img = formData.get('img') as string;
    const remote_img = formData.get('remote_img') as string;
    // const image = formData.get('image') as File;
    const descrip = formData.get('descrip') as string;
    const featured = Boolean(formData.get('featured') as string);

    await prisma.blog2_xx.create({
      data: {
        title,
        category,
        img,
        remote_img,
        descrip,
        featured,
        // clerkId: user.id,
      },
    });
    return { message: 'blog created' };
  } catch (error) {
    return renderError(error);
  }
};

export const createBlogAction2 = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  // const user = await getAuthUser();

  try {
    const rawData = Object.fromEntries(formData);
    const validatedFields = blogSchema.parse(rawData);

    await prisma.blog2_xx.create({
      data: {
        ...validatedFields,
        // clerkId: 'userid',
      },
    });
    return { message: 'blog created' };
  } catch (error) {
    return renderError(error);
  }
};

export const fetchAdminBlogDetails = async (blogId: string) => {
  // await getAdminUser();
  const blog = await prisma.blog2_xx.findUnique({
    where: {
      id: blogId,
    },
  });
  if (!blog) redirect('/quiz2_xx/admin_xx/blogs_xx');
  return blog;
};

export const updateBlogAction = async (prevState: any, formData: FormData) => {
  // await getAdminUser();
  try {
    const blogId = formData.get('id') as string;
    const rawData = Object.fromEntries(formData);
    const { id, $ACTION_REF_1, $ACTION_1, $ACTION_KEY, ...cleanData } = rawData;
    const validatedFields = validateWithZodSchema(blogSchema, cleanData);
    // const validatedFields = validateWithZodSchema(blogSchema, rawData);

    await prisma.blog2_xx.update({
      where: {
        id: blogId,
      },
      data: {
        ...validatedFields,
      },
    });
    revalidatePath(`/quiz2_xx/admin_xx/blogs_xx/${blogId}/edit`);
    return { message: 'Blog updated successfully' };
  } catch (error) {
    return renderError(error);
  }
};
