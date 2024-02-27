import { create } from "zustand";
import axios from "axios";
import { Company } from "@prisma/client";

interface StockWatchlists {
  stockWatchlists: String[];
  fetchStockWatchlists: () => void;
}

export const useStockWatchlists = create<StockWatchlists>((set) => ({
  stockWatchlists: [],
  fetchStockWatchlists: async () => {
    const reponse = await axios.get("/api/market-watchlist");
    set({ stockWatchlists: reponse.data });
  },
}));