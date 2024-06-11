"use client";

import { CldImage } from "next-cloudinary";

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
    <div className="flex flex-row mx-auto pt-4">
      <CldImage
        src={currentProduct.cloudinaryPublicId}
        alt=""
        width="500"
        height="500"
        className="rounded"
      />
      <div className="p-4 flex flex-col gap-4">
        <h2 className="text-2xl">{currentProduct.name}</h2>
        <p>
          PHP {currentProduct.price.decimal}.{currentProduct.price.fraction}
        </p>
      </div>
    </div>
  );
}

export default ProductDetails;
