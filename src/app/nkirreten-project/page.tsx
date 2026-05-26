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
            <p className="lead">
              The program connects health, education retention, and local enterprise. When girls can remain in school
              and women have stronger income pathways, community resilience improves and pressure on fragile landscapes
              can be reduced.
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

      <section className="card-grid cols-3">
        <article className="card">
          <div className="program-ref-media">
            <Image src="https://www.grevyszebratrust.org/wp-content/uploads/2020/07/Masks-00244.jpg" alt="Reusable sanitary products prepared for distribution" fill className="neo-image-frame" />
          </div>
          <h3>Production Workflow</h3>
          <p>Local teams coordinate cutting, stitching, quality checks, and packaging to ensure product reliability.</p>
        </article>
        <article className="card">
          <div className="program-ref-media">
            <Image src="https://www.grevyszebratrust.org/wp-content/uploads/2020/07/Mask-20200705_120040.jpg" alt="Women producing reusable pads in group workshop" fill className="neo-image-frame" />
          </div>
          <h3>Skills Transfer</h3>
          <p>Training cycles build practical production skills and confidence for women participating in the initiative.</p>
        </article>
        <article className="card">
          <div className="program-ref-media">
            <Image src="https://www.grevyszebratrust.org/wp-content/uploads/2020/07/Zebra-People-28_01_16-ZP-8.jpg" alt="Community members in northern Kenya conservation landscape" fill className="neo-image-frame" />
          </div>
          <h3>Community Impact</h3>
          <p>Household wellbeing and social stability outcomes contribute to stronger local conservation participation.</p>
        </article>
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
