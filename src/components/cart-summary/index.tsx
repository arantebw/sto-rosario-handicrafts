"use client";

import { ArrowRightIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useStore } from "@/lib/hooks";
import { formatToCurrency } from "@/lib/utils";
import { ButtonType, PageType } from "@/types";
import Link from "next/link";

interface CartSummaryProps {
  pageType: PageType;
}

export default function CartSummary({ pageType }: CartSummaryProps) {
  const cartSummary = useStore((state) => state.cartSummary);

  return (
    <div className="w-full lg:w-1/3 h-fit md:p-4 rounded-md md:border">
      <div className="flex flex-row justify-between items-center">
        <div>
          <h2 className="text-2xl">{`Cart Summary`}</h2>
          <small className="text-gray-500 lg:hidden">{`${formatToCurrency(cartSummary.total)}`}</small>
        </div>
        {ProceedButton(pageType, ButtonType.MOBILE)}
      </div>
      <Separator className="my-4" />
      <div className="flex flex-col gap-4 lg:mb-4">
        <p className="flex flex-row justify-between">
          <span>Subtotal</span>
          <span>{`${formatToCurrency(cartSummary.subTotal)}`}</span>
        </p>
        <p className="flex flex-row justify-between text-gray-500">
          <span>Shipping Fee</span>
          <span>{`${formatToCurrency(cartSummary.shippingFee)}`}</span>
        </p>
        <p className="flex flex-row justify-between text-gray-500">
          <span>Discount</span>
          <span>{`${formatToCurrency(cartSummary.discount)}`}</span>
        </p>
        <p className="flex flex-row justify-between text-gray-500">
          <span>Estimated Tax (VAT 12%)</span>
          <span>{`${formatToCurrency(cartSummary.estimatedTax)}`}</span>
        </p>
        <Separator />
        <p className="flex flex-row justify-between font-bold">
          <span>Total</span>
          <span>{`${formatToCurrency(cartSummary.total)}`}</span>
        </p>
        {ProceedButton(pageType, ButtonType.DESKTOP)}
      </div>
    </div>
  );
}

const ProceedButton = (pageType: PageType, buttonType: ButtonType) => {
  const classNames =
    buttonType == ButtonType.DESKTOP ? "hidden lg:block w-full" : "lg:hidden";
  const buttonText =
    buttonType == ButtonType.MOBILE ? "Checkout" : "Proceed to checkout";

  return (
    <Button
      type="button"
      className={`${classNames} uppercase`}
      variant={pageType == PageType.SHOPPING_CART ? "default" : "destructive"}
    >
      <Link
        href={
          pageType == PageType.SHOPPING_CART ? "/checkout" : "/completed-order"
        }
        className="flex flex-row gap-2 justify-center"
      >
        <ArrowRightIcon width="16" height="16" fill="#fff" />
        {pageType == PageType.SHOPPING_CART ? buttonText : "Complete order"}
      </Link>
    </Button>
  );
};
