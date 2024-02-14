import { Navbar } from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import prismadb from "@/lib/prismadb"

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#ffffff] h-screen">
      <aside className="w-[75px] h-full fixed">
        <Sidebar />
      </aside>
      <nav className="fixed w-full pl-[75px]">
        <Navbar />
      </nav>
      <main className="ml-[75px] pt-[60px] h-full flex flex-col">
        {children}
      </main>
    </div>
  )
}

export default RootLayout