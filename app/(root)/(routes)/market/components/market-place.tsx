"use client"

import { StockList } from "./stock-list"
import { FeaturedProduct } from "./featured-product"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Ghost, MoveRight } from "lucide-react"
import { useAnimate } from "framer-motion"
import { CompanyProfile } from "./company-profile"
import { Company, Product } from "@prisma/client"

export interface MarketPlaceProps {
  companies: Company[]
  products: Product[]
}

const MarketPlace = ({ companies, products }: MarketPlaceProps) => {
  const defaultCompany = companies[0]
  const defaultProduct = products[0]

  const [product, setProduct] = useState({
    productUrl: defaultProduct.imgSrc,
    price: defaultCompany.price,
    symbol: defaultProduct.productSymbol,
  })

  const [isBack, setIsBack] = useState(false)

  const [scope, animate] = useAnimate();
  const [scope2, animate2] = useAnimate();
  useEffect(() => {
    if (isBack) {
      animate(scope.current, { x: 0 }, { duration: .3 });
      animate(scope2.current, { opacity: 1, scale: [.8, 1] }, { duration: .3 });

    }
    setIsBack(false);
  }, [isBack])

  const handleClick = () => {
    animate(scope.current, { x: -804 }, { duration: .3 });
    animate(scope2.current, { opacity: 0, scale: [1, .8] }, { duration: .3 });
  }
  return (
    <div className="flex flex-1 pb-4 max-h-[748px]">
      <div className="w-[35%] p-8 border-r border-muted-foreground/30">
        <FeaturedProduct product={product} />
      </div>

      <div className="w-[65%] overflow-hidden">
        <div
          className="flex w-[200%] h-full"
          ref={scope}
        >
          <div
            ref={scope2}
            className="w-[50%] max-w-[50%] p-8"
          >
            <div className="flex justify-between pb-8">
              <p className="text-lg font-semibold">Companies</p>
              <Button
                variant="secondary"
                className=""
                onClick={handleClick}
              >
                AMD Profile
                <MoveRight
                  size={20}
                  className="ml-1"
                />
              </Button>
            </div>
            <div className="max-h-[600px] overflow-y-auto">
              <StockList
                product={product}
                setProduct={setProduct}
                companies={companies}
                products={products}
              />
            </div>
          </div>

          <div
            className="flex-1 h-full bg-blue-100"
          >
            <CompanyProfile
              isBack={isBack}
              setIsBack={setIsBack}
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default MarketPlace