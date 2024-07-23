"use client";

import Link from "next/link";
import { CartIcon } from "../icons";
import { useStore } from "@/lib/hooks";

function CartLink() {
  const cartItems = useStore((state) => state.cart);
  const itemCount = cartItems.reduce((accumulator, item) => {
    return accumulator + item.count;
  }, 0);

  return (
    <Link href="/cart" className="flex flex-row gap-1 items-center">
      <CartIcon width="16" height="16" />
      Cart
      {itemCount > 0 ? (
        <span className="inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
          {itemCount}
        </span>
      ) : null}
    </Link>
  );
}

export default CartLink;
