import React from "react";

// Define the type for props
interface TeamCardProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ school, name, city, state }) => {
  return (
    <div style={cardStyle}>
      <h2>{school}</h2>
      <p><strong>Mascot:</strong> {name}</p>
      <p><strong>Location:</strong> {city}, {state}</p>
    </div>
  );
};

// Inline CSS styles
const cardStyle: React.CSSProperties = {
  border: "1px solid #ddd",
  padding: "15px",
  margin: "10px",
  borderRadius: "5px",
  boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
  textAlign: "center",
};

export default TeamCard;
