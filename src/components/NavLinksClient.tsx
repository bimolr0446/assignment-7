"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavType } from "@/types/type";

interface NavLinksClientProps {
  data: NavType[];
}

const NavLinksClient = ({ data }: NavLinksClientProps) => {
  const pathname = usePathname();

  return (
    <div className="my-4 flex flex-wrap md:gap-1 lg:gap-2 lg:text-lg md:text-xl text-sm">
      {data.map((nav) => {
        const href = `/category/${nav.id}`;

        const isActive = pathname === href || pathname.startsWith(`${href}/`);

        return (
          <Link
            className={`flex items-center gap-1 rounded-lg px-3 py-2 transition-colors ${
              isActive
                ? "bg-green-700 text-white"
                : "text-gray-700 hover:bg-green-100 hover:text-green-800"
            }`}
            href={href}
            key={nav.id}
            aria-current={isActive ? "page" : undefined}
          >
            <span>{nav.icon}</span>
            <span>{nav.nameBn}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinksClient;
