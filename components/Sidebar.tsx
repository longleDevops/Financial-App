"use client"

import { cn } from "@/lib/utils";
import { LayoutDashboard, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoStorefrontOutline } from "react-icons/io5";
import { TbMessageBolt } from "react-icons/tb";
import { CiSettings } from "react-icons/ci";


const Sidebar = () => {
  const pathName = usePathname()

  const sidebarItems = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
      isActive: pathName === "/dashboard"
    },
    {
      name: "Market",
      href: "/market",
      icon: IoStorefrontOutline,
      isActive: pathName === "/market"
    },
    {
      name: "Message",
      href: `/chat`,
      icon: TbMessageBolt,
      isActive: pathName === "/chat"
    },
  ]
  return (
    <div className="flex flex-col items-center w-full h-full pt-2 pb-8 border-r border-muted-foreground/30 ">
      <Image
        src="/logos/dynamitetrade.webp"
        alt="company logo"
        width={60}
        height={60}
      />

      <div className="space-y-4 text-xs font-medium mt-14">
        {sidebarItems.map((item) => (
          <Link
            href={item.href}
            key={item.name}
            className={cn("py-2 flex items-center justify-center p-3 group  rounded-lg text-muted-foreground hover:cursor-pointer hover:text-white",
              item.isActive ? "bg-[#6149cd] text-white" : "hover:bg-[#6149cd]/30"
            )}
          >
            <item.icon className="w-5 h-5" />
          </Link>
        ))}
      </div>

      <CiSettings className="w-5 h-5 mt-auto" />
    </div>
  )
}
export default Sidebar;
