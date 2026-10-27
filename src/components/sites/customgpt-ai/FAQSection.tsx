"use client";

const FAQ_ITEMS = [
  {
    id: "q-what-is-customgpt-ai",
    question: "What is CustomGPT.ai?",
    answer: "CustomGPT.ai is the #1 no-code platform for creating custom AI agents for your business. It builds AI agents powered by advanced large language models (LLMs) tailored to your business content, without requiring any coding skills.",
  },
  {
    id: "q-how-does-customgpt-ai-work",
    question: "What is CustomGPT.ai, and how does it work?",
    answer: "CustomGPT.ai creates your own custom ChatGPT chatbot with all your business content. You then get accurate, trusted ChatGPT responses from your content without making up facts. All within a secure, privacy-first, business-grade platform. It works by ingesting your data, including your website content, helpdesk, knowledge bases, documents, YouTube videos, podcasts, etc. and uses this information to let ChatGPT respond to customer and employee inquiries.",
  },
  {
    id: "q-will-customgpt-ai-train-on-my-data",
    question: "Will CustomGPT.ai train on my data?",
    answer: "No \u2013 CustomGPT.ai will never use your data to train any Large Language Model (LLM) or AI in general.",
  },
  {
    id: "q-what-is-an-ai-agent",
    question: "What is an AI agent?",
    answer: "An AI agent is an app that uses artificial intelligence to perform tasks or provide information based on your business content. It\u2019s a specialized digital assistant trained on your specific business content to handle questions and interactions tailored to your organization\u2019s needs.",
  },
  {
    id: "q-is-my-data-safe-with-customgpt-ai",
    question: "Is my data safe with CustomGPT.ai?",
    answer: "Your data is fully protected with CustomGPT.ai through enterprise-grade security measures, including SOC 2 Type 2 compliance and GDPR adherence. We employ strict access controls and encryption to safeguard your information.",
  },
  {
    id: "q-how-does-customgpt-ai-use-my-data",
    question: "How does CustomGPT.ai use my data to build an AI agent?",
    answer: "CustomGPT.ai uses your data to build a custom chatbot by ingesting the information you provide into our system. This information can include your company\u2019s public content like websites, knowledge bases, helpdesks, YouTube videos, and podcasts but also private content like business and product information documents.",
  },
  {
    id: "q-how-do-i-get-started",
    question: "How do I get started with CustomGPT.ai, and how do I subscribe to the service?",
    answer: "To get started with CustomGPT.ai, simply sign up for a subscription to our service. After the 2-minute setup, our system will get to work building a custom chatbot trained on your specific content. You can get started quickly just by uploading your documents or using your website sitemap.",
  },
  {
    id: "q-pricing-model",
    question: "What is the pricing model for CustomGPT.ai, and how does it work?",
    answer: "CustomGPT.ai offers Standard ($99/month), Premium ($499/month), and Enterprise (custom pricing) plans to meet a variety of business needs. Please visit our pricing page to see the full set of features and subscription plans.",
  },
  {
    id: "q-how-provide-content",
    question: "How can I provide my content and data to CustomGPT.ai?",
    answer: "You can provide your business content and data to CustomGPT.ai in various ways: provide the sitemap of your website, upload documents (1400+ formats supported), or add data from multiple sources like Google Drive, Notion, HubSpot, etc.",
  },
  {
    id: "q-white-label",
    question: "Can I white-label and customize the AI agent to my branding and business?",
    answer: "Yes, you can easily personalize the AI agent with your logo, background, and other branding elements using our no-code platform. Premium and Enterprise plans can remove CustomGPT.ai branding.",
  },
  {
    id: "q-not-technical",
    question: "I\u2019m not technical. Can I use this if I can\u2019t code?",
    answer: "Absolutely! CustomGPT.ai is the #1 no-code AI platform and is designed for non-technical users. You can simply upload documents or input your website in your dashboard to build custom AI agents in minutes, with no coding or technical expertise required.",
  },
  {
    id: "q-languages",
    question: "What languages are supported by CustomGPT.ai?",
    answer: "We support 92 languages including English, Spanish, French, German, Japanese, Chinese, Arabic, and many more.",
  },
];

export function FAQSection() {
  return (
    <section className="cgpt-section cgpt-section--surface" id="sec-07">
      <div className="cgpt-container">
        <div className="cgpt-faq">
          <h2 className="cgpt-faq__heading">Frequently Asked Questions</h2>
          <div className="cgpt-faq__list">
            {FAQ_ITEMS.map((item) => (
              <details key={item.id} className="cgpt-faq__item" id={item.id} name="faq-06">
                <summary className="cgpt-faq__q">
                  <span className="cgpt-faq__q-text">{item.question}</span>
                  <span className="cgpt-faq__icon" aria-hidden="true" />
                </summary>
                <div className="cgpt-faq__a">
                  <p>{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .cgpt-faq {
          width: 100%;
          max-width: 840px;
          margin: 0 auto;
        }
        .cgpt-faq__heading {
          margin: 0 0 44px;
          font-size: var(--fs-display);
          font-weight: var(--cgpt-weight-heading);
          line-height: var(--cgpt-lh-display);
          color: var(--cgpt-ink);
          text-align: center;
          text-wrap: balance;
        }
        .cgpt-faq__list {
          display: flex;
          flex-direction: column;
        }
        .cgpt-faq__item + .cgpt-faq__item {
          border-top: 1px solid var(--cgpt-rule);
        }
        .cgpt-faq__q {
          display: flex;
          align-items: center;
          gap: 60px;
          padding-block: 20px;
          cursor: pointer;
          list-style: none;
          font-size: var(--fs-body-lg);
          font-weight: 400;
          line-height: var(--cgpt-lh-body-lg);
          color: var(--cgpt-ink);
        }
        .cgpt-faq__q::-webkit-details-marker { display: none; }
        .cgpt-faq__q::marker { content: ""; }
        .cgpt-faq__q:hover { color: var(--cgpt-accent); }
        .cgpt-faq__q-text { flex: 1 1 auto; }
        .cgpt-faq__icon {
          flex: none;
          position: relative;
          width: 32px;
          height: 32px;
        }
        .cgpt-faq__icon::before,
        .cgpt-faq__icon::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 19px;
          height: 2px;
          background: currentcolor;
          translate: -50% -50%;
          transition: rotate var(--cgpt-duration-base) var(--cgpt-ease);
        }
        .cgpt-faq__icon::after {
          rotate: 90deg;
        }
        .cgpt-faq__item[open] .cgpt-faq__icon::after {
          rotate: 0deg;
        }
        .cgpt-faq__a {
          padding-bottom: 28px;
          padding-right: 92px;
          color: var(--cgpt-ink-soft);
          font-size: var(--fs-body);
          line-height: 1.5;
        }
        .cgpt-faq__a p { margin: 0; }
        @media (min-width: 600px) {
          .cgpt-faq__q {
            padding-block: 28px;
            font-size: var(--fs-lead);
          }
          .cgpt-faq__a {
            font-size: var(--fs-body-lg);
            line-height: var(--cgpt-lh-body-lg);
          }
        }
        @media (max-width: 599.98px) {
          .cgpt-faq__heading {
            margin-bottom: 32px;
            font-size: var(--fs-display-sm);
            line-height: 1.1875;
          }
          .cgpt-faq__a {
            padding-right: 0;
            padding-bottom: 20px;
          }
        }
      `}</style>
    </section>
  );
}
