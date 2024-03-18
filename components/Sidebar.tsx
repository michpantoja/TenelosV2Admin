"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  LuUsers2,
  LuClipboardList,
  LuTrophy,
  LuImport,
  LuLogOut,
} from "react-icons/lu";
import Link from "next/link";

export default function Sidebar() {
  const pathname = usePathname();
  const [selectedItem, setSelectedItem] = useState("");

  useEffect(() => {
    // Find the nav item that matches the current pathname
    const activeItem = navItems.find((item) => pathname.startsWith(item.href));
    if (activeItem) {
      setSelectedItem(activeItem.href);
    }
  }, [pathname]);
  
  const navItems = [
    {
      name: "Players",
      icon: <LuUsers2 size={16} />,
      href: "/players",
    },
    {
      name: "Records",
      icon: <LuClipboardList size={16} />,
      href: "/records",
    },
    {
      name: "Tournaments",
      icon: <LuTrophy size={16} />,
      href: "/tournaments",
    },
    {
      name: "Import",
      icon: <LuImport size={16} />,
      href: "/import",
    },
  ];

  return (
    <div className="flex flex-col h-full py-8">
      <div className="flex flex-col gap-2">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`flex items-center pl-4 pr-2 py-2 text-darkGray font-semibold text-sm rounded-lg cursor-pointer select-none ${
              selectedItem === item.href
                ? "bg-green text-white fill-white"
                : "hover:bg-lightGray"
            }`}
          >
            {item.icon}
            <span className="ml-3">{item.name}</span>
          </Link>
        ))}
        <div className="flex items-center px-4 gap-3 py-2 text-red-600 font-semibold text-sm rounded-lg cursor-pointer hover:bg-lightGray select-none">
          <LuLogOut size={16} />
          Logout
        </div>
      </div>
    </div>
  );
}
