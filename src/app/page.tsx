import ButtonLink from "@/components/button-link";
import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import WelcomeSection from "@/components/welcome-section";
import Link from "next/link";

function HomePage() {
  return (
    <main className="max-w-[1440px] mx-auto flex flex-row h-screen relative">
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
      <WelcomeSection />
      <div className="w-1/2 flex flex-col justify-center">
        <div className="w-1/2 mx-auto flex flex-col justify-center gap-4">
          <p>
            Let's go and <Link className="text-green-600 hover:underline" href="/products">start shopping</Link>!
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
