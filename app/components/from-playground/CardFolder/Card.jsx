import Image from 'next/image'
import FetchSkin from "./FetchSkin"

const Card = ({ name = "", role = "", desc = "Náš parádní Steve", discord="Zatím nemá"}) => {
  
  const validName = name.length >= 21 ? name.slice(0, 21) : name
  const validDesc = desc.length > 100 ? desc.slice(0, 100) + "..." : desc

  return ( <>
    {/*todo PŘEDĚLAT NA GRID - ALEXPON TEXT*/}
    <div className="mx-auto w-full sm:w-96 bg-white px-4 py-4 rounded-lg shadow-md shadow-gray-500/50">
      <div className="flex flex-row gap-x-12">

        <div className="basis-2/6 flex justify-center">
          <FetchSkin name={validName} alt={validName}></FetchSkin>
        </div>

        <div className="basis-4/6 flex flex-col justify-center">
          <h2 className="mb-1 font-semibold text-xl">{validName}</h2>
          <h3 className='mb-5'>{role}</h3>
          <p className='mb-12 text-sm'>{validDesc}</p>
          <div className='flex gap-6 flex-wrap text-sm'>
            {/* <p className='flex gap-x-1 '><Image src="/ig.svg" width={18} height={18} alt="instragam-logo"></Image>{insta}</p> */}
            <p className='flex gap-x-1 '><Image src="/discord.svg" width={18} height={18} alt="instragam-logo"></Image>{discord}</p>
          </div>
        </div>

      </div>
    </div>


    <div className="card card-side bg-base-100 shadow-xl w-96 h-72">
    <figure><FetchSkin name={validName} alt={validName} className="p-2"></FetchSkin></figure>
    <div className="card-body">
      <h2 className="card-title">{validName}</h2>
      <p>{role}</p>
      <p>{validDesc}</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Watch</button>
      </div>
    </div>
    </div>
    </>);
}

export default Card