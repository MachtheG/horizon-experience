export default function ProgramsPage() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero-grid" style={{ gridTemplateColumns: "1fr" }}>
          <div>
            <p className="eyebrow">What We Do</p>
            <h1 className="hero-title">Our Programs</h1>
            <p className="hero-subtitle mono">
              Linked community programs that advance zebra survival, landscape resilience, and local leadership.
            </p>
          </div>
        </div>
      </section>

      <section className="card-grid cols-3">
        <article className="card">
          <h3>Grevy&apos;s Zebra Scouts</h3>
          <p>
            Scouts carry out regular field monitoring on sightings, behavior, and habitat pressures to guide
            conservation action in real time.
          </p>
        </article>
        <article className="card">
          <h3>Ambassadors</h3>
          <p>
            Ambassadors strengthen conservation awareness and participation between schools, households, and
            communities across zebra range areas.
          </p>
        </article>
        <article className="card">
          <h3>Warriors</h3>
          <p>
            Warriors support wildlife protection, local stewardship, and field operations where social cohesion and
            ecological health are deeply connected.
          </p>
        </article>
        <article className="card">
          <h3>Healthy Rangelands</h3>
          <p>
            Holistic Land Management improves forage availability, soil condition, and ecosystem function while
            reducing pressure on Grevy&apos;s zebra habitat.
          </p>
        </article>
        <article className="card">
          <h3>Nkirreten Project</h3>
          <p>
            Women-led reusable sanitary pad production supports dignity, livelihoods, and conservation-positive
            community resilience.
          </p>
        </article>
        <article className="card">
          <h3>Education & Scholarships</h3>
          <p>
            Scholarships build the next generation of local conservation leaders through practical opportunity and
            long-term support.
          </p>
        </article>
      </section>
    </main>
  );
}
