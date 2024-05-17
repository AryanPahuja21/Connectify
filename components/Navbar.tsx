"use client";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-dark-1">
      <div className="flex">
        <img
          src="/logo.png"
          alt="Connectify"
          className="w-44 lg:w-56 px-3 py-1"
        />
      </div>
      <div className="mx-5 hidden max-sm:block cursor-pointer">
        <Menu size={35} />
      </div>
    </nav>
  );
};

export default Navbar;
