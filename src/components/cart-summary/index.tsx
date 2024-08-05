"use client";

import { ArrowRightIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useStore } from "@/lib/hooks";

function CartSummary() {
  const cartSummary = useStore((state) => state.cartSummary);

  return (
    <div className="w-full lg:w-1/3 h-fit md:p-4 rounded-md md:border">
      <div className="flex flex-row justify-between items-center">
        <div>
          <h2 className="text-2xl">Cart Summary</h2>
          <small className="text-gray-500 lg:hidden">{`PHP ${cartSummary.total}`}</small>
        </div>
        <Button
          type="button"
          className="flex flex-row gap-2 uppercase lg:hidden"
        >
          <ArrowRightIcon width="16" height="16" fill="#fff" />
          Checkout
        </Button>
      </div>
      <Separator className="my-4" />
      <div className="flex flex-col gap-4 lg:mb-4">
        <p className="flex flex-row justify-between">
          <span>Subtotal</span>
          <span>{`PHP ${cartSummary.subTotal}`}</span>
        </p>
        <p className="flex flex-row justify-between text-gray-500">
          <span>Shipping Fee</span>
          <span>{`PHP ${cartSummary.shippingFee}`}</span>
        </p>
        <p className="flex flex-row justify-between text-gray-500">
          <span>Discount</span>
          <span>{`PHP ${cartSummary.discount}`}</span>
        </p>
        <p className="flex flex-row justify-between text-gray-500">
          <span>Estimated Tax</span>
          <span>{`PHP ${cartSummary.estimatedTax}`}</span>
        </p>
        <Separator />
        <p className="flex flex-row justify-between font-bold">
          <span>Total</span>
          <span>{`PHP ${cartSummary.total}`}</span>
        </p>
      </div>
      <Button
        type="button"
        className="hidden w-full lg:flex lg:flex-row gap-2 uppercase"
      >
        <ArrowRightIcon width="16" height="16" fill="#fff" />
        Proceed to Checkout
      </Button>
    </div>
  );
}

export default CartSummary;
