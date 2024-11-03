import { create } from "zustand";

type Store = {
  profile: {};
  inc: () => void;
};

export const userProfileSlice = create<Store>()((set) => ({
  profile: {},
  inc: () => set((state) => ({ profile: state.profile })),
}));
