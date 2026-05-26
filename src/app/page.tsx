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
            <h1 className="hero-title">Grevy&apos;s Zebra in Digital Space</h1>
            <p className="hero-subtitle mono">
              To conserve and grow the Grevy&rsquo;s zebra population in Northern Kenya.
            </p>
            <p className="lead">
              Grevy&apos;s Zebra Trust combines community leadership, field monitoring, and adaptive rangeland
              stewardship to secure a future for this endangered species across northern Kenya.
            </p>
            <div className="button-row" style={{ marginTop: "1rem" }}>
              <Link href="/donate" className="neo-btn neo-btn-amber">
                Support Conservation
              </Link>
              <Link href="/programs" className="neo-btn">
                Our Programs
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
          <h3>Global Population</h3>
          <span className="stat-number">~3,000</span>
          <p className="mono">Only around 3,000 Grevy&apos;s zebras remain globally, and approximately 90% are in Northern Kenya.</p>
        </article>
        <article className="stat-card">
          <h3>Historic Trend</h3>
          <span className="stat-number">80% Decline</span>
          <p className="mono">Grevy&apos;s zebra numbers have fallen by about 80% since the 1970s.</p>
        </article>
        <article className="stat-card">
          <h3>Operational Scale</h3>
          <span className="stat-number">20,017 km²</span>
          <p className="mono">The Trust manages more than 20,017 square kilometers of conservation operations.</p>
        </article>
      </section>

      <section className="card-grid cols-3">
        <article className="card">
          <h3>Programs</h3>
          <p>Grevy&apos;s Zebra Scouts, Ambassadors, Warriors, and Healthy Rangelands in one coordinated system.</p>
          <div className="button-row" style={{ marginTop: "0.8rem" }}>
            <Link href="/programs" className="neo-btn">
              View Workstreams
            </Link>
          </div>
        </article>
        <article className="card">
          <h3>Conservation Status</h3>
          <p>Explore species pressure, population context, and why protected movement corridors matter.</p>
          <div className="button-row" style={{ marginTop: "0.8rem" }}>
            <Link href="/conservation-status" className="neo-btn">
              View Status
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
