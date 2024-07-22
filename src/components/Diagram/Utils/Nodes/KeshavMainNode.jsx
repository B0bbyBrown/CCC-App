import React from "react";
import { PlatformNode } from "./PlatformNode";

export const KeshavMainNode = ({
  position,
  showPopup,
  hidePopup,
  data,
  onClick,
}) => {
  return (
    <PlatformNode
      position={position}
      label="Keshav"
      color="#3CF3FF"
      onClick={onClick}
      onPointerOver={(e) => showPopup("Keshav", [e.clientX, e.clientY], data)}
      onPointerOut={hidePopup}
    />
  );
};
