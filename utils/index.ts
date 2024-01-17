
import { watchlist } from "@/constants";


export const getCompanyLogo = (symbol: string) => {
  const matchingSymbol = watchlist.find((item)=>item.symbol === symbol);
  if (matchingSymbol) {
    return matchingSymbol.imageUrl
  } else {
    return "tsla-logo.svg";
  }
}