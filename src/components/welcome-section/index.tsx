async function WelcomeSection() {
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
      <div className="w-1/2 flex flex-col justify-center" style={divStyle}>
        <div className="w-full h-full flex flex-col justify-center" style={overlayStyle}>
          <h1 className="text-5xl text-center mb-4">{process.env.APP_NAME}</h1>
          <h2 className="text-center">{process.env.APP_DESCRIPTION}</h2>
        </div>
      </div>
  )
}

export default WelcomeSection
