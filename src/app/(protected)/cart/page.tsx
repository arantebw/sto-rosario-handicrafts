import NavFooter from "@/components/nav-footer";
import NavHeader from "@/components/nav-header";
import { CartSummary, ShoppingCart } from "@/components";

function CartPage() {
  return (
    <main className="max-w-[1440px] mx-auto flex flex-col h-screen relative">
      <NavHeader />
      <main className="flex flex-col gap-4 p-4">
        <div>
          <h2 className="text-2xl">Shopping Cart</h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <ShoppingCart />
          <CartSummary />
        </div>
      </main>
      <NavFooter />
    </main>
  );
}

export default CartPage;
