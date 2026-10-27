"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Solutions", href: "https://customgpt.ai/solutions/use-cases/" },
  { label: "Customers", href: "https://customgpt.ai/customers/" },
  { label: "Pricing", href: "https://customgpt.ai/pricing/" },
  { label: "Resources", href: "https://customgpt.ai/blog/" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="cgpt-header">
      <div className="cgpt-header__inner">
        {/* Logo */}
        <a href="https://customgpt.ai/" className="cgpt-header__logo" aria-label="CustomGPT.ai home">
          <svg viewBox="0 0 192 32" width={152} height={26} aria-label="CustomGPT.ai" role="img">
            <text x="0" y="24" fill="currentColor" fontSize="22" fontWeight="600" fontFamily="Inter, system-ui, sans-serif">
              CustomGPT.ai
            </text>
          </svg>
        </a>

        {/* Desktop nav */}
        <nav className="cgpt-header__nav" aria-label="Main">
          <ul className="cgpt-header__nav-list">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a className="cgpt-header__nav-link" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop actions */}
        <div className="cgpt-header__actions">
          <a className="cgpt-btn cgpt-btn--ghost cgpt-btn--sm" href="https://app.customgpt.ai/login">
            Sign In
          </a>
          <a className="cgpt-btn cgpt-btn--tertiary cgpt-btn--sm" href="https://app.customgpt.ai/register">
            Try for free
          </a>
          <a
            className="cgpt-btn cgpt-btn--secondary cgpt-btn--sm"
            href="https://calendly.com/d/crsf-rpd-7pn/customgpt-ai-enterprise-discussion/?utm_content=header_cta"
            target="_blank"
            rel="noopener"
          >
            Talk to sales
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="cgpt-header__toggle"
          type="button"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="sr-only">Menu</span>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="cgpt-drawer">
          <nav className="cgpt-drawer__nav" aria-label="Mobile">
            <ul className="cgpt-drawer__list">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a className="cgpt-drawer__link" href={link.href} onClick={() => setMobileOpen(false)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="cgpt-drawer__actions">
            <a className="cgpt-btn cgpt-btn--ghost cgpt-btn--sm cgpt-btn--full" href="https://app.customgpt.ai/login">
              Sign In
            </a>
            <a className="cgpt-btn cgpt-btn--tertiary cgpt-btn--sm cgpt-btn--full" href="https://app.customgpt.ai/register">
              Try for free
            </a>
            <a
              className="cgpt-btn cgpt-btn--secondary cgpt-btn--sm cgpt-btn--full"
              href="https://calendly.com/d/crsf-rpd-7pn/customgpt-ai-enterprise-discussion/?utm_content=header_cta"
              target="_blank"
              rel="noopener"
            >
              Talk to sales
            </a>
          </div>
        </div>
      )}

      <style>{`
        .cgpt-header {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--cgpt-rule);
        }
        .cgpt-header__inner {
          display: flex;
          align-items: center;
          gap: 8px;
          max-width: var(--cgpt-container-max);
          margin: 0 auto;
          padding: 12px var(--cgpt-gutter);
        }
        .cgpt-header__logo {
          display: flex;
          align-items: center;
          color: var(--cgpt-ink);
          flex-shrink: 0;
        }
        .cgpt-header__nav {
          margin-left: auto;
          display: none;
        }
        @media (min-width: 768px) {
          .cgpt-header__nav { display: flex; }
        }
        .cgpt-header__nav-list {
          display: flex;
          gap: 4px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .cgpt-header__nav-link {
          display: inline-flex;
          align-items: center;
          padding: 8px 16px;
          border-radius: var(--cgpt-radius-pill);
          font-size: var(--fs-sm);
          font-weight: 500;
          color: var(--cgpt-ink);
          transition: background var(--cgpt-duration-fast) var(--cgpt-ease);
        }
        .cgpt-header__nav-link:hover {
          background: var(--cgpt-surface-tinted);
          color: var(--cgpt-accent);
        }
        .cgpt-header__actions {
          display: none;
          gap: 8px;
          margin-left: 8px;
        }
        @media (min-width: 768px) {
          .cgpt-header__actions { display: flex; }
        }
        .cgpt-header__toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: auto;
          width: 40px;
          height: 40px;
          padding: 0;
          border: none;
          background: none;
          color: var(--cgpt-ink);
          cursor: pointer;
        }
        @media (min-width: 768px) {
          .cgpt-header__toggle { display: none; }
        }
        /* Buttons */
        .cgpt-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: var(--cgpt-radius-pill);
          font-weight: 600;
          font-size: var(--fs-sm);
          line-height: 1.2;
          text-align: center;
          text-decoration: none;
          border: 1px solid transparent;
          transition: background-color var(--cgpt-duration-fast) var(--cgpt-ease),
                      border-color var(--cgpt-duration-fast) var(--cgpt-ease),
                      color var(--cgpt-duration-fast) var(--cgpt-ease);
          white-space: nowrap;
          cursor: pointer;
        }
        .cgpt-btn--sm {
          padding: 8px 16px;
          min-height: 36px;
        }
        .cgpt-btn--ghost {
          background: transparent;
          color: var(--cgpt-ink);
          padding-inline: 8px;
        }
        .cgpt-btn--ghost:hover { color: var(--cgpt-accent); }
        .cgpt-btn--tertiary {
          background: var(--cgpt-ink);
          color: #fff;
        }
        .cgpt-btn--tertiary:hover {
          background: #2a2940;
          color: #fff;
        }
        .cgpt-btn--secondary {
          background: transparent;
          color: var(--cgpt-ink);
          border-color: var(--cgpt-border-strong);
        }
        .cgpt-btn--secondary:hover {
          border-color: var(--cgpt-accent);
          background: var(--cgpt-surface-tinted);
        }
        .cgpt-btn--primary {
          background: var(--cgpt-accent);
          color: #fff;
        }
        .cgpt-btn--primary:hover {
          background: var(--cgpt-accent-hover);
          color: #fff;
        }
        .cgpt-btn--full { width: 100%; }
        .cgpt-btn--lg {
          padding: 14px 28px;
          min-height: 48px;
          font-size: var(--fs-body);
        }
        .cgpt-btn--md {
          padding: 10px 24px;
          min-height: 44px;
          font-size: var(--fs-body);
        }
        /* Mobile drawer */
        .cgpt-drawer {
          padding: 16px var(--cgpt-gutter) 24px;
          border-top: 1px solid var(--cgpt-rule);
        }
        .cgpt-drawer__list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
        }
        .cgpt-drawer__link {
          display: block;
          padding: 14px 0;
          font-size: var(--fs-body-lg);
          font-weight: 500;
          color: var(--cgpt-ink);
          border-bottom: 1px solid var(--cgpt-rule);
        }
        .cgpt-drawer__actions {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 20px;
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
    </header>
  );
}
