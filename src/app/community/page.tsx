"use client";

export default function Community() {
  return (
    <main>
      <div className="scroll-container">
        <section className="section">
          <h2 className="hero-title" style={{ fontSize: '5rem', color: 'var(--color-ochre)', margin: 0 }}>Community</h2>
          <p className="hero-subtitle mono" style={{ maxWidth: '600px', color: 'var(--color-zebra-white)', marginTop: '2rem' }}>
            People are the solution.
          </p>

          <div className="programs-grid" style={{ marginTop: '4rem' }}>
            <div className="program-card">
              <h3>Grevy's Zebra Scouts</h3>
              <p className="mono">Local community members monitoring zebra populations and engaging their communities in conservation.</p>
            </div>
            <div className="program-card">
              <h3>Nkirreten Project</h3>
              <p className="mono">Healing the degraded rangelands through sustainable land management and Samburu cultural practices.</p>
            </div>
            <div className="program-card">
              <h3>Warriors</h3>
              <p className="mono">Engaging young Samburu men in active wildlife protection and data collection.</p>
            </div>
            <div className="program-card">
              <h3>Scholarships</h3>
              <p className="mono">Investing in the education of the next generation of conservation leaders in Kenya.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
