import { Company } from '@prisma/client';
import Image from 'next/image';

interface PortfolioProps {
  companies: Company[]
}

const Portfolio = ({ companies }: PortfolioProps) => {
  return (

    <div className="flex flex-col gap-3 mt-4 ">
      {companies.map((company) => (
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
              <p className="font-medium">{company.symbol}</p>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <p className="">${company.price}</p>
            <p className="text-muted-foreground">-5.23%</p>
          </div>
        </button>
      ))}
    </div>
  )
}

export default Portfolio