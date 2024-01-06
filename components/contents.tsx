"use client"

import StockCard from '@/components/stock-card';
import { useState } from "react"
import { watchlist } from "@/constants/data"
import Image from "next/image"
import { Separator } from "./ui/separator"
import { Plus } from "lucide-react"
import StockInfo from "./stock-info"

const Contents = () => {
  const [selectSymbol, setSelectSymbol] = useState("GOOGL")

  const handleClick=(symbol:string)=>{
    setSelectSymbol(symbol)
  }

  return (
    <div id="stock-content" className="h-screen bg-slate-200 px-16 py-8">
      <div className="font-bold text-xl mb-4">
        My portfolio
      </div>
      <div className="flex space-x-4 bg-white rounded-[20px] p-6 ">
        <StockCard/>
      </div>

      <div className="mt-8 flex h-[450px] w-full">
        <div className="bg-white mr-auto w-full px-10 py-6">
          <StockInfo symbol='IBM'/>
        </div>

        <div className="bg-white w-80 ml-8 py-6 px-4 rounded-[20px]">
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
          <div key={stock.name} className="pt-1 ">
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
        </div>
      </div>
    </div>
  )
}

export default Contents;
