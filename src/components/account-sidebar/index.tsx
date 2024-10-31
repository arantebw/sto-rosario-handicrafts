import Link from "next/link";

interface AccountSidebarProps {
  children: React.ReactNode;
}

function AccountSidebar({ children }: AccountSidebarProps) {
  return (
    <>
      <div className="w-full md:w-1/5 gap-4">
        <ul className="flex flex-col gap-4">
          <li>
            <Link href="/account">Personal Details</Link>
          </li>
          <li>Address Book</li>
          <li>Orders History</li>
          <li>
            <Link href="/account/inventory">Inventory</Link>
          </li>
          <li>
            <a href="/api/auth/logout">Log Out</a>
          </li>
        </ul>
      </div>
      {children}
    </>
  );
}

export default AccountSidebar;
