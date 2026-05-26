"use client";

import { Canvas } from "@react-three/fiber";
import SavannaBiome from "./SavannaBiome";

export default function HorizonCanvas() {
  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 2, 5], fov: 75 }}>
        <fog attach="fog" args={["#1C1C1E", 5, 30]} />
        <SavannaBiome />
      </Canvas>
    </div>
  );
}
