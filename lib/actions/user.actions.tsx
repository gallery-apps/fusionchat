"use server";

import { User } from "@prisma/client";

import prisma from "../utils/db";

import { revalidatePath } from "next/cache";

export async function fetchUser(userId: string): Promise<User> {
  try {
    const user = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    });

    prisma.$disconnect();
    return user;
  } catch (error: any) {
    throw new Error(`Failed to fetch user: ${error.message}`);
  }
}

export async function updateUser({
  id,
  name,
  path,
  username,
  image,
}: User): Promise<void> {
  console.log("updateUser", id, name, username, image, path);
  try {
    await prisma.user.create({
      data: {
        id,
        name,
        username: username.toLowerCase(),
        image,
      },
    });
    await prisma.user.update({
      where: {
        id,
      },
      data: {
        onboarded: true,
      },
    });

    if (path === "/profile/edit") {
      revalidatePath(path);
    }
  } catch (error: any) {
    throw new Error(`Failed to create/update user: ${error.message}`);
  }
}

export async function fetchUsers() {
  return await prisma.user.findMany({
    orderBy: {
      username: "asc",
    },
  });
}
