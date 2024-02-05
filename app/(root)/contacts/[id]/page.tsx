import Messages from "@/components/Messages";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { fetchMessages } from "@/lib/actions/message.actions";

async function Page({ params }: { params: { id: string } }) {
  const user = await currentUser();

  if (!user) return null;

  const recipient = await fetchUser(params.id);

  const messages = await fetchMessages({
    senderId: user.id,
    recipientId: recipient.id,
  });
  console.log("messages", messages);

  return (
    <div>
      <Messages
        userId={user.id}
        userName={user.username ? user.username : ""}
        recipient={recipient}
        messages={messages}
      />
    </div>
  );
}
export default Page;
