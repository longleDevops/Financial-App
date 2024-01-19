"use client"
import qs from "query-string"
import Image from "next/image"
import { useRouter } from "next/navigation"

import { Separator } from "@/components/ui/separator"
import { stocks } from "@/constants"
import { Button } from "@/components/ui/button"

export const Trending = () => {

  const router = useRouter();

  const handleClick = (symbol: string) => {
    const query = { name: symbol }
    const url = qs.stringifyUrl({
      url: window.location.href,
      query,
    }, { skipNull: true })

    router.push(url)
  }
  return (
    <div className="w-full bg-white h-full p-4">
      <p className="font-bold text-xl">Trending</p>
      <Separator />
      <div className="flex flex-col mt-6 gap-3">
        {stocks.slice(0, 4).map((item) => (
          <Button
            onClick={() => handleClick(item.symbol)}
            className="px-2 py-3 rounded-md"
          >
            <div className="flex w-20 gap-2 items-center">
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
          </Button>
        ))}
      </div>
    </div>
  )
}