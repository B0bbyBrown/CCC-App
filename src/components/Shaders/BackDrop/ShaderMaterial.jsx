import * as THREE from "three";
import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";

// Import GLSL shaders
import vertexShader from "../BackDrop/myShader.vert.glsl";
import fragmentShader from "../BackDrop/myShader.frag.glsl";

// Create shader material
const CustomShaderMaterial = shaderMaterial(
  {
    iResolution: new THREE.Vector2(1, 1),
    iTime: 0,
  },
  vertexShader,
  fragmentShader
);

// Extend the material to be used as a JSX element
extend({ CustomShaderMaterial });

console.log("CustomShaderMaterial created:", CustomShaderMaterial);

export { CustomShaderMaterial };
