import Image from "next/image";
import Header from "../Conversation/Header";
function Messages() {
  return (
    <>
      <Image
        className="bgImage"
        src="/assets/bg.svg"
        alt="Backgound image"
        fill
        objectFit="cover"
      />
      <Header />
      <p className="z-10 m-6">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
        culpa esse quod reiciendis iste, alias ipsam nesciunt doloribus
        blanditiis delectus tempora maiores ratione, at aliquid exercitationem
        nulla maxime hic placeat. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Temporibus culpa esse quod reiciendis iste, alias
        ipsam nesciunt doloribus blanditiis delectus tempora maiores ratione, at
        aliquid exercitationem nulla maxime hic placeat. Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Temporibus culpa esse quod reiciendis
        iste, alias ipsam nesciunt doloribus blanditiis delectus tempora maiores
        ratione, at aliquid exercitationem nulla maxime hic placeat. Lorem ipsum
        dolor, sit amet consectetur adipisicing elit. Temporibus culpa esse quod
        reiciendis iste, alias ipsam nesciunt doloribus blanditiis delectus
        tempora maiores ratione, at aliquid exercitationem nulla maxime hic
        placeat. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Temporibus culpa esse quod reiciendis iste, alias ipsam nesciunt
        doloribus blanditiis delectus tempora maiores ratione, at aliquid
        exercitationem nulla maxime hic placeat. Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Temporibus culpa esse quod reiciendis
        iste, alias ipsam nesciunt doloribus blanditiis delectus tempora maiores
        ratione, at aliquid exercitationem nulla maxime hic placeat. Lorem ipsum
        dolor, sit amet consectetur adipisicing elit. Temporibus culpa esse quod
        reiciendis iste, alias ipsam nesciunt doloribus blanditiis delectus
        tempora maiores ratione, at aliquid exercitationem nulla maxime hic
        placeat. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Temporibus culpa esse quod reiciendis iste, alias ipsam nesciunt
        doloribus blanditiis delectus tempora maiores ratione, at aliquid
        exercitationem nulla maxime hic placeat. Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Temporibus culpa esse quod reiciendis
        iste, alias ipsam nesciunt doloribus blanditiis delectus tempora maiores
        ratione, at aliquid exercitationem nulla maxime hic placeat.
      </p>
    </>
  );
}

export default Messages;
