//todo Předělat cele na grid. (fotka a popis na cca 6 col - fotka zabere 2 col a text 4 col.)

import Skin from "@/components/Obsah_Stranek/Admin-Team/Skin";
import DiscordIcon from "@/components/Icons/DiscordIcon";

export default function SkinCard({
  name = "",
  role = "",
  desc = "",
  discord = "",
}) {
  const validateName = name.length >= 21 ? name.slice(0, 21) : name;
  let validateDesc = desc.length > 0 ? desc : "Náš parádní Steve";
  validateDesc =
    validateDesc.length > 100
      ? validateDesc.slice(0, 100) + "..."
      : validateDesc;

  return (
    <div className="card block bg-inherit max-w-72 lg:max-w-md xl:max-w-none shadow-none">
      <div
        id="rozdeleni"
        className="flex flex-nowrap items-center flex-col lg:flex-row p-4"
      >
        <div className="flex-shrink-0">
          <Skin name={validateName} className="rounded-xl col-span-1" />
        </div>
        <div className="card-body flex-grow p-0 lg:ml-10 xl:ml-6 grid grid-cols-1 xl:grid-cols-2 gap-2 lg:gap-y-4 md:gap-x-0 items-center md:items-start text-center lg:text-left justify-items-center lg:justify-items-start">
          <h2 className="card-header col-span-1 lg:col-span-2 self-start text-xl">
            {validateName}
          </h2>
          <div className="text-content2 text-gray-700 col-span-1 md:col-span-2">
            <p className="text-lg font-medium pb-1">{role}</p>
            <p className="">{validateDesc}</p>
          </div>
          <div className="card-footer text-gray-500 col-span-1 md:col-span-2 gap-1">
            {<DiscordIcon />}
            {discord}
          </div>
        </div>
      </div>
    </div>

    // <div className="card block bg-inherit max-w-72 lg:max-w-md xl:max-w-none">
    //   <div id="rozdeleni" className="flex flex-nowrap items-center flex-col lg:flex-row p-4">
    //     <div className="flex-shrink-0">
    //       <Skin name={validateName} className="rounded-xl col-span-1" />
    //     </div>
    //     <div className="card-body flex-grow p-0 md:ml-4 grid grid-cols-1 xl:grid-cols-2 gap-4 items-center md:items-start text-center md:text-left">
    //       <h2 className="card-header col-span-1 lg:col-span-2">{validateName}</h2>
    //       <div className="text-content2 text-gray-700 col-span-1 md:col-span-2">
    //         <p>Hlavní admin vole</p>
    //         <p>Masster na SF</p>
    //         <p className="">{validateDesc}</p>
    //       </div>
    //       <div className="card-footer text-gray-500 col-span-1 md:col-span-2">
    //         discord
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
