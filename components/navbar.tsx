import { Bell, Mail } from "lucide-react"
import { UserButton } from "@clerk/nextjs"

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-muted-foreground/30">
      <p className="text-lg font-semibold">
        Dashboard
      </p>

      <div className="flex items-center gap-4">
        <div className="">
          Search
        </div>
        <Bell size={20} />
        <Mail size={20} />
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  )
}