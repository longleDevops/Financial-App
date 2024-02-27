import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import {
  AccountContainer,
  BankCard,
  TableContainer,
  AccordionContainer
} from "./components/index"
import { redirect } from "next/navigation";
import { Company } from "@prisma/client";

const DashboardPage = async () => {
  const { userId } = auth()
  if (userId) console.log("exist")
  if (!userId) {
    redirect("/")
  }

  await prismadb.account.upsert({
    where: {
      id: userId
    },
    update: {},
    create: {
      id: userId,
      accountBalance: 50000,
      accountValue: 100000,
      portfolio: {
        create: {
          portfolioVal: 500000
        }
      },
      watchlist: {
        create: {
          name: "default"
        }
      }
    }
  })

  const portfolio = await prismadb.portfolio.findFirst({
    where: {
      accountId: userId
    },
    include: {
      companies: true
    }
  })

  const watchlist = await prismadb.watchlist.findMany({
    where: {
      accountId: userId
    },
    include: {
      companies: true,
    }
  })

  const companyId = watchlist[0].companies[0].companyId;
  const foundCompany = await prismadb.company.findFirst({
    where: {
      id: companyId
    }
  })

  return (
    <div className="flex flex-1 gap-6 px-6 pt-6">
      <div className="flex flex-col flex-1 h-full">
        <AccountContainer />
        <TableContainer />
      </div>

      <div className="w-[340px] ">
        <div className="fixed w-[340px] right-6 bottom-4 flex flex-col border rounded-lg border-muted-foreground/30 top-[85px] overflow-auto no-scrollbar">
          <BankCard />
          <AccordionContainer portfolio={portfolio} foundCompany={foundCompany} />
        </div>
      </div>
    </div>
  )
}

export default DashboardPage