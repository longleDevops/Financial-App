import { Ticker } from "@prisma/client"
import { db } from "."
import prismadb from "@/lib/prismadb"

export async function seedLogo() {
  try {
    await db.logo.deleteMany()
    // return array of objects
    const logos: { symbol: string }[] = await prismadb.ticker.findMany({
      select: {
        symbol: true
      }
    })
    // convert to array of string
    const symbols: string[] = logos.map((item) => item.symbol)
    console.log(symbols)
    const promises = symbols.map((symbol) => (
      prismadb.logo.upsert({
        where: {
          symbol
        },
        update: {},
        create: {
          symbol,
          logo: `/logos/${symbol}.svg`,
        }
      })
    ))
    Promise.all(promises)
    console.log("Successfully seeding logos to the database")
  } catch (error) {
    console.log("Error seeding logos", error)
  } finally {
    await db.$disconnect
  }

}

seedLogo()

// npx tsx scripts/seedLogo.ts