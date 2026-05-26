"use client";

export default function Donate() {
  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you. This is a demo flow. Connect your payment platform for live donations.");
  };

  return (
    <main className="page">
      <section className="hero">
        <div className="hero-grid" style={{ gridTemplateColumns: "1fr" }}>
          <div>
            <p className="eyebrow">Get Involved</p>
            <h1 className="hero-title">Fund Frontline Conservation</h1>
            <p className="hero-subtitle mono">
              Your support powers community scouts, rangeland restoration, and the next generation of conservation
              leaders.
            </p>
          </div>
        </div>
      </section>

      <section className="split">
        <article className="card">
          <h3>Make a Donation</h3>
          <form onSubmit={handleDonate} className="input-grid" style={{ marginTop: "0.7rem" }}>
            <div className="button-row">
              <button type="button" className="neo-btn">$50</button>
              <button type="button" className="neo-btn">$100</button>
              <button type="button" className="neo-btn">$500</button>
            </div>
            <input type="number" min="1" placeholder="Other amount (USD)" className="neo-input" />
            <input type="text" placeholder="Full Name" className="neo-input" required />
            <input type="email" placeholder="Email Address" className="neo-input" required />
            <button type="submit" className="neo-btn neo-btn-amber">
              Donate Now
            </button>
          </form>
        </article>

        <article className="card">
          <h3>Impact Pathways</h3>
          <ul className="info-list mono" style={{ marginTop: "0.7rem" }}>
            <li>$50 helps equip a community scout for routine field monitoring.</li>
            <li>$100 supports women-led restoration activity in degraded range areas.</li>
            <li>$500 contributes to scholarships for emerging local conservation leaders.</li>
            <li>Monthly giving helps keep year-round monitoring and community engagement stable.</li>
          </ul>
        </article>
      </section>
    </main>
  );
}
