import Link from "next/link";
import Image from "next/image";
import NavLink from "../NavLink";
import NavMobile from "./NavMobile";

// Nav items import
import DropdownMain from "../dropdowns/DropdownMain";
import DropdownVip from "../dropdowns/DropdownVip";
import DropdownServers from "../dropdowns/DropdownServers";

export default function Navbar({ content }) {
  return (
    <>
      <div className="container-default py-0">
        <Link href="/">
          <Image
            src="/img/header.png"
            width={740}
            height={81}
            className="lg:w-1/2 lg:h-auto hidden lg:block p-4 pl-0 max-w-4xl"
            alt="Terminus logo"
            priority
          />
        </Link>
      </div>

      <div className="w-full z-50 bg-termi sticky top-0 lg:relative">
        <div className="navbar container-navbar px-4 lg:px-1 bg-termi h-14 md:h-16">
          <div className="navbar-start hidden lg:flex">
            <DropdownMain />
            <DropdownServers />
            <DropdownVip />
            <NavLink
              href="/admin-team"
              name="Admin Team"
              className="btn-nav text-nowrap py-2"
            />
            <NavLink
              href="https://bans.tcraft.eu/"
              name="Bany"
              target="_blank"
              className="btn-nav text-nowrap py-2"
            ></NavLink>
            <NavLink
              href="https://tcrafteu.craftingstore.net/"
              name="Store"
              target="_blank"
              className="btn-nav text-nowrap py-2"
            ></NavLink>
          </div>

          <div className="navbar-end hidden lg:flex">
            <a className="navbar-item">Přihlásit</a>
            <a className="navbar-item btn btn-success bg-green-600">
              Registrovat
            </a>
          </div>

          <div className="navbar-start flex lg:hidden">
            <NavMobile />
          </div>
          <div className="navbar-end lg:hidden">
            <Image
              src="/img/header.png"
              width={740}
              height={81}
              className="w-1/2 p-1 min-w-40"
              alt="Terminus logo"
              priority
            />
          </div>
        </div>
      </div>

      <div className="myBackground">{content}</div>
    </>
  );
}
