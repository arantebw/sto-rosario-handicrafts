"use client";

import AddressForm from "../address-form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

interface CheckoutProcessProps {
  provincesList: {
    code: string;
    name: string;
  }[];
}

export default function CheckoutProcess({
  provincesList,
}: CheckoutProcessProps) {
  return (
    <div className="w-full lg:w-2/3 md:px-4 md:pt-4 rounded-md md:border">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg">
            <div className="flex flex-row gap-4">
              <span className="border rounded-full w-8 h-8 leading-8 text-sm">{`1`}</span>
              {`Shipping Address`}
            </div>
          </AccordionTrigger>
          <AccordionContent>
            {/* TODO: List the user's shipping addresses. */}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg">
            <div className="flex flex-row gap-4">
              <span className="border rounded-full w-8 h-8 leading-8 text-sm">{`2`}</span>
              {`Billing Address`}
            </div>
          </AccordionTrigger>
          <AccordionContent>
            {/* TODO: List the user's shipping addresses. */}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg">
            <div className="flex flex-row gap-4">
              <span className="border rounded-full w-8 h-8 leading-8 text-sm">{`3`}</span>
              {`Payment`}
            </div>
          </AccordionTrigger>
          <AccordionContent>
            {/* TODO: List the available payment options. */}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
