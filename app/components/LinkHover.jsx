import "./LinkHover.css";

export default function LinkHover({ href, text, target = "" }) {
  return (
    <>
      {/* <div id="button_cont" className=""> */}
      <a
        className="link-effect"
        href={href}
        target={target}
        rel="nofollow"
      >
        <span className="link link-primary link-mezera">{text}</span>
      </a>
      {/* </div> */}
    </>
  );
}
