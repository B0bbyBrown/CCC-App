import * as THREE from "three";

export const getScreenPosition = (position, canvas, camera) => {
  if (!canvas || !position || !camera) return { x: 0, y: 0 };

  let vector;
  if (Array.isArray(position)) {
    vector = new THREE.Vector3().fromArray(position);
  } else if (position instanceof THREE.Vector3) {
    vector = position.clone();
  } else if (
    typeof position === "object" &&
    "x" in position &&
    "y" in position &&
    "z" in position
  ) {
    vector = new THREE.Vector3(position.x, position.y, position.z);
  } else {
    console.error("Invalid position format:", position);
    return { x: 0, y: 0 };
  }

  const widthHalf = canvas.clientWidth / 2;
  const heightHalf = canvas.clientHeight / 2;

  vector.project(camera);

  return {
    x: vector.x * widthHalf + widthHalf,
    y: -(vector.y * heightHalf) + heightHalf,
  };
};
