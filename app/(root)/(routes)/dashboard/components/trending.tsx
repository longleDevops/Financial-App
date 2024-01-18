import Image from "next/image"

import { Separator } from "@/components/ui/separator"
import { stocks } from "@/constants"

export const Trending = () => {
  return (
    <div className="w-full bg-white h-full p-4">
      <p className="font-bold text-xl">Trending</p>
      <Separator />
      <div className="flex flex-col mt-6 gap-3">
        {stocks.slice(0, 4).map((item) => (
          <div className="px-2 py-3 flex items-center bg-slate-100 rounded-md">
            <div className="flex w-20 gap-2">
              <Image
                alt="stock img"
                src={item.imageUrl}
                width={25}
                height={25}
              />
              <div>{item.symbol}</div>
            </div>

            <p className="mx-auto">{item.value}</p>

            <p>Chart</p>
          </div>
        ))}
      </div>
    </div>
  )
}