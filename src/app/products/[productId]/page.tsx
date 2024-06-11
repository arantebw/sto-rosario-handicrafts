import NavFooter from "@/components/nav-footer";
import NavHeader from "@/components/nav-header";
import ProductDetails from "@/components/product-details";
import bayongs from "@/mocks/bayongs.json";
import { CldImage } from "next-cloudinary";

interface ProductDetailsPageProps {
  params: {
    productId: string;
  };
}

function ProductDetailsPage({ params }: ProductDetailsPageProps) {
  const { productId } = params;
  const currentProduct = bayongs.filter((bayong) => bayong.key == productId)[0];
  console.log(currentProduct);

  return (
    <main className="max-w-[1440px] mx-auto flex flex-col h-screen relative">
      <NavHeader />
      <ProductDetails currentProduct={currentProduct} />
      <NavFooter />
    </main>
  );
}

export default ProductDetailsPage;
