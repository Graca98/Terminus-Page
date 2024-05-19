import SkinCard from "./SkinCard";

export default function SkinPage() {
  // grid-cols-2 zatím na md
  return (
    <div className="container-default grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 lg:gap-x-8 gap-y-8 justify-items-center">
      <SkinCard name="Gracous" desc="Super týpek vole"></SkinCard>
      <SkinCard name="Davisiiiik" desc="Nějaký random text"></SkinCard>
      <SkinCard name="Texmyn" desc="opět nějaký random text, ale trochu delší"></SkinCard>
      <SkinCard name="matobodo" desc="develoepr, správde VDS"></SkinCard>
      <SkinCard name="AlmostPanda" desc="Hlavní eventer"></SkinCard>
      <SkinCard name="nazdarekparekvoletwlokvole" desc="tohle je fakt nejaky random velky popis kteryn nevim zda vubec nekdo vyuzije ale muzmee klidne psat dal"></SkinCard>
      <SkinCard name="1Azazel1" desc=""></SkinCard>
      <SkinCard name="Jahodak1631" desc=""></SkinCard>
      <SkinCard name="Jelkaki" desc=""></SkinCard>
      <SkinCard name="Kat02" desc=""></SkinCard>
      <SkinCard name="matofuj" desc=""></SkinCard>
      <SkinCard name="Nimue__" desc=""></SkinCard>
      <SkinCard name="Pumpk1n_" desc=""></SkinCard>
      <SkinCard name="" desc=""></SkinCard>
      <SkinCard name="" desc=""></SkinCard>
      <SkinCard name="" desc=""></SkinCard>
      <SkinCard name="" desc=""></SkinCard>
    </div>)
}