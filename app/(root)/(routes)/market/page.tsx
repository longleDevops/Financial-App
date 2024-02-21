import prismadb from "@/lib/prismadb"
import MarketPlace from "./components/market-place"
import { Company } from "@prisma/client"

interface MarketProps {
  searchParams: {
    symbol: string
  }
}
const Market = async ({
  searchParams
}: MarketProps) => {
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
    <MarketPlace
      companies={companies}
      products={products}
      searchSymbol={searchParams.symbol ? searchParams.symbol.toUpperCase() : ""}
    />
  )
}

export default Market