import prismadb from "@/lib/prismadb";
import {
  BankCard,
  Activity,
  Chart
} from "./components/index"
import AccountValue from "./components/AccountValue";


const DashboardPage = async () => {
  const companies = await prismadb.company.findMany();

  const price = companies[0].yahooMarketV2Data.regularMarketPrice
  console.log(price)
  return (
    <div className="flex gap-6 px-6 pt-6">
      <div className="flex flex-col w-[72%]">
        <AccountValue />
        <Chart />
      </div>

      <div className="flex flex-col flex-1 border border-b-0 rounded-t-lg border-muted-foreground/30">
        <BankCard />
        <Activity companies={companies} />
      </div>
    </div>
  )
}

export default DashboardPage