import { headers, watchlist } from "@/constants"
import Image from "next/image";
import { Price, Ticker } from "./contents";
import { getCompanyLogo } from "@/utils";


const StockInfo: React.FC<Ticker & Price> = ({ ticker, price }) => {
  const { Name, Symbol, Description, Exchange, MarketCapitalization } = ticker;
  const {
    '01. symbol':symbol,
    '02. open': open,
    '03. high': high,
    '04. low': low,
    '05. price': currentPrice,
    '06. volume': volume,
    '07. latest trading day': day,
    '08. previous close': prevClose,
    '09. change': change,
    '10. change percent': changePercent
  } = price;

  const formattedPrice = parseFloat(currentPrice).toFixed(2);
  const formattedMarketCap = parseFloat(MarketCapitalization).toLocaleString();

  const dataArr = [Name, Symbol, formattedPrice, Description, Exchange, formattedMarketCap];

  const url = getCompanyLogo(Symbol)
  return (
    <>
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-4 justify-center">
          <Image
            src={url}
            alt="logo"
            width={38}
            height={38}
          />
          <div className="flex flex-col justify-start">
            <h1 className="font-bold text-xl">
              {Name}
            </h1>
            <h3 className="text-slate-600 text-sm">
              {Symbol}
            </h3>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <h1 className="text-xl font-semibold">
            ${formattedPrice}
          </h1>
          <h3 className="text-slate-600 text-sm">Last updated at {day}</h3>
        </div>
      </div>

      <div className="mt-8">
        {headers.map((item, index) => (
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