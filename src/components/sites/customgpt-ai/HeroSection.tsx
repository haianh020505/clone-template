import Image from "next/image";

export function HeroSection() {
  return (
    <section className="cgpt-hero">
      {/* Background poster */}
      <div className="cgpt-hero__bg">
        <Image
          src="/sites/customgpt-ai/images/hero-poster.webp"
          alt=""
          fill
          priority
          className="cgpt-hero__bg-img"
        />
      </div>

      <div className="cgpt-hero__inner">
        <div className="cgpt-hero__copy">
          <h1 className="cgpt-hero__title">
            Easy to deploy governed AI assistants for the enterprise.
          </h1>
        </div>

        <div className="cgpt-hero__cta-group">
          <a
            className="cgpt-btn cgpt-btn--shimmer"
            href="https://customgpt.ai/"
          >
            <span className="cgpt-btn__shimmer" aria-hidden="true"><i /></span>
            <span>Chat with our AI</span>
          </a>
        </div>

        {/* Dashboard showcase */}
        <div className="cgpt-hero__showcase">
          <Image
            src="/sites/customgpt-ai/images/dashboard-poster.webp"
            alt="A member asking for details on the company travel policy, the assistant's answer listing the policy's rules, the HR manual it cited, and panels for usage metrics and connected data sources"
            width={1586}
            height={906}
            priority
            className="cgpt-hero__showcase-img"
          />
        </div>
      </div>

      <style>{`
        .cgpt-hero {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          overflow: hidden;
          background: var(--cgpt-surface);
          padding: 80px var(--cgpt-gutter) 0;
        }
        .cgpt-hero__bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .cgpt-hero__bg-img {
          object-fit: cover;
          opacity: 0.35;
        }
        .cgpt-hero__inner {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 900px;
          gap: 40px;
        }
        .cgpt-hero__title {
          margin: 0;
          font-size: var(--fs-display-xl);
          font-weight: 500;
          line-height: var(--cgpt-lh-display);
          color: var(--cgpt-ink);
          text-wrap: balance;
        }
        .cgpt-btn--shimmer {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          min-height: 48px;
          border-radius: var(--cgpt-radius-pill);
          background: var(--cgpt-ink);
          color: #fff;
          font-weight: 600;
          font-size: var(--fs-body);
          overflow: hidden;
          border: none;
          cursor: pointer;
          text-decoration: none;
        }
        .cgpt-btn--shimmer:hover {
          background: #2a2940;
        }
        .cgpt-btn__shimmer {
          position: absolute;
          inset: 0;
          overflow: hidden;
          border-radius: inherit;
        }
        .cgpt-btn__shimmer i {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            90deg,
            transparent 30%,
            rgba(255, 255, 255, 0.12) 50%,
            transparent 70%
          );
          animation: shimmer 2.5s ease-in-out infinite;
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%) rotate(15deg); }
          100% { transform: translateX(100%) rotate(15deg); }
        }
        .cgpt-hero__showcase {
          width: 100%;
          max-width: 1080px;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 24px 64px rgba(22, 21, 42, 0.12);
        }
        .cgpt-hero__showcase-img {
          width: 100%;
          height: auto;
          display: block;
        }
        @media (max-width: 767.98px) {
          .cgpt-hero {
            padding: 40px var(--cgpt-gutter) 0;
          }
          .cgpt-hero__inner { gap: 24px; }
        }
      `}</style>
    </section>
  );
}
