"use client"

import { useEffect, useState } from "react"
import { useAnimate } from "framer-motion"


import { Company, Logo, Product } from "@prisma/client"
import { StockList } from "./stock-list"
import { FeaturedProduct } from "./featured-product"
import { CompanyProfile } from "./company-profile"

export interface MarketPlaceProps {
  companies: Company[] & Logo
  products: Product[]
  searchSymbol: string
}

const MarketPlace = ({ companies, products, searchSymbol }: MarketPlaceProps) => {
  const [ticker, setTicker] = useState("TSLA")
  const foundCompany = companies.find((item: Company) => item.symbol === ticker)

  const [isBack, setIsBack] = useState(false)

  const [scope, animate] = useAnimate();
  const [scope1, animate1] = useAnimate();


  useEffect(() => {
    if (isBack) {
      const windowWidth = window.innerWidth;
      const xValue = 65 * (windowWidth / 100);
      animate(scope.current, { opacity: 1, scale: 1, x: 0 }, { duration: .3 });
      animate(scope1.current, { scale: [1, .8], x: xValue }, { duration: .3 });

    }
    setIsBack(false);
  }, [isBack])

  const handleClick = () => {
    const windowWidth = window.innerWidth;
    const xValue = -65 * (windowWidth / 100);
    animate(scope.current, { opacity: 0, scale: .8, x: xValue }, { duration: .3 });
    animate1(scope1.current, { scale: [.8, 1], x: [-xValue, 0] }, { duration: .3 });
  }



  return (
    <div className="flex h-full">
      <div className="w-[35%] pt-8 pb-12 px-8 border-r border-muted-foreground/30">
        <FeaturedProduct
          ticker={ticker}
          companies={companies}
        />
      </div>
      <div className="relative flex-1 overflow-hidden ">
        <div
          ref={scope}
          className="absolute p-8 z-[1] w-full bg-white h-full"
        >
          <div className="flex justify-between pb-6">
            <p className="text-lg font-semibold">Companies</p>
          </div>
          <div className="overflow-y-auto ">
            <StockList
              ticker={ticker}
              setTicker={setTicker}
              companies={companies}
              products={products}
              animatedClick={handleClick}
              searchSymbol={searchSymbol}
            />
          </div>
        </div>

        <div
          ref={scope1}
          className="absolute flex-1 w-full h-full"
        >
          <CompanyProfile
            isBack={isBack}
            setIsBack={setIsBack}
            company={foundCompany}
          />
        </div>
      </div>
    </div>
  )
}

export default MarketPlace