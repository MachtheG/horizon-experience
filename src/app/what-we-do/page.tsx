import Link from "next/link";

export default function WhatWeDoPage() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero-grid" style={{ gridTemplateColumns: "1fr" }}>
          <div>
            <p className="eyebrow">Route Parity</p>
            <h1 className="hero-title">What We Do</h1>
            <p className="hero-subtitle mono">
              Program details are maintained in the dedicated Programs section.
            </p>
            <div className="button-row" style={{ marginTop: "1rem" }}>
              <Link href="/programs" className="neo-btn">
                Open Programs
              </Link>
              <Link href="/conservation" className="neo-btn">
                Open Conservation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
