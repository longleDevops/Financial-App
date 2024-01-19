import { fetchStocks } from "@/utils"
import { Banner } from "./components/banner"
import { Portfolio } from "./components/portfolio"
import { Statistics } from "./components/statistics"
import { Trending } from "./components/trending"
import { auth } from "@clerk/nextjs"
import { redirect } from "next/navigation"

interface DashboardPageProps {
  searchParams: {
    symbol: string;
  }
}

const DashboardPage = async ({ searchParams }: DashboardPageProps) => {
  const { userId } = auth();
  if (!userId) {
    redirect('/sign-in')
  }

  const data = await fetchStocks('OVERVIEW', 'AAPL');
  const { symbol, Name, Description } = data;
  console.log(data)

  return (
    <div className="w-full flex gap-6 px-8 h-full ">
      <div className="flex flex-col h-full border-black border-2">
        <Banner />
        <Statistics data={data} />
      </div>
      <div className="flex flex-col gap-6 w-full border-black border-2">
        <Portfolio />
        <Trending />
      </div>
    </div>
  )
}

export default DashboardPage