"use client";

export default function Conservation() {
  return (
    <main>
      <div className="scroll-container">
        <section className="section">
          <h2 className="hero-title" style={{ fontSize: '5rem', color: 'var(--color-clay)', margin: 0 }}>Conservation</h2>
          <p className="hero-subtitle mono" style={{ maxWidth: '600px', color: 'var(--color-zebra-white)', marginTop: '2rem' }}>
            Data-driven strategies to protect the ecosystem.
          </p>

          <div className="programs-grid" style={{ marginTop: '4rem' }}>
            <div className="program-card">
              <h3>Healthy Rangelands</h3>
              <p className="mono">Addressing the root cause of zebra decline by restoring the overall health of the ecosystem.</p>
            </div>
            <div className="program-card">
              <h3>Infrastructure & Biodiversity</h3>
              <p className="mono">Mitigating the impacts of large-scale infrastructure on wildlife corridors.</p>
            </div>
            <div className="program-card">
              <h3>Research & Monitoring</h3>
              <p className="mono">Gathering vital scientific data to inform conservation strategies.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
