"use client"

import { useState } from "react"
import { watchlist } from "@/constants/data"
import Image from "next/image"
import { Separator } from "./ui/separator"
import { Plus } from "lucide-react"
import StockInfo from "./stock-info"

const StockList = () => {
  const [selectSymbol, setSelectSymbol] = useState<string | null> (null)

  const handleClick=(symbol:string)=>{
    setSelectSymbol(symbol)
  }
  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="font-bold">
          My watchlist
        </p>
        <button>
          <Plus className="w-6 h-6"/>
        </button>
      </div>
      <div className="flex flex-col pt-4">
        {watchlist.map((stock)=>(
          <div key={stock.name}className="pt-1 ">
            <button 
              onClick={()=>handleClick(stock.name)}
              className="w-full py-2 flex items-center justify-between hover:bg-slate-300">
              <div className="flex items-center">
                <Image
                  src={stock.imageUrl}
                  alt="stock watch list"
                  width={25}
                  height={25}
                />
                <p className="ml-2 font-bold text-sm">
                  {stock.name}
                </p>
              </div>
    
              <p className="font-bold">
                ${stock.value}
              </p>
            </button>
            <Separator className="mt-[10px]"/>
          </div>
        ))}
      </div>
    </div>
  )
}

