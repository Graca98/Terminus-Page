//! Používá se TailwdindCSS a DaisyUI

import Card from "./Card";

export default function CardPage() {
  return (
    <>
      <h2 className="text-3xl md:text-4xl">Vedení Skyblocku</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-4 gap-4 md:gap-6 justify-items-center items-center my-4 md:my-8 mx-2">
        <Card
          name="Gracous"
          role="Správce"
          desc="Nejlepší týpek na světě vole!!"
          discord="Gracous"
        ></Card>
        <Card
          name="Davisiiiik"
          role="Správce"
          desc="Nějaký správce, majitel Terminusu"
          discord="Corpse"
        ></Card>
        <Card
          name="AlmostPanda"
          role="Hlavní Eventer"
          desc="Hlavní Eventer, kompletní správa event serveru"
          discord="AlmostPanda"
        ></Card>
        <Card
          name="matobodo"
          role="Developer"
          desc="Developer a správce pterodactyla"
        ></Card>
        <Card
          name="AsmynTexi"
          desc="Totálně na hovno HL Admin a ještě horší člověk"
        ></Card>
        <Card
          name="VoleNejakyRandomJmmnoCooooooooooooo"
          desc="Test neexistujiciho jmena, nahraje se Steve? ted budu zkoušet psát tak dlouho, dokud nepřekročím limit 100 vole ok tak to je super hustý"
        ></Card>
        <Card
          name="Gracouss"
          desc="Nejlepší týpek na světě vole!!"
        ></Card>
        <Card></Card>
      </div>
    </>
  );
}

// .container {  display: grid;
//     grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
//     grid-template-rows: 1fr 1fr 2fr 1fr;
//     gap: 0px 0px;
//     grid-auto-flow: row;
//     grid-template-areas:
//       ". . . . . ."
//       ". . . . . ."
//       ". . . . . ."
//       ". . . . . .";
//     width: 384px;
//     height: 280px;
//   }
  
