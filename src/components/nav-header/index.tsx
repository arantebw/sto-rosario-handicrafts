async function NavHeader() {
  return (
    <header className="p-4 border-solid border-b-2 border-gray-100">
      <h1>{process.env.APP_NAME}</h1>
    </header>
  );
}

export default NavHeader;
