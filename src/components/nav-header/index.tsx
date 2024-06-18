import Link from "next/link";
import { Separator } from "../ui/separator";
import { CartIcon, HeartIcon, UserIcon } from "../icons";
import { SearchBox } from "../search-box";

async function NavHeader() {
  return (
    <>
      <header className="p-4 grid grid-cols-3 content-evenly gap-4">
        <div className="flex flex-row items-center">
          <h1 className="font-bold">{process.env.APP_NAME}</h1>
        </div>
        <div>
          <SearchBox />
        </div>
        <nav className="flex flex-row gap-8 justify-end">
          <Link href="/account" className="flex flex-row gap-1 items-center">
            <UserIcon width="16" height="16" />
            Account
          </Link>
          <Link href="/wishlist" className="flex flex-row gap-1 items-center">
            <HeartIcon width="16" height="16" />
            Wishlist
          </Link>
          <Link href="/cart" className="flex flex-row gap-1 items-center">
            <CartIcon width="16" height="16" />
            Cart
          </Link>
        </nav>
      </header>
      <Separator />
      <ul className="flex flex-row gap-4 justify-center">
        <li className="p-4">
          <Link href="/products">Today&apos;s Deals</Link>
        </li>
        <li className="p-4">
          <Link href="#">Category 1</Link>
        </li>
        <li className="p-4">
          <Link href="#">Category 2</Link>
        </li>
        <li className="p-4">
          <Link href="#">Category 3</Link>
        </li>
      </ul>
      <Separator />
    </>
  );
}

export default NavHeader;
