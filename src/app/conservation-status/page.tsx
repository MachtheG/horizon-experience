import Image from "next/image";

export default function ConservationStatusPage() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero-grid">
          <div>
            <p className="eyebrow">Species Reality</p>
            <h1 className="hero-title">Conservation Status</h1>
            <p className="hero-subtitle mono">
              To conserve and grow the Grevy&rsquo;s zebra population in Northern Kenya.
            </p>
            <p className="lead">
              Grevy&apos;s zebra remains endangered. Long-term survival depends on connected habitats, reliable water,
              and community-led conservation across northern Kenya.
            </p>
          </div>
          <div className="hero-media">
            <Image
              src="https://www.grevyszebratrust.org/wp-content/uploads/2020/07/GZT-Nelson52-2.jpg"
              alt="Grevy's zebra showing large round ears and narrow stripe pattern"
              fill
              className="neo-image-frame"
            />
          </div>
        </div>
      </section>

      <section className="stats-grid">
        <article className="stat-card">
          <h3>Global Estimate</h3>
          <span className="stat-number">~3,000</span>
          <p className="mono">Only around 3,000 Grevy&apos;s zebras remain globally, with approximately 90% in Northern Kenya.</p>
        </article>
        <article className="stat-card">
          <h3>Historic Decline</h3>
          <span className="stat-number">80%</span>
          <p className="mono">The species has experienced an estimated 80% decline since the 1970s.</p>
        </article>
        <article className="stat-card">
          <h3>Operational Landscape</h3>
          <span className="stat-number">20,017 km²</span>
          <p className="mono">Grevy&apos;s Zebra Trust manages over 20,017 square kilometers of operation area.</p>
        </article>
      </section>

      <section className="card-grid">
        <article className="card">
          <h3>Primary Threat Drivers</h3>
          <p>
            Habitat fragmentation, variable rainfall, water-point competition, and linear infrastructure all affect
            movement, breeding success, and access to forage. These pressures shift seasonally and require adaptive
            field coordination.
          </p>
        </article>
        <article className="card">
          <h3>Integrated Response</h3>
          <p>
            The Trust combines scout monitoring, rangeland management, education, and local leadership support so
            conservation outcomes remain grounded in community realities and operationally feasible over time.
          </p>
        </article>
      </section>
    </main>
  );
}
