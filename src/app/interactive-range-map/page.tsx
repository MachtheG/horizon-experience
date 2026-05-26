"use client";

import Image from "next/image";
import { useState } from "react";

type Layer = "terrain" | "zebra" | "community";

export default function InteractiveRangeMapPage() {
  const [layer, setLayer] = useState<Layer>("terrain");

  return (
    <main className="page">
      <section className="hero">
        <div className="hero-grid">
          <div>
            <p className="eyebrow">Recommended Experience</p>
            <h1 className="hero-title">Interactive Range Map</h1>
            <p className="hero-subtitle mono">
              A digital-space map view of conservancy areas, zebra distribution, and movement pressure corridors.
            </p>
            <p className="lead">
              This 3D-ready concept is structured for future GIS integration. It helps users explore landscape
              context, seasonal pressure zones, and why habitat connectivity matters for Grevy&apos;s zebra survival.
            </p>
            <div className="map-toggle-row">
              <button className="neo-btn" type="button" aria-pressed={layer === "terrain"} onClick={() => setLayer("terrain")}>Terrain</button>
              <button className="neo-btn" type="button" aria-pressed={layer === "zebra"} onClick={() => setLayer("zebra")}>Zebra Distribution</button>
              <button className="neo-btn" type="button" aria-pressed={layer === "community"} onClick={() => setLayer("community")}>Community Boundaries</button>
            </div>
          </div>
          <div className="hero-media">
            <Image
              src="https://www.grevyszebratrust.org/wp-content/uploads/2020/07/Isiolo-Moyale-Highway-A2_Resson-Kantai-Duff.jpg"
              alt="Northern Kenya rangeland terrain where Grevy's zebra range overlaps community landscapes"
              fill
              className="neo-image-frame"
            />
          </div>
        </div>
      </section>

      <section className="card">
        <h3>Interactive Layer Preview</h3>
        <div className="map-layer-wrap" style={{ marginTop: "0.8rem" }}>
          <div className={`map-layer map-layer-terrain ${layer === "terrain" ? "is-active" : ""}`} />
          <div className={`map-layer map-layer-zebra ${layer === "zebra" ? "is-active" : ""}`} />
          <div className={`map-layer map-layer-community ${layer === "community" ? "is-active" : ""}`} />
        </div>
      </section>

      <section className="card" style={{ perspective: "1200px" }}>
        <h3>3D Layer Stack</h3>
        <div className="card-grid cols-3" style={{ marginTop: "0.8rem" }}>
          <article className="card" style={{ transform: "translateZ(28px)", borderColor: "rgba(55, 228, 210, 0.44)" }}>
            <h3>Base Terrain</h3>
            <p>Conservancy geometry and elevation context for Northern Kenya operating landscapes.</p>
          </article>
          <article className="card" style={{ transform: "translateZ(18px)", borderColor: "rgba(78, 196, 255, 0.44)" }}>
            <h3>Zebra Distribution</h3>
            <p>Population concentration heat zones and recurring movement corridors.</p>
          </article>
          <article className="card" style={{ transform: "translateZ(8px)", borderColor: "rgba(255, 186, 91, 0.44)" }}>
            <h3>Pressure Signals</h3>
            <p>Water stress markers, infrastructure conflict points, and monitoring priority areas.</p>
          </article>
        </div>
      </section>

      <section className="card-grid cols-3">
        <article className="card">
          <h3>Zone Layers</h3>
          <p>Core range areas, buffer landscapes, and seasonal movement routes.</p>
        </article>
        <article className="card">
          <h3>Pressure Signals</h3>
          <p>Visual overlays for water stress, fragmentation risk, and monitoring intensity.</p>
        </article>
        <article className="card">
          <h3>Community Anchors</h3>
          <p>Points representing scout hubs, restoration groups, and local program activity.</p>
        </article>
      </section>
    </main>
  );
}
