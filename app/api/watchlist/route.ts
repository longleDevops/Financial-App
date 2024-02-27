import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";

export async function POST(request: Request) {
  try {
    const { isLiked, ticker } = await request.json();
    const { userId } = auth()
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    console.log({ isLiked, ticker })
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

    if (!isLiked) {
      // Connect the company to the watchlist
      const data = await prismadb.watchlist_Company.create({
        data: {
          watchlistId: watchlist.id,
          companyId: company.id,
          symbol: ticker
        }
      })
      console.log(data)

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
    return new NextResponse("Internal Error", { status: 500 })
  }
}