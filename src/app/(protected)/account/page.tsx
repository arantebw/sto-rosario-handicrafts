import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { PersonalDetails } from "@/components";

export default withPageAuthRequired(
  async function AccountPage() {
    return <PersonalDetails />;
  },
  { returnTo: "/account" },
);
