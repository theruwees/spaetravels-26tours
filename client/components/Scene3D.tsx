import { useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Float, Environment, useGLTF } from "@react-three/drei";
import * as THREE from "three";

function SriLankaIsland() {
  const meshRef = useRef<THREE.Group>(null);
  const palmTreesRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
    }
    if (palmTreesRef.current) {
      palmTreesRef.current.children.forEach((tree, i) => {
        tree.rotation.z = Math.sin(state.clock.elapsedTime + i) * 0.1;
      });
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <group ref={meshRef} position={[0, 0, 0]}>
        {/* Main Island Shape */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[2, 32, 32]} />
          <meshStandardMaterial
            color="#10b981"
            roughness={0.7}
            metalness={0.1}
          />
        </mesh>

        {/* Mountain Peaks */}
        <mesh position={[0, 1.2, 0]}>
          <coneGeometry args={[0.6, 1.5, 8]} />
          <meshStandardMaterial color="#059669" />
        </mesh>
        <mesh position={[0.8, 0.8, 0.5]}>
          <coneGeometry args={[0.4, 1, 6]} />
          <meshStandardMaterial color="#047857" />
        </mesh>
        <mesh position={[-0.6, 0.6, -0.8]}>
          <coneGeometry args={[0.3, 0.8, 6]} />
          <meshStandardMaterial color="#065f46" />
        </mesh>

        {/* Palm Trees */}
        <group ref={palmTreesRef}>
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i / 12) * Math.PI * 2;
            const radius = 1.8 + Math.random() * 0.4;
            return (
              <group
                key={i}
                position={[
                  Math.cos(angle) * radius,
                  Math.sin(i * 0.5) * 0.3 + 0.5,
                  Math.sin(angle) * radius,
                ]}
              >
                {/* Palm trunk */}
                <mesh>
                  <cylinderGeometry args={[0.05, 0.08, 1.2, 8]} />
                  <meshStandardMaterial color="#92400e" />
                </mesh>
                {/* Palm leaves */}
                <mesh position={[0, 0.6, 0]}>
                  <sphereGeometry args={[0.3, 8, 8]} />
                  <meshStandardMaterial color="#15803d" />
                </mesh>
              </group>
            );
          })}
        </group>

        {/* Beaches */}
        <mesh position={[0, -0.2, 0]}>
          <ringGeometry args={[1.9, 2.3, 32]} />
          <meshStandardMaterial color="#fcd34d" opacity={0.8} transparent />
        </mesh>

        {/* Temple/Monument */}
        <mesh position={[0, 1.8, 0]}>
          <cylinderGeometry args={[0.15, 0.15, 0.4, 8]} />
          <meshStandardMaterial color="#dc2626" />
        </mesh>
      </group>
    </Float>
  );
}

function TouristPlane() {
  const meshRef = useRef<THREE.Group>(null);
  const propellerRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime * 0.3;
      meshRef.current.position.x = Math.sin(time) * 4;
      meshRef.current.position.z = Math.cos(time) * 4;
      meshRef.current.position.y = 2 + Math.sin(time * 2) * 0.3;
      meshRef.current.rotation.y =
        Math.atan2(Math.cos(time), Math.sin(time)) + Math.PI / 2;
      meshRef.current.rotation.z = Math.sin(time * 4) * 0.1;
    }
    if (propellerRef.current) {
      propellerRef.current.rotation.z += 0.5;
    }
  });

  return (
    <group ref={meshRef} position={[3, 2, 3]}>
      {/* Airplane body */}
      <mesh>
        <cylinderGeometry args={[0.08, 0.12, 1.2, 12]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* Cockpit */}
      <mesh position={[0, 0.05, 0.4]}>
        <sphereGeometry args={[0.15, 12, 12]} />
        <meshStandardMaterial color="#1e40af" transparent opacity={0.7} />
      </mesh>

      {/* Wings */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[0.04, 1.8, 0.4]} />
        <meshStandardMaterial color="#dc2626" />
      </mesh>

      {/* Tail Wing */}
      <mesh position={[0, 0.3, -0.5]} rotation={[Math.PI / 6, 0, 0]}>
        <boxGeometry args={[0.03, 0.4, 0.3]} />
        <meshStandardMaterial color="#dc2626" />
      </mesh>

      {/* Propeller */}
      <mesh ref={propellerRef} position={[0, 0, 0.7]}>
        <boxGeometry args={[0.02, 0.8, 0.02]} />
        <meshStandardMaterial color="#374151" />
      </mesh>

      {/* Landing gear */}
      <mesh position={[0, -0.15, 0.2]}>
        <cylinderGeometry args={[0.02, 0.02, 0.15, 6]} />
        <meshStandardMaterial color="#374151" />
      </mesh>
    </group>
  );
}

function IndianOcean() {
  const meshRef = useRef<THREE.Mesh>(null);
  const wavesRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      const positions = meshRef.current.geometry.attributes.position;

      for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i);
        const z = positions.getZ(i);
        const wave1 = Math.sin(x * 1.5 + time * 0.8) * 0.15;
        const wave2 = Math.sin(z * 1.2 + time * 0.6) * 0.1;
        const wave3 = Math.sin((x + z) * 0.8 + time * 1.2) * 0.08;
        positions.setY(i, wave1 + wave2 + wave3);
      }

      positions.needsUpdate = true;
    }

    if (wavesRef.current) {
      wavesRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group>
      {/* Main Ocean Surface */}
      <mesh
        ref={meshRef}
        position={[0, -2.5, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <planeGeometry args={[25, 25, 80, 80]} />
        <meshStandardMaterial
          color="#0891b2"
          transparent
          opacity={0.8}
          roughness={0.05}
          metalness={0.2}
        />
      </mesh>

      {/* Animated Wave Rings */}
      <group ref={wavesRef}>
        {[...Array(5)].map((_, i) => (
          <mesh key={i} position={[0, -2.3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <ringGeometry args={[3 + i * 2, 3.2 + i * 2, 32]} />
            <meshStandardMaterial
              color="#06b6d4"
              transparent
              opacity={0.3 - i * 0.05}
            />
          </mesh>
        ))}
      </group>

      {/* Boats */}
      <mesh position={[4, -1.8, -3]}>
        <boxGeometry args={[0.6, 0.2, 0.15]} />
        <meshStandardMaterial color="#dc2626" />
      </mesh>
      <mesh position={[-3, -1.9, 4]}>
        <boxGeometry args={[0.8, 0.25, 0.2]} />
        <meshStandardMaterial color="#059669" />
      </mesh>
    </group>
  );
}

const Scene3D = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [5, 3, 5], fov: 60 }}
        style={{
          background: "linear-gradient(to bottom, #0ea5e9, #38bdf8, #7dd3fc)",
        }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, -5]} intensity={0.5} />

        <SriLankaIsland />
        <TouristPlane />
        <IndianOcean />

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
