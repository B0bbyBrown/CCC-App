import React from "react";
import { PlatformNode } from "./PlatformNode";

export const CompanyMainNode = ({
  position,
  showPopup,
  hidePopup,
  data,
  onClick,
}) => {
  return (
    <PlatformNode
      position={position}
      label="Curious Cat Creative"
      color="#FFFFFF"
      onClick={onClick}
      onPointerOver={(e) =>
        showPopup("Curious Cat Creative", [e.clientX, e.clientY], data)
      }
      onPointerOut={hidePopup}
    />
  );
};
