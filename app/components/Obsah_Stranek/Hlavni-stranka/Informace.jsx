"use client";

import LinkHover from "../../LinkHover";
import CopyButton from "../../CopyButton";

const Informace = () => {
  //todo Dodělat copyIp
  //todo Přidat linky na odkazy (až bude pravý web)

  return (
    <div className="container-default">
      <section>
        <article className="mb-12">
          <h2 className="text-3xl font-bold mb-4 md:mb-6">Informace</h2>
          <p className="mb-5">
            Skyblock & Slimefun. Potřebuješ vědět více? Jsme TerminusCraft
            Minecraft server s historií a letitými zkušenostmi. Naším cílem je
            vytvoření prostoru pro milovníky minecraftu, kde si dotyční budou
            hru moci pořádně užít. Naše servery běží na VDS (virtuálním
            dedikovaném serveru) poskytovaném skrze portál gamehosting.cz, kde
            máme k dispozici vysoce výkonný procesor typu AMD Ryzen 9 3900X s
            frekvencí až 4.6 GHz. Tyto servery jsou dále zabaleny do softwaru
            Pterodactyl, který umožňuje skvělý přehled a kontrolu nad veškerým
            děním. Toto vše se odehrává na operačním systému Alpine Linux, který
            je znám svou vysokou bezpečností a nízkou náročností.
          </p>
          <ul className="list-none">
            <li>
              Jak se připojit a hrát?
              <LinkHover href="servers/index.php" text="Jednoduše"></LinkHover>
            </li>

            <li>
              Chceš si prohlédnou náš admin team?
              <LinkHover href="ateam/index.php" text="Zde"></LinkHover>
            </li>

            <li>
              Máš zájem nás podpořit v tom, co děláme?
              <LinkHover
                href="https://store.tcraft.eu/"
                text="Tady"
              ></LinkHover>
            </li>

            <li>
              Nebo se k nám připojit na discord a pokecat?
              <LinkHover
                href="https://discord.gg/FxsVHJP"
                text="Bez problému"
                target="_blank"
              ></LinkHover>
            </li>

            <li>
              Líbí se ti náš server a chceš, aby se o něm dozvědělo více lidí?
              <LinkHover
                href="https://czech-craft.eu/server/terminuscraft/"
                text="Hlasuj"
                target="_blank"
              ></LinkHover>
            </li>
          </ul>
        </article>

        <article className="mb-12">
          <h2 className="text-3xl font-bold mb-4 md:mb-6">Servery</h2>
          <p className="mb-5">
            Momentálně poskytujeme dva herní servery a to SkyBlock a Survival.
            Tyto servery jsou propojené skrze proxy síť Waterfall, která je
            forkem známější verze nesoucí název BungeeCord. Snažíme se být stále
            na nejnovější verzi, což se nám daří, bohužel budeme v budoucnu opět
            závislí na kvalitní práci vývojářů jednotlivých pluginů. Server
            držíme v dostatečně optimalizovaném nastavení, aby nebyl nijak
            omezen výkon, ale ani hráčův pocit z hraní.
          </p>
          <h4>Na všechny naše servery se připojíte z jedné IP:</h4>
          <div className="pb-2 me-1 my-2">
            Minecraft:
            <span
              className="lg:tooltip lg:tooltip-right pr-3"
              data-tooltip="Klikněte pro zkopírování do schránky"
            >
              {/* <CopyButton style={`py-1.5 px-3 ms-1 transition ease-in-out duration-300 active:bg-gray-800 active:transition active:ease-out active:duration-200 hover:bg-black hover:text-white border border-black rounded-md bg-transparent transition ease-in-out duration-300 inline-flex items-center justify-center text-center text-sm `}></CopyButton> */}
              <CopyButton style="ml-2"></CopyButton>
            </span>
          </div>
          <p>
            Discord:
            <LinkHover
              href="http://discord.gg/FxsVHJP"
              text="Terminus Craft"
              target="_blank"
            ></LinkHover>
          </p>
        </article>

        <article className="mb-12">
          <h2 className="text-3xl font-bold mb-4 md:mb-6">Server listy</h2>
          <p className="mb-5">
            Seznam server listů, které měly potřebu být na našich stránkách.
          </p>
          <div className="flex gap-3 flex-col md:flex-row ">
            <a
              href="https://www.minelist.eu"
              target="_blank"
              className="overflow-hidden"
            >
              <img
                src="https://www.minelist.eu/images/bannery/Ikonka2.png"
                alt="Minelist.eu"
                className="h-8 img-hover"
              />
            </a>
            <a
              href="https://www.serverbook.cz"
              target="_blank"
              className="overflow-hidden"
            >
              <img
                src="https://www.serverbook.cz/images/banner_88_31.png"
                alt="ServerBook.cz"
                className="h-8 img-hover"
              />
            </a>
            <a href="https://craftlist.org" className="overflow-hidden">
              <img
                src="https://minecraft-servery.cz/img/icons/icon_default.png"
                alt="Minecraft Serverlist"
                className="h-8 img-hover"
              />
            </a>
            <a
              href="http://minecraft-server-list.cz"
              target="_blank"
              className="overflow-hidden"
            >
              <img
                src="http://minecraft-server-list.cz/images/4_ico.jpg"
                alt="minecraft-server-list.cz"
                className="h-8 img-hover"
              />
            </a>
            <a href="https://minebook.eu/view/" className="overflow-hidden">
              <img
                src="https://minebook.eu/assets/images/minebook-full.png"
                alt="Minebook"
                className="h-8 img-hover"
              />
            </a>
          </div>
        </article>
      </section>

      {/* FAQ */}
      <section>
        <div className="accordion-group accordion-group-bordered mt-12 mb-24  hidden">
          <div className="accordion">
            <input type="checkbox" id="faq" className="accordion-toggle" />
            <label htmlFor="faq" className="accordion-title bg-inherit">
              FAQ (Často kladené dotazy)
            </label>
            <span className="accordion-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
              </svg>
            </span>
            <div className="accordion-content text-content2">
              <div className="min-h-0">
                <ul className="list-none">
                  <li className="faq-item font-semibold">
                    Jak si založím is? Jak pozvu/vyhodím hráče?
                  </li>
                  <li className="faq-answer">
                    Všechno lze jednoduše ovládat z pohodlí rozhraní /is
                  </li>

                  <li className="faq-item font-semibold">
                    Jak si můžu vytvořit /warp na shop?
                  </li>
                  <li className="faq-answer">
                    Příkazem /is setwarp &lt;warp-name&gt; [warp-category]
                    Např.: /is setwarp Shop Obchody (Kategorie nejsou povinné)
                  </li>

                  <li className="faq-item font-semibold">
                    Jak se dostanu do netheru?
                  </li>
                  <li className="faq-answer">
                    Splněním úkolu Nether Portal v /c -&gt; kategorie Adept
                  </li>

                  <li className="faq-item font-semibold">
                    Jak si můžu vydělat peníze?
                  </li>
                  <li className="faq-answer">
                    Plnění úkolů (/c), Aukce (/ah), Serverový obchod (/shop),
                    Komunitní obchody (/is warps), nebo si vytvoř vlastní
                    ChestShop!
                  </li>

                  <li className="faq-item font-semibold">
                    Proč v cobble generátoru nemám uhlí/železo?
                  </li>
                  <li className="faq-answer">
                    Na našem serveru je zapotřebí si koupit vylepšení ostrova.
                    Použij příkaz /is &gt; vylepšení ostrova &gt; vylepšení
                    generatorů
                  </li>

                  <li className="faq-item font-semibold">
                    Jak se dostanu do endu?
                  </li>
                  <li className="faq-answer">
                    Splněním úkolu Ender Portal v /c -&gt; kategorie The End
                  </li>

                  <li className="faq-item font-semibold">Kde získam coal?</li>
                  <li className="faq-answer">
                    Coal se získává u villagera v /shop, přes Slimefun (Carbon
                    Press) v části elektřina a energie nebo zakoupením vylepšení
                    generatorů.
                  </li>

                  <li className="faq-item font-semibold">Co je Slimefun?</li>
                  <li className="faq-answer">
                    Slimefun je plugin, který dělá z klasického serveru
                    modovaný, bez potřeby instalace jediného módu.
                  </li>

                  <li className="faq-item font-semibold">
                    Kde můžu prodávat/kupovat věci?
                  </li>
                  <li className="faq-answer">
                    Aukce (/ah), Serverový obchod (/shop), Komunitní obchody
                    (/is warps), nebo si vytvoř vlastní ChestShop!
                  </li>

                  <li className="faq-item font-semibold">
                    Je tu něco, co za mě kope cobble?
                  </li>
                  <li className="faq-answer">
                    Slimefun nabízí mnoho automatizovaných strojů, mezi které
                    patří i automatický těžič (android miner).
                  </li>

                  <li className="faq-item font-semibold">
                    Můžu být afk? Můžu použít systém, který mě udrží afk?
                  </li>
                  <li className="faq-answer">
                    Je zakázáno používání AFK-Farem.
                  </li>

                  <li className="faq-item font-semibold">
                    SF věc se mi přeměnila v log/hlavu....co teď?
                  </li>
                  <li className="faq-answer">
                    Událost neprodleně nahlaš členovi Admin-Teamu.
                  </li>

                  <li className="faq-item font-semibold">
                    Existují nějaké SF tutoriály?
                  </li>
                  <li className="faq-answer">
                    Na YouTube jistě najdeš cokoliv, co potřebuješ. Neboj se
                    zeptat helperů.
                  </li>

                  <li className="faq-item font-semibold">
                    Je tu PVP? Můžu na svém ostrově zabíjet hráče?
                  </li>
                  <li className="faq-answer">
                    PvP je na celém skyblocku vypnuté. Jedinou výjimkou je pvp
                    arena (/warp pvp).
                  </li>

                  <li className="faq-item font-semibold">
                    Jak si zvýším is level?
                  </li>
                  <li className="faq-answer">
                    Stavěním na ostrově. Každý položený blok má jinou cenu.
                    Obecně platí pravidlo: čím vzácnější, tím větší skóre.
                  </li>

                  <li className="faq-item font-semibold">
                    Jak můžu přidat věc do aukce /ah?
                  </li>
                  <li className="faq-answer">
                    Příkazem /ah sell &lt;cena&gt; prodáš předmět v ruce za
                    nastavenou cenu.
                  </li>

                  <li className="faq-item font-semibold">
                    Kde nebo jak začít se Slimefunem?
                  </li>
                  <li className="faq-answer">
                    Příkazem /slime obdržíš knížku, ve které máš všechny
                    potřebné informace. Základy nalezneš na /sfhelp
                  </li>

                  <li className="faq-item font-semibold">
                    Jak si můžu změnit biome na ostrově?
                  </li>
                  <li className="faq-answer">Příkazem /is biome</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Informace;
