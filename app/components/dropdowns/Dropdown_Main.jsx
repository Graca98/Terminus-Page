'use client'

import React, { useState } from 'react';
import Link from 'next/link';

export default function Dropdown_Main() {
  const arrowDown = <svg className="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"></path></svg>
  const arrowUp = <svg className="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="upper-arrow"><path d="M17,13.41,12.71,9.17a1,1,0,0,0-1.42,0L7.05,13.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0L12,11.29l3.54,3.54a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29A1,1,0,0,0,17,13.41Z"></path></svg>

  const handleClick = () => {
    const elem = document.activeElement;
    if (elem) {
      elem?.blur();
      setArrow(
        arrowDown
      )
    }
  };

  const [arrow, setArrow] = useState(arrowDown)

  return (
    <>
      <div className="dropdown">
        <label tabIndex={0} onFocus={() => setArrow(arrowUp)} onBlur={() => setArrow(arrowDown)} className="menu menu-horizontal flex hover:bg-termi-hover py-2 pl-3 pr-1.5 rounded-md">
          Hlavní stránka
          {arrow}
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-termi text-white rounded-b-lg w-52 mt-1"
        >
          <li onClick={handleClick} className='hover:bg-termi-hover'>
            <Link href="/">Informace</Link>
          </li>
          <li onClick={handleClick} className='hover:bg-termi-hover'>
            <Link href="/main/pravidla">Pravidla</Link>
          </li>
          <li onClick={handleClick} className='hover:bg-termi-hover'>
            <Link href="/main/download">Ke stažení</Link>
          </li>
          <li onClick={handleClick} className='hover:bg-termi-hover'>
            <Link href="/main/kontakty">Kontakty</Link>
          </li>
        </ul>
      </div>
    </>
  );
};


