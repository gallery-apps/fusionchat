"use server";
import prisma from "@/lib/utils/db";
import { revalidatePath } from "next/cache";


export const fetchMessages = async (senderId: string, recipientId: string) => {
    return prisma.message.findMany({
        where: {
            OR: [
                { senderId, recipientId },
                { senderId: recipientId, recipientId: senderId },
            ],
        },
    })
}

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
