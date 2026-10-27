import Image from "next/image";
import type { SVGProps } from "react";

function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" {...props}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" {...props}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function SlackIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" {...props}>
      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zm10.122 2.521a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.268 0a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zm-2.523 10.122a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zm0-1.268a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
    </svg>
  );
}

function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" {...props}>
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zm-1.293 19.494h2.039L6.486 3.239H4.298l13.31 17.408z" />
    </svg>
  );
}

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" {...props}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

const FOOTER_COLS = [
  {
    title: "Platform",
    links: [
      { label: "Anti-Hallucination AI", href: "https://customgpt.ai/solutions/anti-hallucination-ai/" },
      { label: "No-Code GPT Builder", href: "https://customgpt.ai/solutions/no-code-gpt-builder/" },
      { label: "RAG API", href: "https://customgpt.ai/solutions/rag-api/" },
      { label: "Data Connectors", href: "https://customgpt.ai/integrations/" },
      { label: "Security and Trust", href: "https://customgpt.ai/solutions/security-and-trust/" },
      { label: "Pricing", href: "https://customgpt.ai/pricing/" },
      { label: "All platform features", href: "https://customgpt.ai/platform/" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "All Use Cases", href: "https://customgpt.ai/solutions/use-cases/" },
      { label: "Enterprise AI", href: "https://customgpt.ai/solutions/enterprise-ai/" },
      { label: "Customer Support AI", href: "https://customgpt.ai/solution/customer-service/" },
      { label: "Enterprise Knowledge Search", href: "https://customgpt.ai/solutions/enterprise-ai-search/" },
      { label: "Website AI Chatbot", href: "https://customgpt.ai/solutions/website-ai-chatbot/" },
      { label: "Internal Knowledge Search", href: "https://customgpt.ai/solutions/internal-search/" },
      { label: "Competitive Intelligence AI", href: "https://customgpt.ai/solutions/competitive-analysis/" },
      { label: "Onboarding and Training AI", href: "https://customgpt.ai/solutions/onboarding-and-training/" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "https://customgpt.ai/about/" },
      { label: "Testimonials", href: "https://customgpt.ai/testimonials/" },
      { label: "Partners", href: "https://customgpt.ai/solutions-partner/" },
      { label: "Contact us", href: "https://customgpt.ai/contact/" },
      { label: "Careers", href: "https://www.linkedin.com/company/customgpt/jobs/", external: true },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "https://customgpt.ai/blog/" },
      { label: "Video library", href: "https://customgpt.ai/resources/video-library/" },
      { label: "Case studies", href: "https://customgpt.ai/customers/" },
      { label: "Documentation", href: "https://docs.customgpt.ai/", external: true },
      { label: "Live demo", href: "https://customgpt.ai/demo/" },
      { label: "How it works", href: "https://customgpt.ai/how-it-works/" },
      { label: "FAQs", href: "https://customgpt.ai/faq/" },
    ],
  },
];

