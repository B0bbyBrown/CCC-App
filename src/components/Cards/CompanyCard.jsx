import React from "react";

export const CompanyCard = ({ company }) => (
  <div>
    <h3>{company.role}</h3>
    <p>Years: {company.years}</p>
    <p>Skills: {company.skills.join(", ")}</p>
  </div>
);
