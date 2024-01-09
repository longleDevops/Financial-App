"use client"

import { watchlist } from "@/constants"
import Image from "next/image"
import { Separator } from "./ui/separator"
import { Plus } from "lucide-react"

export const WatchList = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h3 className="font-bold">
          My watchlist
        </h3>
        <button>
          <Plus className="w-6 h-6"/>
        </button>
      </div>

      <div className="flex flex-col pt-4 overflow-y-auto small-scrollbar max-h-[50vh]">
        {watchlist.map((stock)=>(
          <div key={stock.symbol}className="pt-1 ">
            <button 
              onClick={()=>{}}
              className="w-full py-2 flex items-center justify-between hover:bg-slate-300">
              <div 
                className="flex items-center">
                <Image
                  src={stock.imageUrl}
                  alt="stock watch list"
                  width={30}
                  height={28}
            
                />

                <div className="flex flex-col items-start ml-3 justify-between">
                  <h3 className="font-bold text-sm">
                    {stock.symbol}
                  </h3>
                  <h4 className="text-[12px] font-semibold text-slate-600">
                    {stock.name}
                  </h4>
                </div>

              </div>
    
              <div className="flex flex-col justify-between items-end">
                <p className="font-bold">
                  ${stock.value}
                </p>
                <p className="text-[12px] text-red-500">
                  {stock.percentChange}%
                </p>
              </div>
            </button>
            <Separator className="mt-[10px]"/>
          </div>
        ))}
      </div>

    </div>
  )
}

