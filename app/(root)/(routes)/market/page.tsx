import prismadb from "@/lib/prismadb"
import MarketPlace from "./components/market-place"

export const revalidate = 0;

const Market = async () => {
  const companies = await prismadb.company.findMany()
  const products = await prismadb.product.findMany()

  console.log(companies)
  return (
    <>
      <MarketPlace companies={companies} products={products} />
    </>
  )
}

export default Market