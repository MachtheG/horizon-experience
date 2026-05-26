"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero-grid">
          <div>
            <p className="eyebrow">Northern Kenya Conservation Network</p>
            <h1 className="hero-title">Grevy&apos;s Zebra, Reimagined for the Digital Age</h1>
            <p className="hero-subtitle mono">
              Community-led conservation, real-time field insight, and resilient rangelands for one of the
              world&apos;s most endangered large mammals.
            </p>
            <p className="lead">
              Grevy&apos;s Zebra Trust works with local communities, scouts, and partners to secure a future for
              Grevy&apos;s zebra through rangeland restoration, biodiversity monitoring, and practical action where
              wildlife and people share space.
            </p>
            <div className="button-row" style={{ marginTop: "1rem" }}>
              <Link href="/donate" className="neo-btn neo-btn-amber">
                Support Conservation
              </Link>
              <Link href="/programs" className="neo-btn">
                Explore Programs
              </Link>
            </div>
          </div>

          <div className="hero-media">
            <Image
              src="/images/hero.png"
              alt="Grevy's zebra standing alert in arid rangeland habitat"
              fill
              className="neo-image-frame"
              priority
            />
          </div>
        </div>
      </section>

      <section className="stats-grid" aria-label="Key conservation facts">
        <article className="stat-card">
          <h3>Conservation Priority</h3>
          <span className="stat-number">Endangered</span>
          <p className="mono">Grevy&apos;s zebra remains globally threatened and requires long-term habitat security.</p>
        </article>
        <article className="stat-card">
          <h3>Population Signal</h3>
          <span className="stat-number">~3,000</span>
          <p className="mono">Approximate global population estimate frequently cited in conservation messaging.</p>
        </article>
        <article className="stat-card">
          <h3>Core Method</h3>
          <span className="stat-number">Community-Led</span>
          <p className="mono">People living in zebra range areas are central to data collection and stewardship.</p>
        </article>
      </section>

      <section className="card-grid cols-3">
        <article className="card">
          <h3>Programs</h3>
          <p>From healthy rangelands to biodiversity monitoring and infrastructure mitigation.</p>
          <div className="button-row" style={{ marginTop: "0.8rem" }}>
            <Link href="/conservation" className="neo-btn">
              View Workstreams
            </Link>
          </div>
        </article>
        <article className="card">
          <h3>Digital Impact</h3>
          <p>Explore a data-first narrative of outcomes, participation, and ecological signals.</p>
          <div className="button-row" style={{ marginTop: "0.8rem" }}>
            <Link href="/digital-impact" className="neo-btn">
              Open Dashboard
            </Link>
          </div>
        </article>
        <article className="card">
          <h3>Interactive Range Map</h3>
          <p>Navigate key landscapes, mobility corridors, and field-monitoring focus zones.</p>
          <div className="button-row" style={{ marginTop: "0.8rem" }}>
            <Link href="/interactive-range-map" className="neo-btn">
              Launch Map View
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
