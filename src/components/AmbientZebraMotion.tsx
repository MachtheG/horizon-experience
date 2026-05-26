import Image from "next/image";

export default function AmbientZebraMotion() {
  return (
    <div className="ambient-zebra-layer" aria-hidden="true">
      <div className="ambient-zebra-image-trail ambient-zebra-image-trail-one">
        <Image src="/images/zebra-ambient.jpg" alt="" width={120} height={80} className="ambient-zebra-image" />
      </div>
      <div className="ambient-zebra-image-trail ambient-zebra-image-trail-two">
        <Image src="/images/nav-zebra.jpg" alt="" width={120} height={80} className="ambient-zebra-image" />
      </div>
      <svg className="zebra-z1" viewBox="0 0 240 120" role="presentation">
        <path d="M24 86 C42 70 58 54 82 50 C102 46 121 52 142 56 C163 60 182 57 198 45 C204 58 201 72 192 82 C181 93 168 97 152 100 C132 103 108 100 84 103 C67 105 48 100 34 95 Z" />
      </svg>
      <svg className="zebra-z2" viewBox="0 0 240 120" role="presentation">
        <path d="M28 80 C47 67 68 60 92 61 C111 62 129 71 147 73 C169 75 188 67 202 52 C207 63 207 76 200 86 C189 98 171 106 147 108 C118 111 94 107 71 104 C53 102 38 93 29 85 Z" />
      </svg>
    </div>
  );
}
