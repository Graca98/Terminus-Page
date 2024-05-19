import CardText from "./CardText"
import CardImg from "./CardImg"

const Card = ({ imgSrc, name, role, description, discord = "Zatím nemá" }) => {

  const adminCards = () => {

  }

  return (
    <div className="mx-auto max-w-md bg-white hover:bg-sky-200 px-4 py-4 my-6 rounded-lg shadow-md shadow-cyan-500/50">
      <div className="flex flex-row gap-x-12">
        <div className="basis-2/6 flex justify-center">
          <CardImg imgSrc={imgSrc} alt={name}></CardImg>
        </div>

        <div className="basis-4/6 flex flex-col justify-center">
          <CardText
            name={name}
            role={role}
            description={description}
            discord={discord}
          ></CardText>
        </div>
      </div>
    </div>
  );
}
export default Card

export async function getServerSideProps() {
  // Získej data z externího API
  const res = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10');
  const photos = await res.json();

  // Předání dat do komponenty prostřednictvím props
  return { props: { photos } };
}
