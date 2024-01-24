"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { slideInFromTop } from "@/utils/motion"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { useAnimate } from "framer-motion"

interface FeaturedProductProps {
  imgUrl: string
}

export const FeaturedProduct = ({ imgUrl }: FeaturedProductProps) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(scope.current, { x: [150, 0], scale: [0.5, 1], opacity: [0, 1] }, { duration: .6 })
  }, [imgUrl])

  return (
    <div className="flex flex-col h-full">
      <h1>Tesla Inc. </h1>
      <div className="relative flex items-center justify-center flex-1 ">
        <div ref={scope}>
          <Image
            src={imgUrl}
            alt="tsla product"
            width={350}
            height={350}
          />
        </div>
      </div>
    </div>
  )
}