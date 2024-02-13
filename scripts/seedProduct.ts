import { Ticker } from "@prisma/client";
import { db } from ".";

interface Product {
  name: string,
  symbol: string,
  imgSrc: string
}

async function seedProducts() {
  await db.product.deleteMany()
  const tickers = await db.ticker.findMany()
  const symbols: string[] = tickers.map((ticker: Ticker) => ticker.symbol)
  const promises: Promise<Product>[] = symbols.map((symbol) => (
    db.product.upsert({
      where: {
        symbol
      },
      update: {},
      create: {
        symbol,
        name: "temp",
        imgSrc: `/products/${symbol.toLowerCase()}.webp`
      }
    }))
  )

  try {
    await Promise.all(promises);
    console.log("Successfully seeding products to database")
  } catch (error) {
    console.log("Error seeding products", error)
  } finally {
    db.$disconnect()
  }

}

seedProducts()

// npx tsx scripts/seedProduct.ts