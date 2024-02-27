"use client"

import { DataTableColumnHeader } from "./column-header"
import { ColumnDef } from "@tanstack/react-table"
import Image from "next/image"
import { MoveRight } from "lucide-react"
import { useTicker } from "@/hooks/use-ticker"
import { useAnimation } from "@/hooks/use-animation"
import { Button } from "@/components/aceternity-ui/moving-border"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type CompanyDef = {
  symbol: string,
  sector: string,
  trend: string,
  price: number,
  percentChg: number
}


export const columns: ColumnDef<CompanyDef>[] = [
  {
    accessorKey: "symbol",
    header: ({ column }) => (
      <div className="w-[70px]"><DataTableColumnHeader column={column} title="Company" /></div>
    ),
    cell: ({ row }) => {
      const data: string = row.getValue("symbol")
      const imgPath = "/logos/" + data.toLowerCase() + ".svg"
      return (
        <div className="flex gap-3 items-center text-xs w-[70px]">
          <Image
            src={imgPath}
            alt="Company logo"
            width={18}
            height={18}
          />
          {data}
        </div>
      )
    }
  },
  {
    accessorKey: "sector",
    header: ({ column }) => (
      <div className=""><DataTableColumnHeader column={column} title="Sector" /></div>
    ),
    cell: ({ row }) => {
      return <div className="">{row.getValue("sector")}</div>
    },
  },
  {
    accessorKey: "trend",
    header: ({ column }) => (
      <div className="w-[75px]"><DataTableColumnHeader column={column} title="Trend" /></div>
    ),
    cell: ({ row }) => {
      return <div className=" w-[75px]">{row.getValue("trend")}</div>
    },
  },
  {
    accessorKey: "price",
    header: ({ column }) => (
      <div className=""><DataTableColumnHeader column={column} title="Price" /></div>
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("price"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)

      return <div>{formatted}</div>
    },

  },
  {
    accessorKey: "percentChg",
    header: ({ column }) => (
      <div className="w-[100px]"><DataTableColumnHeader column={column} title="Change" /></div>
    ),
    cell: ({ row }) => {
      const data = parseFloat(row.getValue("percentChg"))
      const { animatedId, setAnimtedId } = useAnimation();

      const { ticker } = useTicker()
      if (data < 0) {
        return (

          <div className="flex items-center justify-between">
            <p className="w-[60px]">{data.toFixed(2) + '%'}</p>
            {ticker === row.getValue("symbol") && <Button
              onClick={() => {
                setAnimtedId(1)
                console.log(animatedId)
              }}
              borderRadius="100px"
              className="text-black bg-white dark:bg-slate-900 hover:bg-cyan-800 hover:text-white dark:text-white border-neutral-400 dark:border-slate-800"
            >
              <MoveRight
                size={16}
                className="ml-1"
              />
            </Button>}
          </div>

        )
      }
      return (
        <div className="flex items-center justify-between">
          <p className="w-[60px]">{'+' + data.toFixed(2) + '%'}</p>
          {ticker === row.getValue("symbol") && <Button

            onClick={() => {
              setAnimtedId(1)
              console.log(animatedId)
            }}
            borderRadius="100px"
            className="text-black bg-white hover:bg-cyan-800 hover:text-white dark:bg-slate-900 dark:text-white border-neutral-400 dark:border-slate-800 "
          >
            <MoveRight
              size={16}
              className="ml-1"
            />
          </Button>}
        </div>
      )
    }
  }
]
