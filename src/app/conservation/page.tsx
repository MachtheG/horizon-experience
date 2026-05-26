"use client";

export default function Conservation() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero-grid" style={{ gridTemplateColumns: "1fr" }}>
          <div>
            <p className="eyebrow">Conservation Work</p>
            <h1 className="hero-title">Data, People, and Landscape in One System</h1>
            <p className="hero-subtitle mono">
              Every program is designed to support species survival and community resilience together.
            </p>
          </div>
        </div>
      </section>

      <section className="card-grid cols-3">
        <article className="card">
          <h3>Healthy Rangelands</h3>
          <p>
            Restore grassland function, improve grazing systems, and support regenerative land practices that
            benefit both livestock and wildlife.
          </p>
        </article>
        <article className="card">
          <h3>Grevy&apos;s Zebra Monitoring</h3>
          <p>
            Track populations, movement, and breeding indicators using community scouts and structured field-data
            protocols.
          </p>
        </article>
        <article className="card">
          <h3>Infrastructure & Corridors</h3>
          <p>
            Assess and reduce barrier effects from roads and other developments that fragment habitat and migration
            routes.
          </p>
        </article>
        <article className="card">
          <h3>Water Access Planning</h3>
          <p>
            Improve water-point governance to reduce conflict pressure and protect vital dry-season habitat.
          </p>
        </article>
        <article className="card">
          <h3>Biodiversity Integration</h3>
          <p>
            Use Grevy&apos;s zebra as an umbrella for broader biodiversity outcomes across shared arid ecosystems.
          </p>
        </article>
        <article className="card">
          <h3>Evidence to Action</h3>
          <p>
            Convert field insight into practical local action, partner policy recommendations, and adaptive
            management.
          </p>
        </article>
      </section>
    </main>
  );
}
