'use client'

import Link from 'next/link';
import Image from 'next/image';
import HeaderImg from "@/app/img/header.png";
import Dropdown from '../dropdowns/Dropdown';
import DropdownVip from '../dropdowns/DropdownVip';
import { useState } from 'react';
import NavMobile from "./NavMobile"

export default function NavbarRipple({ content }) {


  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  }

  const closeDrawer = () => {
    setDrawerOpen(false);
  }

  return (
    <>
      <Link href="/">
        <Image src={HeaderImg} className='lg:w-1/2 lg:h-auto hidden lg:block p-4' alt='Terminus logo' />
      </Link>

      <div className='w-full z-50 bg-termi fixed lg:relative'>
        <div className="navbar container-navbar px-4 lg:px-1 bg-termi h-16">
          <div className="navbar-start hidden lg:flex">
            <Dropdown />
            <DropdownVip />
          </div>
          <div className="navbar-end hidden lg:flex">
            <a className="navbar-item">Home</a>
            <a className="navbar-item">About</a>
            <a className="navbar-item">Contact</a>
          </div>

          <div className="navbar-start flex lg:hidden">
            <NavMobile />
          </div>
          <div className="navbar-end lg:hidden">
            <Image src={HeaderImg} className='w-1/2 p-1' alt='Terminus logo' />
          </div>

          {/* ========== Drawer ========== */}
          {/* <div className="navbar-start flex lg:hidden">
            <input type="checkbox" id="drawer-left" className="drawer-toggle" checked={isDrawerOpen} readOnly />
            <label htmlFor="drawer-left" className="btn btn-primary bg-termi-hover my-2 px-3 py-4" onClick={toggleDrawer}>Ikona</label>

            <label className="overlay" htmlFor="drawer-left"></label>
            <div className="drawer">
              <div className="drawer-content pt-10 flex flex-col h-full bg-termi">
                <label htmlFor="drawer-left" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeDrawer}>✕</label>
                <div>
                  <div className="dropdown dropdown-open">
                    <label className="text-xl font-medium bg-termi pr-2" tabIndex="0">
                      Hlavní stránka
                    </label>
                    <div className="dropdown-menu dropdown-menu-bottom-right bg-termi shadow-none pl-6 pt-0">
                      <Link href="/" onClick={closeDrawer} className="dropdown-item text-sm">Informace</Link>
                      <Link href="/main/pravidla" onClick={closeDrawer} className="dropdown-item text-sm">Pravidla</Link>
                      <Link href="/main/download" onClick={closeDrawer} className="dropdown-item text-sm">Ke stažení</Link>
                      <Link href="/main/kontakty" onClick={closeDrawer} className="dropdown-item text-sm">Kontakty</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* ========== Drawer End ========== */}

        </div>
      </div>

      <div className='myBackground'>
        {content}
      </div>
    </>
  );
}
