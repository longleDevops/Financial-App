import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { Watchlist_Company } from "@prisma/client";
export async function POST(request: Request) {
  try {
    const { isLiked, ticker } = await request.json();
    const { userId } = auth()
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    const watchlist = await prismadb.watchlist.findFirst({
      where: {
        accountId: userId
      }
    })

    const company = await prismadb.company.findFirst({
      where: {
        symbol: ticker
      }
    })


    if (isLiked) {
      // Connect the company to the watchlist
      await prismadb.watchlist_Company.upsert({
        where: {
          watchlistId_companyId: {
            watchlistId: watchlist.id,
            companyId: company.id,
          },
        },
        update: {
        },
        create: {
          watchlistId: watchlist.id,
          companyId: company.id,
          symbol: ticker,

        },
      })
    } else {
      // Disconnect the company from the watchlist
      await prismadb.watchlist_Company.deleteMany({
        where: {
          watchlistId: watchlist.id,
          companyId: company.id,
        }
      })
    }
    return new NextResponse("Successful", { status: 200 });
  } catch (error) {
    console.log(error)
    return new NextResponse("Internal Error", { status: 500 })
  }
}

export async function GET() {
  const { userId } = auth()
  if (!userId)
    return new NextResponse("Unauthorized", { status: 401 });
  const watchlists = await prismadb.watchlist.findMany({
    where: {
      accountId: userId
    },
    include: {
      companies: true
    }
  })

  const watchlistStocks = watchlists[0].companies.map((item: Watchlist_Company) => item.symbol);
  return new NextResponse(watchlistStocks, { status: 200 });

}