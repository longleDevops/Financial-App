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
  const [scope2, animate2] = useAnimate();
  const [isSwapped, setIsSwapped] = useState(true)
  useEffect(() => {
    //animate(scope.current, { opacity: 0.2 }, { duration: 0 })
    if (isSwapped) {
      animateFunc()
    } else {
      animateBackFunc()
    }
    setIsSwapped(!isSwapped)
  }, [ticker])

  const animateFunc = () => {
    animate(scope.current, { x: 150, scale: 0, opacity: 0 }, { duration: 0 })
    animate2(scope2.current, { x: 0, scale: 1, opacity: 1 }, { duration: .4, ease: "easeInOut" })
  }

  const animateBackFunc = () => {
    animate2(scope2.current, { x: 150, scale: 0, opacity: 0 }, { duration: 0 })
    animate(scope.current, { x: 0, scale: 1, opacity: 1 }, { duration: .4, ease: "easeInOut" })

  }

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
          className={"object-contain max-h-[300px] absolute"}
          src={`/products/${ticker.toLowerCase()}.webp`}
          alt="Product Image"
          width={300}
          height={300}
          ref={scope}
          priority={true}
        />
        <Image
          className={"object-contain max-h-[300px] absolute opacity-20 scale-[.2] translate-x-[150px] "}
          src={`/products/${ticker.toLowerCase()}.webp`}
          alt="Product Image"
          width={300}
          height={300}
          ref={scope2}
          priority={true}
        />
      </div>
      <div className="">
        <ProgressBar company={foundCompany} />
      </div>
    </div>
  )
}