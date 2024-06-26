import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const CurvedArm = ({ start, end, color, thickness = 0.05 }) => {
  const curveRef = useRef();

  useEffect(() => {
    if (!start || !end) {
      console.error("Invalid start or end position for CurvedArm", {
        start,
        end,
      });
      return;
    }

    const startVec = new THREE.Vector3(...start);
    const endVec = new THREE.Vector3(...end);
    const midPoint = new THREE.Vector3()
      .addVectors(startVec, endVec)
      .multiplyScalar(0.5);
    const midPointA = new THREE.Vector3().lerpVectors(startVec, midPoint, 0.5);
    const midPointB = new THREE.Vector3().lerpVectors(midPoint, endVec, 0.5);

    // Adjust control points to create an under and around shape
    midPointA.y -= Math.abs(end[0] - start[0]) * 0.5;
    midPointB.y -= Math.abs(end[0] - start[0]) * 0.5;

    const curve = new THREE.CubicBezierCurve3(
      startVec,
      midPointA,
      midPointB,
      endVec
    );
    const points = curve.getPoints(50);
    const geometry = new THREE.BufferGeometry().setFromPoints(points);

    curveRef.current.geometry = geometry;
  }, [start, end]);

  return (
    <line ref={curveRef}>
      <bufferGeometry />
      <lineBasicMaterial color={color} linewidth={thickness} />
    </line>
  );
};

export { CurvedArm };
