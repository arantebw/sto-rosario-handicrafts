async function WelcomeSection() {
  const divStyle = {
    backgroundImage: "url('/default_landing-page.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const overlayStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.1)", // Semi-transparent black overlay
    color: "white",
  };

  return (
    <div className="w-screen lg:w-1/2 h-screen flex flex-col justify-center p-4" style={divStyle}>
      <div className="flex flex-col justify-center" style={overlayStyle}>
        <h1 className="text-5xl text-center mb-4">{process.env.APP_NAME}</h1>
        <h2 className="text-center">{process.env.APP_DESCRIPTION}</h2>
      </div>
    </div>
  )
}

export default WelcomeSection
