"use client";

export default function Donate() {
  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your generous simulated donation. In a real environment, this would process payment.");
  };

  return (
    <main>
      <div className="scroll-container">
        <section className="section" style={{ minHeight: '80vh' }}>
          <h2 className="hero-title" style={{ fontSize: '5rem', color: 'var(--color-ochre)', margin: 0 }}>Restore the Horizon</h2>
          <p className="hero-subtitle mono" style={{ maxWidth: '600px', color: 'var(--color-zebra-white)', marginTop: '2rem' }}>
            Your contribution directly funds the scouts, scholars, and rangeland restoration efforts.
          </p>

          <div style={{ marginTop: '4rem', display: 'flex', gap: '4rem' }}>
            <div style={{ flex: 1, backgroundColor: 'var(--color-charcoal)', border: '4px solid var(--color-sage)', padding: '2rem' }}>
              <h3 style={{ color: 'var(--color-sage)', fontSize: '2rem', marginBottom: '1rem' }}>Make a Donation</h3>
              <form onSubmit={handleDonate}>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                  <button type="button" className="neo-btn" style={{ padding: '0.5rem 1rem' }}>$50</button>
                  <button type="button" className="neo-btn" style={{ padding: '0.5rem 1rem' }}>$100</button>
                  <button type="button" className="neo-btn" style={{ padding: '0.5rem 1rem' }}>$500</button>
                  <input type="number" placeholder="Other" className="neo-input" style={{ marginBottom: 0 }} />
                </div>
                <input type="text" placeholder="Full Name" className="neo-input" required />
                <input type="email" placeholder="Email Address" className="neo-input" required />
                <button type="submit" className="neo-btn" style={{ width: '100%', backgroundColor: 'var(--color-ochre)' }}>Donate Now</button>
              </form>
            </div>
            <div style={{ flex: 1 }}>
               <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Where Your Money Goes</h3>
               <ul className="mono" style={{ listStyleType: 'square', paddingLeft: '1.5rem', lineHeight: 2 }}>
                 <li><strong>$50:</strong> Equips a scout with GPS and field gear.</li>
                 <li><strong>$100:</strong> Supports the Nkirreten women restoring degraded land.</li>
                 <li><strong>$500:</strong> Funds a full scholarship for a Samburu student.</li>
               </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
