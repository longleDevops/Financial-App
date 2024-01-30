import { AlphaVantageOverviewProps } from "@/types"
import Image from "next/image";

const headers = [
  "Company Name:",
  "Symbol Ticker:",
  "History:",
  "Exchange:",
  "Market Cap:",
]

interface StatisticsProps {
  symbol: string;
}

export const Statistics = ({ symbol }: StatisticsProps) => {
  // const data = await fetchStocks("OVERVIEW", symbol)

  // const { Symbol, Name, Description, Exchange, MarketCapitalization } = data;

  // const dataArr = [Name, Symbol, Description, Exchange, MarketCapitalization]

  // Flex: flex flex-rol or col will inherit 100% width or heigt
  // from parents, avoid w-full or h-full for the parent
  return (
    <>
      <div className="w-full h-full mt-8 text-lg font-semibold border rounded-lg border-muted-foreground/30">
        {/* <p>Overview</p>
        <div className="flex flex-col gap-2">
          {headers.map((header, index) => (
            <div key={header} className="flex gap-2 ">
              <p className="min-w-[150px] mr-2">{header}</p>
              <p className="max-h-[150px] w-[450px] overflow-y-auto">{dataArr[index]}</p>
            </div>
          ))}
        </div> */}
        <Image
          alt="chart image"
          src="/chart.png"
          width={860}
          height={100}
          className="object-contain"
        />
      </div>
    </>
  )
}