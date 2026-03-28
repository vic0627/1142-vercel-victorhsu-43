'use server';

import "server-only";
import { prisma } from "@/lib/prisma";

export const fetchUsers = async () => {
  const users = await prisma.user.findMany({});
  return users;
};
