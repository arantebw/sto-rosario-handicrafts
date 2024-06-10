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
