import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../public/Logo.png";
import Search from "./Search";
import { currentUser } from "@clerk/nextjs/server";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default async function NavBar() {
  const user = await currentUser();

  return (
    <section className="my-2">
      <div className="">
        <nav className="flex justify-evenly items-center bg-pink-500 py-4">
          <Link href={"/"}>
            <Image src={Logo} alt="logo" width={50} height={50} />
          </Link>
          <Search />
          <SignedOut>
            <div className="border-2 text-white px-4 py-2 rounded-lg">
              <SignInButton />
            </div>
          </SignedOut>
          <SignedIn>
            <div className="flex items-center space-x-4">
              {user && (
                <>
                  <div className="flex items-center space-x-2">
                    {user.imageUrl && <UserButton userProfileUrl={user.imageUrl}/>}
                    <span className="text-sm font-medium text-white">
                      {user.firstName} {user.lastName}
                    </span>
                  </div>
                </>
              )}
            </div>
          </SignedIn>
        </nav>
      </div>
    </section>
  );
}
