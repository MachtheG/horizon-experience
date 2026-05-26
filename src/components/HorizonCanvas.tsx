"use client";

import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import SavannaBiome from "./SavannaBiome";

export default function HorizonCanvas() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 780px)");
    const onChange = () => setIsMobile(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <div className="canvas-container">
      <Canvas
        dpr={isMobile ? [1, 1.2] : [1, 1.7]}
        camera={{ position: [0, 2, 5], fov: isMobile ? 66 : 75 }}
        gl={{ antialias: !isMobile, alpha: true, powerPreference: "high-performance" }}
      >
        <fog attach="fog" args={["#1b1a15", 6, 36]} />
        <SavannaBiome lowPower={isMobile} />
      </Canvas>
    </div>
  );
}
