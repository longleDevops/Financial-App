import Image from "next/image"

import { stocks } from "@/constants"
import { Separator } from "@/components/ui/separator"

export const Portfolio = () => {
  return (
    <div className="bg-white w-full py-6 px-4">
      <p className="font-semibold">Portfolio</p>
      <Separator />
      {stocks.slice(0, 3).map((item) => (
        <div key={item.name} className="mt-4">
          <div className="flex justify-between" >
            <div className="flex">
              <Image
                alt="compnay-logo"
                src={item.imageUrl}
                width={25}
                height={25}
                className="mr-2"
              />
              <div className="flex flex-col justify-between">
                <p className="text-md">{item.symbol}</p>
                <p className="text-sm">{item.name}</p>
              </div>
            </div>

            <div className="flex flex-col items-end justify-between">
              <p>{item.value}</p>
              <p className="text-[#ac1d16]">-12.23%</p>
            </div>
          </div>
          <Separator className="mt-2" />
        </div>
      ))}
    </div>

  )
}