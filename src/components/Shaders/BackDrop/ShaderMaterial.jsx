import * as THREE from "three";
import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";

// Import GLSL shaders
import vertexShader from "../BackDrop/myShader.vert.glsl";
import fragmentShader from "../BackDrop/myShader.frag.glsl";

// Create shader material without using 'new'
const ShaderMaterial = shaderMaterial(
  {
    iResolution: new THREE.Vector2(window.innerWidth, window.innerHeight),
    iTime: 0,
  },
  vertexShader,
  fragmentShader
);

// Extend the material to be used as a JSX element
extend({ ShaderMaterial });

export { ShaderMaterial };
