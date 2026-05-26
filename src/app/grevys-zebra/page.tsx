"use client";

import Image from "next/image";

export default function GrevysZebra() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero-grid">
          <div>
            <p className="eyebrow">Species Profile</p>
            <h1 className="hero-title">The Grevy&apos;s Zebra</h1>
            <p className="hero-subtitle mono">
              The largest zebra species, recognized by narrow stripes, large rounded &quot;Mickey Mouse&quot; ears, and
              white bellies.
            </p>
            <p className="lead">
              Grevy&apos;s zebra populations are concentrated in northern Kenya with a smaller range in Ethiopia. The
              species faces pressure from habitat fragmentation, water stress, and changing land-use dynamics.
            </p>
          </div>
          <div className="hero-media">
            <Image
              src="https://www.grevyszebratrust.org/wp-content/uploads/2020/07/GZT-Nelson94.jpg"
              alt="Grevy's zebra with distinctive ears and narrow stripes in dry habitat"
              fill
              className="neo-image-frame"
              priority
            />
          </div>
        </div>
      </section>

      <section className="card-grid cols-3">
        <article className="card">
          <h3>Why Stripes Matter</h3>
          <p>
            Grevy&apos;s zebra stripes are tighter and more numerous than plains zebras, creating a unique visual
            identity that supports species recognition.
          </p>
        </article>
        <article className="card">
          <h3>Landscape Challenge</h3>
          <p>
            Species survival depends on connected movement corridors between water and forage resources across dry
            landscapes.
          </p>
        </article>
        <article className="card">
          <h3>Urgency</h3>
          <p>
            Endangered status and relatively small populations mean each breeding season and each protected habitat
            unit is significant.
          </p>
        </article>
      </section>
    </main>
  );
}
