"use client";

import { useStore } from "@/lib/hooks";
import { CldImage } from "next-cloudinary";

function ShoppingCart() {
  const cartItems = useStore((state) => state.cart);

  return (
    <div className="flex flex-col gap-4">
      {cartItems.map((item) => (
        <div key={item.productId} className="flex flex-row gap-4">
          <CldImage
            src={item.cloudinaryPublicId ?? ""} // TODO: Add an image placeholder.
            alt="A product's brief description."
            width="500"
            height="500"
            className="rounded w-1/6"
          />
          <div className="flex flex-col gap-4">
            <h4>{item.productName}</h4>
            <p>{`PHP ${item.price.decimal}.${item.price.fraction}`}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShoppingCart;
