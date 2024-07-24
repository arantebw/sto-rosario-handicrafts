"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useStore } from "@/lib/hooks";

interface ItemQuantityProps {
  cartItem: {
    productId: string;
    count: number;
  };
}

function ItemQuantity({ cartItem }: ItemQuantityProps) {
  const [quantity, setQuantity] = useState(cartItem.count);
  const incrementItemCount = useStore((state) => state.incrementItemCount);
  const decrementItemCount = useStore((state) => state.decrementItemCount);

  const handleDecrement = () => {
    setQuantity(quantity - 1);
    decrementItemCount(cartItem.productId);
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
    incrementItemCount(cartItem.productId);
  };

  return (
    <div className="flex flex-row items-center">
      <Button
        type="button"
        variant="outline"
        size="icon"
        onClick={handleDecrement}
        disabled={quantity == 1}
      >
        {`-`}
      </Button>
      <Input
        type="text"
        value={quantity}
        min={1}
        max={99}
        onChange={(e) => setQuantity(Number(e.target.value))}
        className="w-12 text-center"
      />
      <Button
        type="button"
        variant="outline"
        size="icon"
        onClick={handleIncrement}
        disabled={quantity == 99}
      >
        {`+`}
      </Button>
    </div>
  );
}

export default ItemQuantity;
