import { create } from 'zustand'

interface IAnimation {
  animatedId: number
  setAnimtedId: (animatedId: number) => void
}

export const useAnimation = create<IAnimation>((set) => ({
  animatedId: 0,
  setAnimtedId: (animatedId) => set({ animatedId }),
}))