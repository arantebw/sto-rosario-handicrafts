"use server";

export async function getProvincesList() {
  const res = await fetch("https://psgc.gitlab.io/api/provinces.json", {
    method: "GET",
  });
  if (!res.ok) {
    throw Error("Error fetching the list of provinces.");
  }
  return res.json();
}
