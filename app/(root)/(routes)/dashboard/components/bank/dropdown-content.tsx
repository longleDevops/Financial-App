"use client"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator
} from "@/components/shadcn-ui/dropdown-menu"
import { Deposit } from "./deposit"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogOverlay
} from "@/components/shadcn-ui/dialog"
import { useState } from "react"
import { Button } from "@/components/shadcn-ui/button"
import { MoreHorizontal } from "lucide-react"
import { useOrder } from "@/hooks/use-order"
import { Withdraw } from "./withdraw"
import { AddCard } from "./add-card"
import { SwitchCard } from "./switch-card"
import { RemoveCard } from "./remove-card"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useToast } from "@/components/ui/use-toast"
export const DropdownContent = () => {
  const { order, setOrder, isOpen, setIsOpen } = useOrder()
  const { toast } = useToast()
  const { data, isLoading } = useQuery({
    queryKey: ['getCard'],
    queryFn: async () => {
      const result = await axios.get("/api/card")
      return result.data;
    }
  })

  if (isLoading) return (
    <div>isloading</div>
  )
  return (
    <div >
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger>
            <MoreHorizontal />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem className="flex justify-end" onClick={() => setOrder("1")}>
              <DialogTrigger>View all cards</DialogTrigger>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-muted-foreground/30" />

            <DropdownMenuItem className="flex justify-end" onClick={() => setOrder("2")}>
              <DialogTrigger>Add card</DialogTrigger>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="flex justify-end"
              onClick={() => {
                setOrder("3")
                !data || data.length === 0 &&
                  toast({
                    variant: "destructive",
                    title: "No card found.",
                  })
              }}>
              <DialogTrigger>Remove card</DialogTrigger>
            </DropdownMenuItem>

            <DropdownMenuSeparator className="bg-muted-foreground/30" />
            <DropdownMenuItem className="flex justify-end" onClick={() => setOrder("4")} >
              <DialogTrigger>Deposit</DialogTrigger>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex justify-end" onClick={() => setOrder("5")} >
              <DialogTrigger>Withdraw</DialogTrigger>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {
          order === '0' ? <></> :
            order === '1' ? <AddCard /> :
              order === '2' ? <AddCard /> :
                order === '3' ? <RemoveCard cardLists={data} /> :
                  order === '4' ? <Deposit cardLists={data} /> :
                    <Withdraw cardLists={data} />
        }
      </Dialog>
    </div>

  )
}