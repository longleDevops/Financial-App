import { create } from 'zustand'

interface ITicker {
  ticker: string
  setTicker: (ticker: string) => void
}

export const useTicker = create<ITicker>((set) => ({
  ticker: 'TSLA',
  setTicker: (ticker) => set({ ticker }),
}))