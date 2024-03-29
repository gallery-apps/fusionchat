"use client";

import Link from "next/link";
import Image from "next/image";
import { SignOutButton, SignedIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

function Topbar() {
  const router = useRouter();
  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-4">
        <Image src="/assets/logo.png" alt="logo" width={28} height={28} />
        <p className="text-heading3-bold text-light-1 max-xs:hidden">
          Fusion Chat
        </p>
      </Link>
      <div className="flex items-center gap-1">
        <div className="block">
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
      </div>
    </nav>
  );
}

export default Topbar;
