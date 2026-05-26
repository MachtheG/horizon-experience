"use client";

export default function AboutUs() {
  return (
    <main>
      <div className="scroll-container">
        <section className="section">
          <h2 className="hero-title" style={{ fontSize: '5rem', color: 'var(--color-clay)', margin: 0 }}>About Us</h2>
          <p className="hero-subtitle mono" style={{ maxWidth: '600px', color: 'var(--color-zebra-white)', marginTop: '2rem' }}>
            Our History, Mission, and the Team.
          </p>
          <div style={{ marginTop: '4rem' }}>
            <p className="mono" style={{ fontSize: '1.2rem', lineHeight: 1.8, maxWidth: '800px' }}>
              The Grevy's Zebra Trust was established to address the urgent need to conserve the endangered Grevy's zebra. 
              We believe that conservation must be community-led to be sustainable. Our team consists of dedicated individuals from the Samburu and Rendille communities who work tirelessly to protect their natural heritage.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
