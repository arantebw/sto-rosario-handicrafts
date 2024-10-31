import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";

import { createUser, retrieveOneUserByEmail } from "@/actions";
import NavFooter from "@/components/nav-footer";
import NavHeader from "@/components/nav-header";
import { User } from "@/types";
import AccountSidebar from "@/components/account-sidebar";

export default withPageAuthRequired(
  async function AccountPage() {
    const session = await getSession();

    let user: User = await retrieveOneUserByEmail(session?.user.email);
    if (!user) {
      user = await createUser({
        email: session?.user.email,
        name: {
          firstName: session?.user.given_name,
          lastName: session?.user.family_name,
        },
      });
    }

    return (
      <main className="max-w-[1440px] mx-auto flex flex-col h-screen relative">
        <NavHeader />
        <main className="p-4 grid grid-cols-1 gap-4">
          <div>
            <h2 className="text-2xl">{`Hello, ${user.name.firstName}!`}</h2>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <AccountSidebar />
          </div>
        </main>
        <NavFooter />
      </main>
    );
  },
  { returnTo: "/account" },
);
