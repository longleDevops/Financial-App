"use client"

import { AiOutlineRise } from "react-icons/ai";
import { MdAccountBalance, MdCardTravel } from "react-icons/md";
import { LuWallet } from "react-icons/lu";

import { LineChart } from "./line-chart";

interface AccountCardProps {
  title: string,
  value: number,
  percentChange: string
  index: number
}

const icons = [
  {
    icon: MdAccountBalance
  },
  {
    icon: LuWallet
  },
  {
    icon: MdCardTravel
  }
]

export const AccountCard = (
  { title, value, percentChange, index }: AccountCardProps
) => {

  const selectedIcon = icons[index]
  const formattedVal = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div className={`p-4 border border-muted-foreground/30 rounded-lg w-[250px] flex flex-col gap-2 ${index === 0 && "bg-[#6149cd] shadow-black/25"}  text-xs shadow-lg relative`}>
      <selectedIcon.icon
        size={28}
        className={`${index === 0 ? "text-white" : "text-muted-foreground"} absolute right-4 top-4`}
      />

      <p className={`${index === 0 ? "text-white/90" : "text-muted-foreground"} font-semibold`}>
        {title}
      </p>
      <p className={`${index === 0 && "text-white"} font-semibold text-xl mt-1`}>
        ${formattedVal}
      </p>

      <div className={`${index === 0 && "text-white"} flex items-end justify-between mt-2`}>
        <div className="flex items-center gap-2">
          <AiOutlineRise
            size={25}
          />
          <p className="font-medium">+30.23%</p>
        </div>
        <LineChart />
      </div>
    </div>
  )
}

