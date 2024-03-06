import { create } from 'zustand'

interface Image {
  productSrc: string
  setProductSrc: (productSrc: string) => void
  logoSrc: string
  setLogoSrc: (logoSrc: string) => void,
}

export const useImage = create<Image>((set) => ({
  productSrc: '',
  setProductSrc: (productSrc: string) => set({ productSrc }),
  logoSrc: '',
  setLogoSrc: (logoSrc: string) => set({ logoSrc }),
}))