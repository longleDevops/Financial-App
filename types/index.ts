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

export interface SearchStockProps{
  ticker:string,
  setTicker:(ticker:string)=> void;
}
