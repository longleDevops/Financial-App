import prismadb from "@/lib/prismadb";
import {
  AccountContainer,
  BankCard,
  TableContainer,
  AccordionContainer
} from "./components/index"

const DashboardPage = async () => {
  const companies = await prismadb.company.findMany({
    include: {
      logo: true
    }
  });

  return (
    <div className="flex flex-1 gap-6 px-6 pt-6">
      <div className="flex flex-col flex-1 h-full">
        <AccountContainer />
        <TableContainer />
      </div>

      <div className="w-[340px] ">
        <div className="fixed w-[340px] right-6 bottom-4 flex flex-col border rounded-lg border-muted-foreground/30 top-[85px] overflow-auto no-scrollbar">
          <BankCard />
          <AccordionContainer companies={companies} />
        </div>
      </div>
    </div>
  )
}

export default DashboardPage