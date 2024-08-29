"use server";

export async function retrieveAllProducts(category?: string) {
  const uri = category
    ? `${process.env.SRV_HOST}/api/products/category?name=${category}`
    : `${process.env.SRV_HOST}/api/products`;
  const res = await fetch(uri, { method: "GET", cache: "no-store" });
  if (!res.ok) {
    throw new Error("Error fetching all products.");
  }
  return res.json();
}

export async function retrieveOneProduct(productId: string) {
  const uri = `${process.env.SRV_HOST}/api/products/${productId}`;
  const res = await fetch(uri, { method: "GET", cache: "no-store" });
  if (!res.ok) {
    throw new Error("Error fetching a product.");
  }
  return res.json();
}
