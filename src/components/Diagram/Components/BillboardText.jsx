import React from "react";
import { Text, Billboard } from "@react-three/drei";

export const BillboardText = ({ children, ...props }) => {
  return (
    <Billboard>
      <Text {...props}>{children}</Text>
    </Billboard>
  );
};
