"use client"

import {  Layers3, Search } from 'lucide-react'
import { Combobox, Transition  } from '@headlessui/react'
import { useState,Fragment } from 'react'

import { SearchStockProps } from '@/types'
import { tickers } from '@/constants'

const SearchStock = ({ticker,setTicker}:SearchStockProps) => {
  const [query, setQuery] = useState('')

  const filteredTickers = query === "" ? tickers : tickers.filter((item)=>(
    item.toLowerCase().includes(query.toLowerCase().replace(/\s+/g,""))
  ))

  return (
    <div className="bg-slate-200 py-2 px-4 rounded-3xl max-w-[300px] ">
      <Combobox value={ticker} onChange={setTicker}>
        <div className='relative'>
          
          <Combobox.Button className="absolute">
            <Layers3
              width={20}
              height={20}
            />
          </Combobox.Button>
  
          <Combobox.Input
            className="ml-8 bg-slate-200 w-[220px] focus:ring-0 border-none outline-none"
            placeholder='AAPL'
            displayValue={(ticker:string)=>ticker}
            onChange={(e)=> setQuery(e.target.value)}
          />
            
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={()=> setQuery('')}
          >
            <Combobox.Options
              className="absolute mt-2 ml-8 max-h-60 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm w-[220px]"
            >
              {filteredTickers.map((item)=>(
                <Combobox.Option
                  key={item}
                  className={({active})=> `relative cursor-default select-none py-2 pl-4 pr-4 ${active? 'bg-teal-600 text-black':'text-gray-900'}`}
                  value={item}
                >
                  {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {item}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          >
                          </span>
                        ) : null}
                      </>
                    )}
                </Combobox.Option>
              ))}
               
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchStock