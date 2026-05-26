"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

type Layer = "terrain" | "zebra" | "community";

type InteractiveRangeMap3DProps = {
  activeLayer: Layer;
};

function LayerPlane({
  color,
  y,
  scale,
  visible,
}: {
  color: string;
  y: number;
  scale: number;
  visible: boolean;
}) {
  return (
    <mesh position={[0, y, 0]} scale={[scale, 1, scale]} visible={visible}>
      <planeGeometry args={[5.2, 3.2, 18, 18]} />
      <meshStandardMaterial color={color} transparent opacity={0.82} />
    </mesh>
  );
}

export default function InteractiveRangeMap3D({ activeLayer }: InteractiveRangeMap3DProps) {
  return (
    <div className="map-3d-canvas-wrap" aria-label="Interactive 3D conservation map">
      <Canvas camera={{ position: [0, 2.7, 5.2], fov: 47 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[2, 4, 2]} intensity={0.7} />

        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
          <planeGeometry args={[10, 10]} />
          <meshStandardMaterial color="#3a2a1f" />
        </mesh>

        <LayerPlane color="#7a8b4f" y={0.2} scale={1} visible={activeLayer === "terrain"} />
        <LayerPlane color="#f1eadf" y={0.35} scale={0.92} visible={activeLayer === "zebra"} />
        <LayerPlane color="#bf7448" y={0.5} scale={0.85} visible={activeLayer === "community"} />

        <mesh position={[-1.25, 0.7, -0.2]}>
          <sphereGeometry args={[0.11, 18, 18]} />
          <meshStandardMaterial color="#f7efe3" emissive="#f7efe3" emissiveIntensity={0.45} />
        </mesh>
        <mesh position={[0.2, 0.9, 0.2]}>
          <sphereGeometry args={[0.1, 18, 18]} />
          <meshStandardMaterial color="#f7efe3" emissive="#f7efe3" emissiveIntensity={0.45} />
        </mesh>
        <mesh position={[1.2, 0.6, -0.4]}>
          <sphereGeometry args={[0.08, 18, 18]} />
          <meshStandardMaterial color="#f7efe3" emissive="#f7efe3" emissiveIntensity={0.45} />
        </mesh>

        <OrbitControls
          enablePan={false}
          minDistance={4}
          maxDistance={7.5}
          minPolarAngle={Math.PI / 3.4}
          maxPolarAngle={Math.PI / 2.05}
        />
      </Canvas>
    </div>
  );
}
