"use client";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you. This is a demo contact form.");
  };

  return (
    <main className="page">
      <section className="hero">
        <div className="hero-grid" style={{ gridTemplateColumns: "1fr" }}>
          <div>
            <p className="eyebrow">Connect With Us</p>
            <h1 className="hero-title">Contact</h1>
            <p className="hero-subtitle mono">
              Partner, collaborate, or request program information.
            </p>
          </div>
        </div>
      </section>

      <section className="split">
        <article className="card">
          <h3>Send a Message</h3>
          <form onSubmit={handleSubmit} className="input-grid" style={{ marginTop: "0.7rem" }}>
            <input className="neo-input" placeholder="Full Name" required />
            <input className="neo-input" type="email" placeholder="Email" required />
            <input className="neo-input" placeholder="Organization (optional)" />
            <textarea className="neo-textarea" placeholder="How can we help?" required />
            <button className="neo-btn" type="submit">
              Submit
            </button>
          </form>
        </article>

        <article className="card">
          <h3>Partnership Priorities</h3>
          <ul className="info-list mono" style={{ marginTop: "0.7rem" }}>
            <li>Field data and applied research partnerships.</li>
            <li>Landscape restoration and community-led innovation.</li>
            <li>Funding collaborations for long-term species recovery.</li>
          </ul>
        </article>
      </section>
    </main>
  );
}
