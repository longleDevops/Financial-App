import Hero from "@/components/hero";
import HomeNavbar from "@/components/home-navbar";
import { fetchStocks } from "@/utils";
import { stocks } from "@/constants";
//export const revalidate = 0; 

export default async function Home() {
  // Use Promise.all to concurrently fetch stock data for multiple symbols
  const allStockData = await Promise.all(
    stocks.map(async (item) => {
      const overviewData = await fetchStocks('OVERVIEW', item.symbol);
      // Process overviewData as needed
      return {
        overview: overviewData,
      };
    })
  );
  return (
    <div>
      <HomeNavbar />
      <Hero />
    </div>
  )
}

