import * as THREE from "three";
import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";

export const CustomShaderMaterial = shaderMaterial(
  {
    iTime: 0,
    iResolution: new THREE.Vector2(1, 1),
    overlayColor: new THREE.Vector4(0.1, 0.2, 0.3, 0.8),
  },
  // Vertex shader
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // Fragment shader
  `
    precision mediump float;
    uniform float iTime;
    uniform vec2 iResolution;
    uniform vec4 overlayColor;
    varying vec2 vUv;
    
    void main() {
      vec2 uv = vUv;
      vec3 color = mix(
        vec3(0.1, 0.1, 0.1),
        overlayColor.rgb,
        uv.y + sin(iTime * 0.5 + uv.x * 5.0) * 0.1
      );
      float pulse = sin(iTime) * 0.5 + 0.5;
      color *= 0.8 + pulse * 0.2;
      gl_FragColor = vec4(color, overlayColor.a);
    }
  `
);

extend({ CustomShaderMaterial });
