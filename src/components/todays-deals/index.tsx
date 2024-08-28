import ProductCard from "../product-card";
import { Product } from "@/types";

interface TodaysDealsProps {
  products: Product[];
  category?: string;
}

async function TodaysDeals({ products, category }: TodaysDealsProps) {
  return (
    <main className="py-4">
      <h2 className="mb-4 text-2xl">{category ?? `Today's Deals`}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((bayong: Product) => (
          <ProductCard
            key={bayong?.productId}
            productId={bayong?.productId}
            cloudinaryPublicId={bayong?.cloudinaryPublicId}
            name={bayong?.productName}
            price={bayong?.price}
          />
        ))}
      </div>
    </main>
  );
}

export default TodaysDeals;
