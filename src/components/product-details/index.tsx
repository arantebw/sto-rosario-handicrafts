"use client";

import { CldImage } from "next-cloudinary";
import { Button } from "@/components/ui/button";

interface ProductDetailsProps {
  currentProduct: {
    key: string;
    cloudinaryPublicId: string;
    name: string;
    price: {
      decimal: number;
      fraction: number;
    };
  };
}

function ProductDetails({ currentProduct }: ProductDetailsProps) {
  return (
    <div className="flex flex-row justify-center py-4 w-3/5 gap-4">
      <CldImage
        src={currentProduct.cloudinaryPublicId}
        alt=""
        width="500"
        height="500"
        className="rounded w-1/2"
      />
      <div className="flex flex-col gap-4 w-1/2">
        <h2 className="text-2xl">{currentProduct.name}</h2>
        <p>
          PHP {currentProduct.price.decimal}.{currentProduct.price.fraction}
        </p>
        <div>
          <Button>Add to cart</Button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
