"use client"

import { useState } from "react";
import Image from "next/image";
import { MdOutlineLeaderboard } from "react-icons/md";
import { GiRank3 } from "react-icons/gi";
import { MdCorporateFare } from "react-icons/md";
import { LiaIndustrySolid } from "react-icons/lia";
import { MdCurrencyExchange } from "react-icons/md";
import { BsPeople } from "react-icons/bs";


import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Company, Product } from "@prisma/client";

interface StockListProps {
  product: {
    productUrl: string,
    price: string,
    symbol: string,
    name: string
  },
  setProduct: ({
    productUrl,
    price,
    symbol,
    name
  }: {
    productUrl: string,
    price: string,
    symbol: string,
    name: string
  }) => void,

  companies: Company[]
  products: Product[]
}


const getSentimentalColor = (input: string) => {
  switch (input) {
    case "strong buy":
      return "text-green-500";
    case "buy":
      return "text-green-600";
    case "sell":
      return "text-red-600";
    case "strong sell":
      return "text-red-500";
    default:
      return "";
  }
};

export const StockList = ({ product, setProduct, companies, products }: StockListProps) => {


  const handleClick = (company: Company) => {
    const foundProduct = products.find((product) => product.productSymbol === company.symbol)
    if (!foundProduct) return;
    // Call back func
    setProduct({
      productUrl: foundProduct.imgSrc,
      price: company.price,
      symbol: company.symbol,
      name: foundProduct.name
    });
  }

  return (
    <Table>
      <TableCaption>A list of top ranked companies.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className=" w-[50px]">
            <div className="flex items-start gap-0.5">
              <GiRank3
                size={16}
                className="text-black"
              />
              <p>Rank</p>
            </div>
          </TableHead>
          <TableHead className="">
            <div className="flex items-start gap-0.5">
              <MdCorporateFare
                size={16}
                className="text-black"
              />
              <p>Company</p>
            </div>
          </TableHead>
          <TableHead className="w-[150px]">
            <div className="flex items-start gap-0.5">
              <LiaIndustrySolid
                size={16}
                className="text-black"
              />
              <p>Sector</p>
            </div>
          </TableHead>
          <TableHead className="">
            <div className="flex items-start gap-0.5">
              <BsPeople
                size={16}
                className="text-black"
              />
              <p>Sentimental</p>
            </div>
          </TableHead>
          <TableHead className="">
            <div className="flex items-start gap-0.5">
              <MdCurrencyExchange
                size={16}
                className="text-black"
              />
              <p>Stock Price</p>
            </div>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {companies.map((item, index) => (
          <TableRow
            onClick={() => handleClick(item)}
            className={`
                      border-t-2
                      border-t-muted-foreground/20
                        text-xs
                        font-medium
                        hover:bg-indigo-600/10
                        hover:cursor-pointer
                        ${item.symbol === product.symbol && 'border-2 border-indigo-600'}
                        `}
          >
            <TableCell className="font-medium">
              <div className="flex items-center justify-center">
                {item.rank}
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-3">
                <div className={`flex items-center justify-center w-[28px] h-[28px] rounded-full `}>
                  <Image
                    src={item.imgSrc}
                    alt="logo"
                    width={18}
                    height={18}
                    className="max-h-[18px]"
                  />
                </div>
                <p className="flex flex-col justify-between">
                  {item.symbol}
                  <span className="flex flex-wrap text-[10px] text-muted-foreground max-w-[100px]">{item.name}</span>
                </p>
              </div>
            </TableCell>
            <TableCell className="flex flex-wrap">
              <p>{item.sector}</p>
            </TableCell>
            <TableCell className={getSentimentalColor(item.sentimental)}>
              {item.sentimental}
            </TableCell>
            <TableCell className="">
              ${item.price}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
