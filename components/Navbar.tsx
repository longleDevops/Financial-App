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
    <nav className="flex items-center justify-between px-6 py-4 border-b border-muted-foreground/30">
      <p className="text-lg font-semibold">
        {name}
      </p>

      <div className="flex items-center gap-4">
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  )
}
