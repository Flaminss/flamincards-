import { create } from "zustand";

type Store = {
  catalog: {};
  browse: () => void;
};

export const useGiftcardCatalogSlice = create<Store>()((set) => ({
  catalog: {},
  browse: () => set((state) => ({ catalog: state.catalog })),
}));
