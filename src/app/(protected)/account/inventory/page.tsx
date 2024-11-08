import InventoryDetails from "@/components/inventory-details";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default withPageAuthRequired(
  async function Inventory() {
    return <InventoryDetails />;
  },
  { returnTo: "/account/inventory" },
);
