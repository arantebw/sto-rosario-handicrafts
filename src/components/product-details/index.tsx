"use client";

import { CldImage } from "next-cloudinary";
import { Button } from "@/components/ui/button";
import { Product } from "@/types";
import { useStore } from "@/lib/hooks";

interface ProductDetailsProps {
  currentProduct: Product;
}

function ProductDetails({ currentProduct }: ProductDetailsProps) {
  const cartItems = useStore((state) => state.cart);
  const addItemToCart = useStore((state) => state.addItemToCart);

  const handleAddToCart = (product: Product) => {
    if (cartItems.some((item) => item.product.productId == product.productId)) {
      return;
    }
    addItemToCart(product);
  };

  return (
    <div className="flex flex-row justify-center gap-4 p-4 rounded border w-full lg:w-8/12">
      <CldImage
        src={currentProduct.cloudinaryPublicId ?? ""} // TODO: Add an image placeholder.
        alt="A product's brief description."
        width="500"
        height="500"
        className="rounded w-1/4 lg:w-1/2"
      />
      <div className="flex flex-col gap-4 w-3/4 lg:w-1/2">
        <h2 className="text-xl">{currentProduct.productName}</h2>
        <p>{`PHP ${currentProduct.price.decimal}.${currentProduct.price.fraction}`}</p>
        <div>
          <Button
            onClick={() => handleAddToCart(currentProduct)}
            className="uppercase"
          >
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
