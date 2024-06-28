import SkinCard from "./SkinCard";
import teamData from "./team-members.json";

export default function SkinPage() {
  // grid-cols-2 zatím na md

  return (
    <div className="container-default mb-48">
      <h2 className="text-2xl font-bold mb-2 md:mb-3 text-center md:text-start">
        Vedení serveru
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 lg:gap-x-8 gap-y-8 justify-items-center mb-20">
        {teamData.vedeni.map((member) => {
          return (
            <SkinCard
              key={member.name}
              name={member.name}
              role={member.role}
              desc={member.desc}
              discord={member.discord}
            />
          );
        })}
      </div>

      <h2 className="text-2xl font-bold mb-2 md:mb-3 text-center md:text-start">
        Skyblock Team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 lg:gap-x-8 gap-y-8 justify-items-center mb-20">
        {teamData.skyblockTeam.map((member) => {
          return (
            <SkinCard
              key={member.name}
              name={member.name}
              role={member.role}
              desc={member.desc}
              discord={member.discord}
            />
          );
        })}
      </div>

      <h2 className="text-2xl font-bold mb-2 md:mb-3 text-center md:text-start">
        Event Team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 lg:gap-x-8 gap-y-8 justify-items-center mb-20">
        {teamData.eventTeam.map((member) => {
          return (
            <SkinCard
              key={member.name}
              name={member.name}
              role={member.role}
              desc={member.desc}
              discord={member.discord}
            />
          );
        })}
      </div>
    </div>
  );
}
