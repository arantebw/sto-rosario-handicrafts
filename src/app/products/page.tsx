import { retrieveAllProducts } from "@/actions";
import ItemsCarousel from "@/components/items-carousel";
import NavFooter from "@/components/nav-footer";
import NavHeader from "@/components/nav-header";
import TodaysDeals from "@/components/todays-deals";

interface ProductsPageProps {
  searchParams: {
    category?: string;
  };
}

async function ProductsPage({ searchParams }: ProductsPageProps) {
  const { category } = searchParams;
  const productsList = await retrieveAllProducts(category);

  return (
    <main className="max-w-[1440px] mx-auto flex flex-col h-screen relative">
      <NavHeader />
      <ItemsCarousel />
      <TodaysDeals products={productsList} />
      <NavFooter />
    </main>
  );
}

export default ProductsPage;
