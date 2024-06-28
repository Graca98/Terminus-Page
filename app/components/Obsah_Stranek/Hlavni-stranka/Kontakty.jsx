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
        </article>
        <article>
          <h2 className="text-3xl font-bold mb-4 md:mb-6">Discord</h2>
          <div className="hidden lg:block mb-12">
            <iframe
              src="https://discord.com/widget?id=549321723644870666&theme=dark"
              loading="lazy"
              title="discord widget"
              width="450"
              height="700"
              allowtransparency="true"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            ></iframe>
          </div>

          <div className="block lg:hidden mb-12">
            <iframe
              src="https://discord.com/widget?id=549321723644870666&theme=dark"
              loading="lazy"
              title="discord widget"
              width="350"
              height="700"
              allowtransparency="true"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            ></iframe>
          </div>
        </article>
      </section>
    </div>
  );
}
