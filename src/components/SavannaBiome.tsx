"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  uniform vec2 uMouse;
  varying vec2 vUv;

  // Classic Perlin 2D Noise 
  vec4 permute(vec4 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
  vec2 fade(vec2 t) { return t*t*t*(t*(t*6.0-15.0)+10.0); }
  float cnoise(vec2 P) {
    vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
    vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
    Pi = mod(Pi, 289.0); // To avoid truncation effects in permutation
    vec4 ix = Pi.xzxz;
    vec4 iy = Pi.yyww;
    vec4 fx = Pf.xzxz;
    vec4 fy = Pf.yyww;
    vec4 i = permute(permute(ix) + iy);
    vec4 gx = 2.0 * fract(i * 0.0243902439) - 1.0; // 1/41 = 0.024...
    vec4 gy = abs(gx) - 0.5;
    vec4 tx = floor(gx + 0.5);
    gx = gx - tx;
    vec2 g00 = vec2(gx.x,gy.x);
    vec2 g10 = vec2(gx.y,gy.y);
    vec2 g01 = vec2(gx.z,gy.z);
    vec2 g11 = vec2(gx.w,gy.w);
    vec4 norm = 1.79284291400159 - 0.85373472095314 * vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));
    g00 *= norm.x;
    g01 *= norm.y;
    g10 *= norm.z;
    g11 *= norm.w;
    float n00 = dot(g00, vec2(Pf.x, Pf.y));
    float n10 = dot(g10, vec2(Pf.z, Pf.w));
    float n01 = dot(g01, vec2(Pf.x, Pf.y));
    float n11 = dot(g11, vec2(Pf.z, Pf.w));
    vec2 fade_xy = fade(Pf.xy);
    vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
    float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
    return 2.3 * n_xy;
  }

  void main() {
    // Coordinate distortion based on mouse and time
    vec2 st = vUv * 10.0;
    
    // Add noise distortion
    float noise = cnoise(st * 2.0 + uTime * 0.2 + uMouse * 2.0);
    
    // Create the zebra stripes using sine waves on the distorted coordinates
    float stripes = sin(st.y * 15.0 + noise * 5.0);
    
    // Sharpen the stripes into distinct black and white
    float mask = smoothstep(-0.2, 0.2, stripes);
    
    // Colors (Charcoal and Zebra White)
    vec3 charcoal = vec3(0.11, 0.11, 0.12);
    vec3 zebraWhite = vec3(0.95, 0.95, 0.94);
    
    vec3 color = mix(charcoal, zebraWhite, mask);
    
    gl_FragColor = vec4(color, 1.0);
  }
`;

export default function SavannaBiome() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
    }),
    []
  );

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
      // Calculate normalized mouse coordinates (-1 to +1) based on state pointer
      materialRef.current.uniforms.uMouse.value.x = THREE.MathUtils.lerp(
        materialRef.current.uniforms.uMouse.value.x,
        state.pointer.x,
        0.05
      );
      materialRef.current.uniforms.uMouse.value.y = THREE.MathUtils.lerp(
        materialRef.current.uniforms.uMouse.value.y,
        state.pointer.y,
        0.05
      );
    }
  });

  return (
    <mesh position={[0, 0, -5]}>
      {/* Full screen plane to cover the background */}
      <planeGeometry args={[20, 15]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}
