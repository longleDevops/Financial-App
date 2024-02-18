"use client"

import Image from "next/image"
import { ProductDialog } from "./product-dialog"
import { Company } from "@prisma/client"
import { Transaction } from "./transaction"
import { ProgressBar } from "./progress-bar"
import { useAnimate } from "framer-motion"
import { useEffect, useState } from "react"
interface FeaturedProductProps {
  ticker: string,
  companies: Company[],
}

export const FeaturedProduct: React.FC<FeaturedProductProps> = ({ ticker, companies }) => {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    const timeout = setTimeout(() => {
      animate(scope.current, { x: [150, 0], scale: [0, 1], opacity: [0.5, 1] }, { duration: .4 })
    }, 2)
    return () => clearTimeout(timeout)
  }, [ticker])


  const foundCompany = companies.find((company) => company.symbol === ticker)
  const companyName = foundCompany.yahooStockV2Summary.price.shortName

  return (
    <div className="flex flex-col h-full text-sm">
      <div className="flex justify-between">
        <div>
          <p className="mb-1 text-lg font-semibold">
            {companyName}
          </p>
          <ProductDialog symbol={ticker} productUrl={"todo"} />
        </div>
        <div className="flex flex-col items-end">
          <h1 className="flex text-lg font-semibold ">
            ${foundCompany.price} <span className="text-[10px] text-muted-foreground ml-1">/ea</span>
          </h1>
          <div className="flex gap-1">
            <Transaction btnName="SELL" color="bg-red-600/60" company={foundCompany} />
            <Transaction btnName="BUY" color="bg-emerald-600/60" company={foundCompany} />
          </div>
        </div>
      </div>
      <div className="relative flex items-center justify-center flex-1 ">
        <Image
          className={"object-contain max-h-[300px]"}
          src={`/products/${ticker.toLowerCase()}.webp`}
          alt="Product Image"
          width={300}
          height={300}
          ref={scope}
          priority={true}
        />
      </div>
      <div className="">
        <ProgressBar company={foundCompany} />
      </div>
    </div>
  )
}