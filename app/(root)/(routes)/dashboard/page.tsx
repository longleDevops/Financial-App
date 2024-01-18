import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { fetchStocks } from "@/api"
import { stocks } from "@/constants"
import { Portfolio } from "./components/portfolio"
import { Banner } from "./components/banner"
import { Statistics } from "./components/statistics"
import { Trending } from "./components/trending"
interface DashboardPageProps {
  searchParams: {
    symbol: string;
  }
}

const DashboardPage = async ({ searchParams }: DashboardPageProps) => {
  const globalQuote = await fetchStocks('GLOBAL_QUOTE', 'AAPL');
  const data = globalQuote['Global Quote']
  console.log(data)

  const {
    '01. symbol': companySymbol,
    '02. open': companyOpen,
    '03. high': companyHigh,
    '04. low': compnayLow,
    '05. price': companyPrice
  } = data;
  return (
    <div className="w-full flex gap-6 px-8 h-full ">
      <div className="flex flex-col h-full border-black border-2">
        <Banner />
        <Statistics />
      </div>
      <div className="flex flex-col gap-6 w-full border-black border-2">
        <Portfolio />
        <Trending />
      </div>
    </div>
  )
}

export default DashboardPage