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
  cartSummary: {
    total: number;
    subTotal: number;
    shippingFee: number;
    discount: number;
    estimatedTax: number;
  };
};

type Actions = {
  addItemToCart: (product: Product, quantity?: number) => void;
  deleteItemFromCart: (productId: string) => void;
  clearCart: () => void;
  updateItemCount: (productId: string, quantity?: number) => void;
  incrementItemCount: (productId: string) => void;
  decrementItemCount: (productId: string) => void;
  updateCartSummary: () => void;
};

export const useStore = create(
  persist<State & Actions>(
    (set, get) => ({
      account: {
        email: "",
        accessToken: "",
      },
      cart: [],
      cartSummary: {
        total: 0.0,
        subTotal: 0.0,
        shippingFee: 0.0,
        discount: 0.0,
        estimatedTax: 0.0,
      },
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
      incrementItemCount: (productId) => {
        const item = get().cart.find(
          (item) => item.product.productId == productId,
        );
        if (item) {
          item.count += 1;
        }
        set({ cart: [...get().cart] });
      },
      decrementItemCount: (productId) => {
        const item = get().cart.find(
          (item) => item.product.productId == productId,
        );
        if (item) {
          item.count -= 1;
        }
        set({ cart: [...get().cart] });
      },
      updateCartSummary: () => {
        let shippingFee = 0,
          discount = 0,
          estimatedTax = 0,
          total = 0;
        const cart = get().cart;
        const cartSummary = get().cartSummary;
        let subTotal = cart.reduce((accumulator, item) => {
          const itemPrice = String(
            item.product.price.decimal + "." + item.product.price.fraction,
          );
          return accumulator + item.count * Number(itemPrice);
        }, 0);
        if (subTotal) {
          shippingFee = 200;
          discount = 100 * -1;
          estimatedTax = 0.12 * subTotal;
          total = subTotal + shippingFee + discount + estimatedTax;
        }
        set({
          cartSummary: {
            ...cartSummary,
            total,
            subTotal,
            shippingFee,
            discount,
            estimatedTax,
          },
        });
      },
    }),
    { name: "user-data", storage: createJSONStorage(() => localStorage) },
  ),
);
