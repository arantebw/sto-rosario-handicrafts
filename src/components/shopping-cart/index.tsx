"use client";

import { useStore } from "@/lib/hooks";

function ShoppingCart() {
  const cartItems = useStore((state) => state.cart);

  return (
    <div>
      {cartItems.map((item) => (
        <div key={item.productId}>
          <h4>{item.productName}</h4>
        </div>
      ))}
    </div>
  );
}

export default ShoppingCart;
