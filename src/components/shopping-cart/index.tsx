"use client";

import { useStore } from "@/lib/hooks";
import { CldImage } from "next-cloudinary";
import { Button } from "../ui/button";
import { TrashIcon } from "../icons";
import ItemQuantity from "../item-quantity";

function ShoppingCart() {
  const cartItems = useStore((state) => state.cart);
  const deleteItemFromCart = useStore((state) => state.deleteItemFromCart);
  const updateCartSummary = useStore((state) => state.updateCartSummary);

  const handleRemoveBtnClick = (productId: string) => {
    deleteItemFromCart(productId);
    updateCartSummary();
  };

  return (
    <div className="w-full lg:w-2/3 md:px-4 md:pt-4 rounded-md md:border">
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
              <ItemQuantity
                cartItem={{ productId: product.productId, count }}
              />
              <Button
                variant="secondary"
                size="default"
                onClick={() => handleRemoveBtnClick(product.productId)}
                className="flex flex-row gap-2 uppercase"
              >
                <TrashIcon width="16" height="16" fill="#000" />
                <span className="hidden md:block">Remove</span>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShoppingCart;
