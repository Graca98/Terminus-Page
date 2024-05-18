'use client'

import Link from "next/link"
import React, { useState } from 'react';

const Dropdown = () => {
  const arrowDown = <svg className="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"></path></svg>
  const arrowUp = <svg className="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="upper-arrow"><path d="M17,13.41,12.71,9.17a1,1,0,0,0-1.42,0L7.05,13.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0L12,11.29l3.54,3.54a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29A1,1,0,0,0,17,13.41Z"></path></svg>


  const [arrow, setArrow] = useState(arrowDown)

  return (
    <div className="dropdown dropdown-hover" onMouseEnter={() => setArrow(arrowUp)} onMouseLeave={() => setArrow(arrowDown)}>
      <label className="btn btn-primary bg-termi my-2 pl-4 pr-2 hover:bg-gray-500" tabIndex="0">
        Hlavní stránka
        {arrow}
      </label>
      <div className="dropdown-menu dropdown-menu-bottom-right bg-termi">
        <Link href="/" className="dropdown-item text-sm hover:bg-gray-500">Informace</Link>
        <Link href="/main/pravidla" className="dropdown-item text-sm hover:bg-gray-500">Pravidla</Link>
        <Link href="/main/download" className="dropdown-item text-sm hover:bg-gray-500">Ke stažení</Link>
        <Link href="/main/kontakty" className="dropdown-item text-sm hover:bg-gray-500">Kontakty</Link>
      </div>
    </div>
  );
};

export default Dropdown;