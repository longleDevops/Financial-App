// npx tsx scripts/seedCompany.ts

import axios from "axios"
import { db } from "@/scripts/index"

// only allow 50 symbols
async function fetchCompanies(symbols: String[]) {
  const options = {
    method: 'GET',
    url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes',
    params: {
      region: 'US',
      symbols: symbols.join(',')
    },
    headers: {
      'X-RapidAPI-Key': '8f54d4c5c3msh2a085748e236832p1f8830jsndd3103bf567c',
      'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data.quoteResponse.result;
  } catch (error) {
    console.error(error);
  }
}

function compareArrays(array1: string[], array2: { symbol: string }[]) {
  const differences = [];
  for (let i = 0; i < array2.length; i++) {
    if (!array2[i].symbol) {
      differences.push(array1[i])
    }
    if (array1[i] !== array2[i].symbol) {
      differences.push({
        valueInArray2: array2[i].symbol,
      });
    }
  }
  // console.log("total: " + symbols.length)
  // console.log("found: " + yahooMarketV2Data.length)
  // const differences = symbols.filter((symbol: string) => {
  //   return !yahooMarketV2Data.some((item: { symbol: string }) => item.symbol === symbol);
  // });
  return differences;
}

async function getCompanies(symbols: string[]) {
  const chunkSize = 50;
  const numChunks = Math.ceil(symbols.length / chunkSize);
  const subArrays = [];

  for (let i = 0; i < numChunks; i++) {
    const startIndex = i * chunkSize;
    const endIndex = startIndex + chunkSize;
    subArrays.push(symbols.slice(startIndex, endIndex));
  }

  const fetchedData = [];

  for (const subArray of subArrays) {
    const data = await fetchCompanies(subArray);
    fetchedData.push(...data);
  }
  return fetchedData;
}

async function seedCompanies() {

  try {
    await db.company.deleteMany()
    const symbolList = await db.ticker.findMany({
      select: {
        symbol: true
      }
    })
    const symbols = symbolList.map((item: { symbol: string }) => item.symbol)
    const companies = await getCompanies(symbols)

    console.log("total: " + symbols.length);
    console.log("actual: " + companies.length)
    await Promise.all(symbols.map(async (symbol: string, index: number) => (
      db.company.upsert({
        where: {
          symbol
        },
        update: {},
        create: {
          symbol,
          price: companies[index].regularMarketPrice,
          yahooMarketV2Data: companies[index]
        }
      })
    )))

    // const allSymbolList = await db.allTicker.findMany({
    //   select: {
    //     symbol: true
    //   }
    // })
    // const allSymbols = allSymbolList.map((item: { symbol: string }) => item.symbol)
    // const allYahooMarketV2Data = await fetchCompanies(allSymbols.slice(3000, 4500));
    // console.log(allYahooMarketV2Data.length)
    // const promises = []
    // for (let i = 0; i < 40; i++) {
    //   promises.push(db.company.upsert({
    //     where: {
    //       symbol: allSymbols[i],
    //       price: allYahooMarketV2Data[i].regularMarketPrice
    //     },
    //     update: {},
    //     create: {
    //       symbol: allSymbols[i],
    //       price: allYahooMarketV2Data[i].regularMarketPrice,
    //       yahooMarketV2Data: allYahooMarketV2Data[i]
    //     }
    //   }))
    // }

    // await Promise.all(promises)
    console.log("seeding company data successfully");
  } catch (error) {
    console.log("error seeding company data", error)
  }

}

seedCompanies()

export default seedCompanies
// npx tsx scripts/seedCompany.ts