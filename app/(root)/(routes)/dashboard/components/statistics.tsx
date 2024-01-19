import { AlphaVantageOverviewProps } from "@/types"
import { fetchStocks } from "@/utils"

const headers = [
  "Company Name:",
  "Symbol Ticker:",
  "History:",
  "Exchange:",
  "Market Cap:",
]

interface StatisticsProps {
  symbol:string;
}

export const Statistics = async ({ symbol }: StatisticsProps) => {
  const data = await fetchStocks("OVERVIEW", symbol)

  const { Symbol, Name, Description, Exchange, MarketCapitalization } = data;

  const dataArr = [Name, Symbol, Description, Exchange, MarketCapitalization]

  return (
    <>
      <div className="bg-white w-full h-full mt-8 px-8 pt-6 text-lg font-semibold">
        <p>Overview</p>
        <div className="flex flex-col gap-2">
          {headers.map((header, index) => (
            <div key={header} className="flex gap-2 ">
              <p className="min-w-[150px] mr-2">{header}</p>
              <p className="max-h-[150px] w-[450px] overflow-y-auto">{dataArr[index]}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}