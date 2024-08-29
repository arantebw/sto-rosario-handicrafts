import ButtonLink from "@/components/button-link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import WelcomeSection from "@/components/welcome-section";
import Link from "next/link";

function HomePage() {
  return (
    <main className="w-screen lg:max-w-[1440px] mx-auto flex flex-col lg:flex-row relative">
      <WelcomeSection />
      <div className="w-full lg:w-1/2 h-screen flex flex-col justify-center p-4">
        <div className="w-full md:w-1/2 mx-auto flex flex-col justify-center gap-4">
          <p>
            Let&apos;s go and{" "}
            <Link className="text-green-600 hover:underline" href="/products">
              start shopping
            </Link>
            ! Or,
          </p>
          <Separator />
          <Button variant="default">
            <a href="/api/auth/login">Log In or Create a New Account</a>
          </Button>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
