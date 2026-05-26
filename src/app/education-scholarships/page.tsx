export default function EducationScholarshipsPage() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero-grid" style={{ gridTemplateColumns: "1fr" }}>
          <div>
            <p className="eyebrow">Future Conservation Leaders</p>
            <h1 className="hero-title">Education & Scholarships</h1>
            <p className="hero-subtitle mono">
              Supporting students from zebra landscapes to become long-term conservation champions.
            </p>
          </div>
        </div>
      </section>

      <section className="card-grid">
        <article className="card">
          <h3>Impact Story: Michael Edan</h3>
          <p>
            Michael Edan represents the scholarship pathway in action: local talent, supported through education,
            contributes directly to conservation leadership and community progress.
          </p>
        </article>
        <article className="card">
          <h3>Why Scholarships Matter</h3>
          <p>
            Scholarships reduce barriers for students from conservation landscapes and create long-term capacity for
            ecological stewardship, data literacy, and local leadership.
          </p>
        </article>
        <article className="card">
          <h3>From Classroom to Field Impact</h3>
          <p>
            Education investment strengthens local institutions and helps build a future where communities lead the
            protection of Grevy&apos;s zebra and their habitats.
          </p>
        </article>
      </section>
    </main>
  );
}
