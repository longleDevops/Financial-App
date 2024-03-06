"use client"

import { useRouter } from 'next/navigation'
import { Button } from '../shadcn-ui/button'
import { ThemeSwitch } from './theme-switch'
import { useTheme } from 'next-themes'
const HomeNavbar = () => {
  const router = useRouter();
  const onNavigate = () => {
    router.push("/dashboard")
  }
  const { setTheme } = useTheme()
  setTheme("light")
  return (
    <div className={`fixed px-16 py-6 w-full text-black flex justify-between items-center`}>
      <p className="font-semibold text-2xl">
        DynamiteTrade.
      </p>

      <div className="flex space-x-8 items-center font-semibold">
        <div>Home</div>
        <div>Docs</div>
        <div>Pricing</div>
        <div>About Us</div>
        <div>Stocks</div>
        <div>About us</div>
        <Button
          onClick={onNavigate}
          className="rounded-sm px-5 h-9">
          Sign in
        </Button>
      </div>
    </div >
  )
}

export default HomeNavbar