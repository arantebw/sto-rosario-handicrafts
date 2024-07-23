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
  addItemToCart: (product: Product, quantity?: number) => void;
  deleteItemFromCart: (productId: string) => void;
  clearCart: () => void;
  updateItemCount: (productId: string, quantity?: number) => void;
};

export const useStore = create(
  persist<State & Actions>(
    (set, get) => ({
      account: {
        email: "",
        accessToken: "",
      },
      cart: [],
      addItemToCart: (product, quantity = 1) =>
        set(() => ({ cart: [...get().cart, { product, count: quantity }] })),
      deleteItemFromCart: (productId) =>
        set({
          cart: [
            ...get().cart.filter((item) => item.product.productId != productId),
          ],
        }),
      clearCart: () => set(() => ({ cart: [] })),
      updateItemCount: (productId, quantity = 1) => {
        const item = get().cart.find(
          (item) => item.product.productId == productId,
        );
        if (item) {
          item.count += quantity;
        }
        set({ cart: [...get().cart] });
      },
    }),
    { name: "user-data", storage: createJSONStorage(() => localStorage) },
  ),
);
