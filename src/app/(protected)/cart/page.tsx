import NavFooter from "@/components/nav-footer";
import NavHeader from "@/components/nav-header";
import ShoppingCart from "@/components/shopping-cart";

function CartPage() {
  return (
    <main className="max-w-[1440px] mx-auto flex flex-col h-screen relative">
      <NavHeader />
      <main className="p-4 flex flex-col gap-4">
        <div>
          <h2 className="text-2xl">Shopping Cart</h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-2/3 p-4 rounded-md border">
            <ShoppingCart />
          </div>
          <div className="w-full lg:w-1/3 p-4 rounded-md border">
            <h3 className="text-xl">Cart Summary</h3>
          </div>
        </div>
      </main>
      <NavFooter />
    </main>
  );
}

export default CartPage;
