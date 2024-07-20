import { Account, Product } from "@/types";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type State = {
  account: Account;
  cart: Product[];
};

type Actions = {
  updateCart: (product: Product) => void;
  clearCart: () => void;
};

export const useStore = create(
  persist<State & Actions>(
    (set, get) => ({
      account: {
        email: "",
        accessToken: "",
      },
      cart: [],
      updateCart: (product: Product) =>
        set(() => ({ cart: [...get().cart, product] })),
      clearCart: () => set(() => ({ cart: [] })),
    }),
    { name: "user-data", storage: createJSONStorage(() => localStorage) },
  ),
);
