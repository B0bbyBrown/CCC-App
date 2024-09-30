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
    const direction = new THREE.Vector3().subVectors(curveEnd, curveStart);
    const perpendicular = new THREE.Vector3(
      -direction.z,
      0,
      direction.x
    ).normalize();
    const controlPoint = midPoint.clone().add(perpendicular.multiplyScalar(10));

    return new THREE.QuadraticBezierCurve3(curveStart, controlPoint, curveEnd);
  }, [start, end]);

  const points = useMemo(() => curve.getPoints(50), [curve]);

  return <Line points={points} color={color} lineWidth={1} />;
};
