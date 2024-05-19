import Image from "next/image"

const CardImg = ({ imgSrc, alt }) => {
  return <>
    <Image src={imgSrc} className="h-72 max-h-64 w-28 max-w-xs" alt={alt}></Image>
  </>
}

export default CardImg