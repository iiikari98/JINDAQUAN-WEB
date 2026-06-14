"use client";

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
} from "lucide-react";
import { SiteHeader } from "./components/SiteHeader";
import { useI18n } from "./i18n/I18nProvider";

const productImages = [
  "/assets/transparent-impact-modifier-granules-angle.png",
  "/assets/plastic-stiffening-agent-colored-masterbatch.png",
  "/assets/plastic-flame-retardant-burn-test.png",
  "/assets/plastic-compatibilizer-powder-pellets.png",
  "/assets/light-diffusion-powder-diffuser.png",
  "/assets/modified-pvc-liquid-plastisol-closeup.png",
];

const proofIcons = [Building2, Factory, Beaker, Sparkles, CheckCircle2];
const advantageIcons = [FlaskConical, Leaf, Target, ShieldCheck];
const factoryMapSrc =
  "https://www.openstreetmap.org/export/embed.html?bbox=114.7051%2C22.9728%2C114.7351%2C22.9968&layer=mapnik&marker=22.9848%2C114.7201";

export default function Home() {
  const { t } = useI18n();

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
            <a className="button button-secondary" href="#support">
              <FileText size={18} />
              {t.hero.docs}
            </a>
          </div>
          <div className="hero-trust" aria-label="Company proof points">
            {t.hero.trust.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="hero-visual" aria-label="Plastic additive product samples">
          <div className="visual-card visual-large">
            <img src="/assets/transparent-impact-modifier-closeup.png" alt={t.hero.visualAlt.granules} />
          </div>
          <div className="visual-stack">
            <div className="visual-card">
              <img src="/assets/liquid-impact-modifier-cleanlab.png" alt={t.hero.visualAlt.liquid} />
            </div>
            <div className="visual-card">
              <img src="/assets/matting-agent-powder-closeup.png" alt={t.hero.visualAlt.matting} />
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

      <section className="section" id="products">
        <div className="section-heading">
          <span>{t.products.kicker}</span>
          <h2>{t.products.title}</h2>
          <p>{t.products.body}</p>
        </div>

        <div className="product-grid">
          {t.products.items.map((product, index) => (
            <article className="product-card" key={product.name}>
              <img src={productImages[index]} alt={`${product.name} ${t.products.altSuffix}`} />
              <div className="product-card-body">
                <p>{product.meta}</p>
                <h3>{product.name}</h3>
                <span>{product.summary}</span>
                <a href="#contact" aria-label={`${t.products.cta}: ${product.name}`}>
                  {t.products.cta}
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
        <a className="button button-primary" href="#contact">
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

        <form className="rfq-form" action="#contact" method="get">
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
            <textarea name="Message" rows={5} placeholder={t.contact.form.messagePlaceholder} />
          </label>
          <button className="button button-primary form-wide" type="submit">
            <ClipboardList size={18} />
            {t.contact.form.submit}
          </button>
          <p className="form-note">{t.contact.form.note}</p>
        </form>
      </section>

      <footer className="site-footer" id="resources">
        <div>
          <a className="brand footer-brand" href="#top" aria-label="ARGIOPE Jindaquan home">
            <span className="brand-mark" aria-hidden="true">
              <span />
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

