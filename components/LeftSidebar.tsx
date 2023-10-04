"use client";

import Link from "next/link";
import { sidebarLinks } from "../constants";
import Image from "next/image";
import { SignedIn, SignOutButton } from "@clerk/nextjs";
import { User } from "@/lib/actions/user.actions";
import { useRouter, usePathname } from "next/navigation";
import Contacts from "./Contacts";

function LeftSidebar({ users }: { users: User[] }) {
  const router = useRouter();
  const path = usePathname();

  return (
    <section className="leftsidebar bg-black-200 p-4 h-screen">
      <div className="flex flex-col h-1/5 justify-between">
        <div className="flex flex-row w-full gap-6 mb-4"> {/* Added margin-bottom */}
          {sidebarLinks.map((link) => {
            return (
              <Link href={link.route} key={link.label} className="flex flex-col items-center cursor-pointer">
                <Image src={link.imgURL} alt={link.label} width={24} height={24} />
                <p className="text-teal-500 text-lg mt-1">{link.label}</p> {/* Added margin-top */}
              </Link>
            );
          })}
        </div>
        {path.includes("/contacts") && <Contacts users={users} path={"/contacts"} />}
      </div>
      <div className="mt-10">
        <SignedIn>
          <SignOutButton signOutCallback={() => router.push("/sign-in")}>
            <div className="flex items-center cursor-pointer">
              <Image src="/assets/logout.svg" alt="logout" width={24} height={24} />
              <p className="text-teal-500 ml-2">Sign Out</p>
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
    </section>
  );
}

export default LeftSidebar;
