import React from "react";

export const renderData = (data) => {
  if (Array.isArray(data)) {
    return (
      <ul>
        {data.map((item, index) => (
          <li key={index}>{renderData(item)}</li>
        ))}
      </ul>
    );
  } else if (typeof data === "object" && data !== null) {
    return (
      <ul>
        {Object.entries(data).map(([key, value], index) => (
          <li key={index}>
            <strong>{key}:</strong> {renderData(value)}
          </li>
        ))}
      </ul>
    );
  } else if (typeof data === "boolean") {
    return data ? "True" : "False";
  } else if (data !== undefined && data !== null) {
    return data.toString();
  } else {
    return "No data available";
  }
};
