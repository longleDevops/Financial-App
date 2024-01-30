"use client"

import Image from "next/image";
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
import { MarketPlaceProps } from "./market-place";
import { Company, Product } from "@prisma/client";
import { CompanyProfile } from "./company-profile";

interface StockItem {
  rank: string;
  name: string;
  symbol: string;
  sector: string;
  price: string;
  productUrl: string;
  isActive: boolean;
}

interface StockListProps {
  product: {
    productUrl: string,
    price: string,
    symbol: string
  },
  setProduct: ({ productUrl, price, symbol }: { productUrl: string, price: string, symbol: string }) => void,

  companies: Company[]
  products: Product[]
}


export const StockList = ({ product, setProduct, companies, products }: StockListProps) => {
  const [isDisable, setIsDisable] = useState(false)
  
  const handleClick = (company: Company) => {
    const foundProduct= products.find((product)=>product.productSymbol === company.symbol)
    if (!foundProduct) return;
    // Call back func
    setProduct({
      productUrl: foundProduct?.imgSrc,
      price: company.price,
      symbol: foundProduct?.productSymbol
    });

    // setIsDisable(true)
    // stockList.map((stock) => {
    //   stock.symbol === item.symbol ?
    //     item.isActive = true :
    //     stock.isActive = false;
    // })

    // setTimeout(() => {
    //   setIsDisable(false)
    // }, 500)
  }

  const bg = [
    "bg-red-200",
    "bg-blue-200",
    "bg-green-200",
    "bg-purple-200",
    "bg-pink-200"
  ]

  return (
    <Table>
      <TableCaption>A list of top ranked companies.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className=" w-[50px]">Rank</TableHead>
          <TableHead className="">Company</TableHead>
          <TableHead className="w-[150px]">Sector</TableHead>
          <TableHead className="">Sentimental</TableHead>
          <TableHead className="">Stock Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {companies.map((company, index) => (
          <TableRow
            key={company.id}
            onClick={() => handleClick(company)}
            className={`hover:cursor-pointer hover:bg-slate-200 ${company.symbol === product.symbol && 'bg-slate-200'} ${isDisable &&
              'pointer-events-none'}`
            }
          >
            <TableCell className="flex justify-between font-medium">{company.rank}</TableCell>
            <TableCell>
              <div className="flex items-center gap-3">
                <div className={`flex items-center justify-center w-[28px] h-[28px] rounded-full `}>
                  <Image
                    src={company.imgSrc}
                    alt="logo"
                    width={18}
                    height={18}
                    className="max-h-[18px]"
                  />
                </div>
                <p className="flex flex-col justify-between">
                  {company.symbol}
                  <span className="flex flex-wrap text-xs text-muted-foreground max-w-[100px]">{company.name}</span>
                </p>
              </div>

            </TableCell>
            <TableCell className="flex flex-wrap">
              <p>{company.sector}</p>
            </TableCell>
            <TableCell className="">"Strong buy"</TableCell>
            <TableCell className="">{company.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
