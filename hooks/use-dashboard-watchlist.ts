import { create } from "zustand";
import { Company, Watchlist_Company } from "@prisma/client";
import axios from "axios";
import { auth } from "@clerk/nextjs";
import prismadb from "@/lib/prismadb";


interface WatchlistState {
  watchlistCompanies: Company[] | null;
  fetchWatchlistCompanies: () => void;
}

export const useWatchlistStore = create<WatchlistState>((set) => ({
  watchlistCompanies: [],
  fetchWatchlistCompanies: async () => {
    const reponse = await axios.get("/api/dashboard-watchlist");
    set({ watchlistCompanies: reponse.data });
  },
}))

