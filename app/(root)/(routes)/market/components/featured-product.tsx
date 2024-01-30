"use client"

import { useAnimate } from "framer-motion"
import Image from "next/image"
import { useEffect, useRef } from "react"
import { ProductDialog } from "./product-dialog"
interface FeaturedProductProps {
  product: {
    productUrl: string,
    price: string,
    symbol: string
  }
}

export const FeaturedProduct = ({ product }: FeaturedProductProps) => {
  const [scope, animate] = useAnimate();
  const { productUrl, price, symbol } = product;

  useEffect(() => {
    animate(scope.current, { x: [150, 0], scale: [0, 1], opacity: [0, 1] }, { duration: .4 });

  }, [symbol])

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between">
        <div>
          <p className="text-lg font-semibold">SUV Model S</p>
          <ProductDialog symbol={symbol} productUrl={productUrl} />
        </div>
        <div className="flex flex-col items-end">
          <h1 className="flex text-xl font-semibold ">
            ${price}
          </h1>
          <p className="text-muted-foreground"></p>

        </div>
      </div>

      <div className="relative flex items-center justify-center flex-1 ">
        <Image
          src={productUrl}
          alt="tsla product"
          width={340}
          height={340}
          ref={scope}
          priority={true}
        />
      </div>
      <div className="flex flex-col items-center">
        <p> </p>
      </div>
    </div>
  )
}