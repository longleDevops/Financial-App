"use client"

import Image from "next/image"
import { auth } from "@clerk/nextjs";
import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";
import { Company, Watchlist_Company } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useWatchlistStore } from "@/hooks/use-dashboard-watchlist";
import { useEffect, useState } from "react";

export const Watchlist = () => {
  const [mounted, setMounted] = useState(false);
  const { watchlistCompanies, fetchWatchlistCompanies } = useWatchlistStore();
  useEffect(() => {
    fetchWatchlistCompanies();
    setMounted(true);
    console.log(watchlistCompanies)
    console.log("lll" + Array.isArray(watchlistCompanies))
  }, []);
  if (!mounted) return;
  return (
    <>
      {!watchlistCompanies || watchlistCompanies.length === 0 ?
        <div className="h-[30px] flex items-center justify-center text-muted-foreground text-sm">No watchlist added</div> :

        <div className="flex flex-col gap-3 mt-2">
          {Array.isArray(watchlistCompanies) && watchlistCompanies.map((company) => (
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
