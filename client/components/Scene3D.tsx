import { useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Float, Environment, useGLTF } from "@react-three/drei";
import * as THREE from "three";

function FloatingIsland() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshStandardMaterial color="#22c55e" roughness={0.3} metalness={0.1} />
        {/* Trees */}
        {Array.from({ length: 8 }).map((_, i) => (
          <mesh
            key={i}
            position={[
              Math.cos((i / 8) * Math.PI * 2) * 1.2,
              0.8,
              Math.sin((i / 8) * Math.PI * 2) * 1.2,
            ]}
          >
            <coneGeometry args={[0.1, 0.6, 8]} />
            <meshStandardMaterial color="#166534" />
          </mesh>
        ))}
        {/* Beach areas */}
        <mesh position={[0, -0.1, 0]}>
          <ringGeometry args={[1.4, 1.6, 32]} />
          <meshStandardMaterial color="#fbbf24" />
        </mesh>
      </mesh>
    </Float>
  );
}

function Airplane() {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.5) * 3;
      meshRef.current.position.z = Math.cos(state.clock.elapsedTime * 0.5) * 3;
      meshRef.current.rotation.y = Math.atan2(
        Math.cos(state.clock.elapsedTime * 0.5),
        Math.sin(state.clock.elapsedTime * 0.5),
      );
    }
  });

  return (
    <group ref={meshRef} position={[2, 1, 2]}>
      {/* Airplane body */}
      <mesh>
        <cylinderGeometry args={[0.05, 0.1, 0.8, 8]} />
        <meshStandardMaterial color="#3b82f6" />
      </mesh>
      {/* Wings */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[0.02, 1.2, 0.3]} />
        <meshStandardMaterial color="#1e40af" />
      </mesh>
      {/* Tail */}
      <mesh position={[0, 0.2, -0.3]} rotation={[Math.PI / 4, 0, 0]}>
        <boxGeometry args={[0.02, 0.3, 0.2]} />
        <meshStandardMaterial color="#1e40af" />
      </mesh>
    </group>
  );
}

function Ocean() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      const positions = meshRef.current.geometry.attributes.position;

      for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i);
        const z = positions.getZ(i);
        const wave =
          Math.sin(x * 2 + time) * 0.1 + Math.sin(z * 2 + time * 0.5) * 0.05;
        positions.setY(i, wave);
      }

      positions.needsUpdate = true;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[20, 20, 50, 50]} />
      <meshStandardMaterial
        color="#0ea5e9"
        transparent
        opacity={0.7}
        roughness={0.1}
        metalness={0.1}
      />
    </mesh>
  );
}

const Scene3D = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [5, 3, 5], fov: 60 }}
        style={{ background: "linear-gradient(to bottom, #87CEEB, #E0F6FF)" }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, -5]} intensity={0.5} />

        <FloatingIsland />
        <Airplane />
        <Ocean />

        <Environment preset="sunset" />

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 6}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default Scene3D;
