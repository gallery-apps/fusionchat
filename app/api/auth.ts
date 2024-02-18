"use server";

import { auth } from "@clerk/nextjs";

export const authService = async () => {
  const { userId } = await auth();
  console.log("userId", userId);
  return userId;
};
