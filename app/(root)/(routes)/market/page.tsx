import prismadb from "@/lib/prismadb"
import MarketPlace from "./components/market-place"

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
      <MarketPlace companies={companies} products={products} />
  )
}

export default Market