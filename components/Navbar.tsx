"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { sidebarLinks } from "@/constants";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { SignedIn, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="">
      {showMenu && (
        <div className="absolute top-0 right-0 w-full bg-dark-3 md:hidden">
          <div className="absolute right-5 top-4 z-50" onClick={handleMenu}>
            <X size={35} />
          </div>
          <div className="flex flex-col mt-24">
            {sidebarLinks.map((link) => (
              <Link href={link.route} key={link.label} onClick={handleMenu}>
                <p className="block py-3 px-5 text-white hover:underline">
                  {link.label}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}

      <nav className="sticky">
        <div className="flex justify-center items-center bg-dark-3">
          <div className="absolute left-5 hidden max-sm:block cursor-pointer pt-1">
            <SignedIn>
              <UserButton afterSignOutUrl="/login" />
            </SignedIn>
          </div>
          <div
            className={cn(
              "absolute right-5 hidden max-sm:block cursor-pointer",
              {
                "max-sm:hidden": showMenu,
              }
            )}
            onClick={handleMenu}
          >
            <Menu size={35} />
          </div>
          <Link href="/" className="flex">
            <Image
              width={200}
              height={50}
              src="/logo.png"
              alt="Connectify"
              className="w-44 lg:w-56 px-3 py-1"
            />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
