"use client"

import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll=()=>{
    const scrollY = window.scrollY
    const scrollThreshold = window.innerHeight * .18
    setIsScrolled(scrollY > scrollThreshold)
  }

  useEffect(()=>{
    window.addEventListener('scroll',handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  },[]);
  return (
    <div className={`fixed px-16 h-16 w-full text-white flex justify-between items-center ${isScrolled? " hidden":" bg-black/90"} transition-all duration-400`}>
      <div>Logo</div>
      <div className="flex space-x-8 ml-24">
        <div>Home</div>
        <div>Stocks</div>
        <div>About us</div>
      </div>
      <div className="flex space-x-6 items-center">
        <div>Login</div>
        <Button variant="secondary" className="h-[36px] rounded-full">Sign up</Button>
      </div>
    </div>
  )
}

export default Navbar