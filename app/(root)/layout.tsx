import { Sidebar } from "@/components/Sidebar"
import Navbar from "@/components/home-navbar"
import { MainNavbar } from "@/components/main-navbar"
import { SpeedInsights } from "@vercel/speed-insights/next"

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (

    <div className="h-screen w-full bg-primary-foreground flex flex-col">
      <MainNavbar />
      <div className="mt-12 w-[200px] flex-col fixed inset-y-0 left-8">
        <Sidebar />
      </div>
      <main className="flex-1 pl-[220px]  w-full py-8">
        {children}
        <SpeedInsights/>
      </main>
    </div>
  )
}

export default RootLayout