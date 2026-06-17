'use client';

import { useRef, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, useAnimations, ContactShadows, Float } from '@react-three/drei';
import * as THREE from 'three';

function Robot() {
  const group = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF('/models/robot.glb');
  const { actions, names } = useAnimations(animations, group);
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Prefer a friendly idle/wave animation if present
    const pick = names.find((n) => /wave/i.test(n)) || names.find((n) => /idle/i.test(n)) || names[0];
    if (pick && actions[pick]) {
      actions[pick].reset().fadeIn(0.4).play();
    }
    return () => {
      if (pick && actions[pick]) actions[pick].fadeOut(0.2);
    };
  }, [actions, names]);

  useEffect(() => {
    scene.traverse((o) => {
      o.castShadow = true;
      o.receiveShadow = true;
    });
  }, [scene]);

  useFrame((state) => {
    if (!group.current) return;
    // gentle mouse-follow rotation
    target.current.x = state.pointer.y * 0.18;
    target.current.y = state.pointer.x * 0.5;
    group.current.rotation.x += (target.current.x - group.current.rotation.x) * 0.05;
    group.current.rotation.y += (target.current.y - group.current.rotation.y) * 0.05;
  });

  return (
    <Float speed={1.3} rotationIntensity={0.12} floatIntensity={0.28}>
      <group ref={group} dispose={null} position={[0, -2.1, 0]} scale={0.78}>
        <primitive object={scene} />
      </group>
    </Float>
  );
}

function Loader3D() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((s) => {
    if (ref.current) ref.current.rotation.y = s.clock.elapsedTime;
  });
  return (
    <mesh ref={ref}>
      <torusGeometry args={[0.7, 0.18, 16, 80]} />
      <meshStandardMaterial color="#7C3AED" metalness={0.6} roughness={0.2} />
    </mesh>
  );
}

function Rig() {
  const { camera } = useThree();
  useFrame((state) => {
    camera.position.x += (state.pointer.x * 0.4 - camera.position.x) * 0.04;
    camera.position.y += (0.6 + state.pointer.y * 0.2 - camera.position.y) * 0.04;
    camera.lookAt(0, -0.2, 0);
  });
  return null;
}

export default function HeroScene() {
  return (
    <div className="w-full h-full">
      <Canvas
        shadows
        camera={{ position: [0, 0.6, 9], fov: 40 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.8]}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[4, 6, 4]} intensity={1.6} castShadow shadow-mapSize={[1024, 1024]} />
        <pointLight position={[-4, 2, 3]} intensity={40} color="#7C3AED" />
        <pointLight position={[4, 0, 2]} intensity={25} color="#6366F1" />

        <Suspense fallback={<Loader3D />}>
          <Robot />
        </Suspense>

        <ContactShadows position={[0, -2.1, 0]} opacity={0.32} scale={10} blur={2.8} far={4.5} color="#4C1D95" />
        <Rig />
      </Canvas>
    </div>
  );
}

useGLTF.preload('/models/robot.glb');
