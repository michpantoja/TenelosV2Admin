"use client"

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { LuUsers2, LuClipboardList, LuTrophy, LuUpload, LuLogOut } from 'react-icons/lu';

const Sidebar = () => {
  const pathname = usePathname();
  const [selectedItem, setSelectedItem] = useState('');

  useEffect(() => {
    const activeItem = navItems.find(item => item.href === pathname);
    if (activeItem) {
      setSelectedItem(activeItem.href);
    }
  }, [pathname]);

  const navItems = [
    {
      name: "Players",
      icon: <LuUsers2 size={16} />,
      href: "/dashboard",
    },
    {
      name: "Records",
      icon: <LuClipboardList size={16} />,
      href: "/dashboard/records",
    },
    {
      name: "Tournaments",
      icon: <LuTrophy size={16} />,
      href: "/dashboard/tournaments",
    },
    {
      name: "Import",
      icon: <LuUpload size={16} />,
      href: "/dashboard/import",
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
            onClick={() => setSelectedItem(item.href)}
          >
            {item.icon}
            <span className="ml-3">{item.name}</span>
          </Link>
        ))}
        <Link
         className="flex
          items-center 
          px-4 gap-3 py-2 
          text-red-600 font-semibold 
          text-sm rounded-lg cursor-pointer 
          hover:bg-lightGray select-none"
          href={"/logout"}
          >
          <LuLogOut size={16} />
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;