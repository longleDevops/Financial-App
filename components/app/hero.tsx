"use client"

import { ArrowRight, ChevronRight } from 'lucide-react';
import React from 'react'
import { Button } from '../shadcn-ui/button'
import { useRouter } from 'next/navigation';

const Hero = () => {
  const router = useRouter();

  const onNavigate = () => {
    router.push("/dashboard")
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center px-16">
      <p className="text-[42px] font-semibold">Make easy money with financial investment</p>
      <p className="text-[30px] font-bold">in one <span className="text-[#500480]">DynamiteTrade</span></p>
      <div className="flex items-center flex-col text-muted-foreground mt-6">
        <p>Browse all stocks, keep track of any stock changes</p>
        <p>and get immediate financial advice from DT advisors</p>
      </div>
      <div className="space-x-2 mt-8">
        <Button
          onClick={onNavigate}
          variant="default"
          className="rounded-md pl-5 pr-3">
          <p>Get started</p>
          <ChevronRight className="h-4 w-4 ml-2" />
        </Button>

        <Button variant="ghost">
          <p>Ask any questions</p>
          <ChevronRight className="h-4 w-4 ml-2" />
        </Button>
      </div>

    </div>
  )
}

export default Hero