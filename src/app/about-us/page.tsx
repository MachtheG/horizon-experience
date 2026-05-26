"use client";

export default function AboutUs() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero-grid" style={{ gridTemplateColumns: "1fr" }}>
          <div>
            <p className="eyebrow">About Grevy&apos;s Zebra Trust</p>
            <h1 className="hero-title">A Trust Built with Communities</h1>
            <p className="hero-subtitle mono">
              Our model centers local knowledge, practical science, and long-term stewardship in northern Kenya.
            </p>
            <p className="lead">
              Grevy&apos;s Zebra Trust emerged to respond to severe declines in Grevy&apos;s zebra populations. The
              organization&apos;s approach is rooted in partnerships with local communities, where people, livestock,
              and wildlife coexist across shared rangelands.
            </p>
          </div>
        </div>
      </section>

      <section className="card-grid">
        <article className="card">
          <h3>Mission Focus</h3>
          <p>
            Secure a future for Grevy&apos;s zebra through community-led conservation, healthy landscapes, and
            informed ecological decision-making.
          </p>
        </article>
        <article className="card">
          <h3>How We Work</h3>
          <p>
            Field scouts, local leadership, and research teams monitor zebra populations and habitat health while
            supporting livelihoods that strengthen conservation outcomes.
          </p>
        </article>
        <article className="card">
          <h3>Where We Operate</h3>
          <p>
            Primary efforts span key rangelands of northern Kenya, with cross-border ecological relevance across
            the species&apos; range.
          </p>
        </article>
        <article className="card">
          <h3>Strategic Priority</h3>
          <p>
            Build social and ecological resilience by supporting women, youth, and conservancy stakeholders in the
            same landscapes where Grevy&apos;s zebra must survive.
          </p>
        </article>
      </section>
    </main>
  );
}
