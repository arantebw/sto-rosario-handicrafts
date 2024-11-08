import { retrieveOneProduct } from "@/actions";
import { ProductInventoryDetails } from "@/components";
import { Product } from "@/types";

type ProductDetailsPageProps = {
  params: {
    productId: string;
  };
};

async function ProductDetailsPage({ params }: ProductDetailsPageProps) {
  const { productId } = params;
  const product: Product = await retrieveOneProduct(productId);
  return <ProductInventoryDetails name={product.productName} />;
}

export default ProductDetailsPage;
