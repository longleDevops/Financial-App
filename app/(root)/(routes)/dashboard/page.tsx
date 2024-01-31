import prismadb from "@/lib/prismadb";

import {
  BankCard,
  Activity,
  BalanceCard,
  Statistics
} from "./components/index"

const headers = [
  {
    title: "Account Value",
    value: "250,000",
    percentChange: "3.3"
  },
  {
    title: "Remaining balance",
    value: "55,000",
    percentChange: "3.3"
  },
  {
    title: "Portfolio Value",
    value: "25,000",
    percentChange: "3.3"
  },

]
interface DashboardPageProps {
  searchParams: {
    name: string;
  }
}

const DashboardPage = async ({ searchParams }: DashboardPageProps) => {

  const companies = await prismadb.company.findMany();

  return (
    <div className="flex w-full h-full gap-6 px-6 pt-6">
      <div className="flex flex-col w-[856px]">
        <div className="flex justify-between">
          {headers.map((item, index) =>
            <BalanceCard
              key={item.title}
              title={item.title}
              value={item.value}
              percentChange={item.percentChange}
              index={index}
            />
          )}
        </div>
        <Statistics symbol={searchParams.name} />
      </div>

      <div className="flex flex-col flex-1 border border-b-0 rounded-t-lg border-muted-foreground/30">
        <BankCard />
        <Activity companies={companies} />
      </div>
    </div>
  )
}

export default DashboardPage