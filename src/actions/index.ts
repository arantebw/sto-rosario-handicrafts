"use server";

import { User } from "@/types";

//
// Products
//

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

//
// Users
//

export async function createUser(newUser: User) {
  const uri = `${process.env.SRV_HOST}/api/users`;
  try {
    const res = await fetch(uri, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    return res.json();
  } catch (err) {
    console.error(err);
  }
}

export async function retrieveOneUserByEmail(email: string) {
  const uri = `${process.env.SRV_HOST}/api/users/email?q=${email}`;
  const res = await fetch(uri, { method: "GET" });
  if (!res.ok) {
    throw new Error("Error fetch a user by email.");
  }
  return res.json();
}
