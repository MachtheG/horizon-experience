"use client";

import Image from "next/image";

export default function News() {
  return (
    <main>
      <div className="scroll-container">
        <section className="section" style={{ backgroundColor: 'var(--color-ochre)' }}>
          <h2 className="hero-title" style={{ fontSize: '4rem', color: 'var(--color-charcoal)' }}>Impact Stories</h2>
          
          <div style={{ display: 'flex', gap: '4rem', marginTop: '4rem', alignItems: 'center' }}>
             <div style={{ flex: 1, position: 'relative', height: '400px' }}>
                <Image 
                  src="/images/rangelands.png" 
                  alt="Samburu Rangelands" 
                  fill
                  className="neo-image-frame"
                />
             </div>
             <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '2rem', color: 'var(--color-charcoal)', marginBottom: '1rem' }}>Beekeeping Initiative</h3>
                <p className="mono" style={{ color: 'var(--color-charcoal)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                  Providing alternative livelihoods to communities, reducing reliance on natural resources while promoting pollination and ecosystem health.
                </p>
                
                <h3 style={{ fontSize: '2rem', color: 'var(--color-charcoal)', marginBottom: '1rem' }}>Family Leadership</h3>
                <p className="mono" style={{ color: 'var(--color-charcoal)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                  Empowering families to take active leadership roles in the Nkirreten project and Samburu cultural conservation.
                </p>
             </div>
          </div>
        </section>
      </div>
    </main>
  );
}
