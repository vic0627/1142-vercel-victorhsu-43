"use server";

import "server-only";
import { prisma } from "../lib/prisma";
import { revalidatePath } from "next/cache";

export const fetchUsers = async () => {
  const users = await prisma.user.findMany({});
  return users;
};

export const createUser = async (formdata: FormData) => {
  const name = formdata.get("name") as string;
  const email = formdata.get("email") as string;
  const newUser = { name, email };
  console.log("newUser", newUser);
  try {
    const res = await prisma.user.create({ data: newUser });
    revalidatePath("/users_db_43");
  } catch (error) {
    console.error(error);
  }
};

export const removeUser = async (id: number, formdata: FormData) => {
  console.log("id", id);
  await prisma.user.delete({ where: { id } });
  revalidatePath("/users_db_43");
};

export const createUser2 = async (prev: any, formdata: FormData) => {
  const name = formdata.get("name") as string;
  const email = formdata.get("email") as string;
  const newUser = { name, email };
  console.log("newUser", newUser);
  try {
    const res = await prisma.user.create({ data: newUser });
    revalidatePath("/users_db_43");
    return "user created successfully";
  } catch (error) {
    console.error(error);
    return "failed to create user...";
  }
};
