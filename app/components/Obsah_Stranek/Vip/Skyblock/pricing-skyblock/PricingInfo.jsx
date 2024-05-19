const PricingInfo = () => {
  return (
    <>
      <section className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 lg:gap-6 lg:space-y-0">
          {/* VIP */}
          <div className="text-gray-900 bg-white rounded-lg border-2 border-yellow-300 shadow xl:p-8">
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

          {/* EVIP */}
          <div className="text-gray-900 bg-white rounded-lg border-2 border-cyan-400 shadow xl:p-8">
            <h2>Skyblock EVIP výhody</h2>
            <ul>
              <li>Stejné jako VIP, k tomu navíc:</li>
              <li>Dalších $2500 k tomu (celkem $5000)</li>
              <li>Tvorba CMI heal cedulek</li>
              <li>Formátování textu (pro nápovědu /colors)</li>
              <li>Expy a itemy po smrti zůstávají</li>
              <li>Nový EVIP ostrov (více informací v bloku níže)</li>
              <li>
                /is biome - (Deep Ocean, Mushroom, The End, Badlands, Lush
                Caves)
              </li>
              <li>/is settings - (Ovládání denní doby)</li>
            </ul>
          </div>
          {/* Donator */}
          <div className="text-gray-900 bg-white rounded-lg border-2 border-purple-700 shadow xl:p-8">
            <h2>Skyblock Donátor výhody</h2>
            <ul>
              <li>Stejné jako EVIP, k tomu navíc:</li>
              <li>Speciální kit</li>
              <li>blablabla blala blaaa</li>
              <li>Používání CMI heal cedulek</li>
              <li>Barevný text (pro nápovědu /colors, /colorpicker)</li>
              <li>Tvorba ChestShopu zdarma</li>
              <li>Nový VIP ostrov (více informací v bloku níže)</li>
              <li>/is biome - (Desert, Nether, Jungle, Swamp, Snowy Plains)</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingInfo;
