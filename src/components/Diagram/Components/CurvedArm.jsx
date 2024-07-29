import React from "react";
import { Line } from "@react-three/drei";
import * as THREE from "three";

export const CurvedArm = ({ start, end, color }) => {
  const curve = new THREE.QuadraticBezierCurve3(
    new THREE.Vector3(...start),
    new THREE.Vector3(
      (start[0] + end[0]) / 2,
      (start[1] + end[1]) / 2 + 5,
      (start[2] + end[2]) / 2
    ),
    new THREE.Vector3(...end)
  );

  const points = curve.getPoints(50);
  const linePoints = points.map((point) => [point.x, point.y, point.z]);

  return <Line points={linePoints} color={color} lineWidth={2} />;
};
