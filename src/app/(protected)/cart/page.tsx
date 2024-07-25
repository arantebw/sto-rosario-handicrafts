import { ArrowRightIcon } from "@/components/icons";
import NavFooter from "@/components/nav-footer";
import NavHeader from "@/components/nav-header";
import ShoppingCart from "@/components/shopping-cart";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

function CartPage() {
  return (
    <main className="max-w-[1440px] mx-auto flex flex-col h-screen relative">
      <NavHeader />
      <main className="flex flex-col gap-4 p-4">
        <div>
          <h2 className="text-2xl">Shopping Cart</h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-2/3 md:px-4 md:pt-4 rounded-md md:border">
            <ShoppingCart />
          </div>
          <div className="w-full lg:w-1/3 md:p-4 rounded-md md:border">
            <div className="flex flex-row justify-between items-center">
              <div>
                <h2 className="text-2xl">Cart Summary</h2>
                <small>PHP 1,000,000.00</small>
              </div>
              <Button type="button" className="flex flex-row gap-2 uppercase">
                <ArrowRightIcon width="16" height="16" fill="#fff" />
                Checkout
              </Button>
            </div>
            <Separator className="my-4" />
            <div className="flex flex-col gap-4">
              <p className="flex flex-row justify-between">
                <span>Subtotal</span>
                <span>PHP 12,345.67</span>
              </p>
              <p className="flex flex-row justify-between text-gray-500">
                <span>Shipping Fee</span>
                <span>PHP 1,234.56</span>
              </p>
              <p className="flex flex-row justify-between text-gray-500">
                <span>Discount</span>
                <span>PHP 123.45</span>
              </p>
              <p className="flex flex-row justify-between text-gray-500">
                <span>Estimated Tax</span>
                <span>PHP 123.45</span>
              </p>
              <p className="flex flex-row justify-between font-bold">
                <span>Total</span>
                <span>PHP 1,000,000.00</span>
              </p>
            </div>
          </div>
        </div>
      </main>
      <NavFooter />
    </main>
  );
}

export default CartPage;
