import { retrieveOneProduct } from "@/actions";
import NavFooter from "@/components/nav-footer";
import NavHeader from "@/components/nav-header";
import ProductDetails from "@/components/product-details";

interface ProductDetailsPageProps {
  params: {
    productId: string;
  };
}

async function ProductDetailsPage({ params }: ProductDetailsPageProps) {
  const { productId } = params;
  const currentProduct = await retrieveOneProduct(productId);

  return (
    <main className="max-w-[1440px] mx-auto flex flex-col h-screen relative">
      <NavHeader />
      <div className="flex flex-row justify-center lg:p-4">
        <ProductDetails currentProduct={currentProduct} />
      </div>
      <NavFooter />
    </main>
  );
}

export default ProductDetailsPage;
