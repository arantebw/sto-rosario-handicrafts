"use server";

export async function retrieveAllProducts() {
  const res = await fetch(
    `https://ecommerce-nest-server.vercel.app/api/products`,
    { cache: "no-store" },
  );

  if (!res.ok) {
    throw new Error("Error fetching all products.");
  }

  return res.json();
}
