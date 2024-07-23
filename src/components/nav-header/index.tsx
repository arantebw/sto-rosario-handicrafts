import Link from "next/link";
import { Separator } from "../ui/separator";
import { HeartIcon, UserIcon } from "../icons";
import { SearchBox } from "../search-box";
import CartLink from "../cart-link";

async function NavHeader() {
  return (
    <>
      <header className="p-4 flex flex-col lg:grid lg:grid-cols-3 lg:content-evenly gap-4">
        <div className="flex flex-row justify-center lg:justify-start items-center">
          <h1 className="text-xl lg:text-2xl font-bold">
            {process.env.APP_NAME}
          </h1>
        </div>
        <div>
          <SearchBox />
        </div>
        <nav className="flex flex-row gap-8 justify-center lg:justify-end">
          <Link href="/account" className="flex flex-row gap-1 items-center">
            <UserIcon width="16" height="16" />
            Account
          </Link>
          <Link href="/wishlist" className="flex flex-row gap-1 items-center">
            <HeartIcon width="16" height="16" />
            Wishlist
          </Link>
          <CartLink />
        </nav>
      </header>
      <Separator />
      <ul className="flex flex-row flex-wrap md:flex-nowrap md:justify-center">
        <li className="min-w-[150px] p-4 w-1/2 md:w-fit text-center">
          <Link href="/products">Today&apos;s Deals</Link>
        </li>
        <li className="min-w-[150px] p-4 w-1/2 md:w-fit text-center">
          <Link href="#">Banig</Link>
        </li>
        <li className="min-w-[150px] p-4 w-1/2 md:w-fit text-center">
          <Link href="#">Bayong</Link>
        </li>
        <li className="min-w-[150px] p-4 w-1/2 md:w-fit text-center">
          <Link href="#">Wallets</Link>
        </li>
      </ul>
      <Separator />
    </>
  );
}

export default NavHeader;
