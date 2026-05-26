export default function ProgramsPage() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero-grid" style={{ gridTemplateColumns: "1fr" }}>
          <div>
            <p className="eyebrow">What We Do</p>
            <h1 className="hero-title">Programs</h1>
            <p className="hero-subtitle mono">
              Program architecture aligned around species survival, landscape function, and community resilience.
            </p>
          </div>
        </div>
      </section>

      <section className="card-grid cols-3">
        <article className="card">
          <h3>Species Monitoring</h3>
          <p>Field scouts and technical teams collect recurring data on Grevy&apos;s zebra distribution and health.</p>
        </article>
        <article className="card">
          <h3>Rangeland Restoration</h3>
          <p>Landscape rehabilitation efforts address vegetation loss, soil stress, and forage instability.</p>
        </article>
        <article className="card">
          <h3>Community Leadership</h3>
          <p>Women, youth, and local leaders drive conservation implementation where outcomes matter most.</p>
        </article>
        <article className="card">
          <h3>Livelihood Innovation</h3>
          <p>Support for resilient livelihoods helps reduce pressure on habitat while improving local wellbeing.</p>
        </article>
        <article className="card">
          <h3>Corridor Safeguarding</h3>
          <p>Program actions reduce fragmentation and protect zebra movement pathways between key habitats.</p>
        </article>
        <article className="card">
          <h3>Evidence-Based Planning</h3>
          <p>Data and local observations inform adaptive management and long-term conservation choices.</p>
        </article>
      </section>
    </main>
  );
}
