"use client"

import { AlignEndHorizontal, ArrowRightLeft, BadgeCheck, BarChart2, Bot, LayoutGrid, MessageCircleCode, PieChart, Wallet } from "lucide-react"
import { Button } from "./ui/button"

export const Sidebar = () => {
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

  return (
    <div className="flex flex-col space-y-8 pt-12 pr-8">
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
  )
}