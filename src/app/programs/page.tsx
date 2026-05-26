import Image from "next/image";

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
            <p className="lead">
              These workstreams are designed to operate together. Monitoring by scouts informs management actions,
              ambassadors strengthen social ownership, warriors support security and stewardship, and healthy
              rangelands interventions protect the ecological base that both wildlife and pastoralist communities
              depend on.
            </p>
          </div>
        </div>
      </section>

      <section className="card-grid cols-3">
        <article className="card">
          <div className="program-ref-media">
            <Image src="https://www.grevyszebratrust.org/wp-content/uploads/2020/07/Kipsing-scouts-collecting-sighting-data.jpg" alt="Grevy's Zebra Scouts collecting field sightings data" fill className="neo-image-frame" />
          </div>
          <h3>Grevy&apos;s Zebra Scouts</h3>
          <p>
            Scouts carry out regular field monitoring on sightings, behavior, and habitat pressures to guide
            conservation action in real time.
          </p>
          <p>
            Their reports track herd composition, foal survival, water use, and conflict risk, creating a practical
            evidence layer for rapid responses and long-term planning.
          </p>
        </article>
        <article className="card">
          <div className="program-ref-media">
            <Image src="https://www.grevyszebratrust.org/wp-content/uploads/2020/07/2018-02-22-17-20-09-scaled-e1596170400979.jpg" alt="Education outreach session led by conservation ambassadors" fill className="neo-image-frame" />
          </div>
          <h3>Ambassadors</h3>
          <p>
            Ambassadors strengthen conservation awareness and participation between schools, households, and
            communities across zebra range areas.
          </p>
          <p>
            They translate conservation science into clear local action, helping increase trust, participation, and
            continuity in community-led stewardship.
          </p>
        </article>
        <article className="card">
          <div className="program-ref-media">
            <Image src="https://www.grevyszebratrust.org/wp-content/uploads/2020/07/Rikapo-Lentiyoo_warriors-on-exposure-tour.jpg" alt="Warriors participating in conservation field tour" fill className="neo-image-frame" />
          </div>
          <h3>Warriors</h3>
          <p>
            Warriors support wildlife protection, local stewardship, and field operations where social cohesion and
            ecological health are deeply connected.
          </p>
          <p>
            Their presence strengthens peace-building and habitat security in areas where mobility, grazing pressure,
            and wildlife corridors intersect.
          </p>
        </article>
        <article className="card">
          <div className="program-ref-media">
            <Image src="https://www.grevyszebratrust.org/wp-content/uploads/2020/08/Nolkurupu-e1596373274865.png" alt="Woman leader in healthy rangelands management" fill className="neo-image-frame" />
          </div>
          <h3>Healthy Rangelands</h3>
          <p>
            Holistic Land Management improves forage availability, soil condition, and ecosystem function while
            reducing pressure on Grevy&apos;s zebra habitat.
          </p>
          <p>
            The approach integrates grazing plans, restoration timing, and community institutions to regenerate land
            productivity and biodiversity simultaneously.
          </p>
        </article>
        <article className="card">
          <div className="program-ref-media">
            <Image src="https://www.grevyszebratrust.org/wp-content/uploads/2020/07/Nkirreten-team-with-masks.jpg" alt="Nkirreten project members with reusable pad kits" fill className="neo-image-frame" />
          </div>
          <h3>Nkirreten Project</h3>
          <p>
            Women-led reusable sanitary pad production supports dignity, livelihoods, and conservation-positive
            community resilience.
          </p>
          <p>
            By reducing barriers to education and improving income security, the project reinforces long-term social
            conditions needed for conservation to succeed.
          </p>
        </article>
        <article className="card">
          <div className="program-ref-media">
            <Image src="https://www.grevyszebratrust.org/wp-content/uploads/2020/07/Julius-Lekenit_community-meeting-in-Kipsing-scaled.jpg" alt="Community mentoring and scholarship pathway discussion" fill className="neo-image-frame" />
          </div>
          <h3>Education & Scholarships</h3>
          <p>
            Scholarships build the next generation of local conservation leaders through practical opportunity and
            long-term support.
          </p>
          <p>
            Students gain a pathway from classroom learning to field leadership, helping retain conservation capacity
            within zebra range communities.
          </p>
        </article>
      </section>
    </main>
  );
}
