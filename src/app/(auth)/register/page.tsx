import ButtonLink from "@/components/button-link";
import { ModeToggle } from "@/components/mode-toggle";

function RegisterPage() {
  return (
    <main className="max-w-[1440px] mx-auto flex flex-row h-screen relative">
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
      <div className="w-1/2 flex flex-col justify-center">
        <div className="w-3/4 mx-auto">
          <h1 className="text-5xl text-center mb-4">{process.env.APP_NAME}</h1>
          <h2 className="text-center">{process.env.APP_DESCRIPTION}</h2>
        </div>
      </div>
      <div className="w-1/2 flex flex-col justify-center">
        <div className="w-1/2 mx-auto flex flex-col justify-center gap-4">
          <p>Already have an account?</p>
          <ButtonLink label="Login" path="/login" />
        </div>
      </div>
    </main>
  );
}

export default RegisterPage;
