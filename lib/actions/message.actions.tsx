"use server";
import { Message } from "@prisma/client";

import prisma from "../utils/db";

import { revalidatePath } from "next/cache";

export const createMessage = async ({
  senderId,
  recipientId,
  messageContent,
  path,
}: {
  senderId: string;
  recipientId: string;
  messageContent: string;
  path: string;
}) => {
  await prisma.message.create({
    data: {
      id: crypto.randomUUID(),
      timeStamp: new Date().toISOString(),
      senderId,
      recipientId,
      messageContent,
    },
  });
  revalidatePath(path);
};

export async function fetchMessages({
  senderId,
  recipientId,
}: {
  senderId: string;
  recipientId: string;
}): Promise<any> {
  return prisma.message.findMany({
    where: {
      OR: [
        { senderId, recipientId },
        { senderId: recipientId, recipientId: senderId },
      ],
    },
  });
}
