import Image from "next/image";
function RightSidebar() {
  return (
    <main className="flex h-screen overflow-hidden">
      <div className="w-full overflow-y-auto relative">
        <Image
          className="bgImage"
          src="/assets/bg.svg"
          alt="Backgound image"
          fill
          objectFit="cover"
        />
      </div>
    </main>
  );
}

export default RightSidebar;
