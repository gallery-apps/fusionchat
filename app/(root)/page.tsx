import Messages from "@/components/shared/Messages";

export default function Home() {
  return (
    <>
      <section className="flex flex-col gap-10">
        <div className="relative flex-col my-0">
          <Messages />
        </div>
      </section>
    </>
  );
}
