"use client";

export default function Shop() {
  return (
    <main>
      <div className="scroll-container">
        <section className="section" style={{ minHeight: '80vh', textAlign: 'center', alignItems: 'center' }}>
          <h2 className="hero-title" style={{ fontSize: '4rem', color: 'var(--color-sage)', margin: 0 }}>Shop</h2>
          <p className="hero-subtitle mono" style={{ maxWidth: '600px', color: 'var(--color-zebra-white)', marginTop: '2rem' }}>
            Coming Soon
          </p>
          <p className="mono" style={{ marginTop: '2rem', maxWidth: '600px' }}>
            We are working on a storefront to offer artisanal goods created by the local Samburu women's cooperatives. 
            All proceeds will go directly back into community conservation efforts.
          </p>
          <div style={{ marginTop: '3rem' }}>
            <button className="neo-btn">Notify Me</button>
          </div>
        </section>
      </div>
    </main>
  );
}
