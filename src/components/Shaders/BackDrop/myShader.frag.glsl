uniform vec2 iResolution;
uniform float iTime;
varying vec2 vUv;

float polygonDistance(vec2 p, float radius, float angleOffset, int sideCount) {
  float a = atan(p.x, p.y) + angleOffset;
  float b = 6.28319 / float(sideCount);
  return cos(floor(.5 + a / b) * b - a) * length(p) - radius;
}

#define HASHSCALE1 443.8975
float hash11(float p) {
  vec3 p3 = fract(vec3(p) * HASHSCALE1);
  p3 += dot(p3, p3.yzx + 19.19);
  return fract((p3.x + p3.y) * p3.z);
}

#define HASHSCALE3 vec3(0.0078, 0.3333, 0.3922)
vec2 hash21(float p) {
  vec3 p3 = fract(vec3(p) * HASHSCALE3);
  p3 += dot(p3, p3.yzx + 19.19);
  return fract(vec2((p3.x + p3.y) * p3.z, (p3.x + p3.z) * p3.y));
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 uv = fragCoord;
  uv.x *= iResolution.x / iResolution.y;

  float accum = 0.;
  for (int i = 0; i < 83; i++) {
    float fi = float(i);
    float thisYOffset = mod(hash11(fi * 0.017) * (iTime + 19.) * 0.2, 4.0) - 2.0;
    vec2 center = (hash21(fi) * 2. - 1.) * vec2(1.1, 1.0) - vec2(0.0, thisYOffset);
    float radius = 0.5;
    vec2 offset = uv - center;
    float twistFactor = (hash11(fi * 0.0347) * 2. - 1.) * 1.9;
    float rotation = 0.1 + iTime * 0.2 + sin(iTime * 0.1) * 0.9 + (length(offset) / radius) * twistFactor;
    accum += pow(smoothstep(radius, 0.0, polygonDistance(uv - center, 0.1 + hash11(fi * 2.3) * 0.2, rotation, 5) + 0.1), 3.0);
  }

  vec3 subColor = vec3(0.4, 0.8, 0.2);
  vec3 addColor = vec3(0.3, 0.2, 0.1);

  vec3 finalColor = vec3(0.9412, 0.6745, 0.9294) - accum * subColor + addColor;
  float alpha = smoothstep(0.0, 1.0, length(finalColor) * 0.5);  // Adjust alpha based on the color intensity

  fragColor = vec4(finalColor, alpha * 0.8); // 0.8 transparency for whites and blacks
}

void main() {
  mainImage(gl_FragColor, vUv);
}
