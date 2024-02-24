import prismadb from "@/lib/prismadb"
import MarketContainer from "./components/market-container"

interface MarketProps {
  searchParams: {
    symbol: string
  }
}
const Market = async () => {
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