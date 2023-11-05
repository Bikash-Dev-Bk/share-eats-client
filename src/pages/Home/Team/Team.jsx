import { useEffect } from "react";
import { useState } from "react";
import Person from "../Person/Person";

const Team = () => {
  const [teams, setTeams] = useState([]);
  const [teams2, setTeams2] = useState([]);

  useEffect(() => {
    fetch("team.json")
      .then((res) => res.json())
      .then((data) => setTeams(data));
  }, []);

  useEffect(() => {
    fetch("team2.json")
      .then((res) => res.json())
      .then((data) => setTeams2(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto my-32 p-5 md:p-4 lg:p-2">
      <h2 className="text-4xl font-bold text-center">Meet The Team</h2>
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4  my-20 p-5 md:p-4 lg:p-2">
        {teams.map((person) => (
          <Person key={person.id} person={person}></Person>
        ))}
      </div>
    </div>
  );
};

export default Team;
