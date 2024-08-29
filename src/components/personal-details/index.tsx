"use client";

import { useUser } from "@auth0/nextjs-auth0/client";

export default function PersonalDetails() {
  const { user } = useUser();
  // TODO: Fetch the user details

  return (
    <div className="flex-grow p-4 rounded-md border">
      <h3 className="text-xl">Personal Details</h3>
      <hr className="my-4" />
      <h4>Name: {user?.name}</h4>
      <h4>Email: {user?.email}</h4>
    </div>
  );
}
