"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

interface TransactionProps {
  btnName: string,
  color: string
}

export function Transaction({ btnName, color }: TransactionProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          className={cn("px-4 py-2 mt-2 text-xs font-medium text-white rounded-lg ", color)}
        >
          {btnName}
        </button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Buy Stock</SheetTitle>
          <SheetDescription>
            Make stock transactions here, buy!!!
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid items-center grid-cols-4 gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid items-center grid-cols-4 gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <button type="submit">Save changes</button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
