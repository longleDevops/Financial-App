import { cn } from "@/lib/utils"
import Image from "next/image"
import { stocks } from "@/constants/data"

const StockCard = () => {
  return (
    <>
      {stocks.map((stock)=>(
        <div key={stock.name} className="h-28 w-48 bg-white flex flex-col p-4 shadow-lg">
          <div 
          key={stock.name}
          className="flex space-x-2 items-center">
            <Image
              src={stock.imageUrl}
              alt={"company logo"}
              width={22}
              height={22}
            />

            <p className="font-bold">
              {stock.name}
            </p>
          </div>
          <div className="flex justify-between">
            <p>Stock value:</p>
            <p className="font-bold">
              {stock.value}
            </p>
          </div>
        </div>
      ))}
    </>
  )
}

export default StockCard