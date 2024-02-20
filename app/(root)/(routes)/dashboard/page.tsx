import prismadb from "@/lib/prismadb";
import {
  BankCard,
} from "./components/index"
import ChartContainer from "./components/chart-container";
import AccountValue from "./components/AccountValue";
import { AccordionPanel } from "./components/accordion-panel";

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
        <ChartContainer />
      </div>


      <div className="w-[340px] ">
        <div className="fixed w-[340px] right-6 bottom-4 flex flex-col border rounded-lg border-muted-foreground/30 top-[85px] overflow-auto no-scrollbar">
          <BankCard />
          <AccordionPanel companies={companies} />
        </div>
      </div>
    </div>
  )
}

export default DashboardPage