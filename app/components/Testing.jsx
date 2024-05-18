'use client'

import FlowbiteDropdown from "./FlowbiteDropdown";
import ToastWarning from "./Toasts/ToastWarning";
import { useState } from "react";
import Card from "./CardFolder/Card";
import ATeamPage from "@/pages/ATeamPage";
import SkinPage from "./Skins/SkinPage";

export default function Testing() {

  //todo Nastavit Navbavu responsivitu při menším rozbrazení
  const [toast, setToast] = useState("")

  const handleClick = () => {
    setToast(<ToastWarning text="Tak hlavně nečum brácho!!" />)
    setTimeout(() => {
      setToast("")
    }, 2000)
  }

  return (
    <>
      <button onClick={handleClick}>Ukaž Toast</button>
      {toast}
      {/* <FlowbiteDropdown></FlowbiteDropdown> */}

      <div className="group flex justify-center align-middle items-center w-96 mx-auto transition ease-in-out duration-500">
        <img src="https://mc-heads.net/body/ed2dab89-4441-4acc-a7ac-b948dc6862c8/100" className="">
        </img>
        <div className="flex flex-col w-80 justify-center items-center transition-opacity ease-in-out duration-500 delay-150 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto">
          <h2>Davisiiiik</h2>
          <p>Nějaká text o něm</p>
        </div>
      </div>


      <div className="group flex justify-center align-middle items-center w-96 mx-auto transition ease-in-out duration-500 delay-150">
        <img src="https://mc-heads.net/body/ed2dab89-4441-4acc-a7ac-b948dc6862c8/100" className="">
        </img>
        <div className="hidden group-hover:flex flex-col w-80 justify-center items-center transition ease-in-out duration-500 delay-150">
          <h2>Davisiiiik</h2>
          <p>Nějaká text o něm</p>
        </div>
      </div>
      <SkinPage></SkinPage>
      <ATeamPage></ATeamPage>

    </>
  );
}
