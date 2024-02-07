import Sidebar from "@/components/sidebar"
import { Navbar } from "@/components/navbar"

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-[1440px] overflow-x-hidden h-screen bg-[#ffffff] mx-auto">
      <aside className="w-[200px] h-full fixed">
        <Sidebar />
      </aside>

      <main className="flex-1 ml-[200px] flex flex-col">
        <Navbar />
        {children}
      </main>
    </div>
  )
}

export default RootLayout