import Image from "next/image"

import { stocks } from "@/constants"

export const Banner = () => {
  return (
    <div className="rounded-md p-8 bg-[#6d3db8] text-white relative w-[800px]">
      <Image
        alt="hero-img"
        src="calculator.svg"
        width={220}
        height={220}
        className="absolute right-4 top-3"
      />

      <p>Current Balance</p>
      <p className="font-semibold text-5xl">$90,000.55</p>
      <div className="flex mt-12">
        {stocks.slice(0, 3).map((item) => (
          <div key={item.name} className="pr-16">
            <div className="flex">
              <Image
                alt="company-logo"
                src={item.imageUrl}
                width={25}
                height={25}
              />
              <p>{item.name}</p>
            </div>
            <p>${item.symbol}</p>
          </div>
        ))}
      </div>
    </div >
  )
}