import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>{process.env.APP_NAME}</h1>
      <h2>{process.env.APP_DESCRIPTION}</h2>
    </main>
  );
}
