"use client";

import { useStore } from "@/lib/hooks";
import { CldImage } from "next-cloudinary";
import { Button } from "../ui/button";

function ShoppingCart() {
  const cartItems = useStore((state) => state.cart);
  const handleRemove = useStore((state) => state.deleteItemFromCart);

  return (
    <div className="flex flex-col gap-4">
      {cartItems.map(({ product, count }) => (
        <div
          key={product.productId}
          className="flex flex-col gap-4 border-b last:border-b-0"
        >
          <div className="flex flex-row gap-4">
            <CldImage
              src={product.cloudinaryPublicId ?? ""} // TODO: Add an image placeholder.
              alt="A product's brief description."
              width="500"
              height="500"
              className="rounded w-1/3 md:w-1/4"
            />
            <div className="flex flex-col gap-4">
              <h3 className="text-xl">{product.productName}</h3>
              <p>{`PHP ${product.price.decimal}.${product.price.fraction}`}</p>
            </div>
          </div>
          <div className="flex flex-row justify-between pb-4">
            <div>{`Item: ${count}`}</div>
            <Button
              variant="destructive"
              size="sm"
              className="uppercase"
              onClick={() => handleRemove(product.productId)}
            >
              Remove
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShoppingCart;
