"use client"

import { useAnimate } from "framer-motion"
import Image from "next/image"
import { useEffect } from "react"

import { ProductDialog } from "./product-dialog"
interface FeaturedProductProps {
  product: {
    imgUrl: string,
    price: string,
    symbol: string
  }
}

export const FeaturedProduct = ({ product }: FeaturedProductProps) => {
  const [scope, animate] = useAnimate();
  const { imgUrl, price, symbol } = product;
  useEffect(() => {
    animate(scope.current, { x: [150, 0], scale: [0.5, 1], opacity: [0, 1] }, { duration: .4 })
  }, [imgUrl])

  const handleClick = () => {

  }
  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between">
        <div>
          <ProductDialog symbol={symbol} imgUrl={imgUrl}/>
          <p className="text-xl font-semibold">SUV Model S</p>
        </div>
        <div className="flex flex-col items-end">
          <h1 className="text-muted-foreground">Price </h1>
          <p className="text-xl font-semibold ">${price}</p>
        </div>
      </div>

      <div className="relative flex items-center justify-center flex-1 ">
        <Image
          ref={scope}
          src={imgUrl}
          alt="tsla product"
          width={350}
          height={350}
        />
      </div>
      <div className="flex flex-col items-center">
        <p> </p>
      </div>
    </div>
  )
}