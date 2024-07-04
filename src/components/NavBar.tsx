import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../public/Logo.png";
import Search from "./Search";
import { currentUser } from "@clerk/nextjs/server";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { ShoppingCart } from "lucide-react";

export default async function NavBar() {
  const user = await currentUser();

  return (
    <section className="my-2">
      <div className="">
        <nav className="flex justify-evenly items-center bg-blue-400 py-4">
          <Link href={"/"}>
            <Image
              src={
                "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_plus-055f80.svg"
              }
              alt="logo"
              width={200}
              height={50}
            />
          </Link>
          <Search />
          <SignedOut>
            <div className="border-2 text-white px-4 py-2 rounded-lg">
              <SignInButton />
            </div>
          </SignedOut>
          <Link href={"/cart"}>
            <ShoppingCart className="text-white mr-3"></ShoppingCart>
          </Link>
          <SignedIn>
            <div className="flex items-center space-x-4">
              {user && (
                <>
                  <div className="flex items-center space-x-2">
                    {user.imageUrl && (
                      <UserButton userProfileUrl={user.imageUrl} />
                    )}
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
