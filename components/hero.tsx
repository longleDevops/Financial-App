"use client"

import React from 'react'
import { Button } from './ui/button'

const Hero = () => {
  const scrollToSection = (sectionId:string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({behavior: 'smooth'})
    }
  }

  return (
    <div className="h-screen flex flex-col items-center pt-48 px-16">
      <p className="text-[35px] font-bold">Make easy money with financial investment</p>
      <p className="text-[30px] font-bold">in one <span className="text-blue-800">DynamiteTrade</span></p>
      <div className="flex items-center flex-col text-black/85 mt-10">
        <p>Browse all stocks, keep track of any stock changes</p> 
        <p>and get immediate financial advice from StockX advisors</p>
      </div>
      <div className="space-x-2 mt-8">
        <Button
          onClick={() => scrollToSection("stock-content")} 
          variant="default" 
          className="rounded-[60px]">
            Get started
        </Button>

        <Button variant="secondary">
          Ask any questions
        </Button>
      </div>
     
    </div>
  )
}

export default Hero