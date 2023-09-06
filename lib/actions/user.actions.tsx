"use server";

import User from "../models/user.model";
import { SortOrder } from "mongoose";
import { connectToDB } from "../mongoose";
import { revalidatePath } from "next/cache";

export async function fetchUser(userId: string) {
  try {
    connectToDB();

    return await User.findOne({ id: userId });
  } catch (error: any) {
    throw new Error(`Failed to fetch user: ${error.message}`);
  }
}

export interface User {
  id: string;
  username: string;
  name: string;
  image: string;
  path: string;
}

export async function updateUser({
  id,
  name,
  path,
  username,
  image,
}: User): Promise<void> {
  try {
    connectToDB();

    await User.findOneAndUpdate(
      { id: id },
      {
        username: username.toLowerCase(),
        name,
        image,
        onboarded: true,
      },
      { upsert: true }
    );

    if (path === "/profile/edit") {
      revalidatePath(path);
    }
  } catch (error: any) {
    throw new Error(`Failed to create/update user: ${error.message}`);
  }
}

export async function fetchUsers({
  sortBy = "desc",
}: { sortBy?: SortOrder | "desc" } = {}): Promise<any> {
  try {
    connectToDB();
    const sortOptions = { createdAt: sortBy };
    const users = await User.find().sort(sortOptions);
    return { users };
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}