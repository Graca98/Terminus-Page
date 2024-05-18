//! Používá se TailwdindCSS a DaisyUI
import SkinCard from "./SkinCard";

export default function SkinPage() {
  return (
    <>
      <h2 className="text-3xl md:text-4xl">Vedení Skyblocku</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 justify-items-center my-4 md:my-8">
        <SkinCard
          name="Gracous"
          desc="Nejlepší týpek na světě vole!!"
        ></SkinCard>
        <SkinCard
          name="Davisiiiik"
          desc="Nějaký správce, majitel Terminusu"
        ></SkinCard>
        <SkinCard
          name="AlmostPanda"
          desc="Hlavní Eventer, kompletní správa event serveru"
        ></SkinCard>
        <SkinCard
          name="matobodo"
          desc="Developer a správce pterodactyla"
        ></SkinCard>
        <SkinCard
          name="AsmynTexi"
          desc="Totálně na hovno HL Admin a ještě horší člověk"
        ></SkinCard>
        <SkinCard
          name="VoleNejakyRandomJmmnoCooooooooooooo"
          desc="Test neexistujiciho jmena, nahraje se Steve? ted budu zkoušet psát tak dlouho, dokud nepřekročím limit 100 vole ok tak to je super hustý"
        ></SkinCard>
        <SkinCard
          name="Gracouss"
          desc="Nejlepší týpek na světě vole!!"
        ></SkinCard>
        <SkinCard></SkinCard>
      </div>
    </>
  );
}
