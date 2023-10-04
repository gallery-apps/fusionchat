import React from "react";
import { Message } from "@/lib/actions/message.actions";
import { User } from "@/lib/actions/user.actions";

interface HistoryMessagesProps {
  messages: Message[];
  user: User;
}

const HistoryMessages: React.FunctionComponent<HistoryMessagesProps> = ({ messages, user }) => {
  const formatTimestamp = (timestamp: string) => {
    const dateObject = new Date(timestamp);
    const currentDate = dateObject.toDateString();
    const currentTime = dateObject.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    return { date: currentDate, time: currentTime };
  };

  let currentDate: string | null = null;

  return (
    <div className="w-full h-full flex flex-col items-stretch">
      <div className="bg-teal-500 text-white py-2 text-center">
        <h1 className="text-lg font-bold">All Messages</h1>
      </div>
      <div className="flex-none flex flex-col items-start overflow-y-auto p-4">
        {messages?.map((message, index) => {
          const { date, time } = formatTimestamp(message.timeStamp);
          const isNewDate = date !== currentDate;
          currentDate = date;

          return (
            <div key={index} className="flex items-start w-full justify-center">
              {isNewDate && (
                <div className="text-center mb-2 w-full max-w-content">
                  <strong>{date}</strong>
                </div>
              )}
              <div
                className={`relative rounded p-4 mb-4 max-w-content min-w-[65px] ${
                  message.senderId === user.id ? "bg-teal-200 bg-opacity-75 self-end ml-auto" : "bg-gray-200 bg-opacity-75 self-start mr-auto"
                }`}
              >
                <div style={{ whiteSpace: "nowrap" }}>{message.messageContent}</div>
                <div className="text-xs text-gray-500 absolute bottom-1 right-1">{time}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HistoryMessages;
