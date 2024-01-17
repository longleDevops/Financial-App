import { UserButton } from "@clerk/nextjs"
import { Bell, Mail } from "lucide-react"

export const MainNavbar = () => {
  return (
    <div className="flex items-center h-[60px] px-8">
      <p className="font-semibold text-lg w-[220px]">
        DynamiteTrade.
      </p>
      <p className="mr-auto font-bold text-xl">
        Dashboard
      </p>
      <div className="flex space-x-8">
        <div className="min-w-[200px] bg-white rounded-2xl">
          Search
        </div>
        <div>
          <Bell />
        </div>
        <div>
          <Mail />
        </div>
        <div>
          ava
        </div>
      </div>
    </div>
  )
}