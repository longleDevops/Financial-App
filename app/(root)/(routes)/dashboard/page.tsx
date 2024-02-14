import prismadb from "@/lib/prismadb";
import {
  BankCard,
  Activity,
  Chart
} from "./components/index"
import AccountValue from "./components/AccountValue";
import Portfolio from "./components/Portfolio";
import { useQuery } from 'react-query'

const DashboardPage = async () => {
  const companies = await prismadb.company.findMany({
    include: {
      logo: true
    }
  });

  return (
    <div className="flex gap-6 px-6 pt-6">
      <div className="flex-col flex-1 ">
        <AccountValue />
        <Chart />
      </div>


      <div className="w-[340px] ">
        <div className="fixed w-[340px] right-6 bottom-4 flex flex-col border rounded-lg border-muted-foreground/30 top-[85px] overflow-auto custom-scrollbar">
          <BankCard />
          <Portfolio companies={companies} />
          <Activity companies={companies} />
        </div>
      </div>
    </div>
  )
}

export default DashboardPage