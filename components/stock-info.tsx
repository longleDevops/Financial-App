"use client"

import { getAlphaVantageData, AlphavantageData } from "@/api/alphaVantageApi"
import { useEffect, useState } from "react"

interface StockInfoProps {
  symbol: string
}

const StockInfo = ({symbol}:StockInfoProps) => {
  const [data, setData] = useState<AlphavantageData | null>(null) 

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const alphaVantageData = await getAlphaVantageData(symbol);
        setData(alphaVantageData);
      } catch (error) {
        console.log("Error with data fetching")
      }
    }

    fetchData();
  },[symbol])
  return (
      <div>
        <p className="font-bold">Stock Information</p>
        <div className="flex space-x-3 mt-2">
          <p className="min-w-40">Ticker symbol: </p>
          <p>{data?.Symbol}</p>
        </div>

        <div className="flex space-x-3 mt-1">
          <p className="min-w-40">Company name: </p>
          <p>{data?.Name}</p>
        </div>

        <div className="flex space-x-3 mt-1">
          <p className="min-w-40">Company history: </p>
          <div className="max-h-40 overflow-y-auto">
            <p>{data?.Description}</p>
          </div>
        </div>

        <div className="flex space-x-3 mt-1">
          <p className="min-w-40">Exchange: </p>
          <div className="max-h-40 overflow-y-auto">
            <p>{data?.Exchange}</p>
          </div>
        </div>

        <div className="flex space-x-3 mt-1">
          <p className="min-w-40">Country: </p>
          <div className="max-h-40 overflow-y-auto">
            <p>{data?.Country}</p>
          </div>
        </div>
      </div>

    
  )
}

export default StockInfo