import ButtonLink from "@/components/button-link";
import { Separator } from "@/components/ui/separator";
import WelcomeSection from "@/components/welcome-section";
import Link from "next/link";

function HomePage() {
  return (
    <main className="max-w-[1440px] mx-auto flex flex-row h-screen relative">
      <WelcomeSection />
      <div className="w-1/2 flex flex-col justify-center">
        <div className="w-1/2 mx-auto flex flex-col justify-center gap-4">
          <p>
            Let&apos;s go and <Link className="text-green-600 hover:underline" href="/products">start shopping</Link>!
          </p>
          <Separator />
          <ButtonLink label="Login" path="/login" />
          <ButtonLink label="Register" path="/register" />
        </div>
      </div>
    </main>
  );
}

export default HomePage;
