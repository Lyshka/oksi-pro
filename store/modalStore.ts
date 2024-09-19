import { create } from "zustand";

type Store = {
  isOpen: boolean;
  setIsOpen: VoidFunction;
  setClose: VoidFunction;
};

export const useModalStore = create<Store>()((set) => ({
  isOpen: false,
  setIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
  setClose: () => set(() => ({ isOpen: false })),
}));
