import { Navbar } from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import prismadb from "@/lib/prismadb"

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const bot = await prismadb.chatBot.findFirst()
  return (
    <div className="flex w-[1440px] overflow-x-hidden h-screen bg-[#ffffff] mx-auto">
      <aside className="w-[200px] h-full fixed">
        <Sidebar bot={bot} />
      </aside>

      <main className="flex-1 ml-[200px] flex flex-col">
        <Navbar />
        {children}
      </main>
    </div>
  )
}

export default RootLayout