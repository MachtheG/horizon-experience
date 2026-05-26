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
              <Link href="/interactive-range-map" className="neo-btn">
                Interactive Range Map
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
          <h3>Education & Scholarships</h3>
          <p>Support future conservation leaders through targeted education and scholarship pathways.</p>
          <div className="button-row" style={{ marginTop: "0.8rem" }}>
            <Link href="/education-scholarships" className="neo-btn">
              View Scholarships
            </Link>
          </div>
        </article>
        <article className="card">
          <h3>Official Reports</h3>
          <p>Access the 2024 Annual Report and historical reports directly from the official Trust site.</p>
          <div className="button-row" style={{ marginTop: "0.8rem" }}>
            <Link href="https://www.grevyszebratrust.org/annual-reports/2024-annual-report/" className="neo-btn" target="_blank" rel="noreferrer">
              2024 Annual Report
            </Link>
            <Link href="https://www.grevyszebratrust.org/annual-reports/" className="neo-btn" target="_blank" rel="noreferrer">
              All Reports
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
