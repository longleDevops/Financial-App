"use client"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";

const stockList = [
  {
    rank: "1",
    name: "Nvidia",
    symbol: "NVDA",
    category: "Chip",
    price: "1000.00",
    url: "/products/nvda-img.webp",
    isActive: false
  },
  {
    rank: "2",
    name: "Tesla",
    symbol: "TSLA",
    category: "Automotive",
    price: "33,000.00",
    url: "/products/tsla-img.webp",
    isActive: false
  },
  {
    rank: "3",
    name: "Apple",
    symbol: "AAPL",
    category: "Electronics",
    price: "800.00",
    url: "/products/aapl-img.webp",
    isActive: false
  }, {
    rank: "4",
    name: "Advanced Micro Devices",
    symbol: "AMD",
    category: "Credit Card",
    price: "320.00",
    url: "/products/amd-img.webp",
    isActive: false
  }, {
    rank: "5",
    name: "VISA",
    symbol: "VISA",
    category: "Credit Card",
    price: "600.00",
    url: "/products/visa.webp",
    isActive: false
  },
]

interface StockItem {
  rank: string;
  name: string;
  symbol: string;
  category: string;
  price: string;
  url: string;
  isActive: boolean;
}

interface RankListProps {
  product: {
    imgUrl: string,
    price: string,
    symbol: string
  },
  setProduct: ({ imgUrl, price, symbol }: { imgUrl: string, price: string, symbol: string }) => void
}

export const RankList = ({ product, setProduct }: RankListProps) => {
  const [isDisable, setIsDisable] = useState(false)

  const handleClick = (item: StockItem) => {
    // Call back func
    setProduct({
      imgUrl: item.url,
      price: item.price,
      symbol: item.symbol
    });

    setIsDisable(true)
    stockList.map((stock) => {
      stock.symbol === item.symbol ?
        item.isActive = true :
        stock.isActive = false;
    })

    setTimeout(() => {
      setIsDisable(false)
    }, 500)
  }

  return (
    <Table>
      <TableCaption>A list of top ranked companies.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className=" w-[50px]">Rank</TableHead>
          <TableHead className="">Symbol</TableHead>
          <TableHead className=" w-[200px]">Company</TableHead>
          <TableHead className="">Category</TableHead>
          <TableHead className="">Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {stockList.map((item) => (
          <TableRow
            key={item.symbol}
            onClick={() => handleClick(item)}
            className={`hover:cursor-pointer hover:bg-slate-200 ${item.url === product.imgUrl && 'bg-slate-200'} ${isDisable &&
              'pointer-events-none'}`}
          >
            <TableCell className="font-medium">{item.rank}</TableCell>
            <TableCell>{item.symbol}</TableCell>
            <TableCell className="flex flex-wrap w-[200px]">{item.name}</TableCell>
            <TableCell className="">{item.category}</TableCell>
            <TableCell className="">{item.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
