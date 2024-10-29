import React from "react";
import {
  CollaborationTemplate,
  AchievementsTemplate,
  EducationTemplate,
  SkillsTemplate,
  GoalsTemplate,
  ClientsTemplate,
} from "./Popups/PopupTemplates";

export const renderData = (label, data) => {
  console.group("Rendering Data");
  console.log("Label:", label);
  console.log("Data:", data);

  let renderedData;
  switch (label.toLowerCase()) {
    case "collaborations":
      renderedData = <CollaborationTemplate data={data} />;
      break;
    case "achievements":
      renderedData = <AchievementsTemplate data={data} />;
      break;
    case "education":
      renderedData = <EducationTemplate data={data} />;
      break;
    case "skills":
      renderedData = <SkillsTemplate data={data} />;
      break;
    case "goals":
      renderedData = <GoalsTemplate data={data} />;
      break;
    case "clients":
      renderedData = <ClientsTemplate data={data} />;
      break;
    default:
      renderedData = <pre>{JSON.stringify(data, null, 2)}</pre>;
  }

  console.groupEnd();
  return renderedData;
};
