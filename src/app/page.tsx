import { ButtonLink } from "@/components/ButtonLink";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <main className="max-w-[1440px] mx-auto flex flex-row h-screen relative">
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
      <div className="w-1/2">
        <h1>{process.env.APP_NAME}</h1>
        <h2>{process.env.APP_DESCRIPTION}</h2>
      </div>
      <div className="w-1/2">
        <ButtonLink label="Access an existing account" path="/login" />
        <ButtonLink label="Create a new account" path="/register" />
      </div>
    </main>
  );
}


