"use client"

import { Bell, Mail } from "lucide-react"
import { UserButton } from "@clerk/nextjs"
import { usePathname } from "next/navigation"

const getName = (pathName: string): string => {
  if (pathName.includes("dashboard")) return "Dashboard"
  else if (pathName.includes("market")) return "Market"
  else return "Messenger"
}

export const Navbar = () => {
  const pathName = usePathname();
  const name = getName(pathName)
  return (
    <div className="flex items-center justify-between flex-1 px-6 bg-white border-b border-muted-foreground/30 h-[60px]">
      <p className="text-lg font-semibold">
        {name}
      </p>

      <div className="flex items-center gap-4">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  )
}
