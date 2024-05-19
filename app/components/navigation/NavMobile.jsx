'use client'

import NavIcon from "./NavIcon";
import NavCrossIcon from "./NavCrossIcon"
import Link from "next/link";
import React, { useState, useRef, useEffect } from 'react';

export default function NavModal() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);
  const focusableElementsRef = useRef([]);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  // Přesunutí fokusu na modal když se otevře a správa skrolování
  useEffect(() => {
    const body = document.body;
    if (isOpen) {
      modalRef.current.focus();
      body.style.overflow = 'hidden'; // Zabránění skrolování na hlavní stránce
    } else {
      body.style.overflow = 'visible'; // Obnovení skrolování
    }
    return () => {
      body.style.overflow = 'visible'; // Ensure scrolling is restored if the component unmounts
    };
  }, [isOpen]);

  // Přidání a odebrání posluchače pro klávesnici
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      } else if (event.key === 'Tab' && isOpen) {
        handleTabKey(event);
      }
    }

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen]);

  // Handle Tab key to trap focus within the modal
  const handleTabKey = (event) => {
    const focusableElements = modalRef.current.querySelectorAll(
      'a[href], button, textarea, input, select'
    );
    focusableElementsRef.current = Array.from(focusableElements);
    const firstElement = focusableElementsRef.current[0];
    const lastElement = focusableElementsRef.current[focusableElementsRef.current.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
      lastElement.focus();
      event.preventDefault();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      firstElement.focus();
      event.preventDefault();
    }
  };

  return (
    <>
      <button onClick={toggleModal} className="btn bg-termi-hover w-14 h-10 p-2" aria-expanded={isOpen} aria-controls="custom-modal-content">
        {isOpen ? <NavCrossIcon /> : <NavIcon />}
      </button>
      <div
        className={`custom-modal ${isOpen ? 'active' : ''}`}
        tabIndex="-1"
        ref={modalRef}
        style={{ outline: 'none' }}
        role="dialog"
        aria-modal="true"
        id="custom-modal-content"
      >

        <aside className="sidebar justify-start max-h-full max-w-full w-full h-full modal-contentt">
          <section className="sidebar-content h-fit min-h-[20rem] overflow-visible">
            <nav className="menu rounded-md">
              <section className="menu-section px-4">
                {/* <span className="menu-title">Main menu</span> */}
                <ul className="menu-items">

                  {/* Hlavní stránka */}
                  <li>
                    <input type="checkbox" id="menu-main" className="menu-toggle" />
                    <label className="menu-item justify-between" htmlFor="menu-main">
                      <div className="flex gap-2">
                        <span className="">Hlavní Stránka</span>
                      </div>

                      <span className="menu-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </label>

                    <div className="menu-item-collapse">
                      <div className="min-h-0">
                        <Link href="/" onClick={toggleModal} className={`menu-item ml-6`}>
                          Informace
                        </Link>
                        <Link href="/main/pravidla" onClick={toggleModal} className={`menu-item ml-6`}>
                          Pravidla
                        </Link>
                        <Link href="/main/download" onClick={toggleModal} className={`menu-item ml-6`}>
                          Ke stažení
                        </Link>
                        <Link href="/main/kontakty" onClick={toggleModal} className={`menu-item ml-6`}>
                          Kontakty
                        </Link>
                      </div>
                    </div>
                  </li>
                  {/* Servery */}
                  <li>
                    <input type="checkbox" id="menu-servers" className="menu-toggle" />
                    <label className="menu-item justify-between" htmlFor="menu-servers">
                      <div className="flex gap-2">
                        <span className="">Servery</span>
                      </div>

                      <span className="menu-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </label>

                    <div className="menu-item-collapse">
                      <div className="min-h-0">
                        <Link href="/servers/jak-se-pripojit" onClick={toggleModal} className={`menu-item ml-6`}>Jak se připojit</Link>
                        <Link href="#" onClick={toggleModal} className={`menu-item ml-6`}>Skyblock</Link>
                        <Link href="#" onClick={toggleModal} className={`menu-item ml-6`}>Survival</Link>
                      </div>
                    </div>
                  </li>
                  {/* Výhody */}
                  <li>
                    <input type="checkbox" id="menu-vip" className="menu-toggle" />
                    <label className="menu-item justify-between" htmlFor="menu-vip">
                      <div className="flex gap-2">
                        <span className="">Výhody</span>
                      </div>

                      <span className="menu-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </label>

                    <div className="menu-item-collapse">
                      <div className="min-h-0">
                        <Link href="/vip/skyblock" onClick={toggleModal} className={`menu-item ml-6`}>Skyblock</Link>
                        <Link href="#" onClick={toggleModal} className={`menu-item ml-6`}>Survival</Link>
                      </div>
                    </div>
                  </li>
                  <li className="menu-item">
                    <span>
                      <Link href="/admin-team" onClick={toggleModal} className="">Admin Team</Link>
                    </span>
                  </li>

                  <li className="menu-item menu-active">
                    <Link href="https://bans.tcraft.eu/" target='_blank' onClick={toggleModal} className="">Bany</Link>
                  </li>
                  <li className="menu-item">
                    <Link href="https://tcrafteu.craftingstore.net/" target='_blank' onClick={toggleModal} className="">Store</Link>
                  </li>

                </ul>
              </section>
            </nav>
          </section>
        </aside>
      </div>
    </>
  );
}



