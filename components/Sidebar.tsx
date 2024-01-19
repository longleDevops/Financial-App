"use client"

import { AlignEndHorizontal, ArrowRightLeft, BadgeCheck, BarChart2, Bot, LayoutGrid, MessageCircleCode, PieChart, Settings, Wallet } from "lucide-react"

import { Button } from "./ui/button"
import { useParams, usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"

const sidebarItems = [
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
  const pathName = usePathname();
  const router = useRouter();

  const onNavigate = (url: string) => {
    return router.push(url);
  }

  return (
    <div className="flex flex-col h-full pb-8">
      <div className="flex flex-col space-y-8 pt-12 pr-8 border-black border-2">
        {sidebarItems.map((item) => (
          <Button
            onClick={() => onNavigate(item.href)}
            variant="ghost"
            className=" w-full pl-0 justify-start group"
            key={item.name}>
            <div className={cn("w-8 h-8 rounded-md bg-white flex items-center justify-center max-w-8 max-h-8 mr-3", pathName === item.href && "bg-purple-600")}>
              <item.icon className={cn("w-4 h-4", pathName === item.href ? "fill-white stroke-white" : "fill-back")} />
            </div>
            <p className={cn("text-muted-foreground", pathName === item.href && "text-black font-semibold text-lg")}>{item.name}</p>
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