import Image from "next/image";

export default function NkirretenProjectPage() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero-grid">
          <div>
            <p className="eyebrow">Women-Led Initiative</p>
            <h1 className="hero-title">The Nkirreten Project</h1>
            <p className="hero-subtitle mono">
              A dedicated reusable sanitary pad initiative supporting girls, women, and resilient conservation communities.
            </p>
            <p className="lead">
              The Nkirreten Project expands dignity and access by supporting local production and distribution of reusable
              sanitary pads, while strengthening livelihoods in Grevy&apos;s zebra landscapes.
            </p>
          </div>
          <div className="hero-media">
            <Image
              src="https://www.grevyszebratrust.org/wp-content/uploads/2020/07/Nkirreten-team-with-masks.jpg"
              alt="Nkirreten project team in community workshop setting"
              fill
              className="neo-image-frame"
            />
          </div>
        </div>
      </section>

      <section className="card-grid">
        <article className="card">
          <h3>Reusable Pad Production</h3>
          <p>Community-based teams produce reusable sanitary pads that reduce school absenteeism and improve wellbeing.</p>
        </article>
        <article className="card">
          <h3>Livelihood Strengthening</h3>
          <p>Income pathways for women contribute to household resilience and conservation-positive local economies.</p>
        </article>
        <article className="card">
          <h3>Conservation Link</h3>
          <p>When social resilience improves, pressure on fragile landscapes decreases and conservation outcomes become more durable.</p>
        </article>
      </section>
    </main>
  );
}
