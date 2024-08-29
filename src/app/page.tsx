import { getSession } from "@auth0/nextjs-auth0";
import Link from "next/link";
import { redirect } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import WelcomeSection from "@/components/welcome-section";

async function HomePage() {
  const session = await getSession();
  if (session?.user) {
    return redirect("/account");
  }

  return (
    <main className="w-screen lg:max-w-[1440px] mx-auto flex flex-col lg:flex-row relative">
      <WelcomeSection />
      <div className="w-full lg:w-1/2 h-screen flex flex-col justify-center p-4">
        <div className="w-full md:w-1/2 mx-auto flex flex-col justify-center gap-4">
          <Button variant="default">
            <Link href="/products">{`Browse the catalog`}</Link>
          </Button>
          <Separator />
          <Button variant="secondary">
            <a href="/api/auth/login">{`Login or create a new account`}</a>
          </Button>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
