import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

export async function PATCH(request: Request) {
  try {
    const { transaction } = await request.json()
    const { value, symbol } = transaction

    const { userId } = auth()
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const promises = [
      prismadb.portfolio.findFirst({
        where: {
          accountId: userId
        }
      }),
      prismadb.company.findFirst({
        where: {
          symbol
        }
      }),
      prismadb.account.findFirst({
        where: {
          id: userId
        }
      })
    ]
    const [portfolio, company, account] = await Promise.all(promises)

    const portfolioShares = await prismadb.portfolio_Company.findFirst({
      where: {
        portfolioId: portfolio.id,
        companyId: company.id,
      },
      select: {
        shares: true
      }
    })

    const temp = portfolioShares ? portfolioShares.shares : 0

    if (portfolioShares > (value / company.price)) {
      await prismadb.portfolio_Company.update({
        where: {
          portfolioId_companyId: {
            portfolioId: portfolio.id,
            companyId: company.id
          }
        },
        data: {
          shares: portfolioShares - value / company.price
        }
      })

      await prismadb.portfolio.update({
        where: {
          accountId: userId
        },
        data: {
          portfolioVal: portfolio.portfolioVal - value
        }
      })
    }

    console.log("api/transaction/sell PATCH runs")
    return new NextResponse("Success", { status: 200 })
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Error", { status: 500 })
  }
}