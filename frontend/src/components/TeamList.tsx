import React, { useState, useEffect } from "react";
import TeamCard from "./TeamCard";
import teamsData from "../CollegeBasketballTeams.json";  // Import JSON

// Define the type for a team object
interface Team {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

const TeamList: React.FC = () => {
  const [teams, setTeams] = useState<Team[]>([]);  // Provide type

  useEffect(() => {
    setTeams(teamsData.teams);  // Now TypeScript knows the structure
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {teams.map((team) => (
        <TeamCard 
          key={team.tid} 
          school={team.school} 
          name={team.name} 
          city={team.city} 
          state={team.state} 
        />
      ))}
    </div>
  );
};

export default TeamList;
