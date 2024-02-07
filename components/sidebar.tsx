"use client"

import { AlignEndHorizontal, ArrowRightLeft, BadgeCheck, BarChart2, Bot, LayoutGrid, MessageCircleCode, PieChart, Settings, Wallet } from "lucide-react"

import { Button } from "./ui/button"
import Link from "next/link"
import { useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"

export const sidebarItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutGrid
  },
  {
    name: "Market",
    href: "/market",
    icon: PieChart
  },
  {
    name: "Message",
    href: "/message",
    icon: MessageCircleCode
  },
  {
    name: "Transaction",
    href: "/transaction",
    icon: AlignEndHorizontal
  },
  {
    name: "Setting",
    href: "/setting",
    icon: Settings
  }
]

const Sidebar = () => {

  const router = useRouter();
  const pathName = usePathname()
  const handleClick = (url: string) => {
    return
  }


  return (
    <div className="flex flex-col w-full h-full px-4 py-4 border-r border-muted-foreground/30 bg-[#f5f6f7]">
      <h1 className="ml-3 text-lg font-semibold">
        DynamiteTrade.
      </h1>

      <div className="mt-12 space-y-4 text-xs font-medium">
        {sidebarItems.map((item) => (
          <Link
            onClick={() => handleClick(item.href)}
            href={item.href}
            className={cn("py-2 flex items-center justify-start w-full p-2 group hover:bg-[#6149cd]/30 rounded-lg text-muted-foreground",
              pathName === item.href && "bg-[#6149cd] text-white")}
            key={item.name}
          >
            <div className="flex items-center justify-center w-5 h-5 mr-2 rounded-md">
              <item.icon className="w-4 h-4" />
            </div>
            <p className="">{item.name}</p>

          </Link>
        ))}
      </div>

      <div className="flex flex-col items-center gap-4 mt-auto">
        <p className="text-sm font-semibold">Upgrade Pro</p>
        <p className="text-xs text-muted-foreground">Experiencing  explosive </p>
        <p className="mb-2 -mt-4 text-xs text-muted-foreground">features</p>
        <div className="px-4">
          <Button className="px-12 rounded-lg ">
            Explore Pro
          </Button>
        </div>
      </div>
    </div>
  )
}
export default Sidebar;
