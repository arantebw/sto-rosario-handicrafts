"use client";

type ProductInventoryDetailsProps = {
  name: string;
};

function ProductInventoryDetails({ name }: ProductInventoryDetailsProps) {
  return (
    <div className="flex-grow p-4 rounded-md border">
      <h3 className="text-xl">{name}</h3>
      <hr className="my-4" />
    </div>
  );
}

export default ProductInventoryDetails;
