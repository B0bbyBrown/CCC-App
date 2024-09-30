import React, { useMemo } from "react";
import { Line } from "@react-three/drei";
import * as THREE from "three";

export const CurvedArm = ({ start, end, color }) => {
  const curve = useMemo(() => {
    const curveStart = new THREE.Vector3(...start);
    const curveEnd = new THREE.Vector3(...end);
    const midPoint = new THREE.Vector3()
      .addVectors(curveStart, curveEnd)
      .multiplyScalar(0.5);
    midPoint.y += 5; // Adjust this value to control the curve height

    return new THREE.QuadraticBezierCurve3(curveStart, midPoint, curveEnd);
  }, [start, end]);

  const points = useMemo(() => curve.getPoints(50), [curve]);

  return <Line points={points} color={color} lineWidth={1} />;
};
