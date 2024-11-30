import Link from "next/link";

interface AccountSidebarProps {
  children: React.ReactNode;
  isUserAdmin?: boolean;
}

function AccountSidebar({
  children,
  isUserAdmin = false,
}: AccountSidebarProps) {
  return (
    <>
      <div className="w-full md:w-1/5 gap-4">
        <ul className="flex flex-col gap-4">
          <li>
            <Link href="/account">Personal Details</Link>
          </li>
          <li>Address Book</li>
          <li>Orders History</li>
          {isUserAdmin && (
            <>
              <li>
                <Link href="/account/inventory">Inventory</Link>
              </li>
              <li>
                <Link href="/account/sales">Sales</Link>
              </li>
            </>
          )}
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
