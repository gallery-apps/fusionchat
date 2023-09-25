"use server";
import { revalidatePath } from "next/cache";
import Messages from "../models/message.model";
import Message from "../models/message.model";
import { connectToDB } from "../mongoose";

export interface Message {
  senderId: string;
  recipientId: string;
  messageContent: string;
  timeStamp: string;
  path: string;
}

export async function createMessage({
  senderId,
  recipientId,
  messageContent,
  path
}: Message): Promise<void> {
  try {
    connectToDB();

    await Message.create({
      senderId,
      recipientId,
      messageContent,
    });
    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`Failed to create/update user: ${error.message}`);
  }
}

export async function fetchMessages({
  senderId,
  recipientId,
}: {
  senderId: string;
  recipientId: string;
}): Promise<any> {
  try {
    connectToDB();
    const messages = await Messages.find({
      $or: [
        { $and: [{ senderId: senderId }, { recipientId: recipientId }] },
        { $and: [{ senderId: recipientId }, { recipientId: senderId }] },
      ],
    })
    console.log(messages);
    return { messages };
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}
