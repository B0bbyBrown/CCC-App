import React from "react";

export const ProjectCard = ({ project }) => (
  <div>
    <h3>{project.name}</h3>
    <p>{project.description}</p>
    <p>Duration: {project.duration}</p>
  </div>
);
