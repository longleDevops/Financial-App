import { headers, watchlist } from "@/constants"
import { Price, Ticker } from "@/types";
import Image from "next/image";


const StockInfo = ({ticker}:Ticker) => {
  
  const dataArr = [ticker.price.longName,ticker.symbol, ticker.financialData.currentPrice.fmt, ticker.summaryProfile.longBusinessSummary, ticker.price.exchange, ticker.price.marketCap.fmt]

  return (
      <>
        <div className="w-full flex justify-between items-center">
          <div className="flex gap-4 justify-center">
            <Image
              src={watchlist[5].imageUrl}
              alt="logo"
              width={38}
              height={38}
            />
            <div className="flex flex-col justify-start">
              <h1 className="font-bold text-xl">
                {dataArr[0]}
              </h1>
              <h3 className="text-slate-600 text-sm">
                {dataArr[1]}
              </h3>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <h1 className="text-xl font-semibold">
              ${watchlist[0].value}
            </h1>
            <h3 className="text-slate-600 text-sm">Last updated at 7:30 pm</h3>
          </div>
        </div>

        <div className="mt-8">
          {headers.map((item,index)=>(
            <div 
              key={item}
              className="flex gap-10 mt-4">
              <p className="min-w-40">
                {item} 
              </p>
              <p className="overflow-y-auto max-h-[100px]">
                {dataArr[index]}
              </p>
            </div>
          ))}
        </div>
        
      </>
    
  )
}

export default StockInfo