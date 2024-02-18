"use server";
import prisma from "@/lib/utils/db";
import { UserAuthenticated } from "@/redux/types";
import { revalidatePath } from "next/cache";

export const fetchUser = async (userId: string) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    });
    console.log("user", user);
    return user;
  } catch (error: any) {
    throw new Error(`Failed to fetch user: ${error.message}`);
  }
};

export const fetchUsers = async () => {
  return await prisma.user.findMany({
    orderBy: {
      username: "asc",
    },
  });
}

export const updateUser = async (user: UserAuthenticated) => {
  try {
    const { id, name, username, image, path } = user;
    console.log(id);
    await prisma.user.update({
      where: {
        id,
      },
      data: {
        name,
        username: username.toLowerCase(),
        onboarded: true,
      },
    });

    if (path === "/profile/edit") {
      revalidatePath(path);
    }
  } catch (error: any) {
    throw new Error(`Failed to create/update user: ${error.message}`);
  }
};
