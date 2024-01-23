import { Bell, Mail } from "lucide-react"
import { UserButton } from "@clerk/nextjs"



export const Navbar = () => {
  return (
    <div className="flex">
      <p className="text-lg font-semibold">
        Dashboard
      </p>
      <div className="min-w-[200px] bg-white rounded-2xl ml-auto">
        Search
      </div>
      <div>
        <Bell />
      </div>
      <div>
        <Mail />
      </div>
      <div>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  )
}