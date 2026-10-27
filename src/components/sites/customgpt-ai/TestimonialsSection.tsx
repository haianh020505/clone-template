"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  {
    avatar: "/sites/customgpt-ai/images/avatar-gema.webp",
    name: "Jonas Walther",
    role: "Manager Data & AI, GEMA",
    logo: "/sites/customgpt-ai/logos/gema.webp",
    logoAlt: "GEMA",
    logoW: 60,
    logoH: 72,
    quote: "\u201cCustomGPT.ai isn\u2019t just a support tool. It\u2019s become a knowledge infrastructure for how GEMA operates.\u201d",
    stats: [
      { value: "6,000+", label: "Working hours saved annually" },
      { value: "88%", label: "Query success rate" },
      { value: "\u20ac182K\u2013211K", label: "Annual cost avoidance" },
    ],
  },
  {
    avatar: "/sites/customgpt-ai/images/avatar-conor.webp",
    name: "Conor Sullivan",
    role: "VP @ The Endurance Group",
    logo: "/sites/customgpt-ai/logos/endurance-group.webp",
    logoAlt: "The Endurance Group",
    logoW: 244,
    logoH: 63,
    quote: "\u201cBefore, my clients could reasonably only reach out to maybe one target account a week\u2026 Now, they can quadruple or quintuple that because your technology makes it so easy to write all of this content that otherwise took a long time.\u201d",
    stats: [
      { value: "300%", label: "increase in workflow efficiency" },
      { value: "4-5x", label: "more outreach volume per client" },
      { value: "2x Revenue", label: "as an AI implementation partner" },
    ],
  },
];

export function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPrev = () => setCurrentSlide((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1));
  const goToNext = () => setCurrentSlide((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1));

  const slide = TESTIMONIALS[currentSlide];

  return (
    <section className="cgpt-section cgpt-section--soft" id="sec-02">
      <div className="cgpt-container cgpt-container--narrow">
        <div className="cgpt-shead cgpt-shead--centered">
          <p className="cgpt-shead__badge">Feedback</p>
          <h2 className="cgpt-shead__title">Thousands of businesses rely on CustomGPT.ai</h2>
        </div>

        <div className="cgpt-quotes">
          <figure className="cgpt-quotes__slide" key={currentSlide}>
            <div className="cgpt-quotes__head">
              <Image
                src={slide.avatar}
                alt={slide.name}
                width={74}
                height={74}
                className="cgpt-quotes__avatar"
              />
              <figcaption className="cgpt-quotes__who">
                <span className="cgpt-quotes__name">{slide.name}</span>
                <span className="cgpt-quotes__role">{slide.role}</span>
              </figcaption>
              <Image
                src={slide.logo}
                alt={slide.logoAlt}
                width={slide.logoW}
                height={slide.logoH}
                className="cgpt-quotes__logo"
              />
            </div>

            <blockquote className="cgpt-quotes__quote">{slide.quote}</blockquote>

            <ul className="cgpt-quotes__stats">
              {slide.stats.map((stat) => (
                <li key={stat.label} className="cgpt-quotes__stat">
                  <span className="cgpt-quotes__stat-value">{stat.value}</span>
                  <span className="cgpt-quotes__stat-label">{stat.label}</span>
                </li>
              ))}
            </ul>
          </figure>

          <div className="cgpt-quotes__arrows">
            <button className="cgpt-quotes__arrow" type="button" onClick={goToPrev} aria-label="Previous testimonial">
              <ChevronLeft size={18} />
            </button>
            <button className="cgpt-quotes__arrow" type="button" onClick={goToNext} aria-label="Next testimonial">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="cgpt-cta--center">
          <a className="cgpt-btn cgpt-btn--tertiary cgpt-btn--md" href="https://customgpt.ai/customers/">
            More stories
          </a>
        </div>
      </div>

      <style>{`
        .cgpt-section--soft {
          background: var(--cgpt-surface-soft);
        }
        .cgpt-quotes {
          max-width: 840px;
          margin: 0 auto 40px;
        }
        .cgpt-quotes__slide {
          margin: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 32px;
          text-align: center;
        }
        .cgpt-quotes__head {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .cgpt-quotes__avatar {
          width: 74px;
          height: 74px;
          border-radius: 50%;
          object-fit: cover;
        }
        .cgpt-quotes__who {
          display: flex;
          flex-direction: column;
          gap: 4px;
          text-align: left;
        }
        .cgpt-quotes__name {
          font-size: var(--fs-body-lg);
          font-weight: 600;
          color: var(--cgpt-ink);
        }
        .cgpt-quotes__role {
          font-size: var(--fs-sm);
          color: var(--cgpt-ink-soft);
        }
        .cgpt-quotes__logo {
          max-height: 52px;
          width: auto;
          object-fit: contain;
          margin-left: auto;
        }
        .cgpt-quotes__quote {
          margin: 0;
          font-size: var(--fs-lead);
          font-weight: 400;
          line-height: 1.5;
          color: var(--cgpt-ink);
          max-width: 700px;
        }
        .cgpt-quotes__stats {
          display: flex;
          gap: 32px;
          list-style: none;
          margin: 0;
          padding: 0;
          flex-wrap: wrap;
          justify-content: center;
        }
        .cgpt-quotes__stat {
          display: flex;
          flex-direction: column;
          gap: 4px;
          min-width: 140px;
        }
        .cgpt-quotes__stat-value {
          font-size: var(--fs-display-sm);
          font-weight: 600;
          color: var(--cgpt-accent);
          line-height: 1.1;
        }
        .cgpt-quotes__stat-label {
          font-size: var(--fs-sm);
          color: var(--cgpt-ink-soft);
        }
        .cgpt-quotes__arrows {
          display: flex;
          gap: 8px;
          justify-content: center;
          margin-top: 24px;
        }
        .cgpt-quotes__arrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          padding: 0;
          border: 1px solid var(--cgpt-rule);
          border-radius: 999px;
          background: var(--cgpt-surface);
          color: var(--cgpt-ink);
          cursor: pointer;
          transition: background var(--cgpt-duration-fast) var(--cgpt-ease);
        }
        .cgpt-quotes__arrow:hover {
          background: var(--cgpt-surface-soft);
        }
        .cgpt-cta--center {
          display: flex;
          justify-content: center;
        }
        @media (max-width: 767.98px) {
          .cgpt-quotes__stats { gap: 16px; }
          .cgpt-quotes__stat { min-width: 100px; }
          .cgpt-quotes__quote { font-size: var(--fs-body-lg); }
          .cgpt-quotes__logo { margin-left: 0; }
        }
      `}</style>
    </section>
  );
}
