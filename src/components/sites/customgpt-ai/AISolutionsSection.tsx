import Image from "next/image";

export function AISolutionsSection() {
  return (
    <section className="cgpt-section cgpt-section--surface" id="sec-01">
      <div className="cgpt-container cgpt-container--narrow">
        {/* Section header */}
        <div className="cgpt-shead cgpt-shead--split">
          <div className="cgpt-shead__lead">
            <p className="cgpt-shead__badge">AI Solutions</p>
            <h2 className="cgpt-shead__title">Build custom AI solutions faster with zero coding</h2>
          </div>
          <div className="cgpt-shead__desc">
            <p>Designed for businesses that want to deliver remarkable AI-driven customer experiences and operational efficiency without writing a single line of code.</p>
          </div>
        </div>

        {/* Two-column features */}
        <div className="cgpt-mcols">
          <div className="cgpt-mcols__col">
            <Image
              src="/sites/customgpt-ai/images/accuracy-northwind.webp"
              alt="A question about when Northwind Furniture was founded, answered from the company's own history with three internal documents listed as verified sources"
              width={1108}
              height={1084}
              className="cgpt-mcols__img"
              loading="lazy"
            />
            <div className="cgpt-mcols__text">
              <h3 className="cgpt-mcols__title">#1 in accuracy and anti-hallucinations</h3>
              <p className="cgpt-mcols__desc">Trust AI responses that are always grounded in your business data. CustomGPT.ai&apos;s advanced anti-hallucination technology ensures precision and reliability, setting a new standard for no-code AI solutions.</p>
            </div>
          </div>
          <div className="cgpt-mcols__col">
            <Image
              src="/sites/customgpt-ai/images/content-security.webp"
              alt="The CustomGPT.ai agent workspace showing conversation and document panels"
              width={1108}
              height={1084}
              className="cgpt-mcols__img"
              loading="lazy"
            />
            <div className="cgpt-mcols__text">
              <h3 className="cgpt-mcols__title">Robust and comprehensive data integrations</h3>
              <p className="cgpt-mcols__desc">Seamlessly integrate your AI agent with over 1,400 document types and tools like Google Drive, HubSpot, and Notion. Keep your AI up-to-date with real-time sync from multiple data sources.</p>
            </div>
          </div>
        </div>

        {/* Callout: Easy deployment */}
        <div className="cgpt-callout">
          <div className="cgpt-callout__text">
            <div className="cgpt-callout__copy">
              <h2 className="cgpt-callout__title">Easy deployment tools</h2>
              <p className="cgpt-callout__desc-text">Out-of-the-box widgets let you embed AI capabilities directly into your website, skipping complex UI/UX challenges.</p>
            </div>
            <a className="cgpt-btn cgpt-btn--tertiary" href="https://customgpt.ai/free-tools/">
              View our tools
            </a>
          </div>
          <div className="cgpt-callout__media">
            <Image
              src="/sites/customgpt-ai/images/callout-deployment.webp"
              alt="A table of deployed agents with their query volumes"
              width={1024}
              height={1009}
              className="cgpt-callout__img"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <style>{`
        .cgpt-section {
          padding: 80px var(--cgpt-gutter);
        }
        .cgpt-section--surface { background: var(--cgpt-surface); }
        .cgpt-section--soft { background: var(--cgpt-surface-soft); }
        .cgpt-section--tinted { background: var(--cgpt-surface-tinted); }
        .cgpt-container {
          max-width: var(--cgpt-container-max);
          margin: 0 auto;
        }
        .cgpt-container--narrow {
          max-width: var(--cgpt-container-narrow);
        }
        /* Section Head */
        .cgpt-shead {
          margin-bottom: 48px;
        }
        .cgpt-shead--split {
          display: grid;
          gap: 20px;
        }
        @media (min-width: 768px) {
          .cgpt-shead--split {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            align-items: end;
          }
        }
        .cgpt-shead--centered {
          text-align: center;
          max-width: 740px;
          margin-inline: auto;
          margin-bottom: 48px;
        }
        .cgpt-shead__badge {
          display: inline-block;
          margin: 0 0 16px;
          padding: 8px 16px;
          border-radius: 20px;
          background: var(--cgpt-surface-tinted);
          font-family: var(--cgpt-font-mono);
          font-size: var(--fs-sm);
          font-weight: 600;
          line-height: var(--cgpt-lh-sm);
          color: var(--cgpt-ink-soft);
        }
        .cgpt-shead__title {
          margin: 0;
          font-size: var(--fs-display);
          font-weight: var(--cgpt-weight-heading);
          line-height: var(--cgpt-lh-display);
          color: var(--cgpt-ink);
          text-wrap: balance;
        }
        .cgpt-shead__desc {
          color: var(--cgpt-ink-soft);
          font-size: var(--fs-body-lg);
          line-height: var(--cgpt-lh-body-lg);
        }
        .cgpt-shead__desc p { margin: 0; }
        /* Media columns */
        .cgpt-mcols {
          display: grid;
          gap: 32px;
          margin-bottom: 64px;
        }
        @media (min-width: 768px) {
          .cgpt-mcols { grid-template-columns: 1fr 1fr; }
        }
        .cgpt-mcols__col {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }
        .cgpt-mcols__img {
          width: 100%;
          height: auto;
          border-radius: 8px;
        }
        .cgpt-mcols__text {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .cgpt-mcols__title {
          margin: 0;
          font-size: var(--fs-heading);
          font-weight: 500;
          line-height: var(--cgpt-lh-display);
          color: var(--cgpt-ink);
        }
        .cgpt-mcols__desc {
          margin: 0;
          font-size: var(--fs-body-lg);
          line-height: var(--cgpt-lh-body-lg);
          color: var(--cgpt-ink-soft);
        }
        /* Callout */
        .cgpt-callout {
          display: grid;
          gap: 40px;
          align-items: center;
        }
        @media (min-width: 768px) {
          .cgpt-callout { grid-template-columns: 1fr 1fr; }
        }
        .cgpt-callout__text {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px;
          text-align: center;
        }
        @media (min-width: 768px) {
          .cgpt-callout__text {
            align-items: flex-start;
            text-align: start;
          }
        }
        .cgpt-callout__copy {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .cgpt-callout__title {
          margin: 0;
          font-size: var(--fs-display);
          font-weight: 500;
          line-height: var(--cgpt-lh-display);
          color: var(--cgpt-ink);
        }
        .cgpt-callout__desc-text {
          margin: 0;
          font-size: var(--fs-body-lg);
          line-height: var(--cgpt-lh-body-lg);
          color: var(--cgpt-ink-soft);
        }
        .cgpt-callout__img {
          width: 100%;
          height: auto;
          border-radius: 8px;
        }
        @media (max-width: 767.98px) {
          .cgpt-section { padding: 48px var(--cgpt-gutter); }
          .cgpt-shead__title {
            font-size: var(--fs-heading);
            line-height: var(--cgpt-lh-display);
          }
          .cgpt-mcols__title {
            font-size: 1.25rem;
          }
          .cgpt-callout__title {
            font-size: var(--fs-heading);
          }
        }
      `}</style>
    </section>
  );
}
