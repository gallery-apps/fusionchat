"use server";

import Messages from "../models/message.model";
import Message from "../models/message.model";
import { connectToDB } from "../mongoose";

export interface Message {
  senderId: string;
  recipientId: string;
  messageContent: string;
  timeStamp: string;
}

export async function createMessage({
  senderId,
  recipientId,
  messageContent,
}: Message): Promise<void> {
  try {
    connectToDB();

    await Message.create({
      senderId,
      recipientId,
      messageContent,
    });
  } catch (error: any) {
    throw new Error(`Failed to create/update user: ${error.message}`);
  }
}

export async function fetchMessages({
  senderId,
}: {
  senderId: string;
}): Promise<any> {
  try {
    connectToDB();
    const messages = await Messages.find({ senderId: senderId });
    return { messages };
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}
