import bayongs from "@/mocks/bayongs.json";
import ProductCard from "../product-card";

async function TodaysDeals() {
  return (
    <main className="p-4">
      <h2 className="mb-4 text-2xl">Today&apos;s Deals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {bayongs.map((bayong) => (
          <ProductCard
            productId={bayong.key}
            cloudinaryPublicId={bayong.cloudinaryPublicId}
            name={bayong.name}
            price={bayong.price}
            key={bayong.key}
          />
        ))}
      </div>
    </main>
  );
}

export default TodaysDeals;
