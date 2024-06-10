import { LoginForm } from "@/components/auth-form";
import ButtonLink from "@/components/button-link";
import { ModeToggle } from "@/components/mode-toggle";
import WelcomeSection from "@/components/welcome-section";

function LoginPage() {
  return (
    <main className="max-w-[1440px] mx-auto flex flex-row h-screen relative">
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
      <WelcomeSection />
      <div className="w-1/2 flex flex-col justify-center">
        <div className="w-1/2 mx-auto flex flex-col justify-center gap-4">
          <LoginForm />
          <hr />
          <p>Do not have an account yet?</p>
          <ButtonLink label="Create a new account" path="/register" variant="outline" />
        </div>
      </div>
    </main>
  );
}

export default LoginPage;
