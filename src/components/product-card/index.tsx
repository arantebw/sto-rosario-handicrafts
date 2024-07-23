"use client";

import { CldImage } from "next-cloudinary";
import Link from "next/link";

interface ProductCardProps {
  productId: string;
  cloudinaryPublicId: string;
  name: string;
  price: {
    decimal: number;
    fraction: number;
  };
}

function ProductCard({
  productId,
  cloudinaryPublicId,
  name,
  price,
}: ProductCardProps) {
  return (
    <div className="w-full rounded-md overflow-hidden border">
      <Link href={`/products/${productId}`}>
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
      </Link>
    </div>
  );
}

export default ProductCard;
