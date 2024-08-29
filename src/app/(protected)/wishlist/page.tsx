import { withPageAuthRequired } from "@auth0/nextjs-auth0";

import NavFooter from "@/components/nav-footer";
import NavHeader from "@/components/nav-header";

export default withPageAuthRequired(
  async function WishlistPage() {
    return (
      <main className="max-w-[1440px] mx-auto flex flex-col h-screen relative">
        <NavHeader />
        <main className="flex flex-col gap-4 p-4">
          <div>
            <h2 className="text-2xl">Wishlist</h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-4"></div>
        </main>
        <NavFooter />
      </main>
    );
  },
  { returnTo: "/cart" },
);
