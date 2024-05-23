import SkinCard from "./SkinCard";

export default function SkinPage() {
  // grid-cols-2 zatím na md
  return (
    <div className="container-default">
      <h2 className="text-2xl font-bold mb-2 md:mb-4 text-center md:text-start">
        Vedení serveru
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 lg:gap-x-8 gap-y-8 justify-items-center mb-20">
        <SkinCard
          name="Gracous"
          role="Správce"
          desc="Web developer, správce pluginů, slimefun"
          discord="Gracous"
        ></SkinCard>
        <SkinCard
          name="Davisiiiik"
          desc="Nějaký random text, Praha na topu"
        ></SkinCard>
        <SkinCard
          name="Texmyn"
          desc="opět nějaký random text, ale trochu delší"
        ></SkinCard>
        <SkinCard name="matobodo" desc="develoepr, správde VDS"></SkinCard>
        <SkinCard
          name="AlmostPanda"
          role="Hl. Eventer"
          desc="Správce event serveru, pluginy, mise"
          discord="Pandicka"
        ></SkinCard>
        <SkinCard
          name="nazdarekparek"
          desc="tohle je fakt nejaky random velky popis kteryn nevim zda vubec nekdo vyuzije ale muzmee klidne psat dal"
        ></SkinCard>
      </div>

      <h2 className="text-2xl font-bold mb-2 md:mb-4 text-center md:text-start">
        Admin Team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 lg:gap-x-8 gap-y-8 justify-items-center mb-20">
        <SkinCard name="1Azazel1" desc=""></SkinCard>
        <SkinCard name="Jahodak1631" desc=""></SkinCard>
        <SkinCard name="Kat02" desc=""></SkinCard>
        <SkinCard name="matofuj" desc=""></SkinCard>
        <SkinCard name="Pumpk1n_" desc=""></SkinCard>
      </div>

      <h2 className="text-2xl font-bold mb-2 md:mb-4 text-center md:text-start">
        Event Team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 lg:gap-x-8 gap-y-8 justify-items-center mb-20">
        <SkinCard name="Nimue__" desc=""></SkinCard>
        <SkinCard name="Jelkaki" desc=""></SkinCard>
        <SkinCard name="" desc=""></SkinCard>
        <SkinCard name="" desc=""></SkinCard>
        <SkinCard name="" desc=""></SkinCard>
        <SkinCard name="" desc=""></SkinCard>
      </div>
    </div>
  );
}
