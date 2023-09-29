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
  const formatTimestamp = (timestamp) => {
    const dateObject = new Date(timestamp);
    const hours = dateObject.getHours().toString().padStart(2, "0");
    const minutes = dateObject.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  return (
    <div className="w-full h-full flex flex-col items-stretch">
      <div className="bg-teal-500 text-white py-2 text-center">
        <h1 className="text-lg font-bold">All Messages</h1>
      </div>
      <div className="flex-none flex flex-col items-start overflow-y-auto p-4">
        {messages?.map((message, index) => (
          <div
            key={index}
            className={`relative rounded p-4 mb-4 max-w-content ${
              message.senderId === user.id ? "bg-teal-200 bg-opacity-75 self-end" : "bg-gray-200 bg-opacity-75 self-start"
            }`}
          >
            <div>{message.messageContent}</div>
            <div className="text-xs text-gray-500 absolute bottom-1 right-1">
              {formatTimestamp(message.timeStamp)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}