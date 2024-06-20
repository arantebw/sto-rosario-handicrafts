import NavFooter from "@/components/nav-footer";
import NavHeader from "@/components/nav-header";

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
            </ul>
          </div>
          <div className="flex-grow p-4 rounded-md border">
            <h3 className="text-xl">Personal Details</h3>
          </div>
        </div>
      </main>
      <NavFooter />
    </main>
  );
}

export default AccountPage;
