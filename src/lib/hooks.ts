import { Account, Product } from "@/types";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type CartItem = {
  product: Product;
  count: number;
};

type State = {
  account: Account;
  cart: CartItem[];
};

type Actions = {
  addItemToCart: (product: Product) => void;
  deleteItemFromCart: (productId: string) => void;
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
      addItemToCart: (product: Product) =>
        set(() => ({ cart: [...get().cart, { product, count: 1 }] })),
      deleteItemFromCart: (productId: string) =>
        set({
          cart: [
            ...get().cart.filter((item) => item.product.productId != productId),
          ],
        }),
      clearCart: () => set(() => ({ cart: [] })),
    }),
    { name: "user-data", storage: createJSONStorage(() => localStorage) },
  ),
);
