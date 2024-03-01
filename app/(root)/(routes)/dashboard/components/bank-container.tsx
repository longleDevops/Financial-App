"use client"
import { Plus } from "lucide-react"
import { DropdownContent } from "./bank/dropdown-content"
import CardContent from "./bank/card-content"
import { useOrder } from "@/hooks/use-order"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { Wrapper } from "./bank/wrapper"
export function BankContainer() {
  const handleClick = (symbol: string) => {
  }
  const { order, setOrder } = useOrder()

  return (
    <div className="w-full px-4 pt-4 pb-2">
      <div className="flex items-center justify-between w-full ">
        <p className="text-sm font-semibold">My Cards</p>

        <DropdownContent />
      </div>
      <Wrapper />
    </div>
  )
}