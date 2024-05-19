import img1 from "@/app/img/servers/Skyblock1.jpg"
import img2 from "@/app/img/servers/connect1.png"
import Image from "next/image"

export default function JakSePripojit() {
  return (
    <div className="container-default p-6">
      <section>
        <article className="mb-5">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img
              className="hover:opacity-75 float-right"
              src="https://czech-craft.eu/api/server/terminuscraft/badges/position.svg"
              alt="Server Badge"
            />
          </a>
          <h2 className="text-2xl font-bold">Přehled všech serverů</h2>
          <ul className="list-none p-0">
            <li>Typ: Waterfall</li>
            <li>Stav: <span id="status_status"></span></li>
            <li>IP: play.tcraft.eu</li>
            <li>Hráčů online: <span id="status_hracu"></span>/<span id="status_slotu"></span></li>
            <li>Verze: <span id="status_verze"></span></li>
          </ul>
        </article>

        <article className="mb-5">
          <h2 className="text-2xl font-bold">Jak se připojit a hrát</h2>
          <p className="mb-0">Jednoduše spusťte Minecraft a v hlavním menu zvolte tlačítko "Multiplayer". Následně dle obrázku zvolte "Add Server".</p>
          <div className="flex justify-center my-3">
            <Image className="hover:opacity-75" src="/img/connect0.jpg" width={450} height={140} alt="Připojení" />
          </div>
          <p className="mb-0">
            Do kolonky Server Name můžete napsat cokoliv dle vlastní volby. Do kolonky Server Address vložte IP adresu serveru.
            Náše servery běží na forku Waterfall systému BungeeCord, stačí Vám tedy jedna ip adresa, kterou se připojíte do lobby,
            odkud je dále možné se připojovat na ostatní servery.
            IP adresa serverů:
            SkyBlock: play.tcraft.eu
          </p>
          <div className="flex justify-center my-3">
            <img className="hover:opacity-75" src="@/app/img/connect1.png" alt="Připojení" />
          </div>
          <p className="mb-0">
            Nyní stačí kliknout na tlačítko "Done" a je hotovo! Můžete se připojit na náš server a do naší skvělé komunity. Uvidíme se tam!
          </p>
        </article>
      </section>
    </div>
  )
}