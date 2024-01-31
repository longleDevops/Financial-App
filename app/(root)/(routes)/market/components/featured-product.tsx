"use client"

import { useAnimate } from "framer-motion"
import Image from "next/image"
import { useEffect, useRef } from "react"
import { ProductDialog } from "./product-dialog"
import { Company } from "@prisma/client"
import { Transaction } from "./transaction"
interface FeaturedProductProps {
  product: {
    productUrl: string,
    price: string,
    symbol: string,
    name: string
  }
  companies: Company[]
}

export const FeaturedProduct: React.FC<FeaturedProductProps> = ({ product, companies }) => {
  const [scope, animate] = useAnimate();
  const { productUrl, price, symbol, name } = product;

  useEffect(() => {
    animate(scope.current, { x: [150, 0], scale: [0, 1], opacity: [0, 1] }, { duration: .4 });

  }, [symbol])

  const foundCompany = companies.find((company) => company.symbol === product.symbol)

  const handleClick = () => {

  }

  return (
    <div className="flex flex-col h-full text-sm">
      <div className="flex justify-between">
        <div>
          <p className="mb-1 text-lg font-semibold">
            {foundCompany.name}
          </p>
          <ProductDialog symbol={symbol} productUrl={productUrl} />
        </div>
        <div className="flex flex-col items-end">
          <h1 className="flex text-lg font-semibold ">
            ${price} <span className="text-[10px] text-muted-foreground ml-1">/ea</span>
          </h1>
          <div className="flex gap-1">
            <Transaction btnName="SELL" color="bg-red-600/60" />
            <Transaction btnName="BUY" color="bg-emerald-600/60" />
          </div>
        </div>
      </div>
      <div className="relative flex items-center justify-center flex-1 ">
        <Image
          src={productUrl}
          alt="tsla product"
          width={300}
          height={300}
          ref={scope}
          priority={true}
          className="object-contain max-h-[300px]"
        />
      </div>
      <div className="flex items-center justify-between w-full">

      </div>
    </div>
  )
}