import { Sidebar } from "@/components/Sidebar"
import Navbar from "@/components/home-navbar"
import { MainNavbar } from "@/components/main-navbar"

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (

    <div className="h-screen w-full bg-primary-foreground ">
      <MainNavbar />
      <div className="mt-12 w-[200px] flex-col fixed inset-y-0 left-8">
        <Sidebar />
      </div>
      <main className="pl-[220px] h-full ">
        {children}
      </main>
    </div>
  )
}

export default RootLayout