import Image from "next/image";
import { Waypoints, Rocket } from "lucide-react";

export function StepsSection() {
  return (
    <section className="cgpt-section cgpt-section--surface" id="sec-03">
      <div className="cgpt-container cgpt-container--narrow">
        <div className="cgpt-shead cgpt-shead--centered">
          <p className="cgpt-shead__badge">Easy launch</p>
          <h2 className="cgpt-shead__title">Launch in 2 streamlined steps</h2>
        </div>

        <div className="cgpt-steps">
          <ol className="cgpt-steps__list">
            <li className="cgpt-steps__item">
              <div className="cgpt-steps__marker">
                <Waypoints className="cgpt-steps__icon" size={24} />
                <span className="cgpt-steps__num">01</span>
              </div>
              <div className="cgpt-steps__text">
                <h3 className="cgpt-steps__title-text">Connect data</h3>
                <p className="cgpt-steps__desc">Make your information accessible with 1,400+ supported file types and dozens of integrations</p>
              </div>
              <a className="cgpt-btn cgpt-btn--tertiary cgpt-btn--sm" href="https://customgpt.ai/integrations/">
                View data connectors
              </a>
            </li>

            <li className="cgpt-steps__item">
              <div className="cgpt-steps__marker">
                <Rocket className="cgpt-steps__icon" size={24} />
                <span className="cgpt-steps__num">02</span>
              </div>
              <div className="cgpt-steps__text">
                <h3 className="cgpt-steps__title-text">Deploy</h3>
                <p className="cgpt-steps__desc">Deploy in one click wherever you need business-specific answers</p>
              </div>
              <a className="cgpt-btn cgpt-btn--tertiary cgpt-btn--sm" href="https://customgpt.ai/how-it-works/">
                See how it works
              </a>
            </li>
          </ol>

          <div className="cgpt-steps__figure">
            <Image
              src="/sites/customgpt-ai/images/steps-refund-policy.webp"
              alt="An agent answering a question about the annual plan refund policy, citing the billing FAQ and the attached refund policy PDF"
              width={1080}
              height={720}
              className="cgpt-steps__img"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <style>{`
        .cgpt-steps {
          display: grid;
          gap: 40px;
          align-items: start;
        }
        @media (min-width: 768px) {
          .cgpt-steps {
            grid-template-columns: 1fr 1.2fr;
            gap: 60px;
          }
        }
        .cgpt-steps__list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
        .cgpt-steps__item {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .cgpt-steps__marker {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .cgpt-steps__icon {
          color: var(--cgpt-accent);
          flex-shrink: 0;
        }
        .cgpt-steps__num {
          font-family: var(--cgpt-font-mono);
          font-size: var(--fs-sm);
          font-weight: 600;
          color: var(--cgpt-ink-soft);
        }
        .cgpt-steps__text {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .cgpt-steps__title-text {
          margin: 0;
          font-size: var(--fs-heading);
          font-weight: 500;
          color: var(--cgpt-ink);
        }
        .cgpt-steps__desc {
          margin: 0;
          font-size: var(--fs-body);
          line-height: var(--cgpt-lh-body);
          color: var(--cgpt-ink-soft);
        }
        .cgpt-steps__figure {
          border-radius: 16px;
          overflow: hidden;
          background: var(--cgpt-surface-soft);
          box-shadow: 0 12px 40px rgba(22, 21, 42, 0.08);
        }
        .cgpt-steps__img {
          width: 100%;
          height: auto;
          display: block;
        }
      `}</style>
    </section>
  );
}
