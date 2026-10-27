export function PricingSection() {
  const plans = [
    {
      name: "Standard",
      desc: "For solo builders running one or two agents who need the essentials to get started.",
      price: "$99/mo",
      billing: "Billed monthly \u2013 save $120/yr annual",
      href: "https://customgpt.ai/pricing/",
      tag: null,
    },
    {
      name: "Premium",
      desc: "For small teams scaling their AI strategy who don\u2019t need white-glove support.",
      price: "$499/mo",
      billing: "Billed monthly \u2013 save $600/yr annual",
      href: "https://customgpt.ai/pricing/",
      tag: "Recommended",
    },
    {
      name: "Enterprise",
      desc: "For organizations looking to partner with CustomGPT.ai to launch advanced AI solutions.",
      price: "Custom plan",
      billing: null,
      href: "https://calendly.com/d/crsf-rpd-7pn/customgpt-ai-enterprise-discussion/?utm_content=homepage_entr_card_cta",
      tag: null,
    },
  ];

  return (
    <section className="cgpt-section cgpt-section--tinted" id="sec-04">
      <div className="cgpt-container cgpt-container--narrow">
        <div className="cgpt-shead cgpt-shead--centered">
          <h2 className="cgpt-shead__title">Find your plan</h2>
          <div className="cgpt-shead__desc">
            <p>Transparent pricing and scalable features, so you can focus on driving outcomes with AI</p>
          </div>
        </div>

        <ul className="cgpt-plans">
          {plans.map((plan) => (
            <li key={plan.name} className="cgpt-plans__item">
              {plan.tag ? (
                <p className="cgpt-plans__tag">{plan.tag}</p>
              ) : (
                <p className="cgpt-plans__tag cgpt-plans__tag--empty" aria-hidden="true" />
              )}
              <div className={`cgpt-plans__panel${plan.tag ? " cgpt-plans__panel--highlighted" : ""}`}>
                <div className="cgpt-plans__info">
                  <div className="cgpt-plans__text">
                    <h3 className="cgpt-plans__name">{plan.name}</h3>
                    <p className="cgpt-plans__desc">{plan.desc}</p>
                  </div>
                  <div className="cgpt-plans__pricing">
                    <p className="cgpt-plans__price">{plan.price}</p>
                    {plan.billing && <p className="cgpt-plans__billing">{plan.billing}</p>}
                  </div>
                </div>
                <a className="cgpt-plans__link" href={plan.href}>
                  Learn more <span className="sr-only"> about {plan.name}</span>
                </a>
              </div>
            </li>
          ))}
        </ul>

        <div className="cgpt-cta--center" style={{ marginTop: 32 }}>
          <a className="cgpt-btn cgpt-btn--tertiary cgpt-btn--md" href="https://customgpt.ai/pricing/">
            View pricing plans
          </a>
        </div>
      </div>

      <style>{`
        .cgpt-section--tinted {
          background: var(--cgpt-brand-200);
        }
        .cgpt-plans {
          display: grid;
          gap: 24px;
          margin: 0;
          padding: 0;
          list-style: none;
        }
        @media (min-width: 900px) {
          .cgpt-plans {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .cgpt-plans__item {
          display: flex;
          flex-direction: column;
        }
        .cgpt-plans__tag {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0;
          min-height: 40px;
          padding: 8px 0;
          border-start-start-radius: 12px;
          border-start-end-radius: 12px;
          background: var(--cgpt-ink);
          color: var(--cgpt-surface);
          font-size: var(--fs-sm);
          font-weight: 500;
          line-height: var(--cgpt-lh-sm);
        }
        .cgpt-plans__tag--empty {
          background: none;
        }
        @media (max-width: 899.98px) {
          .cgpt-plans__tag--empty { display: none; }
        }
        .cgpt-plans__panel {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 28px;
          flex: 1;
          padding: 28px;
          border: 1px solid var(--cgpt-rule);
          border-radius: 12px;
          background: var(--cgpt-surface);
          box-shadow: 0 4px 18px rgba(75, 70, 92, 0.1);
        }
        .cgpt-plans__panel--highlighted {
          border-top-left-radius: 0;
          border-top-right-radius: 0;
          border-top: 0;
          background: linear-gradient(rgba(255,255,255,0.76), rgba(255,255,255,0.76)),
                      linear-gradient(135deg, var(--cgpt-surface-tinted), var(--cgpt-brand-200));
        }
        .cgpt-plans__info {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .cgpt-plans__text {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .cgpt-plans__name {
          margin: 0;
          font-size: var(--fs-lead);
          font-weight: 500;
          color: var(--cgpt-ink);
        }
        .cgpt-plans__desc {
          margin: 0;
          font-size: var(--fs-body);
          line-height: var(--cgpt-lh-body);
          color: var(--cgpt-ink-soft);
        }
        .cgpt-plans__pricing {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 12px;
        }
        .cgpt-plans__price {
          margin: 0;
          font-size: var(--fs-display-sm);
          font-weight: 600;
          color: var(--cgpt-ink);
          line-height: 1.1;
        }
        .cgpt-plans__billing {
          margin: 0;
          font-size: var(--fs-sm);
          color: var(--cgpt-ink-soft);
        }
        .cgpt-plans__link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 24px;
          border: 1px solid var(--cgpt-border-strong);
          border-radius: var(--cgpt-radius-pill);
          font-weight: 600;
          font-size: var(--fs-body);
          color: var(--cgpt-ink);
          transition: border-color var(--cgpt-duration-fast) var(--cgpt-ease),
                      background var(--cgpt-duration-fast) var(--cgpt-ease);
          margin-top: auto;
        }
        .cgpt-plans__link:hover {
          border-color: var(--cgpt-accent);
          background: var(--cgpt-surface-tinted);
        }
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }
      `}</style>
    </section>
  );
}
