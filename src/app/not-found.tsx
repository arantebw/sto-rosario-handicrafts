import NavFooter from "@/components/nav-footer";
import NavHeader from "@/components/nav-header";

function ProductsPage() {
  return (
    <main className="max-w-[1440px] mx-auto flex flex-col h-screen relative">
      <NavHeader />
      <div className="w-full h-full flex flex-col justify-center items-center">
        <h3>Page Not Found</h3>
      </div>
      <NavFooter />
    </main>
  );
}

export default ProductsPage;
