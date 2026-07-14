"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  Beaker,
  Building2,
  CheckCircle2,
  ClipboardList,
  Factory,
  FileText,
  FlaskConical,
  Leaf,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Target,
  X,
} from "lucide-react";
import { SiteHeader } from "./components/SiteHeader";
import { useI18n } from "./i18n/I18nProvider";
import { getFeaturedProducts } from "./lib/product-catalog";

const proofIcons = [Building2, Factory, Beaker, Sparkles, CheckCircle2];
const heroTrustMeta = [
  { label: "Manufacturing history", Icon: Building2 },
  { label: "Factory capacity", Icon: Factory },
  { label: "Technical patents", Icon: Beaker },
  { label: "Quality system", Icon: ShieldCheck },
  { label: "Compliance review", Icon: CheckCircle2 },
];
const advantageIcons = [FlaskConical, Leaf, Target, ShieldCheck];
const trustPartners = ["BASF", "Sinopec", "BYD", "Gree", "Midea", "Mixue Bingcheng"];
const factoryHighlights = [
  {
    title: "Company identity",
    text: "ARGIOPE / Jindaquan brand wall and reception environment for buyer confidence.",
    image: "/assets/site-factory/argiope-company-logo-wall.webp",
    alt: "ARGIOPE Jindaquan company logo wall",
  },
  {
    title: "Production equipment",
    text: "On-site plastic additive production equipment and workshop capability.",
    image: "/assets/site-factory/plastic-additives-production-equipment.webp",
    alt: "Plastic additives production equipment in Jindaquan factory",
  },
  {
    title: "Raw material storage",
    text: "Warehouse storage for packaged polymer additive materials and export supply.",
    image: "/assets/site-factory/plastic-additives-warehouse-storage.webp",
    alt: "Plastic additive raw material warehouse storage",
  },
  {
    title: "Quality credentials",
    text: "Patent, certification and quality documentation display for supplier review.",
    image: "/assets/site-factory/jindaquan-certifications-patents-wall.webp",
    alt: "Jindaquan certifications and patent display wall",
  },
];
const factoryMapSrc =
  "https://www.openstreetmap.org/export/embed.html?bbox=114.7051%2C22.9728%2C114.7351%2C22.9968&layer=mapnik&marker=22.9848%2C114.7201";

