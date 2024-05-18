import SkinFetch from "./SkinFetch";

export default function SkinCard({
  // Defaultní popisky
  //todo Při jméne "Steve" se změni default skin
  name = "",
  desc = "Náš parádní Steve",
}) {
  const validateName = name.length >= 21 ? name.slice(0, 21) : name
  const validateDesc = desc.length > 100 ? desc.slice(0, 100) + "..." : desc

  return (
    <div className="card w-72 bg-base-100 shadow-xl transition ease-in-out delay-150 duration-300 ease-in-out hover:scale-105">
      <figure className="px-10 pt-10">
        <SkinFetch name={validateName} className="rounded-xl"></SkinFetch>
      </figure>

      <div className="card-body items-center text-center">
        <h2 className="card-title">{validateName}</h2>
        <p>{validateDesc}</p>

        {/* <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div> */}
      </div>
    </div>
  );
}
