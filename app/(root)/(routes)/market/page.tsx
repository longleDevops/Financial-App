import prismadb from "@/lib/prismadb"
import MarketPlace from "./components/market-place"

const Market = async () => {
  const companies = await prismadb.company.findMany()
  const products = await prismadb.product.findMany()

  return (
    <>
      <MarketPlace companies={companies} products={products} />
    </>
  )
}

export default Market