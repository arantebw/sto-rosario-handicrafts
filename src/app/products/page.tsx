import ItemsCarousel from "@/components/items-carousel/page";
import NavFooter from "@/components/nav-footer/page";
import NavHeader from "@/components/nav-header/page";
import TodaysDeals from "@/components/todays-deals/page";

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
