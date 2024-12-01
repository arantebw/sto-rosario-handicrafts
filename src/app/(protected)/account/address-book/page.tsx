import { retrieveOneUserByEmail } from "@/actions";
import AddressListing from "@/components/address-listing";
import { User } from "@/types";
import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";

export default withPageAuthRequired(
  async function AddressBook() {
    const session = await getSession();
    if (!session) {
      redirect("/api/auth/login");
    }
    let user: User = await retrieveOneUserByEmail(session?.user.email);

    if (user?.role === "regular") {
      redirect("/account");
    }

    return <AddressListing />;
  },
  { returnTo: "/account/address-book" },
);
