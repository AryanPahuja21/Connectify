"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { sidebarLinks } from "@/constants";
import Link from "next/link";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="">
      {showMenu ? (
        <div className="absolute top-0 right-0 w-full bg-dark-3">
          <div className="absolute right-3 top-3" onClick={handleMenu}>
            <X size={35} />
          </div>
          <div className="flex flex-col">
            <div className="flex mb-7">
              <img
                src="/logo.png"
                alt="Connectify"
                className="w-44 lg:w-56 px-3 py-1"
              />
            </div>
            {sidebarLinks.map((link) => (
              <Link href={link.route} key={link.label} onClick={handleMenu}>
                <p className="block py-3 px-5 text-white hover:underline">
                  {link.label}
                </p>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <nav className="sticky">
          <div className="flex justify-center items-center bg-dark-3">
            <div
              className="absolute right-5 hidden max-sm:block cursor-pointer"
              onClick={handleMenu}
            >
              <Menu size={35} />
            </div>
            <div className="flex">
              <img
                src="/logo.png"
                alt="Connectify"
                className="w-44 lg:w-56 px-3 py-1"
              />
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
