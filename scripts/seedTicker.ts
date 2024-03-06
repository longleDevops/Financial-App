import axios from "axios"
import { db } from "@/scripts/index";


const popularTickers = ['MSFT', 'AAPL', 'NVDA', 'AMZN', 'GOOGL', 'META', 'BRK.B', 'LLY', 'TSM', 'AVGO', 'TSLA', 'V', 'NVO', 'JPM', 'UNH', 'XOM', 'JNJ', 'ASML', 'HD', 'PG', 'COST', 'AMD', 'TM', 'MRK', 'ABBV', 'ORCL', 'CRM', 'CVX', 'BAC', 'NFLX', 'ADBE', 'KO', 'ACN', 'PEP', 'FMX', 'TMO', 'SAP', 'LIN', 'MCD', 'NVS', 'DIS', 'ABT', 'SHEL', 'AZN', 'WFC', 'CSCO', 'TMUS', 'WMT', 'JD', 'PYPL', 'MA', 'DHR', 'INTU', 'QCOM', 'BABA', 'IBM', 'GE', 'AMAT', 'VZ', 'CAT', 'UBER', 'PDD', 'CMCSA', 'AXP', 'TXN', 'UNP', 'NKE', 'NOW', 'BX', 'TTE', 'AMGN', 'HSBC', 'MS', 'BHP', 'PFE', 'ISRG', 'LOW', 'PM', 'HDB', 'RY', 'COP', 'SYK', 'SPGI', 'HON', 'LRCX', 'GS', 'UPS', 'PLD', 'BLK', 'MUFG', 'UL', 'BA', 'T', 'SCHW', 'BUD', 'BKNG', 'RTX', 'ETN', 'SNY', 'ELV', 'MDT', 'TJX', 'NEE', 'PGR', 'VRTX', 'PBR', 'C', 'TD', 'SONY', 'PBR.A', 'MU', 'REGN', 'SBUX', 'RIO', 'LMT', 'DE', 'BMY', 'CB', 'ABNB', 'ADP', 'BP', 'MMC', 'BSX', 'CI', 'PANW', 'SHOP', 'MDLZ', 'KLAC', 'ADI', 'AMT', 'CVS', 'IBN', 'UBS', 'SNPS', 'GILD', 'FI', 'KKR', 'ANET', 'ZTS', 'DELL', 'EQIX', 'CDNS', 'GSK', 'SHW', 'DEO', 'CNI', 'HCA', 'WM', 'INFY', 'RELX', 'STLA', 'CP', 'CME', 'ICE', 'CNQ', 'ARM', 'MELI', 'ITW', 'WDAY', 'CRWD', 'GD', 'CSX', 'SMFG',
  'RACE', 'CMG', 'SO', 'ENB', 'EQNR', 'MAR', 'MO', 'TRI', 'TGT', 'CL', 'DUK', 'SLB', 'MCK', 'NTES', 'MCO', 'PH', 'NOC', 'MRVL', 'BDX', 'ITUB', 'EOG', 'APH', 'USB', 'BMO', 'NXPI', 'SAN', 'TDG', 'BTI', 'TT', 'BN', 'ECL', 'CTAS', 'PYPL', 'ORLY', 'APO', 'SCCO', 'MPC', 'AON',
  'RY', 'LOW', 'ISRG', 'SYK', 'SPGI', 'COP', 'HON', 'UPS', 'GS', 'LRCX', 'MUFG', 'SCHW', 'BLK', 'UL', 'T', 'BA', 'PLD', 'BUD', 'RTX', 'SNY', 'BKNG', 'NEE', 'ETN', 'ELV', 'MDT', 'PGR', 'TJX', 'VRTX', 'PBR.A', 'C', 'SONY', 'PBR', 'REGN', 'TD', 'BMY', 'LMT', 'MU', 'RIO', 'SBUX', 'DE', 'ABNB', 'BP', 'CB', 'ADP', 'MMC', 'BSX', 'CI', 'AMT', 'KLAC', 'MDLZ', 'SHOP', 'ADI', 'PANW', 'UBS', 'CVS', 'IBN', 'GILD', 'FI', 'ANET', 'GSK', 'KKR', 'SNPS', 'ZTS', 'SHW', 'EQIX', 'CDNS', 'DEO', 'HCA', 'CNI', 'WM', 'RELX', 'DELL', 'STLA', 'INFY', 'CP', 'CME', 'ICE', 'TGT', 'CNQ', 'ARM', 'MELI', 'ITW', 'SMFG', 'RACE', 'GD', 'CSX', 'EQNR', 'CMG', 'SO', 'ENB', 'MAR', 'CRWD', 'DUK', 'CL', 'TRI', 'SLB', 'MO', 'NTES', 'WDAY', 'MCO', 'MCK', 'NOC', 'MRVL', 'PH', 'SAN', 'BDX', 'EOG', 'ITUB', 'USB', 'BMO', 'BTI', 'APH', 'TDG', 'TT', 'BN', 'ECL', 'ORLY', 'NXPI', 'CTAS', 'PYPL', 'MPC', 'PSX', 'AON', 'APO', 'EMR', 'FDX', 'SCCO', 'PNC', 'EPD', 'MNST', 'BNS', 'BBVA', 'SMCI', 'PCAR', 'AMX', 'CRH', 'HMC', 'NSC', 'RSG', 'ROP', 'VALE', 'LULU', 'SPG', 'CEG', 'PXD', 'SNOW', 'MSI', 'AZO', 'OXY', 'APD', 'FCX', 'AJG', 'NU', 'ADSK', 'EL', 'FTNT', 'SPOT', 'COIN', 'DASH', 'COF', 'CARR', 'WELL', 'PLTR', 'CPRT', 'EW', 'HLT', 'MMM', 'MET', 'TEAM', 'NGG', 'ET', 'AIG', 'PSA', 'ROST', 'TRV', 'E', 'DHI', 'MFG', 'F', 'TFC', 'GWW', 'CCI', 'VLO', 'DLR', 'ING', 'MCHP', 'DXCM', 'GM', 'ODFL', 'AFL', 'IDXX', 'CM', 'SQ', 'IBKR', 'URI', 'IQV', 'STZ', 'TAK', 'SRE', 'OKE', 'O', 'HES', 'LEN.B', 'WMB', 'SU', 'NUE', 'LEN', 'AEP', 'PCG', 'MSCI', 'MFC', 'TEL', 'PAYX', 'WCN', 'KHC', 'FAST', 'A', 'BSBR', 'ARES', 'BK', 'ALC', 'GEHC', 'STM', 'KMB', 'TRP', 'AME', 'CNC', 'AMP', 'ALL', 'LI', 'JCI', 'DDOG', 'FERG', 'HUM', 'LHX', 'MPLX', 'CHTR', 'DOW', 'KDP', 'FIS', 'ABEV', 'TTD', 'SYY', 'KMI', 'LYG', 'PRU', 'D', 'MFG', 'FICO', 'HAL', 'EXR', 'SPLK', 'AEM', 'AVB', 'TROW', 'EBAY', 'EIX', 'WST', 'WY', 'ZBH', 'PKX', 'OWL', 'RJF', 'TU', 'NTR', 'WEC', 'WAB', 'CHD', 'FITB', 'IX', 'TLK', 'RBLX', 'VOD', 'NVR', 'RKT', 'TTWO', 'PINS', 'BLDR', 'BRO', 'TEF', 'MTB', 'BR', 'EQR', 'AXON', 'CQP', 'SYM', 'RCI'

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
