import Image from "next/image";
import { Target, ShieldCheck, Link } from "lucide-react";

export function SecuritySection() {
  return (
    <section className="cgpt-section cgpt-section--surface" id="sec-05">
      <div className="cgpt-container cgpt-container--narrow">
        {/* Security header */}
        <div className="cgpt-shead cgpt-shead--centered">
          <p className="cgpt-shead__badge">Security &amp; Reliability</p>
          <h2 className="cgpt-shead__title">Enterprise-grade security</h2>
        </div>

        {/* Badge cards */}
        <ul className="cgpt-fcards cgpt-fcards--badge">
          <li className="cgpt-fcards__item">
            <Image
              src="/sites/customgpt-ai/badges/soc2.webp"
              alt="The AICPA SOC 2 seal"
              width={120}
              height={120}
              className="cgpt-fcards__media"
              loading="lazy"
            />
            <div className="cgpt-fcards__text">
              <h3 className="cgpt-fcards__title">SOC2 Compliant</h3>
              <p className="cgpt-fcards__desc">Independently audited for security</p>
              <a className="cgpt-fcards__textlink" href="https://customgpt.ai/soc-2-compliance/">
                Read about SOC2 compliance
              </a>
            </div>
          </li>
          <li className="cgpt-fcards__item">
            <Image
              src="/sites/customgpt-ai/badges/gdpr.webp"
              alt="The GDPR compliance seal"
              width={120}
              height={120}
              className="cgpt-fcards__media"
              loading="lazy"
            />
            <div className="cgpt-fcards__text">
              <h3 className="cgpt-fcards__title">GDPR Compliant</h3>
              <p className="cgpt-fcards__desc">Meets EU data privacy standards</p>
              <a className="cgpt-fcards__textlink" href="https://customgpt.ai/gdpr-compliance/">
                Read about GDPR compliance
              </a>
            </div>
          </li>
        </ul>

        {/* Data use header */}
        <div className="cgpt-shead cgpt-shead--centered" style={{ marginTop: 64 }}>
          <p className="cgpt-shead__badge">Data Use &amp; Responsibility</p>
        </div>

        {/* Icon feature cards */}
        <ul className="cgpt-fcards cgpt-fcards--icon">
          <li className="cgpt-fcards__item cgpt-fcards__item--icon">
            <Target className="cgpt-fcards__icon-svg" size={32} />
            <div className="cgpt-fcards__text">
              <h3 className="cgpt-fcards__title">Accuracy</h3>
              <p className="cgpt-fcards__desc">#1 for anti-hallucination technology</p>
            </div>
          </li>
          <li className="cgpt-fcards__item cgpt-fcards__item--icon">
            <ShieldCheck className="cgpt-fcards__icon-svg" size={32} />
            <div className="cgpt-fcards__text">
              <h3 className="cgpt-fcards__title">Data protection</h3>
              <p className="cgpt-fcards__desc">No training or sharing your data</p>
            </div>
          </li>
          <li className="cgpt-fcards__item cgpt-fcards__item--icon">
            <Link className="cgpt-fcards__icon-svg" size={32} />
            <div className="cgpt-fcards__text">
              <h3 className="cgpt-fcards__title">Citations</h3>
              <p className="cgpt-fcards__desc">Every response has a link directly to its source</p>
            </div>
          </li>
        </ul>

        <div className="cgpt-cta--center" style={{ marginTop: 40 }}>
          <a className="cgpt-btn cgpt-btn--tertiary cgpt-btn--md" href="https://customgpt.ai/solutions/security-and-trust/">
            Explore security and trust
          </a>
        </div>
      </div>

      <style>{`
        .cgpt-fcards {
          display: grid;
          gap: 24px;
          margin: 0;
          padding: 0;
          list-style: none;
        }
        .cgpt-fcards--badge {
          grid-template-columns: 1fr;
        }
        @media (min-width: 768px) {
          .cgpt-fcards--badge {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .cgpt-fcards--icon {
          grid-template-columns: 1fr;
        }
        @media (min-width: 768px) {
          .cgpt-fcards--icon {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .cgpt-fcards__item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          padding: 32px 24px;
          border: 1px solid var(--cgpt-rule);
          border-radius: var(--cgpt-radius-md);
          background: var(--cgpt-surface);
          text-align: center;
        }
        .cgpt-fcards__media {
          width: 120px;
          height: 120px;
          object-fit: contain;
        }
        .cgpt-fcards__text {
          display: flex;
          flex-direction: column;
          gap: 8px;
          align-items: center;
        }
        .cgpt-fcards__title {
          margin: 0;
          font-size: var(--fs-body-lg);
          font-weight: 600;
          color: var(--cgpt-ink);
        }
        .cgpt-fcards__desc {
          margin: 0;
          font-size: var(--fs-body);
          line-height: var(--cgpt-lh-body);
          color: var(--cgpt-ink-soft);
        }
        .cgpt-fcards__textlink {
          font-size: var(--fs-sm);
          font-weight: 500;
          color: var(--cgpt-accent);
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .cgpt-fcards__textlink:hover {
          color: var(--cgpt-accent-hover);
        }
        .cgpt-fcards__icon-svg {
          color: var(--cgpt-accent);
          flex-shrink: 0;
        }
      `}</style>
    </section>
  );
}
