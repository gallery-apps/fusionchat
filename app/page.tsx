import Conversation from "@/modules/Conversation";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen overflow-hidden">
      <div className="w-1/3 overflow-y-auto bg-white-500">chatsidebar</div>
      <div className="w-full overflow-y-auto flex items-center justify-center bg-blue-50 relative">
        <Image
          className="bgImage"
          src="/bg.svg"
          alt="Backgound image"
          fill
          objectFit="cover"
        />
        //
        <Conversation />
      </div>
    </main>
  );
}
