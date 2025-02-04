import Image from 'next/image'

const CardText = ({ name, role, description, discord }) => {
  return <>
    <h2 className="mb-1 font-semibold text-xl">{name}</h2>
    <h3 className='mb-5'>{role}</h3>
    <p className='mb-12 text-sm'>{description}</p>
    <p className='flex gap-x-1'><Image src="/discord.svg" width={18} height={18} alt="instragam-logo"></Image>{discord}</p>

  </>
}

export default CardText
