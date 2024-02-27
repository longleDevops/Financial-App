import Image from "next/image"

import { Company, Watchlist } from "@prisma/client"

interface WatchlistProps {
  watchlist: Company[]
}
export const Watchllist = ({ watchlist }: WatchlistProps) => {

  //const router = useRouter();

  // const handleClick = (symbol: string) => {
  //   const query = { name: symbol }
  //   const url = qs.stringifyUrl({
  //     url: window.location.href,
  //     query,
  //   }, { skipNull: true })

  //   router.push(url)
  // }

  // TODO: add a calendar option if possible
  return (
    <>
      {watchlist.length === 0 ?
        <div className="h-[30px] flex items-center justify-center text-muted-foreground text-sm">No watchlist added</div> :

        <div className="flex flex-col gap-3 mt-4">
          {watchlist.map((company) => (

            <button
              key={company.id}
              className="flex justify-between px-4 py-2 text-xs rounded-md shadow-md "
            >
              <div className="flex items-center gap-2 w-[150px]">
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
            </button>
          ))}
        </div>
      }

    </>
  )
}
