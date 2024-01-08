
import { fetchStocks } from "@/api";
import { headers } from "@/constants"
import { YahooFinanceStock } from "@/types"
import { useEffect, useState } from "react"



const StockInfo = async() => {
  const stockData = await fetchStocks('IBM');
  
  const dataArr=[
    stockData?.price.longName,
    stockData?.symbol,
    stockData?.financialData.currentPrice.fmt, 
    stockData?.summaryProfile.longBusinessSummary,
    stockData?.price.exchange,
    stockData?.price.marketCap.fmt
  ]
  return (
      <div>
        <p className="font-bold">Stock Information</p>
        {headers.map((item,index)=>(
          <div 
            key={item}
            className="flex gap-10 mt-2">
            <p className="min-w-40">
              {item} 
            </p>
            <p className="overflow-y-auto max-h-[100px]">
              {dataArr[index]}
            </p>
        </div>
        ))}
        
      </div>
    
  )
}

export default StockInfo