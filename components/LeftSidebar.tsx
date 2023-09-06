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
    <section className="leftsidebar">
      <div className="flex flex-col h-screen w-full px-6">
        <div className="flex flex-row w-full gap6 px-6 h-1/5">
          {sidebarLinks.map((link) => {
            return (
              <Link
                href={link.route}
                key={link.label}
                className="leftsidebar_link"
              >
                <Image
                  src={link.imgURL}
                  alt={link.label}
                  width={24}
                  height={24}
                />
                <p className="text-light-1 max-lg:hidden">{link.label}</p>
              </Link>
            );
          })}
        </div>
        {path.includes("/contacts") ? (
          <Contacts users={users} path={"/contacts"} />
        ) : null}
      </div>
      <div className="mt-10 px-6">
        <SignedIn>
          <SignOutButton signOutCallback={() => router.push("/sign-in")}>
            <div className="flex cursor-pointer">
              <Image
                src="/assets/logout.svg"
                alt="logout"
                width={24}
                height={24}
              />
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
    </section>
  );
}

export default LeftSidebar;
