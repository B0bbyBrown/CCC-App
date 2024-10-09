import * as THREE from "three";

export function getScreenPosition(camera, worldPosition) {
  const vector = Array.isArray(worldPosition)
    ? new THREE.Vector3(...worldPosition)
    : worldPosition.clone();

  vector.project(camera);
  const halfWidth = window.innerWidth / 2;
  const halfHeight = window.innerHeight / 2;

  return {
    x: vector.x * halfWidth + halfWidth,
    y: -(vector.y * halfHeight) + halfHeight,
  };
}
