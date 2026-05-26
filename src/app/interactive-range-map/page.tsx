import Image from "next/image";

export default function InteractiveRangeMapPage() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero-grid">
          <div>
            <p className="eyebrow">Recommended Experience</p>
            <h1 className="hero-title">Interactive Range Map</h1>
            <p className="hero-subtitle mono">
              A digital wayfinding layer for habitat zones, water-pressure corridors, and field activity nodes.
            </p>
            <p className="lead">
              This concept page is structured for future GIS integration. It outlines how users can explore species
              range context and understand why landscape connectivity matters.
            </p>
          </div>
          <div className="hero-media">
            <Image
              src="/images/rangelands.png"
              alt="Rangeland terrain representing Grevy's zebra range monitoring areas"
              fill
              className="neo-image-frame"
            />
          </div>
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
