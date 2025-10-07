import React, { useRef, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import * as THREE from "three";

export default function Image3D({ src = "/shelder.png" }) {
  const groupRef = useRef();
  const texture = useLoader(TextureLoader, src);

  // Efeito de rotação leve com o mouse
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      if (groupRef.current) {
        groupRef.current.rotation.x = -y * 0.3;
        groupRef.current.rotation.y = x * 0.3;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="w-[300px] sm:w-[400px] lg:w-[500px] h-[400px]">
      <Canvas
        camera={{ position: [0, 0, 5] }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[2, 2, 5]} intensity={1.5} />

        <group ref={groupRef}>
          <mesh>
            <planeGeometry args={[6, 6]} />
            <meshStandardMaterial
              map={texture}
              side={THREE.DoubleSide}
              transparent
            />
          </mesh>
        </group>
      </Canvas>
    </div>
  );
}
