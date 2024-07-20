import { Account, Product } from "@/types";
import { create } from "zustand";

type State = {
  account: Account;
  cart: Product[];
};

type Actions = {
  updateCart: (product: Product) => void;
};

export const useStore = create<State & Actions>((set) => ({
  account: {
    email: "",
    accessToken: "",
  },
  cart: [],
  updateCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
  clearCart: () => set(() => ({ cart: [] })),
}));
