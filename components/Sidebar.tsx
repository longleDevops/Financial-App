"use client"

import { AlignEndHorizontal, ArrowRightLeft, BadgeCheck, BarChart2, Bot, LayoutGrid, MessageCircleCode, PieChart, Wallet } from "lucide-react"
import { Button } from "./ui/button"

const sidebarItems = [
  {
    name: "Dashboard",
    icon: LayoutGrid
  },
  {
    name: "Market",
    icon: PieChart
  },
  {
    name: "Transaction",
    icon: AlignEndHorizontal
  },
  {
    name: "Wallet",
    icon: Wallet
  },
  {
    name: "chat",
    icon: MessageCircleCode
  }
]

export const Sidebar = () => {
  return (
    <div className="flex flex-col h-full pb-8">
      <div className="flex flex-col space-y-8 pt-12 pr-8 border-black border-2">
        {sidebarItems.map((item) => (
          <Button
            variant="ghost"
            className=" w-full pl-0 justify-start group"
            key={item.name}>
            <div className="w-8 h-8 rounded-md bg-white flex items-center justify-center max-w-8 max-h-8 mr-3 group-hover:bg-[#6d3db8]">
              <item.icon className=" w-4 h-4 fill-black group-hover:fill-white" />
            </div>
            <p className="text-muted-foreground">{item.name}</p>
          </Button>
        ))}
      </div>

      <div className="mt-auto flex flex-col items-center gap-4">
        <p className="font-semibold text-md ">Upgrade Pro</p>
        <p className="text-sm text-muted-foreground">Experiencing  explosive </p>
        <p className="text-sm text-muted-foreground -mt-4 mb-2">features</p>
        <Button className="px-16 rounded-2xl">
          Explore Pro
        </Button>
      </div>
    </div>
  )
}