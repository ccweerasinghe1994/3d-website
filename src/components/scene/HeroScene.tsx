"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import {
  vertexShader,
  beautyFragment,
  albedoFragment,
  normalFragment,
  depthFragment,
  wireFragment,
} from "./shaders/passShaders";
import { usePassStore, type Pass } from "@/hooks/usePassStore";

const PASS_COLORS: Record<Pass, THREE.Vector3> = {
  BEAUTY: new THREE.Vector3(0.549, 0.549, 0.961), // --normal periwinkle
  ALBEDO: new THREE.Vector3(0.549, 0.549, 0.961),
  NORMAL: new THREE.Vector3(0.549, 0.549, 0.961),
  DEPTH:  new THREE.Vector3(0.549, 0.549, 0.961),
  WIRE:   new THREE.Vector3(0.549, 0.549, 0.961),
};

const WIRE_LINE_COLOR = new THREE.Vector3(0.549, 0.549, 0.961); // --normal

function getFragmentForPass(pass: Pass): string {
  switch (pass) {
    case "ALBEDO": return albedoFragment;
    case "NORMAL": return normalFragment;
    case "DEPTH":  return depthFragment;
    case "WIRE":   return wireFragment;
    default:       return beautyFragment;
  }
}

interface PassMeshProps {
  geometry: THREE.BufferGeometry;
  pass: Pass;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
  rotationSpeed?: [number, number, number];
}

function PassMesh({
  geometry,
  pass,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  rotationSpeed = [0.003, 0.005, 0],
}: PassMeshProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.Mesh>(null);
  const solidMaterial = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader: getFragmentForPass(pass),
        uniforms: {
          uTime:  { value: 0 },
          uColor: { value: PASS_COLORS[pass] },
          uPassBlend: { value: 0 },
        },
        side: THREE.FrontSide,
      }),
    [pass]
  );

  const wireMaterial = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader: wireFragment,
        uniforms: {
          uLineColor: { value: WIRE_LINE_COLOR },
          uTime: { value: 0 },
          uColor: { value: WIRE_LINE_COLOR },
          uPassBlend: { value: 0 },
        },
        wireframe: true,
      }),
    []
  );

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (meshRef.current) {
      meshRef.current.rotation.x = rotationSpeed[0] * t * 60;
      meshRef.current.rotation.y = rotationSpeed[1] * t * 60;
      meshRef.current.rotation.z = rotationSpeed[2] * t * 60;
      (meshRef.current.material as THREE.ShaderMaterial).uniforms.uTime.value = t;
    }
    if (wireRef.current) {
      wireRef.current.rotation.copy(meshRef.current!.rotation);
    }
  });

  const showWire = pass === "WIRE";

  return (
    <>
      <mesh
        ref={meshRef}
        geometry={geometry}
        material={solidMaterial}
        position={position}
        rotation={rotation}
        scale={scale}
        visible={!showWire}
      />
      <mesh
        ref={wireRef}
        geometry={geometry}
        material={wireMaterial}
        position={position}
        rotation={rotation}
        scale={scale}
        visible={showWire}
      />
    </>
  );
}

// Subtle camera drift — disabled in prefers-reduced-motion
function CameraRig() {
  const reduce = typeof window !== "undefined"
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;

  useFrame((state) => {
    if (reduce) return;
    const t = state.clock.elapsedTime;
    state.camera.position.x = Math.sin(t * 0.08) * 0.4;
    state.camera.position.y = Math.cos(t * 0.06) * 0.25;
    state.camera.lookAt(0.3, 0, 0);
  });

  return null;
}

export default function HeroScene() {
  const activePass = usePassStore((s) => s.activePass);
  const loadPhase  = usePassStore((s) => s.loadPhase);

  // Determine effective pass based on load phase (for preloader animation)
  const effectivePass: Pass =
    loadPhase === "wire"   ? "WIRE"   :
    loadPhase === "normal" ? "NORMAL" :
    activePass;

  // Shared geometries
  const icosa    = useMemo(() => new THREE.IcosahedronGeometry(1.1, 3), []);
  const torus    = useMemo(() => new THREE.TorusKnotGeometry(0.75, 0.28, 128, 32), []);
  const sphere   = useMemo(() => new THREE.SphereGeometry(0.7, 48, 48), []);

  return (
    <>
      {/* Ambient light for beauty pass */}
      <ambientLight intensity={0.15} />
      <directionalLight position={[5, 8, 5]} intensity={1.2} color="#e6e2d9" />
      <pointLight position={[-4, -2, 3]} intensity={0.6} color="#8c8cf5" />

      {/* Subtle camera drift */}
      <CameraRig />
      <PassMesh
        geometry={icosa}
        pass={effectivePass}
        position={[0.6, 0.2, 0]}
        rotationSpeed={[0.002, 0.004, 0.001]}
        scale={1.2}
      />

      {/* Secondary — torus knot */}
      <PassMesh
        geometry={torus}
        pass={effectivePass}
        position={[-2.8, -0.8, -2]}
        rotationSpeed={[0.004, 0.002, 0.003]}
        scale={0.9}
      />

      {/* Tertiary — sphere */}
      <PassMesh
        geometry={sphere}
        pass={effectivePass}
        position={[2.4, -1.4, -3]}
        rotationSpeed={[0.001, 0.006, 0.002]}
        scale={0.8}
      />
    </>
  );
}
