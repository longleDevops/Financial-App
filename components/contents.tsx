"use client"

import StockInfo from "./stock-info"
import { WatchList } from '@/components/watch-list';
import SearchBar from './search-bar';
import CustomFilter from './custom-filter';
import { AlphaVantageGlobalQuoteProps, AlphaVantageOverviewProps } from "@/types";

export interface Ticker {
  ticker:AlphaVantageOverviewProps;
}
export interface Price {
  price:AlphaVantageGlobalQuoteProps;
}

const Contents:React.FC<Ticker & Price> = ({ticker,price}) => {

  return (
    <div id="stock-content" className="h-full min-h-screen w-full bg-slate-200 px-16 py-8">
      <div className="font-bold text-xl mb-4">
        My portfolio
      </div>

      {/*horizontal section*/}
      <div className=" bg-white rounded-[20px] p-6 ">
        <SearchBar/>
        <div className="flex">
          <CustomFilter/>
          <CustomFilter/>
        </div>
      </div>

      <div className="mt-8 flex w-full">
        {/*left section*/}
        <div className="bg-white mr-auto w-full px-10 py-6 rounded-2xl">
         <StockInfo ticker={ticker} price={price}/>
        </div>

        <div className="bg-white w-[350px] ml-8 p-6 rounded-2xl ">
          <WatchList/>
        </div>
      </div>
    </div>
  )
}

export default Contents;
