export default function DigitalImpactPage() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero-grid" style={{ gridTemplateColumns: "1fr" }}>
          <div>
            <p className="eyebrow">Recommended Experience</p>
            <h1 className="hero-title">Digital Conservation Impact</h1>
            <p className="hero-subtitle mono">
              A dashboard-style story of ecological outcomes, community participation, and operational momentum.
            </p>
          </div>
        </div>
      </section>

      <section className="stats-grid">
        <article className="stat-card">
          <h3>Scout Monitoring Cycles</h3>
          <span className="stat-number">Live Feed Ready</span>
          <p className="mono">Prepared for monthly ingestion from field reporting pipelines.</p>
        </article>
        <article className="stat-card">
          <h3>Restoration Activity</h3>
          <span className="stat-number">Geo-Tagged</span>
          <p className="mono">Designed to visualize location-based intervention progress over time.</p>
        </article>
        <article className="stat-card">
          <h3>Partnership Contributions</h3>
          <span className="stat-number">Transparent</span>
          <p className="mono">Built to map support inputs to program outputs for better accountability.</p>
        </article>
      </section>

      <section className="card-grid">
        <article className="card">
          <h3>Planned Modules</h3>
          <ul className="info-list mono" style={{ marginTop: "0.7rem" }}>
            <li>Population trend snapshots</li>
            <li>Water and forage stress indicators</li>
            <li>Community participation metrics</li>
            <li>Funding-to-impact pathways</li>
          </ul>
        </article>
        <article className="card">
          <h3>Design Intent</h3>
          <p>
            Deliver a clear, evidence-rich interface that helps supporters and partners understand the measurable
            effects of long-term conservation investment.
          </p>
        </article>
      </section>
    </main>
  );
}
