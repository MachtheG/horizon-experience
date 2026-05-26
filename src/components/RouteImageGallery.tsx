"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

type ImageItem = {
  src: string;
  alt: string;
  caption: string;
};

const baseSet: ImageItem[] = [
  {
    src: "https://www.grevyszebratrust.org/wp-content/uploads/2020/07/GZT-Nelson52-2.jpg",
    alt: "Grevy's zebra showing narrow stripes and large ears",
    caption: "Species detail",
  },
  {
    src: "https://www.grevyszebratrust.org/wp-content/uploads/2020/07/GZT-Nelson94.jpg",
    alt: "Grevy's zebra in Northern Kenya habitat",
    caption: "Field observation",
  },
  {
    src: "https://www.grevyszebratrust.org/wp-content/uploads/2020/07/Isiolo-Moyale-Highway-A2_Resson-Kantai-Duff.jpg",
    alt: "Northern Kenya rangeland and infrastructure landscape",
    caption: "Shared landscapes",
  },
  {
    src: "https://www.grevyszebratrust.org/wp-content/uploads/2020/07/Grevys-zebra-in-the-lava-plateaus-scaled.jpg",
    alt: "Grevy's zebra in arid lava plateau environment",
    caption: "Arid adaptation",
  },
];

const projectSet: ImageItem[] = [
  {
    src: "https://www.grevyszebratrust.org/wp-content/uploads/2020/07/Nkirreten-team-with-masks.jpg",
    alt: "Nkirreten project participants in community workspace",
    caption: "Women-led initiative",
  },
  {
    src: "https://www.grevyszebratrust.org/wp-content/uploads/2020/07/Masks-00244.jpg",
    alt: "Reusable pad project materials and production activity",
    caption: "Reusable products",
  },
  {
    src: "https://www.grevyszebratrust.org/wp-content/uploads/2020/07/Mask-20200705_120040.jpg",
    alt: "Community production workflow for reusable sanitary pads",
    caption: "Skills and livelihoods",
  },
  {
    src: "https://www.grevyszebratrust.org/wp-content/uploads/2020/07/ZP-20.jpg",
    alt: "Community gathering in zebra conservation landscape",
    caption: "Community resilience",
  },
];

const scholarshipSet: ImageItem[] = [
  {
    src: "https://www.grevyszebratrust.org/wp-content/uploads/2020/07/2018-02-22-17-20-09-scaled-e1596170400979.jpg",
    alt: "Students in outreach and education program setting",
    caption: "Student outreach",
  },
  {
    src: "https://www.grevyszebratrust.org/wp-content/uploads/2020/07/2018-02-22-16-53-45-scaled.jpg",
    alt: "School conservation engagement event",
    caption: "School partnerships",
  },
  {
    src: "https://www.grevyszebratrust.org/wp-content/uploads/2020/07/Julius-Lekenit_community-meeting-in-Kipsing-scaled.jpg",
    alt: "Community leadership discussion in Kipsing",
    caption: "Leadership development",
  },
  {
    src: "https://www.grevyszebratrust.org/wp-content/uploads/2020/07/Kipsing-scouts-collecting-sighting-data.jpg",
    alt: "Scouts collecting zebra monitoring data",
    caption: "Applied learning",
  },
];

function getSet(pathname: string): ImageItem[] {
  if (pathname.includes("nkirreten")) return projectSet;
  if (pathname.includes("education") || pathname.includes("scholarships")) return scholarshipSet;
  return baseSet;
}

export default function RouteImageGallery() {
  const pathname = usePathname();
  const images = getSet(pathname);

  return (
    <section className="route-gallery" data-reveal>
      <header className="route-gallery-head">
        <p className="eyebrow">Field Visuals</p>
        <h2 className="section-title">Grevy&apos;s Zebra and Northern Kenya Context</h2>
      </header>
      <div className="route-gallery-grid">
        {images.map((item) => (
          <figure key={item.src} className="route-gallery-item">
            <div className="route-gallery-media">
              <Image src={item.src} alt={item.alt} fill className="neo-image-frame" sizes="(max-width: 760px) 100vw, 25vw" />
            </div>
            <figcaption className="mono">{item.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
