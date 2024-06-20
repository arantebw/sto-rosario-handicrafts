import { RegisterForm } from "@/components/auth-form";
import ButtonLink from "@/components/button-link";
import WelcomeSection from "@/components/welcome-section";

function RegisterPage() {
  return (
    <main className="max-w-[1440px] mx-auto flex flex-row h-screen relative">
      <WelcomeSection />
      <div className="w-1/2 flex flex-col justify-center">
        <div className="w-1/2 mx-auto flex flex-col justify-center gap-4">
          <RegisterForm />
          <hr />
          <p>Already have an account?</p>
          <ButtonLink label="Open an existing account" path="/login" variant="outline" />
        </div>
      </div>
    </main>
  );
}

export default RegisterPage;
