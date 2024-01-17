export interface AlphaVantageOverviewProps {
  Symbol:string,
  Name:string,
  Description:string,
  Exchange:string,
  MarketCapitalization:string
}

export interface AlphaVantageGlobalQuoteProps{
  '01. symbol':string,
  '02. open':string,
  '03. high':string,
  '04. low':string,
  '05. price': string,
  '06. volume': string,
  '07. latest trading day': string,
  '08. previous close': string,
  '09. change': string,
  '10. change percent': string
}

export interface DataProps {
  Symbol:string,
  Name:string,
  Description:string,
  Exchange:string,
  formattedPrice:string,
  formattedMarketCap:string,
}
export interface SearchStockProps{
  ticker:string,
  setTicker:(ticker:string)=> void;
}

export interface FilterProps {
  ticker:string;
}

export interface HomeProps {
  searchParams:FilterProps;
}

export interface YahooFinanceProps {
  regularMarketTime: string,
  regularMarketPrice: string,
  
}

/* export interface YahooFinanceStock { 
  symbol:string,
  price: 
  {
    longName:string,
    exchange:string,
    marketCap:{
      fmt:string,
    },
  },
  summaryProfile: 
  {
    longBusinessSummary:string,
  },

  financialData: {
    currentPrice: {
      fmt:string,
    },
  }
}
export interface Ticker {
  ticker:YahooFinanceStock;
} */