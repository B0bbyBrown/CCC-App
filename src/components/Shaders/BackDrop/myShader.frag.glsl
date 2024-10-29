#ifdef GL_ES
precision mediump float;
#endif

uniform float iTime;
uniform vec2 iResolution;
uniform vec4 overlayColor;
varying vec2 vUv;

void main() {
    vec2 uv = vUv;
    
    // Create a gradient effect
    vec3 color = mix(
        vec3(0.1, 0.1, 0.1),
        overlayColor.rgb,
        uv.y + sin(iTime * 0.5 + uv.x * 5.0) * 0.1
    );
    
    // Add time-based animation
    float pulse = sin(iTime) * 0.5 + 0.5;
    color *= 0.8 + pulse * 0.2;
    
    gl_FragColor = vec4(color, overlayColor.a);
}
