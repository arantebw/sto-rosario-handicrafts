"use client";

import { CldImage } from "next-cloudinary";
import { Button } from "@/components/ui/button";
import { Product } from "@/types";
import { useStore } from "@/lib/hooks";

interface ProductDetailsProps {
  currentProduct: Product;
}

function ProductDetails({ currentProduct }: ProductDetailsProps) {
  const handleAddToCart = useStore((state) => state.updateCart);

  const cart = useStore((state) => state.cart);
  console.log(cart);

  return (
    <div className="flex flex-row justify-center py-4 w-3/5 gap-4">
      <CldImage
        src={currentProduct.cloudinaryPublicId ?? ""} // TODO: Add an image placeholder.
        alt="A product's brief description."
        width="500"
        height="500"
        className="rounded w-1/2"
      />
      <div className="flex flex-col gap-4 w-1/2">
        <h2 className="text-2xl">{currentProduct.productName}</h2>
        <p>
          PHP {currentProduct.price.decimal}.{currentProduct.price.fraction}
        </p>
        <div>
          <Button onClick={() => handleAddToCart(currentProduct)}>
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
