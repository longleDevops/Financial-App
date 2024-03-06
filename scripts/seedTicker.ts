import axios from "axios"
import { db } from "@/scripts/index";


const popularTickers = ['MSFT', 'AAPL', 'NVDA', 'AMZN', 'GOOGL', 'META', 'BRK.B', 'LLY', 'TSM', 'AVGO', 'TSLA', 'V', 'NVO', 'JPM', 'UNH', 'XOM', 'JNJ', 'ASML', 'HD', 'PG', 'COST', 'AMD', 'TM', 'MRK', 'ABBV', 'ORCL', 'CRM', 'CVX', 'BAC', 'NFLX', 'ADBE', 'KO', 'ACN', 'PEP', 'FMX', 'TMO', 'SAP', 'LIN', 'MCD', 'NVS', 'DIS', 'ABT', 'SHEL', 'AZN', 'WFC', 'CSCO', 'TMUS', 'WMT', 'JD', 'PYPL', 'MA', 'DHR', 'INTU', 'QCOM', 'BABA', 'IBM', 'GE', 'AMAT', 'VZ', 'CAT', 'UBER', 'PDD', 'CMCSA', 'AXP', 'TXN', 'UNP', 'NKE', 'NOW', 'BX', 'TTE', 'AMGN', 'HSBC', 'MS', 'BHP', 'PFE', 'ISRG', 'LOW', 'PM', 'HDB', 'RY', 'COP', 'SYK', 'SPGI', 'HON', 'LRCX', 'GS', 'UPS', 'PLD', 'BLK', 'MUFG', 'UL', 'BA', 'T', 'SCHW', 'BUD', 'BKNG', 'RTX', 'ETN', 'SNY', 'ELV', 'MDT', 'TJX', 'NEE', 'PGR', 'VRTX', 'PBR', 'C', 'TD', 'SONY', 'PBR.A', 'MU', 'REGN', 'SBUX', 'RIO', 'LMT', 'DE', 'BMY', 'CB', 'ABNB', 'ADP', 'BP', 'MMC', 'BSX', 'CI', 'PANW', 'SHOP', 'MDLZ', 'KLAC', 'ADI', 'AMT', 'CVS', 'IBN', 'UBS', 'SNPS', 'GILD', 'FI', 'KKR', 'ANET', 'ZTS', 'DELL', 'EQIX', 'CDNS', 'GSK', 'SHW', 'DEO', 'CNI', 'HCA', 'WM', 'INFY', 'RELX', 'STLA', 'CP', 'CME', 'ICE', 'CNQ', 'ARM', 'MELI', 'ITW', 'WDAY', 'CRWD', 'GD', 'CSX', 'SMFG',
  'RACE', 'CMG', 'SO', 'ENB', 'EQNR', 'MAR', 'MO', 'TRI', 'TGT', 'CL', 'DUK', 'SLB', 'MCK', 'NTES', 'MCO', 'PH', 'NOC', 'MRVL', 'BDX', 'ITUB', 'EOG', 'APH', 'USB', 'BMO', 'NXPI', 'SAN', 'TDG', 'BTI', 'TT', 'BN', 'ECL', 'CTAS', 'PYPL', 'ORLY', 'APO', 'SCCO', 'MPC', 'AON'
]





// Fetch trending tickers
async function fetchTrendingTickers() {
  const options = {
    method: 'GET',
    url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-trending-tickers',
    params: { region: 'US' },
    headers: {
      'X-RapidAPI-Key': '8f54d4c5c3msh2a085748e236832p1f8830jsndd3103bf567c',
      'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data.finance.result[0].quotes;
  } catch (error) {
    console.error(error);
  }
}

// Fetch top active tickers
async function fetchActiveTickers() {
  const options = {
    method: 'GET',
    url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/screeners/get-symbols-by-predefined',
    params: {
      scrIds: 'MOST_WATCHED_TICKERS',
      start: '0',
      count: '200'
    },
    headers: {
      'X-RapidAPI-Key': '8f54d4c5c3msh2a085748e236832p1f8830jsndd3103bf567c',
      'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data.finance.result[0].quotes
  } catch (error) {
    console.error(error);
  }
}

// Fetch all tickers excluding those containing '.'
async function fetchAllTickers() {
  const options = {
    method: 'GET',
    url: 'https://real-time-quotes1.p.rapidapi.com/api/v1/symbol/stock',
    params: {
      includeNames: 'false'
    },
    headers: {
      'X-RapidAPI-Key': '8f54d4c5c3msh2a085748e236832p1f8830jsndd3103bf567c',
      'X-RapidAPI-Host': 'real-time-quotes1.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function seedTickers() {
  try {
    const promises = [];
    for (let i = 0; i < popularTickers.length; i++) {
      promises.push(db.ticker.upsert({
        where: {
          symbol: popularTickers[i]
        },
        update: {},
        create: {
          symbol: popularTickers[i],
        }
      }))
    }
    await Promise.all(promises)
    {/*const yahooTrendingTickers: { symbol: string }[] = await fetchTrendingTickers();
    const filteredTrendingTickers = yahooTrendingTickers.filter((ticker) => {
      return !ticker.symbol.includes('-')
    })
    const promises = []

    for (let i = 0; i < filteredTrendingTickers.length; i++) {
      promises.push(db.ticker.upsert({
        where: {
          symbol: filteredTrendingTickers[i].symbol
        },
        update: {},
        create: {
          symbol: filteredTrendingTickers[i].symbol
        }
      }))
    }*/}

    console.log("sucessfully seeding ticker")

    // const yahooActiveTickers = await fetchActiveTickers();
    // for (let i = 0; i < 100; i++) {
    //   promises.push(db.ticker.upsert({
    //     where: {
    //       symbol: yahooActiveTickers[i].symbol
    //     },
    //     update: {},
    //     create: {
    //       symbol: yahooActiveTickers[i].symbol,
    //     }
    //   }))
    // }

    // fetch all tickers, scaling for later use
    // const allTickers: string[] = await fetchAllTickers();
    // const filteredAllTickers = allTickers.filter(ticker => {
    //   const match = ticker.match(/\..?/);
    //   return !match;
    // })
    // console.log("Number of all tickers is: " + filteredAllTickers.length)
    // const secondPromises = []
    // for (let i = 12000; i < 14000; i++) {
    //   secondPromises.push(db.allTicker.upsert({
    //     where: {
    //       symbol: filteredAllTickers[i]
    //     },
    //     update: {},
    //     create: {
    //       symbol: filteredAllTickers[i]
    //     }
    //   }))
    // }
    // //await Promise.all(promises);
    // await Promise.all(secondPromises);
    // console.log("succesfully seeding ticker data");

  } catch (error) {
    console.error("Error seeding tickers", error)
  } finally {
    await db.$disconnect
  }
}

seedTickers()

export default seedTickers
// run file: npx tsx scripts/seedTicker.ts
