import { AlignEndHorizontal, ArrowRightLeft, BadgeCheck, BarChart2, Bot, LayoutGrid, MessageCircleCode, PieChart, Settings, Wallet } from "lucide-react"

import { Button } from "./ui/button"
import Link from "next/link"
import { useState } from "react"

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
    name: "Transaction",
    href: "/transaction",
    icon: AlignEndHorizontal
  },
  {
    name: "Wallet",
    href: "/wallet",
    icon: Wallet
  },
  {
    name: "Message",
    href: "/chat",
    icon: MessageCircleCode
  },
  {
    name: "Setting",
    href: "/setting",
    icon: Settings
  }
]

export const Sidebar = () => {
  return (
    <div className="flex flex-col w-full h-full px-4 py-8 border border-red-600">
      <h1 className="ml-3 text-lg font-semibold">
        DynamiteTrade.
      </h1>

      <div className="mt-12 space-y-8 border-2 border-black">
        {sidebarItems.map((item) => (
          <Link
            href={item.href}
            className="flex items-center justify-start w-full p-2 group hover:bg-red-200"
            key={item.name}>
            <div className="flex items-center justify-center w-6 h-6 mr-2 bg-red-500 rounded-md">
              <item.icon className="w-4 h-4" />
            </div>
            <p className="text-muted-foreground">{item.name}</p>

          </Link>
        ))}
      </div>

      <div className="flex flex-col items-center gap-4 mt-auto">
        <p className="font-semibold text-md ">Upgrade Pro</p>
        <p className="text-sm text-muted-foreground">Experiencing  explosive </p>
        <p className="mb-2 -mt-4 text-sm text-muted-foreground">features</p>
        <Button className="px-16 rounded-2xl">
          Explore Pro
        </Button>
      </div>
    </div>
  )
}