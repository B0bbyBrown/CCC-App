import React from "react";
import { Card } from "../Card/Card"; // Import Card component

export function RenderCategoryData(category, data) {
  if (Array.isArray(data)) {
    return data.map((item, index) => (
      <Card key={index}>
        <h3>{item.name || item.role || item.degree || "Unnamed"}</h3>
        <p>
          {item.description ||
            item.duration ||
            item.experience ||
            "No description"}
        </p>
      </Card>
    ));
  }

  if (typeof data === "object") {
    return (
      <div>
        {Object.entries(data).map(([key, value]) => (
          <div key={key}>
            <h3>{key}</h3>
            <p>{Array.isArray(value) ? value.join(", ") : value}</p>
          </div>
        ))}
      </div>
    );
  }

  return <div>No data available for {category}</div>;
}
