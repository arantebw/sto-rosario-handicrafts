import NavFooter from "@/components/nav-footer";
import NavHeader from "@/components/nav-header";

async function AccountPage() {
  return (
    <main className="max-w-[1440px] mx-auto flex flex-col h-screen relative">
      <NavHeader />
      <NavFooter />
    </main>
  );
}

export default AccountPage;
