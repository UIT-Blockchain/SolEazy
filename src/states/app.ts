import { IProduct } from './../types/global.d'
import { atom } from 'recoil'
import create from 'zustand'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

interface IAppState {
  darkMode: TDarkModeStatus
  setDarkMode: (mode: TDarkModeStatus) => void
}

const useAppStore = create<IAppState>((set) => ({
  darkMode: 'auto',
  setDarkMode: (mode) => {
    set({ darkMode: mode })
  },
}))
const ProductsAtom = atom<IProduct[]>({
  key: 'PRODUCTS_STATE',
  default: [],
  effects_UNSTABLE: [persistAtom],
})

export { useAppStore, ProductsAtom }
