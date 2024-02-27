import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { Company, Watchlist_Company } from "@prisma/client";

export async function GET() {
  const { userId } = auth()
  if (!userId)
    return;
  const watchlists = await prismadb.watchlist.findMany({
    where: {
      accountId: userId
    },
    include: {
      companies: {
        include: {
          company: true
        }
      }
    }
  })

  const watchlistStocks = watchlists[0].companies.map((item: Watchlist_Company & Company) => item.company);
  console.log("dashboard-route-runs")
  return new NextResponse(JSON.stringify(watchlistStocks), { status: 200 });


}