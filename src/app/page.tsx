import ButtonLink from "@/components/button-link";
import { ModeToggle } from "@/components/mode-toggle";
import WelcomeSection from "@/components/welcome-section";

function HomePage() {
  return (
    <main className="max-w-[1440px] mx-auto flex flex-row h-screen relative">
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
      <WelcomeSection />
      <div className="w-1/2 flex flex-col justify-center">
        <div className="w-1/2 mx-auto flex flex-col justify-center gap-4">
          <ButtonLink label="Login" path="/login" />
          <ButtonLink label="Register" path="/register" />
        </div>
      </div>
    </main>
  );
}

export default HomePage;
