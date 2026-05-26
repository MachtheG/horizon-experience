"use client";

import Image from "next/image";

export default function GrevysZebra() {
  return (
    <main>
      <div className="scroll-container">
        <section className="section">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
             <h2 className="hero-title" style={{ fontSize: '5rem', color: 'var(--color-sage)', margin: 0 }}>The Grevy's Zebra</h2>
             <div style={{ width: '300px', height: '150px', position: 'relative' }}>
                <Image 
                   src="/images/pattern.png" 
                   alt="Zebra Pattern Texture" 
                   fill
                   className="neo-image-frame"
                   style={{ objectPosition: 'center', opacity: 0.8 }}
                />
             </div>
          </div>
          <p className="mono" style={{ fontSize: '1.2rem', lineHeight: 1.8, maxWidth: '800px', marginTop: '2rem' }}>
            The Grevy's zebra is the largest and most endangered of the three zebra species. Identifiable by their narrow, tightly spaced stripes and large, rounded ears, they are uniquely adapted to the harsh, arid landscapes of Northern Kenya and Ethiopia.
          </p>
          <div style={{ marginTop: '4rem', padding: '2rem', border: '4px solid var(--color-ochre)', backgroundColor: 'var(--color-charcoal)' }}>
            <h3 style={{ color: 'var(--color-ochre)', fontSize: '2rem', marginBottom: '1rem' }}>Only 3,000 Left</h3>
            <p className="mono">Habitat loss, competition for water, and infrastructure development threaten their survival. Without immediate, sustained intervention, we risk losing this iconic species forever.</p>
          </div>
        </section>
      </div>
    </main>
  );
}
