"use client";

export default function Community() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero-grid" style={{ gridTemplateColumns: "1fr" }}>
          <div>
            <p className="eyebrow">Community Leadership</p>
            <h1 className="hero-title">People Are the Conservation Engine</h1>
            <p className="hero-subtitle mono">
              Locally embedded teams build trust, gather evidence, and lead action in zebra landscapes.
            </p>
          </div>
        </div>
      </section>

      <section className="card-grid">
        <article className="card">
          <h3>Grevy&apos;s Zebra Scouts</h3>
          <p>
            Community members conduct regular field observations, population monitoring, and local outreach in
            range landscapes.
          </p>
        </article>
        <article className="card">
          <h3>Nkirreten Rangeland Action</h3>
          <p>
            Women-led restoration and stewardship approaches support soil recovery, forage resilience, and shared
            land-use planning.
          </p>
        </article>
        <article className="card">
          <h3>Warrior Engagement</h3>
          <p>
            Young leaders are included in wildlife protection efforts, helping strengthen ecological guardianship.
          </p>
        </article>
        <article className="card">
          <h3>Scholarships and Youth Pathways</h3>
          <p>
            Education support builds future conservation professionals, researchers, and community decision-makers.
          </p>
        </article>
      </section>
    </main>
  );
}
