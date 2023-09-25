import React from "react";
import { Message } from "@/lib/actions/message.actions";
import { User } from "@/lib/actions/user.actions";

export default function HistoryMessages({
  messages,
  user,
}: {
    messages: Message[];
    user: User;
}) {
  return (
    <div>
      <h1>All Messages</h1>
      {messages?.map((message, index) => {
        if (message.senderId === user.id)
          return (
            <div className="text-right text-green-300" key={index}>
              {message.messageContent}
            </div>
          );
        return (
          <div className="text-red-300" key={index}>
            {message.messageContent}
          </div>
        );
      })}
    </div>
  );
}
