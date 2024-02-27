import prismadb from "@/lib/prismadb"
import MarketContainer from "./components/market-container"
import { auth } from "@clerk/nextjs"
import { redirect } from "next/navigation"

interface MarketProps {
  searchParams: {
    symbol: string
  }
}
const Market = async () => {
  const { userId } = auth()
  if (!userId) {
    redirect("/")
  }
  // paralel fetching
  const [companies, products] = await Promise.all([
    prismadb.company.findMany({
      include: {
        logo: true
      }
    }),
    prismadb.product.findMany(),
  ])

  return (
    <MarketContainer
      companies={companies}
      products={products}
    />
  )
}

export default Market