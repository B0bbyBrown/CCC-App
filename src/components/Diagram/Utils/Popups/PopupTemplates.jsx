import React from "react";
import styles from "./PopupTemplates.module.css";

export const PlatformTemplate = ({ data }) => (
  <div className={styles.platformTemplate}>
    <h3>{data.name}</h3>
    <p>
      <strong>Type:</strong> {data.type}
    </p>
    <p>
      <strong>Description:</strong> {data.description}
    </p>
    {data.services && (
      <div>
        <h4>Services:</h4>
        <ul>
          {data.services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

export const ServiceTemplate = ({ data }) => (
  <div className={styles.serviceTemplate}>
    <h3>{data.name}</h3>
    <p>
      <strong>Type:</strong> {data.type}
    </p>
    <p>
      <strong>Description:</strong> {data.description}
    </p>
    {data.features && (
      <div>
        <h4>Features:</h4>
        <ul>
          {data.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

// Add more templates as needed for different types of nodes
