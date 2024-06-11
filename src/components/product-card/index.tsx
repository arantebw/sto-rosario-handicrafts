"use client";

import { CldImage } from "next-cloudinary";

interface ProductCardProps {
  key: string;
  cloudinaryPublicId: string;
  name: string;
  price: {
    decimal: number;
    fraction: number;
  }
}

function ProductCard({ key, cloudinaryPublicId, name, price }: ProductCardProps) {
  return (
    <div
      key={key}
      className="max-w-sm rounded overflow-hidden shadow-lg"
    >
      <CldImage
        src={cloudinaryPublicId}
        width="500"
        height="500"
        crop={{
          type: "auto",
          source: true,
        }}
        alt=""
      />
      <div className="p-4">
        <h3>{name}</h3>
        <p>{`PHP ${price.decimal}.${price.fraction}`}</p>
      </div>
    </div>
  );
}

export default ProductCard;
