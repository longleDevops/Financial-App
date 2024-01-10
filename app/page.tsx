import { fetchRealTimePrice, fetchStocks } from "@/api";
import Contents from "@/components/contents";
import Hero from "@/components/hero";

export default async function Home() {
  const ticker = await fetchStocks('AAPL');
  const price = await fetchRealTimePrice('AAPL');
  //TODO: check case where data is empty
  return (
    <div>
      <Hero/>
      <Contents ticker={ticker} />
    </div>
  )
}
