import ButtonLink from "@/components/button-link";
import { ModeToggle } from "@/components/mode-toggle";

function HomePage() {
  const divStyle = {
    backgroundImage: "url('/default_landing-page.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
  };

  const overlayStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.1)", // Semi-transparent black overlay
    color: "white",
  };

  return (
    <main className="max-w-[1440px] mx-auto flex flex-row h-screen relative">
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
      <div className="w-1/2 flex flex-col justify-center" style={divStyle}>
        <div className="w-full h-full flex flex-col justify-center" style={overlayStyle}>
          <h1 className="text-5xl text-center mb-4">{process.env.APP_NAME}</h1>
          <h2 className="text-center">{process.env.APP_DESCRIPTION}</h2>
        </div>
      </div>
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
