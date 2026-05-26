import Link from "next/link";

export default function GetInvolvedPage() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero-grid" style={{ gridTemplateColumns: "1fr" }}>
          <div>
            <p className="eyebrow">Take Action</p>
            <h1 className="hero-title">Get Involved</h1>
            <p className="hero-subtitle mono">
              Join a global community supporting frontline conservation in Grevy&apos;s zebra landscapes.
            </p>
            <div className="button-row" style={{ marginTop: "1rem" }}>
              <Link href="/donate" className="neo-btn neo-btn-amber">
                Donate
              </Link>
              <Link href="/contact" className="neo-btn">
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="card-grid">
        <article className="card">
          <h3>Become a Supporter</h3>
          <p>One-time and recurring contributions help maintain consistent year-round field operations.</p>
        </article>
        <article className="card">
          <h3>Share the Mission</h3>
          <p>Use your networks to expand awareness of Grevy&apos;s zebra conservation urgency and progress.</p>
        </article>
        <article className="card">
          <h3>Collaborative Research</h3>
          <p>Contribute expertise in ecology, social systems, monitoring, and conservation technology.</p>
        </article>
        <article className="card">
          <h3>Institutional Partnerships</h3>
          <p>Support long-term resilience through aligned philanthropic and strategic collaborations.</p>
        </article>
      </section>
    </main>
  );
}
