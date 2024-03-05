import axios from "axios"
import { db } from "@/scripts/index"
import { Company } from "@prisma/client";

// Get overview data for a maximum of 50 symbols
async function fetchMarketV2(symbols: String[]) {
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

// This is the main fetch() that allows more than 50 symbols
async function getMarketV2Quotes(symbols: string[]) {
  const chunkSize = 50;
  const numChunks = Math.ceil(symbols.length / chunkSize);
  const subArrays = [];

  for (let i = 0; i < numChunks; i++) {
    const startIndex = i * chunkSize;
    const endIndex = startIndex + chunkSize;
    subArrays.push(symbols.slice(startIndex, endIndex));
  }

  const fetchedData = [];

  // Fetch market data for each sub-array and concatenate the results
  for (const subArray of subArrays) {
    const data = await fetchMarketV2(subArray);
    fetchedData.push(...data);
  }
  return fetchedData;
}

// Get detail data for individual stock
async function fetchStockV2Summary(symbol: string) {
  const options = {
    method: 'GET',
    url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary',
    params: {
      symbol: symbol,
      region: 'US'
    },
    headers: {
      'X-RapidAPI-Key': '8f54d4c5c3msh2a085748e236832p1f8830jsndd3103bf567c',
      'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data
  } catch (error) {
    console.error(error);
  }
}

// Fetches stock summaries for multiple symbols
async function getStockV2Summary(symbols: string[]) {
  const result = []
  for (let i = 0; i < symbols.length; i++) {
    const summary = await fetchStockV2Summary(symbols[i]);
    result.push(summary)
  }
  return result;
}

// Seeds company data into the database
async function seedCompanies() {
  try {
    //await db.company.deleteMany()
    const symbolList = await db.ticker.findMany({
      select: {
        symbol: true
      },
      orderBy: {
        symbol: "asc"
      }
    })
    const companies: Company[] = await db.company.findMany()
    const existingSymbols = companies.map((item) => item.symbol)
    const allSymbols: string[] = symbolList.map((item: { symbol: string }) => item.symbol)
    const symbols = allSymbols.filter((symbol) => existingSymbols.indexOf(symbol) === -1);

    const start = 0;
    const end = symbols.length < 10 ? symbols.length : 20;
    const marketV2GetQuotes = await getMarketV2Quotes(symbols.slice(start, end))
    const stockV2GetSummary = await getStockV2Summary(symbols.slice(start, end))

    console.log("total: " + symbols.length);
    console.log("V2GetQuotes actual: " + marketV2GetQuotes.length)
    console.log("V2GetSummary actual: " + stockV2GetSummary.length)

    await Promise.all(symbols.slice(start, end).map(async (symbol: string, index: number) => (
      db.company.upsert({
        where: {
          symbol
        },
        update: {
          price: marketV2GetQuotes[index].regularMarketPrice,
          yahooMarketV2Data: marketV2GetQuotes[index],
          yahooStockV2Summary: stockV2GetSummary[index],
        },
        create: {
          symbol,
          price: marketV2GetQuotes[index].regularMarketPrice,
          yahooMarketV2Data: marketV2GetQuotes[index],
          yahooStockV2Summary: stockV2GetSummary[index],
        }
      })
    )))

    console.log("seeding company data successfully");
  } catch (error) {
    console.log("error seeding company data", error)
  }
}

seedCompanies()

export default seedCompanies
// npx tsx scripts/seedCompany.ts