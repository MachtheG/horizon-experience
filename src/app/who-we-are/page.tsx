import Link from "next/link";

export default function WhoWeArePage() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero-grid" style={{ gridTemplateColumns: "1fr" }}>
          <div>
            <p className="eyebrow">Route Parity</p>
            <h1 className="hero-title">Who We Are</h1>
            <p className="hero-subtitle mono">
              Organization history, mission, and community model are available on the About page.
            </p>
            <div className="button-row" style={{ marginTop: "1rem" }}>
              <Link href="/about-us" className="neo-btn">
                Open About
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
