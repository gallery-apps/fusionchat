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
    <div className="w-full h-full flex flex-col items-stretch">
      <div className="bg-teal-500 text-white py-2 text-center">
        <h1 className="text-lg font-bold">All Messages</h1>
      </div>
      <div className="flex-none flex flex-col items-start overflow-y-auto p-4">
        {messages?.map((message, index) => (
          <div
            key={index}
            className={`rounded p-4 mb-4 max-w-content ${
              message.senderId === user.id ? "bg-teal-200 bg-opacity-75 self-end" : "bg-gray-200 bg-opacity-75 self-start"
            }`}
          >
            {message.messageContent}
          </div>
        ))}
      </div>
    </div>
  );
}
