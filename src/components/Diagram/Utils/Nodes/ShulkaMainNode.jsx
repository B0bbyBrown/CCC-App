import React from "react";
import { PlatformNode } from "./PlatformNode";

export const ShulkaMainNode = ({
  position,
  showPopup,
  hidePopup,
  data,
  onClick,
}) => {
  return (
    <PlatformNode
      position={position}
      label="Shulka"
      color="#EB03FF"
      onClick={onClick}
      onPointerOver={(e) => showPopup("Shulka", [e.clientX, e.clientY], data)}
      onPointerOut={hidePopup}
    />
  );
};
