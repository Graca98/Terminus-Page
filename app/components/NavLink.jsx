"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, name, className, ...props }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`${isActive ? "text-red-500" : "text-white"} ${className}`}
      {...props}
    >
      {name}
    </Link>
  );
};

export default NavLink;
