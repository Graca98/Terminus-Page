import LinkHover from "../../LinkHover";
import CopyButton from "../../CopyButton";

export default function Kontakty() {

  //todo Dodělat copyIp
  // function copyIp() {
  //   navigator.clipboard.writeText("text")
  // }

  return (
    <div className="container-default">
      <section>
        <article className="mb-12">
          <h2 className="text-3xl font-bold mb-4 md:mb-6">Kontakty</h2>
          <p className="mb-0">
            <a href="http://fb.com/tcrafteu" target="_blank">
              <LinkHover text="Facebook" mx="mx-0"></LinkHover>
            </a>
          </p>
          <p>Email: <CopyButton text="Davisiiiik@tcraft.eu" handleClick="" style="active:text-gray-400 active:transition active:ease-out active:duration-200"></CopyButton></p>
        </article>
        <article>
          <h2>Discord</h2>
          <iframe src="https://discord.com/widget?id=549321723644870666&theme=dark" width="350" height="400" allowtransparency="true" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
        </article>
      </section>
    </div>

  );
};

