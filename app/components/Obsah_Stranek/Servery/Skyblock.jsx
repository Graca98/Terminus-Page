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
          <div>
            <figure className="figure">
              <img
                src="public/img/servers/SkyBlock1.jpg"
                className="figure-img img-fluid rounded-lg hover:shadow-lg transition-shadow duration-300"
                alt="SkyBlock Spawn"
              />
            </figure>
          </div>

          <div>
            <figure className="figure">
              <img
                src="public/img/servers/Skyblock2.jpg"
                className="figure-img img-fluid rounded-lg hover:shadow-lg transition-shadow duration-300"
                alt="SkyBlock Spawn"
              />
              <figcaption className="figure-caption text-right">
                Spawn by Yuniegard and Wolkerman1
              </figcaption>
              <figcaption className="figure-caption text-right">
                Photo by AsmynTexi
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
}
