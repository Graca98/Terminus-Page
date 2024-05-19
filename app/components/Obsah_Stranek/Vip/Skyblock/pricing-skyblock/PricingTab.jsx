

import { useState } from "react";

const PricingTab = () => {
  const [activeTab, setActiveTab] = useState("vip");

  const vipContent = (
    <div className="text-gray-900 bg-white rounded-lg border-2 border-yellow-300 shadow p-6 xl:p-8" >
      <div className="">
        <h2 className="text-lg font-bold underline">VIP Výhody</h2>
        <ul className="list-inside">
          <li>$2500 v neoznačených bankovkách ihned</li>
          <li>Připojíš se na plný server a při AFKování nebudeš vyhozen</li>
          <li>Používání CMI heal cedulek</li>
          <li>Barevný text (pro nápovědu napiš /colors, /colorpicker)</li>
          <li>Tvorba Chestshopu zdarma</li>
          <li>Možnost mít až 7 aukcí</li>
          <li>150 leteckého kreditu každý den, který se připojíš</li>
          <li>Nový VIP ostrov (pro více informací použijte warp na cedulce)</li>
          <li>/is biome - změna biomi ostrova (Desert, Nether, Jungle, Swamp, Snowy Plains)</li>
          <li>/is settings - Ovládání počasí a růstu rostlin/stromů</li>
          <li>/repair (&lt;$1000, pouze předměty bez enchantů, co hodinu, funguje pouze na VIP)</li>
          <li>/ah search {'<slovo>'} - Vyhledá předmět v aukci dle názvu, nebo prodejce</li>
          <li>/back - Vrácení na minulou pozici (i po smrti)</li>
          <li>/feed - Doplní jídlo (co 10 minut)</li>
          <li>/near - Zobrazí hráče v okolí</li>
          <li>/me - Způsob psaní do chatu</li>
          <li>/wb - Přenosný crafting table</li>
          <li>/skin - Nastavení libovolného skinu</li>
          <li>/sethome, /home - Nastavení až 3 domovů</li>
          <li>/kit redstone - Redstone, quartz (co 1.2 hodin)</li>
          <li>/kit key - VIP klíč do automatu (co 20 hodin)</li>
          <li>/kit vip - Jednorázový VIP balíček (více informací na cedulích)</li>
        </ul>
      </div>
    </div>
  );

  const evipContent = (
    <div className="text-gray-900 bg-white rounded-lg border-2 border-cyan-400 shadow p-6 xl:p-8">
      <h1 className="text-lg font-bold underline">EVIP Výhody</h1>
      <ul className="list-inside">
        <li>Stejné jako VIP, k tomu navíc:</li>
        <li>Dalších $2500 k tomu (celkem $5000)</li>
        <li>Tvorba CMI heal cedulek (viz návod dole)</li>
        <li>Formátování textu (pro nápovědu napiš /colors, /colorpicker)</li>
        <li>Exp z itemů po smrti zůstávají</li>
        <li>Možnost mít až 10 aukcí</li>
        <li>300 leteckého kreditu každý den, který se připojíš</li>
        <li>Nový EVIP ostrov (pro více informací použijte warp na cedulce)</li>
        <li>/is biome (Deep Ocean, Mushroom, The End, Badlands, Lush Caves)</li>
        <li>/is settings - Ovládání denní doby</li>
        <li>/repair all (zdarma, každý předmět, co hodinu, funguje pouze na EVIP)</li>
        <li>/ah sellinventory - Možnost tvorby balíčku k prodeji (takový shulker bez shulkeru)</li>
        <li>/heal - Doplní životy a jídlo (kdykoliv)</li>
        <li>/chest - Přenosná ender truhla</li>
        <li>/sethome, /home - Nastavení až 5 domovů</li>
        <li>/day rewol - Jednou za 20 hodin umožní vyměnit libovolný děník za jiný</li>
        <li>/kit evip - Jednorázový EVIP balíček (více informací na cedulkách)</li>
      </ul>
    </div>
  );

  const donatorContent = (
    <div className="text-gray-900 bg-white rounded-lg border-2 border-purple-700 shadow p-6 xl:p-8">
      <h1 className="text-lg font-bold underline">Donator Výhody</h1>
      <ul className="list-inside">
        <li>Stejné jako EVIP, k tomu navíc:</li>
        <li>Dalších $5000 k tomu (celkem $10000)</li>
      </ul>
    </div>
  );

  const getContent = () => {
    switch (activeTab) {
      case 'vip': return vipContent;
      case 'evip': return evipContent;
      case 'donator': return donatorContent;
      default: return vipContent;
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="tabs">
          <div onClick={() => setActiveTab("vip")} className={`tab tab-bordered px-6 text-gray-900 ${activeTab === 'vip' ? 'tab-active' : ''}`}>VIP</div>
          <div onClick={() => setActiveTab("evip")} className={`tab tab-bordered px-6 text-gray-900 ${activeTab === 'evip' ? 'tab-active' : ''}`}>EVIP</div>
          <div onClick={() => setActiveTab("donator")} className={`tab tab-bordered px-6 text-gray-900 ${activeTab === 'donator' ? 'tab-active' : ''}`}>Donator</div>
        </div>
      </div>

      <section className="container-default mb-8 lg:mb-20">
        {getContent()}
      </section>
    </>
  );
};

export default PricingTab;
