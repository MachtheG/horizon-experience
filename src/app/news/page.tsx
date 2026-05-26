"use client";

import Image from "next/image";

export default function News() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero-grid">
          <div>
            <p className="eyebrow">News & Stories</p>
            <h1 className="hero-title">Field Updates from the Trust</h1>
            <p className="hero-subtitle mono">
              Conservation stories, partnership milestones, and practical innovations from zebra range landscapes.
            </p>
          </div>
          <div className="hero-media">
            <Image
              src="/images/rangelands.png"
              alt="Open rangeland landscape where community-led conservation activities take place"
              fill
              className="neo-image-frame"
            />
          </div>
        </div>
      </section>

      <section className="card-grid">
        <article className="card">
          <h3>Livelihood Partnerships Expand</h3>
          <p>
            Community livelihood initiatives continue to reduce pressure on fragile habitats while strengthening
            household resilience.
          </p>
        </article>
        <article className="card">
          <h3>Range Monitoring Cycle Complete</h3>
          <p>
            Scout reporting and survey cycles improve visibility into zebra movement and habitat stress patterns.
          </p>
        </article>
        <article className="card">
          <h3>Women-Led Restoration Scaling</h3>
          <p>
            Grassroots restoration teams are helping stabilize degraded zones through practical, culturally aligned
            approaches.
          </p>
        </article>
        <article className="card">
          <h3>Youth Leadership Pipeline</h3>
          <p>
            Scholarship and mentorship pathways continue to connect local students to conservation careers.
          </p>
        </article>
      </section>
    </main>
  );
}
