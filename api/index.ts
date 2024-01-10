export const fetchStocks = async (symbol:string) => {
  try {
    const headers = {
      'X-RapidAPI-Key': process.env.YAHOO_FINANCE_API_KEY || '',
      'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
    }
  
    const url = `https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary?symbol=${symbol}&region=US`;

    const response = await fetch(url,{headers:headers});

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  
    const result= await response.json();

     {/*const {symbol,price,...data} = result;*/}

    return result;

  } catch (error) {
    console.error('Error fetching data', error)
  }
}

export const fetchRealTimePrice = async(symbol:string) => {

  try {
    const url = `https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes?region=US&symbols=${symbol}`;
    
    const headers = {
      'X-RapidAPI-Key': '8f54d4c5c3msh2a085748e236832p1f8830jsndd3103bf567c',
      'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
    }

    const response = await fetch(url, {headers:headers});

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("errorrr",error);
  }
}
