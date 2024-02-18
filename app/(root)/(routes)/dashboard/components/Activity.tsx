import Image from "next/image"

import { Company } from "@prisma/client"

interface ActivityProps {
  companies: Company[]
}

export const Activity = ({ companies }: ActivityProps) => {

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
    <div className="flex flex-col gap-3 mt-4">
      {companies.slice(0, 10).map((company) => (
        <button
          key={company.id}
          className="flex justify-between px-4 py-2 text-xs rounded-md shadow-md "
        >
          <div className="flex items-center gap-2 w-[150px]">
            <Image
              alt="stock img"
              src={company.logo.logo}
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
  )
}
