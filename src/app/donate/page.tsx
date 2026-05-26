"use client";

import Link from "next/link";

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
              Your support powers scouts, healthy rangelands, education pathways, and long-term species recovery.
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
              <button type="button" className="neo-btn">$400</button>
              <button type="button" className="neo-btn">$3,500</button>
            </div>
            <input type="number" min="1" placeholder="Other amount (USD)" className="neo-input" />
            <input type="text" placeholder="Full Name" className="neo-input" required />
            <input type="email" placeholder="Email Address" className="neo-input" required />
            <button type="submit" className="neo-btn neo-btn-amber">
              Donate Now
            </button>
            <Link href="https://donate.wildnet.org/?fund=Gr%C3%A9vy%E2%80%99s_Zebra&ms=GZTwebsite" className="neo-btn" target="_blank" rel="noreferrer">
              Official Donate Portal
            </Link>
          </form>
        </article>

        <article className="card">
          <h3>Impact Pathways</h3>
          <ul className="info-list mono" style={{ marginTop: "0.7rem" }}>
            <li>$50 supports data bundles used for field reporting and monitoring communication.</li>
            <li>$400 contributes toward GPS camera equipment for wildlife monitoring operations.</li>
            <li>$3,500 helps fund Grassland Champions and practical Healthy Rangelands action.</li>
          </ul>
          <h3 style={{ marginTop: "1rem" }}>LIPA NA M-PESA</h3>
          <ul className="info-list mono" style={{ marginTop: "0.7rem" }}>
            <li>LIPA NA M-PESA (Pay Bill)</li>
            <li>Grevy&apos;s Zebra Trust</li>
            <li>Business Number: 573398</li>
            <li>Account Number: Your Name</li>
          </ul>
          <h3 style={{ marginTop: "1rem" }}>Official Reports</h3>
          <ul className="info-list mono" style={{ marginTop: "0.7rem" }}>
            <li>
              <Link href="https://www.grevyszebratrust.org/annual-reports/2024-annual-report/" target="_blank" rel="noreferrer">
                2024 Annual Report
              </Link>
            </li>
            <li>
              <Link href="https://www.grevyszebratrust.org/annual-reports/" target="_blank" rel="noreferrer">
                All Annual Reports
              </Link>
            </li>
          </ul>
        </article>
      </section>
    </main>
  );
}
