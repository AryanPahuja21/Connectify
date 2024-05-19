import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React, { ReactNode } from "react";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative h-screen">
      <Navbar />
      <div className="flex">
        <section className="bg-dark-1">
          <Sidebar />
        </section>
        <section className="flex flex-1 flex-col px-6 pb-6 pt-14 max-md:pb-14 sm:px-14">
          <div className="w-full">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default HomeLayout;
