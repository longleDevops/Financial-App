export interface YahooFinanceStock { 
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
}

export interface RealTimePriceProps {
  components: {
    regularMarketPrice:any
  }[]
}

export interface Price {
  price: RealTimePriceProps
}
export interface SearchStockProps{
  ticker:string,
  setTicker:(ticker:string)=> void;
}
