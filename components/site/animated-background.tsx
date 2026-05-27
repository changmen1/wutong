"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;

const fragmentShader = `
precision highp float;
uniform float uTime;
uniform vec2 uResolution;
varying vec2 vUv;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);

  return mix(
    mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

float fbm(vec2 p) {
  float value = 0.0;
  float amplitude = 0.52;
  mat2 rotate = mat2(0.82, -0.57, 0.57, 0.82);

  for (int i = 0; i < 5; i++) {
    value += amplitude * noise(p);
    p = rotate * p * 2.02 + 0.17;
    amplitude *= 0.52;
  }

  return value;
}

float silkBand(vec2 p, float offset, float speed, float amplitude) {
  float wave =
    p.y + offset +
    sin(p.x * 1.72 + uTime * speed) * amplitude +
    sin(p.x * 3.2 - uTime * speed * 0.72) * amplitude * 0.38;

  return exp(-wave * wave * 13.5);
}

void main() {
  vec2 uv = vUv;
  vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);
  vec2 p = (uv - 0.5) * aspect;
  float t = uTime;

  vec2 drift = vec2(t * 0.052, -t * 0.038);
  float cloud = fbm(p * 1.35 + drift);
  float detail = fbm(p * 3.1 - drift * 1.45);

  vec2 warped = p;
  warped.x += (cloud - 0.5) * 0.34 + sin(t * 0.21 + p.y * 1.8) * 0.04;
  warped.y += (detail - 0.5) * 0.18;

  float bandA = silkBand(warped, -0.18, 0.58, 0.20);
  float bandB = silkBand(warped + vec2(0.18, -0.02), 0.12, -0.44, 0.16);
  float bandC = silkBand(warped + vec2(-0.12, 0.08), 0.02, 0.36, 0.12);

  float shimmer =
    pow(0.5 + 0.5 * sin((warped.x * 2.6 + warped.y * 1.8 + cloud * 2.4 + t * 0.68) * 3.14159), 4.0);
  float hairline =
    pow(abs(sin((warped.x * 1.4 - warped.y * 1.9 + detail * 2.2 - t * 0.42) * 9.0)), 20.0);

  vec3 base = vec3(0.986, 0.974, 0.952);
  vec3 cyan = vec3(0.45, 0.86, 0.94);
  vec3 rose = vec3(0.98, 0.44, 0.64);
  vec3 violet = vec3(0.64, 0.54, 0.98);
  vec3 ink = vec3(0.16, 0.15, 0.18);

  vec3 color = base;
  color = mix(color, cyan, bandA * 0.36);
  color = mix(color, rose, bandB * 0.30);
  color = mix(color, violet, bandC * 0.32);
  color += vec3(0.08, 0.05, 0.10) * shimmer * (bandA + bandB) * 0.08;
  color += vec3(0.95, 0.35, 0.58) * hairline * 0.035;

  float stage = smoothstep(1.34, 0.06, length(p - vec2(0.0, -0.06)));
  float edge = smoothstep(0.18, 1.42, length(p));
  color = mix(color, vec3(1.0, 0.985, 0.965), 0.18 * stage);
  color = mix(color, ink, edge * 0.08);

  float alpha = 0.90 - edge * 0.10;

  gl_FragColor = vec4(color, alpha);
}
`;

function seededNoise(seed: number) {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
}

function GradientPlane() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const { size } = useThree();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(size.width, size.height) },
    }),
    [size.width, size.height],
  );

  useFrame(({ clock }) => {
    if (!materialRef.current) return;
    materialRef.current.uniforms.uTime.value = clock.elapsedTime;
    materialRef.current.uniforms.uResolution.value.set(size.width, size.height);
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
        depthWrite={false}
      />
    </mesh>
  );
}

function AmbientParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  const { viewport } = useThree();

  const positions = useMemo(() => {
    const count = 160;
    const data = new Float32Array(count * 3);

    for (let i = 0; i < count; i += 1) {
      data[i * 3] = (seededNoise(i + 1) - 0.5) * viewport.width * 1.25;
      data[i * 3 + 1] =
        (seededNoise(i + 101) - 0.5) * viewport.height * 1.25;
      data[i * 3 + 2] = (seededNoise(i + 201) - 0.5) * 0.8;
    }

    return data;
  }, [viewport.height, viewport.width]);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.z = Math.sin(clock.elapsedTime * 0.05) * 0.06;
    pointsRef.current.position.y = Math.sin(clock.elapsedTime * 0.18) * 0.04;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#f472b6"
        size={0.018}
        transparent
        opacity={0.42}
        depthWrite={false}
      />
    </points>
  );
}

export function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="three-background pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <Canvas
        className="size-full"
        orthographic
        camera={{ position: [0, 0, 5], zoom: 90 }}
        dpr={[1, 1.75]}
        style={{ height: "100%", width: "100%" }}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
          preserveDrawingBuffer: true,
        }}
      >
        <GradientPlane />
        <AmbientParticles />
        <Preload all />
      </Canvas>
    </div>
  );
}
