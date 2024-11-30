import { retrieveOneProduct, retrieveOneUserByEmail } from "@/actions";
import { ProductInventoryDetails } from "@/components";
import { Product, User } from "@/types";
import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";

type ProductDetailsPageProps = {
  params: {
    productId: string;
  };
};

async function ProductDetailsPage({ params }: ProductDetailsPageProps) {
  const session = await getSession();
  if (!session) {
    redirect("/api/auth/login");
  }
  let user: User = await retrieveOneUserByEmail(session?.user.email);

  if (user?.role === "regular") {
    redirect("/account");
  }

  const { productId } = params;
  const product: Product = await retrieveOneProduct(productId);
  return <ProductInventoryDetails name={product.productName} />;
}

export default ProductDetailsPage;
