import Image from "next/image";

export default function Skyblock() {
  return (
    <div className="container-default">
      <section className="mb-5">
        <h2 className="text-2xl font-bold mb-3">SkyBlock</h2>
        <p className="mb-3">
          Skyblock & Slimefun. Potřebuješ vědět více? Jeden z mála kvalitních
          skyblock serverů čistě na verzi 1.18.1, kde mimo jiné můžete natrefit
          na spoustu úkolů, nebo plně funkční plugin SlimeFun, který do hry
          přináší mnoho technických a magických komponentů na téma Feed the
          Beast. Ekonomika je uvzoana tak, aby nákup v server shopu byl poslední
          možností, jak suroviny získat, takže s penězi rozvážně. Na serveru
          najdete možnost hrát až v 5ti lidech na ostrově bez VIP, vyváženou
          ekonomiku, daňový systém, zkušený admin team a hlavně příjemnou
          komunitu.
        </p>
        <p className="mb-3">
          Skyblock poskytuje variaci až 6ti různých startovních ostrovů, více
          než 100 různých úkolů pro Váš ostrov, možnost být až s 11ti dalšími
          přáteli na jednom ostrově a taky hodiny a hodiny plnohodnotné a
          nefalšované zabavy! Součástí úkolů je i možnost získání a přepínání
          mezi zajimavými tituly.
        </p>
        <p className="mb-5">
          Slimefun poskytuje možnost tvorby automatických těžičů, farem, nebo i
          sofistikovaných dopravních systémů. Nejlepší na pluginu SlimeFun je,
          že hráči, kteří s ním nechtějí pracovat, jej můžou naprosto vynechat!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="overflow-hidden">
            <Image
              src="https://graca98.github.io/Terminus-Page/img/servers/SkyBlock1.jpg"
              className="img-hover rounded-lg"
              alt="SkyBlock Spawn"
              width={1000}
              height={562}
            />
          </div>

          <div className="overflow-hidden">
            <Image
              src="/Terminus-Page/img/servers/Skyblock2.jpg"
              className="img-hover rounded-lg hover:rounded-lg"
              alt="SkyBlock Spawn"
              width={1000}
              height={562}
            />
            <div className="flex flex-col mt-2 font-light items-end">
              <p>Spawn by Yuniegard and Wolkerman1</p>
              <p>Photo by AsmynTexi</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
