import { YahooFinanceStock } from "@/types";

export const fetchStocks = async (name:string) => {
  try {
    const headers = {
      'X-RapidAPI-Key': process.env.YAHOO_FINANCE_API_KEY || '',
      'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
    }
  
    const url = `https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary?symbol=${name}&region=US`;

    const response = await fetch(url,{headers:headers});

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  
    const result= await response.json();

    const {symbol,price,...data} = result;

    return {symbol,price,...data} as YahooFinanceStock;

  } catch (error) {
    console.error('Error fetching data', error)
  }
}


