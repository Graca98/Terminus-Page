'use client'
//todo Po kliknutí na link se zavře modal
//todo Výška nezahrnuje navbar

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
          <section className="sidebar-title items-center p-4">
            <svg fill="none" height="42" viewBox="0 0 32 32" width="42" xmlns="http://www.w3.org/2000/svg">
              <rect height="100%" rx="16" width="100%"></rect>
              <path clipRule="evenodd" d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
            <div className="flex flex-col">
              <span>Acme</span>
              <span className="text-xs font-normal text-content2">Team Plan</span>
            </div>
          </section>
          <section className="sidebar-content h-fit min-h-[20rem] overflow-visible">
            <nav className="menu rounded-md">
              <section className="menu-section px-4">
                <span className="menu-title">Main menu</span>
                <ul className="menu-items">
                  <li className="menu-item">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>General</span>
                  </li>

                  <li className="menu-item menu-active">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span>Teams</span>
                  </li>
                  <li className="menu-item">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                    <span>Billing</span>
                  </li>
                  <li>
                    <input type="checkbox" id="menu-1" className="menu-toggle" />
                    <label className="menu-item justify-between" htmlFor="menu-1">
                      <div className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span>Account</span>
                      </div>

                      <span className="menu-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </label>

                    <div className="menu-item-collapse">
                      <div className="min-h-0">
                        {/* <label className="menu-item-disabled menu-item ml-6">Accounts</label> */}
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

