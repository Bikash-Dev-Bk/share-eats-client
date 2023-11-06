import { useState, useEffect } from "react";
import Person from "./Person/Person";

const Team = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("team.json")
      .then((res) => res.json())
      .then((data) => setTeams(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto my-32 p-5 md:p-4 lg:p-2">
      <h2 className="text-4xl font-bold text-center">Meet The Team</h2>
      <p className="max-w-4xl mx-auto text-justify md:text-center  text-lg mt-5 mb-24">At Share Eats, we believe that every great initiative is powered by the people behind it. Our team is a diverse group of passionate individuals who share a common goal - to reduce food waste and ensure that no one in our community goes hungry. Get to know the faces and stories that drive our mission forward.</p>
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4  my-20 ">
        {teams.map((person) => (
          <Person key={person.id} person={person}></Person>
        ))}
      </div>
    </div>
  );
};

export default Team;
