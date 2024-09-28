import React, { useEffect, useState } from "react";
import { DynamicJsonDisplay } from "../../components/D-J-D/DynamicJsonDisplay";

export function Keshav() {
  const [keshavData, setKeshavData] = useState(null);

  useEffect(() => {
    fetch("/Json/keshavData.json")
      .then((response) => response.json())
      .then((data) => {
        console.log("Keshav Data:", data); // Debugging log
        setKeshavData(data);
      })
      .catch((error) => console.error("Error fetching Keshav's data:", error));
  }, []);

  if (!keshavData) return <div>Loading...</div>;

  return (
    <div className="keshav-container">
      <h1>Keshav's Profile</h1>
      <DynamicJsonDisplay data={keshavData} /> {/* Passing data to DJD */}
    </div>
  );
}
