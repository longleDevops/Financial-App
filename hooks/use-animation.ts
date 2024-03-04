import { create } from 'zustand'

interface IAnimation {
  animatedId: number
  setAnimtedId: (animatedId: number) => void
  firstLoop: boolean
  setFirstLoop: (firstLoop: boolean) => void,
}

export const useAnimation = create<IAnimation>((set) => ({
  animatedId: 2,
  setAnimtedId: (animatedId) => set({ animatedId }),
  firstLoop: true,
  setFirstLoop: (firstLoop: boolean) => { set({ firstLoop }) },
}))