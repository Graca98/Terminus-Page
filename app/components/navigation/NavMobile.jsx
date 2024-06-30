"use client";

import NavIcon from "./NavIcon";
import NavCrossIcon from "./NavCrossIcon";
import NavLink from "../NavLink";
import React, { useState, useRef, useEffect } from "react";

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
      body.style.overflow = "hidden"; // Zabránění skrolování na hlavní stránce
    } else {
      body.style.overflow = "visible"; // Obnovení skrolování
    }
    return () => {
      body.style.overflow = "visible"; // Ensure scrolling is restored if the component unmounts
    };
  }, [isOpen]);

  // Přidání a odebrání posluchače pro klávesnici
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
      } else if (event.key === "Tab" && isOpen) {
        handleTabKey(event);
      }
    }

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen]);

  // Handle Tab key to trap focus within the modal
  const handleTabKey = (event) => {
    const focusableElements = modalRef.current.querySelectorAll(
      "a[href], button, textarea, input, select",
    );
    focusableElementsRef.current = Array.from(focusableElements);
    const firstElement = focusableElementsRef.current[0];
    const lastElement =
      focusableElementsRef.current[focusableElementsRef.current.length - 1];

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
      <button
        onClick={toggleModal}
        className="btn bg-termi-hover w-14 h-10 p-2"
        aria-expanded={isOpen}
        aria-controls="custom-modal-content"
      >
        {isOpen ? <NavCrossIcon /> : <NavIcon />}
      </button>
      <div
        className={`custom-modal ${isOpen ? "active" : ""}`}
        tabIndex="-1"
        ref={modalRef}
        style={{ outline: "none" }}
        role="dialog"
        aria-modal="true"
        id="custom-modal-content"
      >
        <aside className="sidebar justify-start max-h-full max-w-full w-full h-full modal-contentt">
          <section className="sidebar-content h-fit min-h-[20rem] overflow-visible py-0 mb-8">
            <nav className="menu rounded-md">
              <section className="menu-section px-4 mb-24">
                {/* <span className="menu-title">Main menu</span> */}
                <ul className="menu-items ">
                  {/* Hlavní stránka */}
                  <li>
                    <input
                      type="checkbox"
                      id="menu-main"
                      className="menu-toggle"
                    />
                    <label
                      className="menu-item justify-between"
                      htmlFor="menu-main"
                    >
                      <div className="flex gap-2">
                        <span className="text-base">Hlavní Stránka</span>
                      </div>

                      <span className="menu-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </label>

                    <div className="menu-item-collapse">
                      <div className="min-h-0">
                        <NavLink
                          href="/"
                          name="Informace"
                          onClick={toggleModal}
                          className={`menu-item ml-6 text-xl`}
                        ></NavLink>
                        <NavLink
                          href="/main/pravidla"
                          name="Pravidla"
                          onClick={toggleModal}
                          className={`menu-item ml-6 text-xl`}
                        ></NavLink>
                        <NavLink
                          href="/main/download"
                          name="Ke stažení"
                          onClick={toggleModal}
                          className={`menu-item ml-6 text-xl`}
                        ></NavLink>
                        <NavLink
                          href="/main/kontakty"
                          name="Kontakty"
                          onClick={toggleModal}
                          className={`menu-item ml-6 text-xl`}
                        ></NavLink>
                      </div>
                    </div>
                  </li>
                  {/* Servery */}
                  <li>
                    <input
                      type="checkbox"
                      id="menu-servers"
                      className="menu-toggle"
                    />
                    <label
                      className="menu-item justify-between"
                      htmlFor="menu-servers"
                    >
                      <div className="flex gap-2">
                        <span className="text-base">Servery</span>
                      </div>

                      <span className="menu-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </label>

                    <div className="menu-item-collapse">
                      <div className="min-h-0">
                        <NavLink
                          href="/servers/jak-se-pripojit"
                          name="Jak se připojit"
                          onClick={toggleModal}
                          className={`menu-item ml-6 text-xl`}
                        ></NavLink>
                        <NavLink
                          href="#"
                          name="Skyblock"
                          onClick={toggleModal}
                          className={`menu-item ml-6 text-xl`}
                        ></NavLink>
                        <NavLink
                          href="#"
                          name="Survival"
                          onClick={toggleModal}
                          className={`menu-item ml-6 text-xl menu-item-disabled`}
                        ></NavLink>
                        <NavLink
                          href="#"
                          name="Event"
                          onClick={toggleModal}
                          className={`menu-item ml-6 text-xl menu-item-disabled`}
                        ></NavLink>
                      </div>
                    </div>
                  </li>
                  {/* Výhody */}
                  <li>
                    <input
                      type="checkbox"
                      id="menu-vip"
                      className="menu-toggle"
                    />
                    <label
                      className="menu-item justify-between"
                      htmlFor="menu-vip"
                    >
                      <div className="flex gap-2">
                        <span className="text-base">Výhody</span>
                      </div>

                      <span className="menu-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </label>

                    <div className="menu-item-collapse">
                      <div className="min-h-0">
                        <NavLink
                          href="/vip/skyblock"
                          name="Skyblock"
                          onClick={toggleModal}
                          className={`menu-item ml-6 text-xl`}
                        ></NavLink>
                        <NavLink
                          href="#"
                          name="Survival"
                          onClick={toggleModal}
                          className={`menu-item ml-6 text-xl menu-item-disabled`}
                        ></NavLink>
                      </div>
                    </div>
                  </li>
                  <li>
                    <NavLink
                      href="/admin-team"
                      name="Admin Team"
                      onClick={toggleModal}
                      className="text-xl menu-item"
                    ></NavLink>
                  </li>
                  <li>
                    <NavLink
                      href="https://bans.tcraft.eu/"
                      name="Bany"
                      target="_blank"
                      onClick={toggleModal}
                      className="text-xl menu-item"
                    ></NavLink>
                  </li>
                  <li>
                    <NavLink
                      href="https://tcrafteu.craftingstore.net/"
                      name="Store"
                      target="_blank"
                      onClick={toggleModal}
                      className="text-xl menu-item"
                    ></NavLink>
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

{/* VYLEPŠENÝ KOD
  
State and Handler Renaming:

Renamed isOpen to isModalOpen for clarity.
Renamed toggleModal to be consistent across the component and NavMenuItem.
useEffect Cleanup:

Added cleanup for the event listeners to ensure they are removed when the component unmounts or isModalOpen changes.
Accessibility Improvements:

Added aria-label to the toggle button for better accessibility.
Refactoring:

Extracted the menu item logic into a separate NavMenuItem component to improve readability and reusability.




"use client";

import NavIcon from "./NavIcon";
import NavCrossIcon from "./NavCrossIcon";
import NavLink from "../NavLink";
import React, { useState, useRef, useEffect } from "react";

export default function NavModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);
  const focusableElementsRef = useRef([]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    const body = document.body;
    if (isModalOpen) {
      modalRef.current.focus();
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "visible";
    }
    return () => {
      body.style.overflow = "visible";
    };
  }, [isModalOpen]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      } else if (event.key === "Tab" && isModalOpen) {
        handleTabKey(event);
      }
    };

    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  const handleTabKey = (event) => {
    const focusableElements = modalRef.current.querySelectorAll(
      "a[href], button, textarea, input, select"
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
      <button
        onClick={toggleModal}
        className="btn bg-termi-hover w-14 h-10 p-2"
        aria-expanded={isModalOpen}
        aria-controls="custom-modal-content"
        aria-label={isModalOpen ? "Close navigation menu" : "Open navigation menu"}
      >
        {isModalOpen ? <NavCrossIcon /> : <NavIcon />}
      </button>
      <div
        className={`custom-modal ${isModalOpen ? "active" : ""}`}
        tabIndex="-1"
        ref={modalRef}
        style={{ outline: "none" }}
        role="dialog"
        aria-modal="true"
        id="custom-modal-content"
      >
        <aside className="sidebar justify-start max-h-full max-w-full w-full h-full modal-content">
          <section className="sidebar-content h-fit min-h-[20rem] overflow-visible py-0 mb-8">
            <nav className="menu rounded-md">
              <section className="menu-section px-4 mb-24">
                <ul className="menu-items">
                  <NavMenuItem
                    id="menu-main"
                    label="Hlavní Stránka"
                    links={[
                      { href: "/", name: "Informace" },
                      { href: "/main/pravidla", name: "Pravidla" },
                      { href: "/main/download", name: "Ke stažení" },
                      { href: "/main/kontakty", name: "Kontakty" },
                    ]}
                    toggleModal={toggleModal}
                  />
                  <NavMenuItem
                    id="menu-servers"
                    label="Servery"
                    links={[
                      { href: "/servers/jak-se-pripojit", name: "Jak se připojit" },
                      { href: "#", name: "Skyblock" },
                      { href: "#", name: "Survival", disabled: true },
                      { href: "#", name: "Event", disabled: true },
                    ]}
                    toggleModal={toggleModal}
                  />
                  <NavMenuItem
                    id="menu-vip"
                    label="Výhody"
                    links={[
                      { href: "/vip/skyblock", name: "Skyblock" },
                      { href: "#", name: "Survival", disabled: true },
                    ]}
                    toggleModal={toggleModal}
                  />
                  <li>
                    <NavLink href="/admin-team" name="Admin Team" onClick={toggleModal} className="text-xl menu-item" />
                  </li>
                  <li>
                    <NavLink href="https://bans.tcraft.eu/" name="Bany" target="_blank" onClick={toggleModal} className="text-xl menu-item" />
                  </li>
                  <li>
                    <NavLink href="https://tcrafteu.craftingstore.net/" name="Store" target="_blank" onClick={toggleModal} className="text-xl menu-item" />
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

const NavMenuItem = ({ id, label, links, toggleModal }) => (
  <li>
    <input type="checkbox" id={id} className="menu-toggle" />
    <label className="menu-item justify-between" htmlFor={id}>
      <div className="flex gap-2">
        <span className="text-base">{label}</span>
      </div>
      <span className="menu-icon">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </label>
    <div className="menu-item-collapse">
      <div className="min-h-0">
        {links.map(({ href, name, disabled }) => (
          <NavLink
            key={name}
            href={href}
            name={name}
            onClick={toggleModal}
            className={`menu-item ml-6 text-xl ${disabled ? "menu-item-disabled" : ""}`}
          />
        ))}
      </div>
    </div>
  </li>
);

*/}
