import Image from "next/image";

export default function FieldJournalPage() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero-grid">
          <div>
            <p className="eyebrow">Recommended Experience</p>
            <h1 className="hero-title">Field Journal</h1>
            <p className="hero-subtitle mono">
              A narrative stream of observations from scouts, restoration teams, and partner researchers.
            </p>
            <p className="lead">
              This page introduces a story-forward layer that complements metrics with human context and ecological
              nuance.
            </p>
          </div>
          <div className="hero-media">
            <Image
              src="/images/hero.png"
              alt="Grevy's zebra in field habitat as contextual imagery for journal entries"
              fill
              className="neo-image-frame"
            />
          </div>
        </div>
      </section>

      <section className="card-grid">
        <article className="card">
          <h3>Entry 01: Dry Season Water Points</h3>
          <p>Scouts observed increased congregation near key water points, requiring careful disturbance control.</p>
        </article>
        <article className="card">
          <h3>Entry 02: Restoration Plot Review</h3>
          <p>Community restoration groups reported improved ground cover in targeted intervention zones.</p>
        </article>
        <article className="card">
          <h3>Entry 03: Corridor Walkthrough</h3>
          <p>Field teams mapped movement bottlenecks where infrastructure pressure is rising.</p>
        </article>
        <article className="card">
          <h3>Entry 04: Youth Field Training</h3>
          <p>Local trainees practiced data capture methods for consistent species and habitat monitoring.</p>
        </article>
      </section>
    </main>
  );
}
