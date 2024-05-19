"use client";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { UsbIcon } from "lucide-react";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="flex flex-col items-center justify-around w-fit h-[calc(100vh-10vh)] bg-dark-1 p-3 max-sm:hidden lg:w-[250px]">
      <div className="flex flex-col items-center justify-center gap-4 w-full">
        {sidebarLinks.map((link) => {
          const isActive =
            pathname === link.route || pathname.startsWith(`${link.route}/`);

          return (
            <Link
              key={link.label}
              href={link.route}
              className={cn("flex w-full h-16 rounded-lg hover:bg-dark-3 p-4", {
                "bg-dark-3": isActive,
              })}
            >
              <div className="flex items-center justify-center gap-3">
                <Image
                  width={10}
                  height={10}
                  src={link.imgUrl}
                  alt={link.label}
                  className="w-5 invert"
                />
                <span className="text-xs">{link.label}</span>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="flex items-center gap-2 border-4 border-dark-3 rounded-full">
        <SignedIn>
          <UserButton afterSignOutUrl="/login" />
        </SignedIn>
      </div>
    </aside>
  );
};

export default Sidebar;