const SOCIAL_LINKS = [
  { icon: GithubIcon, label: "GitHub", href: "https://github.com/Poll-The-People/" },
  { icon: YoutubeIcon, label: "YouTube", href: "https://www.youtube.com/@CustomGPT" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/company/customgpt/" },
  { icon: SlackIcon, label: "Slack", href: "https://communitycustomgptai.slack.com/" },
  { icon: XIcon, label: "X", href: "https://x.com/CustomGPT" },
  { icon: FacebookIcon, label: "Facebook", href: "https://www.facebook.com/customgpt/" },
];

export function Footer() {
  return (
    <footer className="cgpt-footer" role="contentinfo">
      <div className="cgpt-footer__inner">
        <div className="cgpt-footer__top">
          {/* Brand */}
          <div className="cgpt-footer__brand">
            <a className="cgpt-footer__logo-link" href="https://customgpt.ai/" rel="home">
              <span className="cgpt-footer__logo-text">CustomGPT.ai</span>
            </a>
            <ul className="cgpt-footer__badges">
              <li>
                <a href="https://customgpt.ai/soc-2-compliance/">
                  <Image
                    src="/sites/customgpt-ai/badges/footer-soc2.webp"
                    alt="AICPA SOC 2 certified"
                    width={60}
                    height={60}
                    loading="lazy"
                  />
                </a>
              </li>
              <li>
                <a href="https://customgpt.ai/gdpr-compliance/">
                  <Image
                    src="/sites/customgpt-ai/badges/footer-gdpr.webp"
                    alt="GDPR compliant"
                    width={60}
                    height={60}
                    loading="lazy"
                  />
                </a>
              </li>
            </ul>
          </div>

          {/* Nav columns */}
          <nav className="cgpt-footer__nav" aria-label="Footer">
            {FOOTER_COLS.map((col) => (
              <div key={col.title} className="cgpt-footer__group">
                <h2 className="cgpt-footer__group-title">{col.title}</h2>
                <ul className="cgpt-footer__list">
                  {col.links.map((link) => (
                    <li key={link.label} className="cgpt-footer__item">
                      <a
                        className="cgpt-footer__link"
                        href={link.href}
                        {...("external" in link && link.external ? { target: "_blank", rel: "noopener" } : {})}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="cgpt-footer__bar">
          <ul className="cgpt-footer__social">
            {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
              <li key={label}>
                <a className="cgpt-footer__social-link" href={href} target="_blank" rel="noopener" aria-label={label}>
                  <Icon />
                </a>
              </li>
            ))}
          </ul>

          <p className="cgpt-footer__copyright">&copy; CustomGPT.ai, 2026</p>

          <ul className="cgpt-footer__legal">
            <li><a className="cgpt-footer__link" href="https://customgpt.ai/terms-and-conditions/">Terms &amp; Conditions</a></li>
            <li className="cgpt-footer__sep" aria-hidden="true" />
            <li><a className="cgpt-footer__link" href="https://customgpt.ai/privacy-policy/">Privacy Policy</a></li>
            <li className="cgpt-footer__sep" aria-hidden="true" />
            <li><a className="cgpt-footer__link" href="https://customgpt.ai/cookie-policy/">Cookie Policy</a></li>
          </ul>
        </div>
      </div>

      <style>{`
        .cgpt-footer {
          background: var(--cgpt-surface-soft);
          border-top: 1px solid var(--cgpt-rule);
        }
        .cgpt-footer__inner {
          max-width: var(--cgpt-container-max);
          margin: 0 auto;
          padding: 60px var(--cgpt-gutter) 32px;
        }
        .cgpt-footer__top {
          display: grid;
          gap: 48px;
          margin-bottom: 48px;
        }
        @media (min-width: 768px) {
          .cgpt-footer__top {
            grid-template-columns: 200px 1fr;
            gap: 64px;
          }
        }
        .cgpt-footer__brand {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .cgpt-footer__logo-link {
          display: inline-block;
          color: var(--cgpt-ink);
        }
        .cgpt-footer__logo-text {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--cgpt-ink);
        }
        .cgpt-footer__badges {
          display: flex;
          gap: 12px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .cgpt-footer__nav {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }
        @media (min-width: 768px) {
          .cgpt-footer__nav {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        .cgpt-footer__group-title {
          margin: 0 0 16px;
          font-size: var(--fs-sm);
          font-weight: 600;
          color: var(--cgpt-ink);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .cgpt-footer__list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .cgpt-footer__link {
          font-size: var(--fs-sm);
          color: var(--cgpt-ink-soft);
          transition: color var(--cgpt-duration-fast) var(--cgpt-ease);
        }
        .cgpt-footer__link:hover {
          color: var(--cgpt-accent);
        }
        /* Bottom bar */
        .cgpt-footer__bar {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 16px;
          padding-top: 24px;
          border-top: 1px solid var(--cgpt-rule);
        }
        .cgpt-footer__social {
          display: flex;
          gap: 12px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .cgpt-footer__social-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          color: var(--cgpt-ink-soft);
          transition: color var(--cgpt-duration-fast) var(--cgpt-ease);
        }
        .cgpt-footer__social-link:hover {
          color: var(--cgpt-accent);
        }
        .cgpt-footer__copyright {
          margin: 0;
          font-size: var(--fs-sm);
          color: var(--cgpt-ink-soft);
          margin-left: auto;
        }
        .cgpt-footer__legal {
          display: flex;
          align-items: center;
          gap: 12px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .cgpt-footer__sep {
          width: 1px;
          height: 12px;
          background: var(--cgpt-rule);
        }
        @media (max-width: 767.98px) {
          .cgpt-footer__inner { padding: 40px var(--cgpt-gutter) 24px; }
          .cgpt-footer__bar {
            flex-direction: column;
            align-items: flex-start;
          }
          .cgpt-footer__copyright { margin-left: 0; }
        }
      `}</style>
    </footer>
  );
}
