import SalesDetails from "@/components/sales-details";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default withPageAuthRequired(
  async function Sales() {
    return <SalesDetails />;
  },
  { returnTo: "/account/sales" },
);
