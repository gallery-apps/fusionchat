"use client";
import * as z from "zod";
import React from "react";
import { useForm } from "react-hook-form";
import { createMessage } from "@/app/api/message";
import { usePathname } from "next/navigation";
import { MessageValidation } from "@/lib/valiadations/message";
import Header from "./Header";
import {
  Form,
  FormField,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import HistoryMessages from "./HistoryMessages";
import { Message, User } from "@prisma/client/index.js";

function Messages({
  userId,
  recipient,
  userMessages,
  updateMessages,
}: {
  userId: string;
  recipient: User | null;
  userMessages: Message[];
  updateMessages: () => void;
}) {
  const pathname = usePathname();

  const form = useForm({
    //resolver: zodResolver(UserValidation),
    defaultValues: {
      messageContent: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof MessageValidation>) => {
    if (!recipient) return;
    await createMessage({
      senderId: userId,
      recipientId: recipient.id,
      messageContent: values.messageContent,
      path: pathname,
    });
    form.reset();
    updateMessages();
  };

  if (!recipient) return null;
  return (
    <div className="z-10 m-6 inherit">
      <Header userName={recipient.username} />
      <HistoryMessages messages={userMessages} userId={userId} />
      <Form {...form}>
        <form
          className="mt-10 flex flex-col justify-start gap-2"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="messageContent"
            render={({ field }) => (
              <div className="flex w-full flex-col gap-3">
                <label className="text-base-semibold text-light-2">
                  Content
                </label>
                <div className="bg-gray-200 p-4 rounded-md">
                  <Textarea className="text-black" rows={5} {...field} />
                </div>
                <FormMessage />
              </div>
            )}
          />
          <Button
            type="submit"
            className="bg-teal-500 text-white font-bold py-2 px-4 rounded max-w-[65px] self-end"
          >
            Send
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default Messages;
