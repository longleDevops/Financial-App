import Sidebar from "@/components/sidebar"
import { ClerkProvider } from "@clerk/nextjs"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Navbar } from "@/components/navbar"
import { Separator } from "@/components/ui/separator"

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full">
      <div className="flex max-w-[1440px] overflow-x-hidden h-screen bg-[#ffffff] mx-auto">
        <aside className="w-[200px] h-full fixed">
          <Sidebar />
        </aside>

        <main className="flex-1 ml-[200px] flex flex-col">
          <nav className="w-full px-6 py-4">
            <Navbar />
          </nav>
          <Separator />
          {children}
        </main>
      </div>
    </div>
  )
}

export default RootLayout