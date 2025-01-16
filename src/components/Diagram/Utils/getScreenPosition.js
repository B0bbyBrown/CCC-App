import * as THREE from "three";

export const getScreenPosition = (position3D, canvas, camera) => {
  // Create a vector from the 3D position
  const vector = new THREE.Vector3(position3D.x, position3D.y, position3D.z);

  // Project the 3D position to 2D screen space
  vector.project(camera);

  // Convert to screen coordinates
  const x = (vector.x * 0.5 + 0.5) * canvas.clientWidth;
  const y = (-vector.y * 0.5 + 0.5) * canvas.clientHeight;

  // Add canvas offset to get absolute position
  const rect = canvas.getBoundingClientRect();
  return {
    x: x + rect.left,
    y: y + rect.top,
  };
};
