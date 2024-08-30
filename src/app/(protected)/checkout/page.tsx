import { withPageAuthRequired } from "@auth0/nextjs-auth0";

import { CartSummary, CheckoutProcess } from "@/components";
import NavFooter from "@/components/nav-footer";
import NavHeader from "@/components/nav-header";
import { PageType } from "@/types";

export default withPageAuthRequired(
  async function CartPage() {
    return (
      <main className="max-w-[1440px] mx-auto flex flex-col h-screen relative">
        <NavHeader />
        <main className="flex flex-col gap-4 max-[1440px]:p-4 py-4">
          <div>
            <h2 className="text-2xl">{`Checkout`}</h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-4">
            <CheckoutProcess />
            <CartSummary pageType={PageType.CHECKOUT} />
          </div>
        </main>
        <NavFooter />
      </main>
    );
  },
  { returnTo: "/cart" },
);
