"use client"

import { Company, Portfolio } from '@prisma/client';
import axios from 'axios';
import Image from 'next/image';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { ThreeDots } from 'react-loading-icons'


export const PortfolioItem = () => {

  const { data, isLoading } = useQuery<Company[]>({
    queryKey: ['getPortfolio'],
    queryFn: async () => {
      const response = await axios.get('/api/portfolio')
      return response.data;
    },
    staleTime: 3600000 // 1 hour in ms
  })

  if (isLoading) {
    return (
      <div className='flex items-center justify-center h-[30px] text-muted-foreground'>
        ...Loading
      </div>
    );
  }
  return (
    <>
      {
        !data || data.length === 0 ?
          <div className='h-[30px] flex justify-center items-center text-muted-foreground text-sm'>
            No stocks added.
          </div> :
          <div className="flex flex-col gap-3 mt-4 ">
            {data.map(company => (
              <button
                key={company.id}
                className="flex justify-between px-4 py-2 text-xs rounded-md shadow-md "
              >
                <div className="flex items-center gap-2 w-[150px]">
                  <Image
                    alt="stock img"
                    src={`/logos/${company.symbol}.svg`}
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
      }
    </>
  )
}

