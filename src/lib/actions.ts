"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function userLogin(formData: FormData) {
  try {
    console.log(formData.get("email"));
    console.log(formData.get("password"));
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/account");
  redirect("/account");
}

export async function userRegister(formData: FormData) {
  try {
    console.log(formData.get("email"));
    console.log(formData.get("password"));
    console.log(formData.get("confirm_password"));
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/login");
  redirect("/login");
}
