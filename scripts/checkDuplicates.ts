import { db } from "@/scripts/index"
import { Company } from "@prisma/client";

const compareArrays = (arr1: string[], arr2: string[]): boolean => {
  if (arr1.length !== arr2.length) {
    return false;

  }
  return arr1.every((value) => arr2.includes(value));

};

export async function checkDuplicate() {
  const companies: Company[] = await db.company.findMany()
  const symbols = companies.map((item: Company) => item.symbol)
  const summary = companies.map((item) => item.yahooStockV2Summary.symbol)
  const market = companies.map((item) => item.yahooMarketV2Data)


  console.log(symbols === summary)
  console.log(compareArrays(symbols, market))
  console.log(compareArrays(market, summary))


  console.log(symbols === market)


}

checkDuplicate()
// npx tsx scripts/checkDuplicates.ts