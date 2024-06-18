import { Separator } from "../ui/separator";

async function NavFooter() {
  return (
    <>
      <Separator />
      <footer className="p-4 text-center">
        <p className="text-sm text-gray-400">
          &copy; 2024 by {process.env.APP_NAME}. All Rights Reserved.
        </p>
      </footer>
    </>
  );
}

export default NavFooter;
