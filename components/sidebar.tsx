"use client"

import { LayoutGrid, MessageCircleCode, PieChart } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"

import { cn } from "@/lib/utils"
import { ChatBot } from "@prisma/client"
import { useCallback } from "react"


interface SidebarProps {
  bot: ChatBot
}
const Sidebar = ({ bot }: SidebarProps) => {
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
      name: "Message",
      href: `/chat/${bot.id}`,
      icon: MessageCircleCode
    },
  ]

  const router = useRouter();
  const pathName = usePathname()
  const handleClick = useCallback((url: string) => {
    return router.push(url)
  }, [router])

  return (
    <div className="flex flex-col w-full h-full px-4 py-4 border-r border-muted-foreground/30 bg-[#f5f6f7]">
      <h1 className="ml-3 text-lg font-semibold">
        DynamiteTrade.
      </h1>

      <div className="mt-12 space-y-4 text-xs font-medium">
        {sidebarItems.map((item) => (
          <div
            key={item.name}
            onClick={() => handleClick(item.href)}
            className={cn("py-2 flex items-center justify-start w-full p-2 group  rounded-lg text-muted-foreground hover:cursor-pointer",
              pathName === item.href ? "bg-[#6149cd] text-white" : "hover:bg-[#6149cd]/30"
            )}
          >
            <div className="flex items-center justify-center w-5 h-5 mr-2 rounded-md">
              <item.icon className="w-4 h-4" />
            </div>
            <p className="">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Sidebar;
