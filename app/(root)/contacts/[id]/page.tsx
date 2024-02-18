"use client";
import Messages from "@/components/Messages";
import LeftSidebar from "@/components/LeftSidebar";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchMessages } from "@/app/api/message";
import { fetchUser } from "@/app/api/user";
import { Message, User } from "@prisma/client";
import { selectUserId } from "@/redux/features/state-slice";

export default function Page({ params }: { params: { id: string } }) {
  const [recipient, setRecipient] = useState<User | null>(null);
  const [userMessages, setUserMessages] = useState<Message[]>([]);
  const userId = useSelector(selectUserId);
  const handleMessages = async () => {
    if (!recipient) return;
    const recipientId = recipient.id
    try {
      const currentMessages = await fetchMessages(userId, recipientId);
      if (currentMessages.length) setUserMessages(currentMessages);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFetchRecipient = async () => {
    const recipientId = params.id;
    try {
      const currentRecipient = await fetchUser(recipientId);
      if (currentRecipient) {
        setRecipient(currentRecipient);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleFetchRecipient();
  }, []);

  useEffect(() => {
    if (recipient !== null) handleMessages();
  }, [recipient]);

  return (
    <>
      <LeftSidebar/>
      <section className="main-container">
        <div className="w-full">
          <section className="flex flex-col gap-10">
            <Messages
              userId={userId}
              recipient={recipient}
              userMessages={userMessages}
              updateMessages={() => handleMessages()}
            />
          </section>
        </div>
      </section>
    </>
  );
}
