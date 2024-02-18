import { Navbar } from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#ffffff] h-screen">
      <aside className="w-[75px] h-full fixed">
        <Sidebar />
      </aside>
      <div className="fixed w-full pl-[75px]">
        <Navbar />
      </div>
      <main className="ml-[75px] pt-[60px] h-full flex flex-col">
        {children}
      </main>
    </div>
  )
}

export default RootLayout