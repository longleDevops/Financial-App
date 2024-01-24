"use client"
import { RankList } from "./components/rank-list"
import { FeaturedProduct } from "./components/featured-product"
import { useState } from "react"

const MartketPage = () => {
  const [product, setProduct] = useState({
    imgUrl: "/products/tsla-img.png",
    price: "200",
    symbol:"TSLA",
  })

  return (
    <div className="flex flex-col h-full">
      <p>MartketPage</p>

      <div className="flex flex-1 mt-8">
        <div className="w-[40%] border border-red-700 p-8">
          <FeaturedProduct product={product} />
        </div>

        <div className="w-[60%]  border border-red-700 p-8">
          <RankList product={product} setProduct={setProduct} />
        </div>
      </div>
    </div>

  )
}

export default MartketPage