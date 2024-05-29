import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-[1440px] mx-auto flex flex-row h-screen">
      <div className="w-1/2">
        <h1>{process.env.APP_NAME}</h1>
        <h2>{process.env.APP_DESCRIPTION}</h2>
      </div>
      <div className="w-1/2">
        <Button>Login</Button>
        <Button>Register</Button>
      </div>
    </main>
  );
}


