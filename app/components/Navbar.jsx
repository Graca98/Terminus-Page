'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import HeaderImg from "@/app/img/header.png"
import HlavniDropdown from './dropdowns/HlavniDropdown';
import Dropdown_Main from './dropdowns/Dropdown_Main';
import Dropdown from './dropdowns/Dropdown';


const Navbar = ({ content }) => {
  const [isOpen, setOpen] = useState(false);

  // Zavře drawer při kliknutí na Link
  const handleClick = () => {
    setOpen(!isOpen);
  };

  const closeDrawer = () => {
    setOpen(false);
  };
  // -----



  return <>

    <Link href="/" className="flex px-4 py-2">
      <Image src={HeaderImg} className='w-1/2 h-auto' alt='Terminus logo'></Image>
    </Link>
    <div className="drawer">
      <input
        id="my-drawer-3"
        type="checkbox"
        className="drawer-toggle"
        checked={isOpen}
        onChange={handleClick}
      />

      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="sticky inset-x-0 top-0 w-full bg-termi text-white flex z-30">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost ms-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </label>
          </div>

          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal flex items-center gap-2">
              {/* Navbar menu content here */}
              <Dropdown_Main></Dropdown_Main>

              {/* RippleUI */}
              {/* <Dropdown /> */}

              <li><Link href="/vip/skyblock">VIP</Link></li>
              <li><Link href="/testing">Todo</Link></li>
            </ul>
          </div>
        </div>

        {/* Page content here */}
        <div className='myBackground'>
          {content}
        </div>
      </div>

      {/* ========== Drawer ========== */}
      <div className="drawer-side z-50">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay" ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-300">

          {/* Sidebar content here */}
          <ul className="menu bg-base-300 w-full rounded-box">
            <li>
              <span className="menu-dropdown-toggle menu-dropdown-show">
                <Link href="/" onClick={closeDrawer}>Hlavní stránka</Link>
              </span>

              <ul className="menu-dropdown menu-dropdown-show">
                <li><Link href="/" onClick={closeDrawer}>Informace</Link></li>
                <li><Link href="/main/pravidla" onClick={closeDrawer}>Pravidla</Link></li>
              </ul>

            </li>
            <li><a>Store</a></li>
          </ul>

          {/* Linky bez podlinků */}
          {/* <li><Link href="/" onClick={closeDrawer}>Informace</Link></li>
          <li><Link href="/main/pravidla" onClick={closeDrawer}>Pravidla</Link></li> */}
        </ul>
      </div>
    </div>
  </>;
};

export default Navbar;
