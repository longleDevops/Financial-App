import Hero from "@/components/hero";
import HomeNavbar from "@/components/home-navbar";
import { HomeProps } from "@/types";

//export const revalidate = 0; 

export default function Home({ searchParams }: HomeProps) {
  // const GLOBAL_QUOTE = "GLOBAL_QUOTE";
  // const OVERVIEW = "OVERVIEW";
  // if (!searchParams.ticker) {
  //   searchParams.ticker = "AAPL";
  // }
  // const ticker = await fetchStocks(OVERVIEW, searchParams.ticker);
  // const price = await fetchStocks(GLOBAL_QUOTE, searchParams.ticker);

  // const realTime = await fetchYahooFinance('AAPL');
  //TODO: check case where data is empty
  return (
    <div>
      <HomeNavbar />
      <Hero />
    </div>
  )
}
