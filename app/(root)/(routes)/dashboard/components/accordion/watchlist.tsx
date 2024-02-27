
import Image from "next/image"
import { auth } from "@clerk/nextjs";
import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";
import { Company, Watchlist_Company } from "@prisma/client";

export const revalidate = 0;

async function getStocks() {
  console.log("hi")
  const { userId } = auth()
  if (!userId)
    return new NextResponse("Unauthorized", { status: 401 });
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

  const watchlistStocks = watchlists[0].companies.map((item: Watchlist_Company) => item.company);
  return watchlistStocks
}

export const Watchllist = async () => {
  const watchlistCompanies: Company[] = await getStocks();
  return (
    <>
      {!watchlistCompanies || watchlistCompanies.length === 0 ?
        <div className="h-[30px] flex items-center justify-center text-muted-foreground text-sm">No watchlist added</div> :

        <div className="flex flex-col gap-3 mt-2">
          {watchlistCompanies.map((company) => (
            <div
              key={company.id}
              className="flex justify-between px-4 py-2 text-xs rounded-md shadow-md "
            >
              <div className="flex items-center gap-2 w-[210px] ">
                <Image
                  alt="stock img"
                  src={`/logos/${company.symbol.toLowerCase()}.svg`}
                  width={20}
                  height={20}
                  className="object-contain rounded-full max-h-[20px]"
                />
                <div className="flex flex-col items-start ml-1">
                  <p className="font-medium">{company.yahooMarketV2Data.shortName}</p>
                  <p className="text-muted-foreground">just now</p>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <p className="">${company.price}</p>
                <p className="text-muted-foreground">Buy</p>
              </div>
            </div>
          ))}
        </div>
      }
    </>
  )
}
