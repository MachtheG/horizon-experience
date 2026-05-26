"use client";

export default function Shop() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero-grid" style={{ gridTemplateColumns: "1fr" }}>
          <div>
            <p className="eyebrow">Community Marketplace</p>
            <h1 className="hero-title">Shop for Conservation</h1>
            <p className="hero-subtitle mono">
              A curated storefront is in development to connect supporters with community-crafted products.
            </p>
            <p className="lead">
              Planned merchandise and artisan collections are intended to help channel additional revenue into
              wildlife monitoring, youth opportunities, and landscape restoration programs.
            </p>
            <div className="button-row" style={{ marginTop: "1rem" }}>
              <button className="neo-btn">Notify Me</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
