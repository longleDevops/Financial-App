"use client"

import { useEffect, useState } from "react"
import { useAnimate } from "framer-motion"


import { Company, Logo, Product } from "@prisma/client"
import { StockList } from "./table/stock-list"
import { FeaturedProduct } from "./products/featured-product"
import { CompanyProfile } from "./company-profile/company-profile"
import TableContainer from "./table-container"
import { useTicker } from "@/hooks/use-ticker"
import { useAnimation } from "@/hooks/use-animation"
import { useQueryClient } from "@tanstack/react-query"
export interface MarketContainerProps {
  companies: Company[] & Logo

}

const MarketContainer = ({ companies }: MarketContainerProps) => {
  const { ticker } = useTicker()
  const foundCompany = companies.find((item: Company) => item.symbol === ticker)

  const { animatedId } = useAnimation()

  const [frontElement, animate] = useAnimate();
  const [behindElement, animate1] = useAnimate();

  // Animation
  useEffect(() => {
    if (animatedId === 1) {
      console.log(animatedId)
      const windowWidth = window.innerWidth;
      const xValue = -65 * (windowWidth / 100);
      animate(frontElement.current, { opacity: 0, scale: .8, x: xValue }, { duration: .2 });
      animate1(behindElement.current, { scale: [.8, 1], x: [-xValue, 0] }, { duration: .2 });
    }
    if (animatedId === 2) {
      const windowWidth = window.innerWidth;
      const xValue = 65 * (windowWidth / 100);
      animate(frontElement.current, { opacity: 1, scale: 1, x: 0 }, { duration: .2 });
      animate1(behindElement.current, { scale: [1, .8], x: xValue }, { duration: .2 });
    }
  }, [animatedId])

  return (
    <div className="flex h-full">
      {/*Left Container*/}
      <div className="w-[35%] pt-8 pb-12 px-8 border-r border-muted-foreground/30">
        <FeaturedProduct
          companies={companies}
        />
      </div>

      {/*Right Container*/}
      <div className="relative flex-1 overflow-hidden ">
        <div
          ref={frontElement}
          className="absolute pt-8 z-[1] w-full bg-white h-full flex flex-col overflow-y-auto"
        >
          <p className="pb-6 pl-8 text-lg font-semibold">Companies</p>
          <div className="flex-1 ">
            <TableContainer companies={companies} />
          </div>
        </div>

        <div
          ref={behindElement}
          className="absolute flex-1 w-full h-full"
        >
          <CompanyProfile
            company={foundCompany}
          />
        </div>
      </div>
    </div>
  )
}

export default MarketContainer