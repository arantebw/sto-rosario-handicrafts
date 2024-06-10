import ItemsCarousel from "@/components/items-carousel";
import NavFooter from "@/components/nav-footer";
import NavHeader from "@/components/nav-header";
import TodaysDeals from "@/components/todays-deals";

function ProductsPage() {
  return (
    <main className="max-w-[1440px] mx-auto flex flex-col h-screen relative">
      <NavHeader />
      <ItemsCarousel />
      <TodaysDeals />
      <NavFooter />
    </main>
  );
}

export default ProductsPage;
