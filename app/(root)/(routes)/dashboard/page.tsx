import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { fetchStocks } from "@/api"
import { FetchBtn } from "./components/FetchBtn"
const stocks = [
  {
    name: "Tesla",
    symbol: "TSLA",
    logo: "tsla-logo.svg",
    price: "233.32"
  },
  {
    name: "Nvidia",
    symbol: "NVDA",
    logo: "nvidia-logo.svg",
    price: "500.23"
  },
  {
    name: "Apple",
    symbol: "AAPL",
    logo: "apple-logo.svg",
    price: "323.25"
  },
  {
    name: "Amazon",
    symbol: "AMZN",
    logo: "amazon-logo.svg",
    price: "124.25"
  },
  {
    name: "Google",
    symbol: "GOOGL",
    logo: "google-logo.svg",
    price: "120.25"
  }
]

interface DashboardPageProps {
  searchParams: {
    symbol: string;
  }
}

export const revalidate = 0;

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
    <div className="w-full h-full flex gap-6 pt-8 px-8">
      <div className="flex flex-col min-w-[750px] relative">
        <Image
          alt="hero-img"
          src="calculator.svg"
          width={220}
          height={220}
          className="absolute right-4 top-3"
        />
        <div className="rounded-md p-8 bg-[#6d3db8] text-white">
          <p>Current Balance</p>
          <p className=" font-semibold text-5xl">$90,000.55</p>
          <div className="flex mt-12">
            {stocks.slice(0, 3).map((item) => (

              <div key={item.name} className="pr-16">
                <div className="flex">
                  <Image
                    alt="company-logo"
                    src={item.logo}
                    width={25}
                    height={25}
                  />
                  <p>{item.name}</p>
                </div>
                <p>${companyPrice}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white w-full h-full mt-8 px-8 pt-6 text-lg font-semibold">
          <p>Overview</p>

          <div className="flex">
            <p>Symbol ticker: </p>
            <p>{companySymbol}</p>
          </div>

          <div className="flex">
            <p>price: </p>
            <p>{companyPrice}</p>
          </div>

          <div className="flex">
            <p>Open: </p>
            <p>{companyOpen}</p>
          </div>
          <div className="flex">
            <p>high: </p>
            <p>{companyHigh}</p>
          </div>
          <div className="flex">
            <p>Low: </p>
            <p>{compnayLow}</p>
          </div>
        </div>
      </div>
      <div className="bg-white w-full py-6 px-4 ">
        <p className="font-semibold">Portfolio</p>
        <Separator />
        {stocks.map((item) => (
          <div key={item.name} className="mt-4">
            <div className="flex justify-between" >
              <div className="flex">
                <Image
                  alt="compnay-logo"
                  src={item.logo}
                  width={25}
                  height={25}
                  className="mr-2"
                />
                <div className="flex flex-col justify-between">
                  <p className="text-md">{item.symbol}</p>
                  <p className="text-sm">{item.name}</p>
                </div>
              </div>

              <div className="flex flex-col items-end justify-between">
                <p>{item.price}</p>
                <p className="text-[#ac1d16]">-12.23%</p>
              </div>
            </div>
            <Separator className="mt-2" />
          </div>
        ))}
        <FetchBtn />
      </div>
    </div>
  )
}

export default DashboardPage