{/* <div className="flex flex-col gap-6">
  <div id="main-links" className="text-white">
    <h2 className="text-xl">Hlavní stránka</h2>
    <Link href="/" onClick={toggleModal} className={`dropdown-item text-sm a`}>
      Informace
    </Link>
    <Link href="/main/pravidla" className={`dropdown-item text-sm`}>
      Pravidla
    </Link>
    <Link href="/main/download" className={`dropdown-item text-sm`}>
      Ke stažení
    </Link>
    <Link href="/main/kontakty" className={`dropdown-item text-sm`}>
      Kontakty
    </Link>
  </div>
  <div id="main-links" className="text-white">
    <h2 className="text-xl">VIP</h2>
    <Link href="/" className={`dropdown-item text-sm`}>
      Výhody
    </Link>
    <Link href="/" className={`dropdown-item text-sm`}>
      Skyblock
    </Link>
    <Link href="/main/download" className={`dropdown-item text-sm`}>
      Survival
    </Link>
  </div>
</div> */}
{/* <label className="btn bg-termi-hover p-2" htmlFor="modal-2">
        <NavIcon />
      </label> */}
{/* <input className="modal-state" id="modal-2" type="checkbox" />
      <div className="modal nav-modal p-0">
        <label className="modal-overlay" htmlFor="modal-2"></label>
        <div className="modal-content flex flex-col gap-5 max-h-full max-w-full w-full nav-h h-full rounded-none">
          <label
            htmlFor="modal-2"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </label>
          <div id="main-links" className="text-white">
            <h2 className="text-xl">Hlavní stránka</h2>
            <Link href="/" className={`dropdown-item text-sm a`}>
              Informace
            </Link>
            <Link href="/main/pravidla" className={`dropdown-item text-sm`}>
              Pravidla
            </Link>
            <Link href="/main/download" className={`dropdown-item text-sm`}>
              Ke stažení
            </Link>
            <Link href="/main/kontakty" className={`dropdown-item text-sm`}>
              Kontakty
            </Link>
          </div>
          <div id="main-links" className="text-white">
            <h2 className="text-xl">VIP</h2>
            <Link href="/" className={`dropdown-item text-sm`}>
              Výhody
            </Link>
            <Link href="/" className={`dropdown-item text-sm`}>
              Skyblock
            </Link>
            <Link href="/main/download" className={`dropdown-item text-sm`}>
              Survival
            </Link>
          </div>
        </div>
      </div> */}

