import { fetchStocks } from "@/api";

export const getData = async (symbol:string) => {
  const stockData = await fetchStocks(symbol);
  
  const dataArr=[
    stockData?.price.longName,
    stockData?.symbol,
    stockData?.financialData.currentPrice.fmt, 
    stockData?.summaryProfile.longBusinessSummary,
    stockData?.price.exchange,
    stockData?.price.marketCap.fmt
  ]
  
  return dataArr;
}