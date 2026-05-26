import Image from "next/image";

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
            <p className="lead">
              The scholarship program helps students from northern Kenya access continued education while building a
              bridge to conservation leadership. Support includes mentorship, community accountability, and practical
              links to field-based stewardship pathways.
            </p>
          </div>
        </div>
      </section>

      <section className="card-grid cols-3">
        <article className="card">
          <div className="program-ref-media">
            <Image src="https://www.grevyszebratrust.org/wp-content/uploads/2020/07/2018-02-22-17-20-09-scaled-e1596170400979.jpg" alt="School conservation outreach activity with students" fill className="neo-image-frame" />
          </div>
          <h3>School Outreach</h3>
          <p>Students engage directly with conservation themes that connect classroom learning to local realities.</p>
        </article>
        <article className="card">
          <div className="program-ref-media">
            <Image src="https://www.grevyszebratrust.org/wp-content/uploads/2020/07/2018-02-22-16-53-45-scaled.jpg" alt="Students gathered in conservation learning session" fill className="neo-image-frame" />
          </div>
          <h3>Retention and Progress</h3>
          <p>Education support helps students remain in school and continue toward long-term career opportunities.</p>
        </article>
        <article className="card">
          <div className="program-ref-media">
            <Image src="https://www.grevyszebratrust.org/wp-content/uploads/2020/07/Kipsing-scouts-collecting-sighting-data.jpg" alt="Field data collection demonstrating applied conservation learning" fill className="neo-image-frame" />
          </div>
          <h3>Applied Leadership</h3>
          <p>Graduates can contribute to local field programs and strengthen community conservation institutions.</p>
        </article>
      </section>

      <section className="card-grid">
        <article className="card">
          <h3>Impact Story: Michael Edan</h3>
          <p>
            Michael Edan represents the scholarship pathway in action: local talent, supported through education,
            contributes directly to conservation leadership and community progress.
          </p>
          <p>
            His story reflects how scholarship support can unlock multi-year impact: better educational outcomes,
            stronger local role models, and practical conservation engagement rooted in community priorities.
          </p>
        </article>
        <article className="card">
          <h3>Why Scholarships Matter</h3>
          <p>
            Scholarships reduce barriers for students from conservation landscapes and create long-term capacity for
            ecological stewardship, data literacy, and local leadership.
          </p>
          <p>
            This is not only social support. It is also long-horizon conservation infrastructure built through people.
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
