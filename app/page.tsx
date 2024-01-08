import { fetchStocks } from "@/api";
import Contents from "@/components/contents";
import Hero from "@/components/hero";

export default async function Home() {
  const stock = await fetchStocks('TSLA');
  console.log(stock);

  return (
    <div>
      <Hero/>
      <Contents/>
    </div>
  )
}
