import * as THREE from "three";

export function getScreenPosition(camera, worldPosition) {
  const vector = worldPosition.clone().project(camera);
  const halfWidth = window.innerWidth / 2;
  const halfHeight = window.innerHeight / 2;

  return {
    x: vector.x * halfWidth + halfWidth,
    y: -(vector.y * halfHeight) + halfHeight,
  };
}
