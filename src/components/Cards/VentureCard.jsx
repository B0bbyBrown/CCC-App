import React from "react";

export const VentureCard = ({ venture }) => (
  <div>
    <h3>{venture.name}</h3>
    <p>Duration: {venture.duration}</p>
    <p>Skills: {venture.skills.join(", ")}</p>
  </div>
);
