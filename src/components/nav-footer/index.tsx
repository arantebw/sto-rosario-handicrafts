async function NavFooter() {
  return (
    <footer className="p-4 text-center border-solid border-t-2 border-gray-100 mt-4">
      <p className="text-sm text-gray-400">&copy; 2024 by {process.env.APP_NAME}. All Rights Reserved.</p>
    </footer>
  );
}

export default NavFooter;
