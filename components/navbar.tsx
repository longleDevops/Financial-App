import { Bell, Mail } from "lucide-react"
import { UserButton } from "@clerk/nextjs"



export const Navbar = () => {
  return (
    <div className="flex items-center">
      <p className="text-lg font-semibold">
        Dashboard
      </p>
      <div className="min-w-[200px] bg-white rounded-lg ml-auto text-xs border border-muted-foreground/30 flex items-center justify-start px-4 py-1 mr-2 text-muted-foreground">
        Search
      </div>
      <div className="mr-4">
        <Bell size={20} />
      </div>
      <div className="mr-4">
        <Mail size={20} />
      </div>
      <div>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  )
}