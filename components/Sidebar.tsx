"use client";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="flex flex-col items-center justify-around w-fit h-[calc(100vh-10vh)] bg-dark-1 p-3 pt-28 max-sm:hidden lg:w-[250px]">
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
                <img
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
      <div>
        <Link
          href="/login"
          className="flex justify-center items-center hover:bg-dark-3 px-4 py-2 rounded-lg"
        >
          <Avatar>
            <AvatarImage src="https://github.com/shdcn.png" />
            <AvatarFallback className="text-dark-3 font-semibold">
              AP
            </AvatarFallback>
          </Avatar>
          <button className="flex w-full rounded-lg p-2">Logout</button>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
