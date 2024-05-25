"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, name, className, ...props }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`${isActive ? "menu-active lg:bg-termi-hover lg:rounded-md" : ""} ${className}`}
      aria-current={isActive ? "page" : undefined}
      {...props}
    >
      {name}
    </Link>
  );
};

export default NavLink;