export default function Home() {
  const { t } = useI18n();
  const featuredProducts = getFeaturedProducts();
  const [inquiryStatus, setInquiryStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [inquiryMessage, setInquiryMessage] = useState("");
  const [tdsDownload, setTdsDownload] = useState<{ href: string; title: string } | null>(null);

  useEffect(() => {
    if (window.location.search && window.location.hash === "#contact") {
      window.history.replaceState(null, "", `${window.location.pathname}#contact`);
    }
  }, []);

  async function handleInquirySubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setInquiryStatus("sending");
    setInquiryMessage("Sending your inquiry...");

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        body: formData,
      });
      const result = (await response.json()) as { documentLink?: string; documentTitle?: string; message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Unable to send inquiry.");
      }

      setInquiryStatus("success");
      setInquiryMessage(result.message || "Inquiry sent successfully. We will contact you soon.");
      setTdsDownload(result.documentLink ? { href: result.documentLink, title: result.documentTitle || "TDS PDF" } : null);
      form.reset();
    } catch (error) {
      setInquiryStatus("error");
      setInquiryMessage(error instanceof Error ? error.message : "Unable to send inquiry.");
      setTdsDownload(null);
    }
  }

  return (
    <main>
      <SiteHeader />

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="brand-line">{t.hero.brandLine}</p>
          <h1>{t.hero.title}</h1>
          <p className="hero-lede">{t.hero.lede}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">
              <Mail size={18} />
              {t.hero.quote}
            </a>
            <a className="button button-secondary" href="/tds">
              <FileText size={18} />
              {t.hero.docs}
            </a>
          </div>
          <div className="hero-trust" aria-label="Company proof points">
            {t.hero.trust.map((item, index) => {
              const meta = heroTrustMeta[index] || heroTrustMeta[heroTrustMeta.length - 1];
              const Icon = meta.Icon;

              return (
                <span key={item}>
                  <Icon size={16} />
                  <strong>{item}</strong>
                  <small>{meta.label}</small>
                </span>
              );
            })}
          </div>
        </div>

        <div className="hero-visual" aria-label="Plastic additive product samples">
          <div className="visual-card visual-large">
            <img src="/assets/transparent-impact-modifier-cleanlab-v2.png" alt={t.hero.visualAlt.granules} />
          </div>
          <div className="visual-stack">
            <div className="visual-card">
              <img src="/assets/liquid-impact-modifier-cleanlab.png" alt={t.hero.visualAlt.liquid} />
            </div>
            <div className="visual-card">
              <img src="/assets/matting-agent-powder-cleanlab-v6.png" alt={t.hero.visualAlt.matting} />
            </div>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="ARGIOPE company facts">
        {t.proof.map((item, index) => {
          const Icon = proofIcons[index];
          return (
            <div className="proof-item" key={`${item.value}-${item.label}`}>
              <Icon size={28} />
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          );
        })}
      </section>

      <section className="trust-band" aria-label="Customer and industry references">
        <div>
          <span>Customer References</span>
          <h2>Trusted across plastic, packaging and consumer manufacturing supply chains</h2>
        </div>
        <div className="trust-logo-grid">
          {trustPartners.map((partner) => (
            <strong key={partner}>{partner}</strong>
          ))}
        </div>
      </section>

      <section className="section" id="products">
        <div className="section-heading">
          <span>{t.products.kicker}</span>
          <h2>{t.products.title}</h2>
          <p>{t.products.body}</p>
        </div>

        <div className="product-grid">
          {featuredProducts.map((product) => (
            <article className="product-card" key={product.name}>
              <a className="product-image-link" href={`/products/${product.slug}`}>
                <img src={product.image} alt={`${product.name} ${t.products.altSuffix}`} />
              </a>
              <div className="product-card-body">
                <p>{product.meta}</p>
                <h3>{product.name}</h3>
                <span>{product.summary}</span>
                <a href={`/products/${product.slug}`} aria-label={`View details: ${product.name}`}>
                  View product details
                  <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="split-section" id="about">
        <div className="split-copy">
          <span>{t.about.kicker}</span>
          <h2>{t.about.title}</h2>
          <p>{t.about.body}</p>
          <div className="advantage-grid">
            {t.about.advantages.map((advantage, index) => {
              const Icon = advantageIcons[index];
              return (
                <div className="advantage" key={advantage.title}>
                  <Icon size={22} />
                  <h3>{advantage.title}</h3>
                  <p>{advantage.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="dark-panel">
          <p>{t.about.promise.kicker}</p>
          <strong>{t.about.promise.title}</strong>
          <ul>
            {t.about.promise.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="factory-section" id="factory">
        <div className="factory-copy">
          <span>Factory & Quality</span>
          <h2>Real manufacturing scenes for buyer review</h2>
          <p>
            Review ARGIOPE Jindaquan through real factory, warehouse, equipment and certification
            visuals before sending your plastic additive RFQ.
          </p>
          <div className="factory-stats" aria-label="Factory capability summary">
            <strong>Since 1998</strong>
            <strong>7000+ m² factory</strong>
            <strong>30+ patents</strong>
          </div>
        </div>

        <div className="factory-gallery" aria-label="ARGIOPE Jindaquan factory and quality photos">
          {factoryHighlights.map((item) => (
            <article className="factory-photo-card" key={item.title}>
              <img src={item.image} alt={item.alt} loading="lazy" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section applications" id="applications">
        <div className="section-heading">
          <span>{t.applications.kicker}</span>
          <h2>{t.applications.title}</h2>
          <p>{t.applications.body}</p>
        </div>

        <div className="application-layout">
          <div className="application-image">
            <img src="/assets/manufacturing-partners-grid.png" alt={t.applications.imageAlt} />
          </div>
          <div className="application-list">
            {t.applications.items.map((application) => (
              <div key={application}>
                <CheckCircle2 size={20} />
                <span>{application}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="support-band" id="support">
        <div>
          <span>{t.support.kicker}</span>
          <h2>{t.support.title}</h2>
          <p>{t.support.body}</p>
        </div>
        <a className="button button-primary" href="/tds">
          {t.support.cta}
          <ArrowRight size={18} />
        </a>
      </section>

      <section className="rfq-section" id="contact">
        <div className="rfq-copy">
          <span>{t.contact.kicker}</span>
          <h2>{t.contact.title}</h2>
          <p>{t.contact.body}</p>
          <div className="contact-cards">
            <a href="mailto:gsq@jindaquan.com">
              <Mail size={20} />
              gsq@jindaquan.com
            </a>
            <a href="https://wa.me/8618926013309">
              <MessageCircle size={20} />
              {t.contact.whatsapp}
            </a>
            <a href="tel:+8618926013309">
              <Phone size={20} />
              {t.contact.phone}
            </a>
          </div>
          <div className="factory-map">
            <div className="map-address">
              <MapPin size={20} />
              <div>
                <strong>{t.contact.factoryTitle}</strong>
                <span>{t.contact.factoryAddress}</span>
              </div>
            </div>
            <iframe
              title={t.contact.mapTitle}
              src={factoryMapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <form className="rfq-form" action="/api/inquiry" method="post" onSubmit={handleInquirySubmit}>
          <label>
            {t.contact.form.name}
            <input name="Name" placeholder={t.contact.form.namePlaceholder} required />
          </label>
          <label>
            {t.contact.form.email}
            <input name="Email" type="email" placeholder={t.contact.form.emailPlaceholder} required />
          </label>
          <label>
            {t.contact.form.company}
            <input name="Company" placeholder={t.contact.form.companyPlaceholder} required />
          </label>
          <label>
            {t.contact.form.country}
            <input name="Country" placeholder={t.contact.form.countryPlaceholder} required />
          </label>
          <label className="form-wide">
            {t.contact.form.product}
            <select name="Product Requirement" required defaultValue="">
              <option value="" disabled>
                {t.contact.form.productPlaceholder}
              </option>
              {t.contact.form.productOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <label className="form-wide">
            {t.contact.form.message}
            <textarea name="Message" rows={5} placeholder={t.contact.form.messagePlaceholder} required />
          </label>
          <button className="button button-primary form-wide" type="submit" disabled={inquiryStatus === "sending"}>
            <ClipboardList size={18} />
            {inquiryStatus === "sending" ? "Sending..." : t.contact.form.submit}
          </button>
          {inquiryMessage ? (
            <p className={`form-response form-response-${inquiryStatus}`} role="status">
              {inquiryMessage}
            </p>
          ) : null}
          <p className="form-note">After submitting, wait for the confirmation message above.</p>
        </form>
      </section>

      {inquiryStatus === "success" ? (
        <div className="thank-you-overlay" role="presentation">
          <section className="thank-you-dialog" role="dialog" aria-modal="true" aria-labelledby="thank-you-title">
            <button
              className="thank-you-close"
              type="button"
              aria-label="Close thank you message"
              onClick={() => {
                setInquiryStatus("idle");
                setInquiryMessage("");
                setTdsDownload(null);
              }}
            >
              <X size={18} />
            </button>
            <div className="thank-you-icon" aria-hidden="true">
              <CheckCircle2 size={28} />
            </div>
            <span>RFQ submitted</span>
            <h2 id="thank-you-title">Thank you for your inquiry</h2>
            <p>
              Your request has been sent to the ARGIOPE Jindaquan team. We will review your material,
              application and target performance, then contact you by email.
            </p>
            <div className="thank-you-actions">
              {tdsDownload ? (
                <a className="button button-primary" href={tdsDownload.href} target="_blank" rel="noreferrer">
                  <FileText size={18} />
                  Download TDS PDF
                </a>
              ) : null}
              <button
                className={tdsDownload ? "button button-secondary" : "button button-primary"}
                type="button"
                onClick={() => {
                  setInquiryStatus("idle");
                  setInquiryMessage("");
                  setTdsDownload(null);
                }}
              >
                Continue browsing
              </button>
            </div>
          </section>
        </div>
      ) : null}

      <footer className="site-footer" id="resources">
        <div>
          <a className="brand footer-brand" href="#top" aria-label="ARGIOPE Jindaquan home">
            <span className="brand-mark" aria-hidden="true">
              <img src="/assets/argiope-logo-mark.png" alt="" />
            </span>
            <span>
              <strong>ARGIOPE</strong>
              <small>{t.footer.company}</small>
            </span>
          </a>
          <p>{t.footer.body}</p>
        </div>
        <div>
          <h3>{t.footer.office}</h3>
          <p>
            <MapPin size={16} />
            {t.footer.officeAddress}
          </p>
        </div>
        <div>
          <h3>{t.footer.factory}</h3>
          <p>
            <MapPin size={16} />
            {t.footer.factoryAddress}
          </p>
        </div>
      </footer>
    </main>
  );
}
