import * as THREE from "three";
import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";

// Import GLSL shaders
import vertexShader from "./myShader.vert.glsl";
import fragmentShader from "./myShader.frag.glsl";

const MyShaderMaterial = shaderMaterial(
  {
    iResolution: new THREE.Vector2(window.innerWidth, window.innerHeight),
    iTime: 0,
  },
  vertexShader,
  fragmentShader
);

// Extend the material to be used as a JSX element
extend({ MyShaderMaterial });

export { MyShaderMaterial };
