"use client"

import { IoHeart } from "react-icons/io5";
import Image from "next/image"
import { ProductDialog } from "./product-dialog"
import { Company } from "@prisma/client"
import { Transaction } from "../transaction/transaction"
import { ProgressBar } from "./progress-bar"
import { useAnimate } from "framer-motion"
import { useEffect, useState } from "react"
import { AiOutlineHeart } from "react-icons/ai";
import { Heart, ThumbsDown, ThumbsUp } from "lucide-react";
import { useTicker } from "@/hooks/use-ticker";
import { useToast } from "@/components/ui/use-toast"
import { Check } from "lucide-react";
import axios from "axios";
import { useStockWatchlists } from "@/hooks/use-watch-list";
interface FeaturedProductProps {
  companies: Company[],
}

export const FeaturedProduct: React.FC<FeaturedProductProps> = ({ companies }) => {
  // Global state
  const { ticker } = useTicker()
  const { toast } = useToast()

  const [scope, animate] = useAnimate();
  const [scope2, animate2] = useAnimate();
  const [isSwapped, setIsSwapped] = useState(true)


  const foundCompany = companies.find((company) => company.symbol === ticker)
  const companyName = foundCompany.yahooStockV2Summary.price.shortName

  const { stockWatchlists, fetchStockWatchlists } = useStockWatchlists()

  const isContained = stockWatchlists.includes(ticker)
  const [isLiked, setIsLiked] = useState(isContained)
  const [isDisabled, setIsDisabled] = useState(false)

  async function handleClicked() {
    setIsDisabled(true)
    setIsLiked(!isLiked);
    const description = !isLiked ? "Added to watchlist" : "Removed from watchlist"
    toast({
      className: "shadow-lg gap-2",
      duration: 1500,
      description,
      action: <Check size={24} className="text-white bg-green-500 rounded-full" />,
    })

    await axios.post('/api/market-watchlist', {
      isLiked: !isLiked,
      ticker
    })
    setIsDisabled(false)
  }

  useEffect(() => {
    fetchStockWatchlists()
    setIsLiked(isContained)
  }, [ticker])

  useEffect(() => {
    if (isSwapped) {
      animate(scope.current, { x: 150, scale: 0, opacity: 0 }, { duration: 0 })
      const timeout = setTimeout(() => {
        animate2(scope2.current, { x: 0, scale: 1, opacity: 1 }, { duration: .4 })
      }, 50)
      setIsSwapped(!isSwapped)
      return () => clearTimeout(timeout);
    }

    animate2(scope2.current, { x: 150, scale: 0, opacity: 0 }, { duration: 0 })
    const timeout2 = setTimeout(() => {
      animate(scope.current, { x: 0, scale: 1, opacity: 1 }, { duration: .4 })
    }, 50)
    setIsSwapped(!isSwapped)
    return () => clearTimeout(timeout2);
  }, [ticker])

  return (
    <div className="flex flex-col justify-between h-full text-sm">
      <div className="flex justify-between">
        <div>
          <p className="mb-1 text-lg font-semibold">
            {companyName}
          </p>
          <ProductDialog symbol={ticker} productUrl={"todo"} />
          <button
            disabled={isDisabled}
            onClick={handleClicked}
            className="transition duration-300 ease-in-out delay-50 hover:-translate-y-1 hover:scale-110"
          >
            {isLiked ?
              <IoHeart
                size={25}
                className="mt-2 text-red-500 transition duration-300 delay-200"
              /> :
              <AiOutlineHeart
                size={25}
                className="mt-2"
              />
            }
          </button>

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

      <div className="relative flex items-center justify-center flex-1 w-[300px] h-[300px] mx-auto">
        <Image
          className={"object-contain  absolute w-auto h-auto"}
          src={`/products/${ticker.toLowerCase()}.webp`}
          alt="Product Image"
          width={300}
          height={300}
          ref={scope}
          priority={true}
        />
        <Image
          className={"object-contain  absolute opacity-0 scale-[.2] translate-x-[150px] w-auto h-auto"}
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
