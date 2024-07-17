import { RegisterForm } from "@/components/auth-form";
import ButtonLink from "@/components/button-link";
import WelcomeSection from "@/components/welcome-section";

function RegisterPage() {
  return (
    <main className="w-screen lg:max-w-[1440px] mx-auto flex flex-col lg:flex-row relative">
      <WelcomeSection />
      <div id="form-section" className="w-full lg:w-1/2 h-screen flex flex-col justify-center p-4">
        <div className="w-full md:w-1/2 mx-auto flex flex-col justify-center gap-4">
          <RegisterForm />
          <hr />
          <p>Already have an account?</p>
          <ButtonLink label="Open an existing account" path="/login#form-section" variant="outline" />
        </div>
      </div>
    </main>
  );
}

export default RegisterPage;
