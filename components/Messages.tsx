"use client";
import * as z from "zod";
import React from "react";

import { useForm } from "react-hook-form";
import { createMessage } from "@/lib/actions/message.actions";
import { usePathname } from "next/navigation";
import { User } from "@/lib/actions/user.actions";
import { MessageValidation } from "@/lib/valiadations/message";
import Header from "./Header";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import HistoryMessages from "./HistoryMessages";
import { Message } from "@/lib/actions/message.actions";

function Messages({
  user,
  recipient,
  messages,
}: {
    user: User;
    recipient: User;
    messages: Message[];
  }) {
  const pathname = usePathname();
  const form = useForm({
    //resolver: zodResolver(UserValidation),
    defaultValues: {
      messageContent: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof MessageValidation>) => {
    await createMessage({
      senderId: user.id,
      recipientId: recipient.id,
      messageContent: values.messageContent,
      timeStamp: new Date().toISOString(),
      path: pathname,
    });
    form.reset();
  };

  return (
    <div className="z-10 m-6 inherit">
      <Header user={recipient} />
      <HistoryMessages messages={messages} user={user} />
      <Form {...form}>
        <form
          className="mt-10 flex flex-col justify-start gap-10"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="messageContent"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col gap-3">
                <FormLabel className="text-base-semibold text-light-2">
                  Content
                </FormLabel>
                <FormControl className="no-focus border border-dark-4 bg-dark-3 text-dark-1">
                  <Textarea className="text-black" rows={15} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="bg-primary-500">
            Send
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default Messages;
