export interface AlphavantageData {
  Symbol:string,
  Name:string,
  Description:string,
  Exchange:string,
  Country:string
}

export const getAlphaVantageData = async (symbol:string): Promise<AlphavantageData> => {
  try {
    const apiKey = 'RY5I9BM8UZ5NCKUO'; 
    const url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${apiKey}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const jsonData = await response.json()

    const {...data} = jsonData

    return {...data} as AlphavantageData;

  } catch (error) {
    console.error('Error fetching data', error)
    throw error
  }
}