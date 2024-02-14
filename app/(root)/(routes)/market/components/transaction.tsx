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
import { Company } from "@prisma/client"

interface TransactionProps {
  btnName: string,
  color: string,
  company: Company
}

export function Transaction({ btnName, color, company }: TransactionProps) {
  const symbol = company.symbol
  return (
    <Sheet >
      <SheetTrigger asChild>
        <button
          className={cn("px-4 py-2 mt-2 text-xs font-medium text-white rounded-lg ", color)}
        >
          {btnName}
        </button>
      </SheetTrigger>
      <SheetContent >
        <SheetHeader>
          <SheetTitle>Buy Stock</SheetTitle>
          <SheetDescription>
            Make stock transactions here
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid items-center grid-cols-4 gap-4">
            <Label htmlFor="name" className="text-right">
              Symbol
            </Label>
            <Label className="col-span-3 pl-4" >
              {symbol}
            </Label>
          </div>
          <div className="grid items-center grid-cols-4 gap-4">
            <Label htmlFor="username" className="text-right">
              Company
            </Label>
            <Label className="col-span-3 pl-4" >
              {company.yahooMarketV2Data.longName}
            </Label>
          </div>
          <div className="grid items-center grid-cols-4 gap-4">
            <Label htmlFor="amount" className="text-right">
              Amount
            </Label>
            <Input id="amount" value="100.00" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <button type="submit" className="px-4 py-2 text-black rounded-lg bg-secondary">Cancel</button>
          </SheetClose>
          <SheetClose asChild>
            <button type="submit" className="px-4 py-2 text-white bg-black rounded-lg">Confirm</button>
          </SheetClose>

        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
