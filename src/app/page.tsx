import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-[1440px] mx-auto flex flex-row h-screen bg-background-rgb">
      <div>
        <h1>{process.env.APP_NAME}</h1>
        <h2>{process.env.APP_DESCRIPTION}</h2>
      </div>
      <div>
        <button>Login</button>
        <button>Register</button>
      </div>
    </main>
  );
}
