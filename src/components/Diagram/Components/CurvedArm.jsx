import React, { useMemo } from "react";
import * as THREE from "three";
import { Line } from "@react-three/drei";

export const CurvedArm = ({ start, end, color }) => {
  const curve = useMemo(() => {
    const curveStart = new THREE.Vector3(...start);
    const curveEnd = new THREE.Vector3(...end);
    const midPoint = new THREE.Vector3()
      .addVectors(curveStart, curveEnd)
      .multiplyScalar(0.5);
    const height = curveStart.distanceTo(curveEnd) * 0.5;
    midPoint.y += height;

    const curve = new THREE.QuadraticBezierCurve3(
      curveStart,
      midPoint,
      curveEnd
    );
    return curve;
  }, [start, end]);

  const points = useMemo(() => curve.getPoints(50), [curve]);

  return <Line points={points} color={color} lineWidth={2} />;
};
