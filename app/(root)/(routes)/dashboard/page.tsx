import { fetchStocks } from "@/utils"
import { Banner } from "./components/banner"
import { Portfolio } from "./components/portfolio"
import { Statistics } from "./components/statistics"
import { Trending } from "./components/trending"
import { Bell, Mail } from "lucide-react"
import { UserButton } from "@clerk/nextjs"
import { Navbar } from "./components/navbar"

interface DashboardPageProps {
  searchParams: {
    name: string;
  }
}

const DashboardPage = async ({ searchParams }: DashboardPageProps) => {

  return (
    <>
      <div className="w-full">
        <Navbar />
      </div>

      <div className="flex w-full h-full gap-6 py-12">
        <div className="flex flex-col border border-black">
          <Banner />
          <Statistics symbol={searchParams.name} />
        </div>
        <div className="flex flex-col w-full gap-6 border border-black">
          <Portfolio />
          <Trending />
        </div>
      </div>
    </>
  )
}

export default DashboardPage