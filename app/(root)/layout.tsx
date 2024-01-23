import { Sidebar } from "@/components/Sidebar"
import Navbar from "@/components/home-navbar"
import { MainNavbar } from "@/components/main-navbar"
import { SpeedInsights } from "@vercel/speed-insights/next"

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (

    <div className="flex h-screen bg-primary-foreground">
      <aside className="w-[200px] h-full fixed">
        <Sidebar />
      </aside>
      <main className="flex-1 ml-[200px] py-8 px-4">
        {children}
        <SpeedInsights />
      </main>
    </div>
  )
}

export default RootLayout