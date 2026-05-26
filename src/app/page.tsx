"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="scroll-container">
        <section className="section">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px' }}>
            <h1 className="hero-title">Restore the Horizon</h1>
            <p className="hero-subtitle mono" style={{ color: 'var(--color-zebra-white)' }}>
              Only 3,000 Endangered Grevy's Zebra Remain in the Wild.
            </p>
            <p className="mono" style={{ fontSize: '1.2rem', lineHeight: 1.6 }}>
              People are at the heart of our work. Healthy land is critical for the survival of the Grevy's zebra. Join us in our mission to conserve this iconic species and its habitat.
            </p>
            <div>
              <Link href="/about-us" className="neo-btn">Begin Journey</Link>
            </div>
          </div>
          
          <div style={{ marginTop: '4rem', height: '500px', width: '100%', position: 'relative' }}>
             <Image 
               src="/images/hero.png" 
               alt="Endangered Grevy's Zebra in Samburu" 
               fill
               className="neo-image-frame"
               priority
             />
          </div>
        </section>
      </div>
    </main>
  );
}
