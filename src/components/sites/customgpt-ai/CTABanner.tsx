import Image from "next/image";

export function CTABanner() {
  return (
    <section className="cgpt-cta-banner" id="closing-cta">
      <div className="cgpt-cta-banner__bg">
        <Image
          src="/sites/customgpt-ai/images/cta-poster.jpg"
          alt=""
          fill
          className="cgpt-cta-banner__bg-img"
          loading="lazy"
        />
        <div className="cgpt-cta-banner__overlay" />
      </div>

      <div className="cgpt-cta-banner__inner">
        <h2 className="cgpt-cta-banner__heading">Create your custom business AI today</h2>
        <div className="cgpt-cta-banner__actions">
          <a className="cgpt-btn cgpt-btn--secondary cgpt-btn--lg cgpt-btn--on-dark" href="https://app.customgpt.ai/register">
            Try for free
          </a>
          <a className="cgpt-btn cgpt-btn--tertiary cgpt-btn--lg" href="https://calendly.com/d/crsf-rpd-7pn/customgpt-ai-enterprise-discussion/?utm_content=homepage_btm_cta">
            Talk to sales
          </a>
        </div>
      </div>

      <style>{`
        .cgpt-cta-banner {
          position: relative;
          display: grid;
          place-items: center;
          min-height: 324px;
          padding: 60px var(--cgpt-gutter);
          overflow: hidden;
          isolation: isolate;
          text-align: center;
        }
        .cgpt-cta-banner__bg {
          position: absolute;
          inset: 0;
          z-index: -2;
        }
        .cgpt-cta-banner__bg-img {
          object-fit: cover;
        }
        .cgpt-cta-banner__overlay {
          position: absolute;
          inset: 0;
          background: rgba(22, 21, 42, 0.55);
          z-index: -1;
        }
        .cgpt-cta-banner__inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px;
          width: 100%;
          max-width: 840px;
        }
        .cgpt-cta-banner__heading {
          margin: 0;
          font-size: var(--fs-display);
          font-weight: 500;
          line-height: var(--cgpt-lh-display);
          color: #fff;
          text-wrap: balance;
        }
        .cgpt-cta-banner__actions {
          display: flex;
          flex-wrap: nowrap;
          justify-content: center;
          gap: 20px;
        }
        .cgpt-btn--on-dark {
          background: transparent;
          color: #fff;
          border-color: rgba(255, 255, 255, 0.4);
        }
        .cgpt-btn--on-dark:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: #fff;
        }
        @media (max-width: 767.98px) {
          .cgpt-cta-banner {
            min-height: 0;
            padding-block: 48px;
          }
          .cgpt-cta-banner__inner { gap: 24px; }
          .cgpt-cta-banner__heading {
            font-size: 1.5rem;
            line-height: 1.2;
          }
          .cgpt-cta-banner__actions {
            flex-direction: column;
            align-items: stretch;
            align-self: stretch;
            gap: 12px;
          }
        }
      `}</style>
    </section>
  );
}
