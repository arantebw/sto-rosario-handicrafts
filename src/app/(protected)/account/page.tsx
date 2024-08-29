import { withPageAuthRequired } from "@auth0/nextjs-auth0";

import { PersonalDetails } from "@/components";
import NavFooter from "@/components/nav-footer";
import NavHeader from "@/components/nav-header";

export default withPageAuthRequired(
  async function AccountPage() {
    return (
      <main className="max-w-[1440px] mx-auto flex flex-col h-screen relative">
        <NavHeader />
        <main className="p-4 grid grid-cols-1 gap-4">
          <div>
            <h2 className="text-2xl">My Account</h2>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/5 gap-4">
              <ul className="flex flex-col gap-4">
                <li>Personal Details</li>
                <li>Address Book</li>
                <li>My Orders</li>
                <li>
                  <a href="/api/auth/logout">Log Out</a>
                </li>
              </ul>
            </div>
            <PersonalDetails />
          </div>
        </main>
        <NavFooter />
      </main>
    );
  },
  { returnTo: "/account" },
);
