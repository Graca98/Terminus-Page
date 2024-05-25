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
          name="Davisiiiik"
          role="Správce"
          desc="Majitel, správce všech serverů, systémů a databází"
          discord="Davisiiiik"
        ></SkinCard>
        <SkinCard
          name="Gracous"
          role="Správce"
          desc="Web developer, správce pluginů, slimefun"
          discord="Gracous"
        ></SkinCard>
        <SkinCard
          name="Texmyn"
          role="Hl. Admin"
          desc="Správa admin-teamu"
          discord="TerrorByTexi"
        ></SkinCard>
        <SkinCard
          name="matobodo"
          role="Developer"
          desc="Developer, správce VDS a systému Pterodactyl"
        ></SkinCard>
      </div>

      <h2 className="text-2xl font-bold mb-2 md:mb-4 text-center md:text-start">
        Skyblock Team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 lg:gap-x-8 gap-y-8 justify-items-center mb-20">
        <SkinCard name="1Azazel1" role="Admin" desc="" discord=""></SkinCard>
        <SkinCard name="Kat02" role="Admin" desc="" discord=""></SkinCard>
        <SkinCard
          name="nazdarekparek"
          role="Mod"
          desc="Hlavní vítač nováčků"
          discord=""
        ></SkinCard>
        <SkinCard
          name="Jahodak1631"
          role="SFHelper"
          desc=""
          discord=""
        ></SkinCard>
        <SkinCard
          name="Pumpk1n_"
          role="Helper"
          desc=""
          discord="Pumpkin"
        ></SkinCard>
        <SkinCard
          name="matofuj"
          role="Trial"
          desc=""
          discord="Shuter"
        ></SkinCard>
      </div>

      <h2 className="text-2xl font-bold mb-2 md:mb-4 text-center md:text-start">
        Event Team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 lg:gap-x-8 gap-y-8 justify-items-center mb-20">
        <SkinCard
          name="AlmostPanda"
          role="Hl. Eventer"
          desc="Správce event serveru, expert na mise"
          discord="Pandicka"
        ></SkinCard>
        <SkinCard
          name="Nimue__"
          role="EventMaster"
          desc=""
          discord="chica2713"
        ></SkinCard>
        <SkinCard
          name="Jelkaki"
          role="EventMaster"
          desc=""
          discord=""
        ></SkinCard>
      </div>
    </div>
  );
}
