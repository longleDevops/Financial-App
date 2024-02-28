import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

export async function GET() {
  try {
    const { userId } = auth()
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 })
    }
    const account = await prismadb.account.findFirst({
      where: {
        id: userId
      },
      include: {
        portfolio: {
          include: {
            companies: true

          }
        }
      }
    }
    )
    //console.log(account);
    console.log("account GET route runs")
    return NextResponse.json(account, { status: 200 })
  } catch (error) {
    console.log(error)
    return new NextResponse("Internal Error", { status: 500 })
  }
}

export async function PATCH(request: Request) {
  try {
    const { transaction } = await request.json()
    const { type, value, symbol } = transaction

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

    if (type === "BUY") {

      const allPromies = [
        prismadb.portfolio_Company.upsert({
          where: {
            portfolioId_companyId: {
              portfolioId: portfolio.id,
              companyId: company.id,
            },
          },
          update: {
            shares: temp + value / company.price
          },
          create: {
            portfolioId: portfolio.id,
            companyId: company.id,
            symbol,
            shares: value / company.price
          },
        }),
        prismadb.portfolio.update({
          where: {
            accountId: userId
          },
          data: {
            portfolioVal: portfolio.portfolioVal + value
          }
        }),
        prismadb.account.update({
          where: {
            id: userId
          },
          data: {
            accountBalance: account.accountBalance - value
          }
        })
      ]
      await Promise.all(allPromies);

    }

    if (type === "SELL") {
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
    }
    console.log("account PATCH runs")
    return new NextResponse("Success", { status: 200 })
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Error", { status: 500 })
  }
}