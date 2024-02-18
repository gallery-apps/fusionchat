"use client";

import Link from "next/link";
import { sidebarLinks } from "../constants";
import Image from "next/image";
import { SignedIn, SignOutButton } from "@clerk/nextjs";
import { useRouter, usePathname } from "next/navigation";
import Contacts from "./Contacts";

function LeftSidebar() {
  const router = useRouter();
  const path = usePathname();
  return (
    <section className="left-sidebar bg-gray-800 p-4 h-screen">
      <div className="flex flex-col justify-between">
        <div className="flex flex-row w-full gap-6 mb-4">
          {sidebarLinks.map((link) => (
            <Link
              href={link.route}
              key={link.label}
              className="flex flex-col items-center cursor-pointer"
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
              />
              <p className="text-teal-400 text-lg mt-1 font-semibold">
                {link.label}
              </p>
            </Link>
          ))}
        </div>
        {path.includes("/contacts") && <Contacts path="/contacts" />}
      </div>
      <div className="mt-10">
        <SignedIn>
          <SignOutButton signOutCallback={() => router.push("/sign-in")}>
            <div className="flex items-center cursor-pointer">
              <Image
                src="/assets/logout.svg"
                alt="logout"
                width={24}
                height={24}
              />
              <p className="text-teal-400 ml-2 font-semibold">Sign Out</p>
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
    </section>
  );
}

export default LeftSidebar;
