import React from "react";

export const SkillsCard = ({ skills }) => (
  <div>
    <h3>Primary Skills</h3>
    <p>{skills.primarySkills.join(", ")}</p>
    <h3>Secondary Skills</h3>
    <p>{skills.secondarySkills.join(", ")}</p>
  </div>
);
