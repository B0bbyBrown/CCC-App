import React from "react";
import { PlatformNode } from "../../Components/PlatformNode";

const KeshavMainNode = ({ position, showPopup, hidePopup, data }) => {
  return (
    <PlatformNode
      position={position}
      label="Keshav"
      color="#3CF3FF" // Baby Blue
      onClick={() => showPopup("Keshav", position, data)}
      onMouseOut={hidePopup}
      data={data}
    />
  );
};

export default KeshavMainNode;
