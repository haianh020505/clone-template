import Image from "next/image";

const LOGOS = [
  { src: "/sites/customgpt-ai/logos/united-nations.webp", alt: "United Nations", w: 210, h: 84 },
  { src: "/sites/customgpt-ai/logos/medtronic.webp", alt: "Medtronic", w: 160, h: 28 },
  { src: "/sites/customgpt-ai/logos/adobe.webp", alt: "Adobe", w: 129, h: 32 },
  { src: "/sites/customgpt-ai/logos/uva.webp", alt: "University of Virginia", w: 124, h: 40 },
  { src: "/sites/customgpt-ai/logos/ismg.webp", alt: "ISMG", w: 92, h: 51 },
  { src: "/sites/customgpt-ai/logos/icfj.webp", alt: "International Center for Journalists", w: 158, h: 31 },
  { src: "/sites/customgpt-ai/logos/lehigh.webp", alt: "Lehigh University", w: 176, h: 38 },
  { src: "/sites/customgpt-ai/logos/bqe.webp", alt: "BQE", w: 134, h: 48 },
  { src: "/sites/customgpt-ai/logos/dropbox.webp", alt: "Dropbox", w: 168, h: 34 },
  { src: "/sites/customgpt-ai/logos/mit.webp", alt: "MIT", w: 154, h: 44 },
];

export function MarqueeSection() {
  const doubled = [...LOGOS, ...LOGOS];

  return (
    <section className="cgpt-marquee-section">
      <p className="cgpt-marquee__caption">Trusted by 10,000+ organizations worldwide</p>
      <div className="cgpt-marquee__viewport">
        <ul className="cgpt-marquee__track">
          {doubled.map((logo, i) => (
            <li key={`${logo.alt}-${i}`} className="cgpt-marquee__item" aria-hidden={i >= LOGOS.length}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={Math.round(logo.w / 2)}
                height={Math.round(logo.h / 2)}
                className="cgpt-marquee__logo"
                loading="lazy"
              />
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        .cgpt-marquee-section {
          padding-block: 60px;
          background: var(--cgpt-surface);
          overflow: hidden;
        }
        .cgpt-marquee__caption {
          margin: 0 0 20px;
          font-size: var(--fs-sm);
          line-height: var(--cgpt-lh-sm);
          color: var(--cgpt-ink-soft);
          text-align: center;
        }
        .cgpt-marquee__viewport {
          mask-image: linear-gradient(to right, transparent 0, #000 320px, #000 calc(100% - 320px), transparent 100%);
        }
        .cgpt-marquee__track {
          display: flex;
          align-items: center;
          width: max-content;
          gap: 8px;
          list-style: none;
          margin: 0;
          padding: 0;
          animation: marquee-scroll 40s linear infinite;
        }
        .cgpt-marquee__track:hover {
          animation-play-state: paused;
        }
        @keyframes marquee-scroll {
          0% { transform: translateZ(0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .cgpt-marquee__item {
          display: grid;
          place-content: center;
          flex: none;
          width: 224px;
          height: 74px;
        }
        .cgpt-marquee__logo {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }
        @media (max-width: 767.98px) {
          .cgpt-marquee-section { padding-block: 20px; }
          .cgpt-marquee__caption { margin-bottom: 8px; }
          .cgpt-marquee__viewport { mask-image: linear-gradient(to right, transparent 0, #000 64px, #000 calc(100% - 64px), transparent 100%); }
          .cgpt-marquee__track { gap: 4px; }
          .cgpt-marquee__item { width: 100px; height: 54px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .cgpt-marquee__track { animation: none; }
        }
      `}</style>
    </section>
  );
}
