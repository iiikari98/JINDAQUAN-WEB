"use client";

import { ArrowRight, Beaker, FileText, Mail } from "lucide-react";
import { useI18n } from "../i18n/I18nProvider";
import { LanguageSwitcher } from "./LanguageSwitcher";

const supportIcons = [FileText, Beaker, Mail];

export function SiteHeader({ anchorPrefix = "" }: { anchorPrefix?: "" | "/" }) {
  const { t } = useI18n();
  const sectionHref = (hash: string) => `${anchorPrefix}${hash}`;

  return (
    <header className="site-header">
      <a className="brand" href={sectionHref("#top")} aria-label="ARGIOPE Jindaquan home">
        <span className="brand-mark" aria-hidden="true">
          <span />
        </span>
        <span>
          <strong>ARGIOPE</strong>
          <small>Jindaquan Technology</small>
        </span>
      </a>

      <nav className="desktop-nav" aria-label={t.nav.aria}>
        <div className="nav-item">
          <a className="nav-trigger" href={sectionHref("#products")}>
            {t.nav.products}
          </a>
          <div className="mega-menu products-menu">
            <div className="mega-intro">
              <span>{t.mega.products.kicker}</span>
              <h2>{t.mega.products.title}</h2>
              <p>{t.mega.products.body}</p>
              <a href={sectionHref("#contact")}>
                {t.mega.products.cta}
                <ArrowRight size={16} />
              </a>
            </div>
            <div className="mega-columns">
              {t.mega.products.columns.map((column) => (
                <div key={column.title}>
                  <h3>{column.title}</h3>
                  {column.links.map((link) => (
                    <a href={sectionHref("#products")} key={link}>
                      {link}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="nav-item">
          <a className="nav-trigger" href={sectionHref("#applications")}>
            {t.nav.applications}
          </a>
          <div className="mega-menu applications-menu">
            <div className="mega-intro compact">
              <span>{t.mega.applications.kicker}</span>
              <h2>{t.mega.applications.title}</h2>
              <p>{t.mega.applications.body}</p>
            </div>
            <div className="mega-feature-grid">
              {t.mega.applications.items.map((item) => (
                <a href={sectionHref("#applications")} key={item.title}>
                  <strong>{item.title}</strong>
                  <span>{item.body}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="nav-item">
          <a className="nav-trigger" href={sectionHref("#support")}>
            {t.nav.support}
          </a>
          <div className="mega-menu support-menu">
            <div className="mega-intro compact">
              <span>{t.mega.support.kicker}</span>
              <h2>{t.mega.support.title}</h2>
              <p>{t.mega.support.body}</p>
            </div>
            <div className="mega-actions">
              {t.mega.support.actions.map((action, index) => {
                const Icon = supportIcons[index];
                return (
                  <a href={index === 0 ? sectionHref("#support") : sectionHref("#contact")} key={action.title}>
                    <Icon size={20} />
                    <strong>{action.title}</strong>
                    <span>{action.body}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="nav-item">
          <a className="nav-trigger" href={sectionHref("#about")}>
            {t.nav.about}
          </a>
          <div className="mega-menu about-menu">
            <div className="mega-intro compact">
              <span>{t.mega.about.kicker}</span>
              <h2>{t.mega.about.title}</h2>
              <p>{t.mega.about.body}</p>
            </div>
            <div className="mega-proof">
              {t.mega.about.proof.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="nav-item">
          <a className="nav-trigger" href={sectionHref("#resources")}>
            {t.nav.resources}
          </a>
          <div className="mega-menu resources-menu">
            <div className="mega-columns slim">
              {t.mega.resources.columns.map((column) => (
                <div key={column.title}>
                  <h3>{column.title}</h3>
                  {column.links.map((link, index) => (
                    <a href={index === 0 ? sectionHref("#support") : sectionHref("#contact")} key={link}>
                      {link}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <a className="nav-trigger plain-link" href="/blog">
          {t.nav.blog}
        </a>

        <a className="nav-trigger plain-link" href={sectionHref("#contact")}>
          {t.nav.contact}
        </a>
      </nav>

      <LanguageSwitcher />

      <a className="header-cta" href={sectionHref("#contact")}>
        {t.nav.getQuote}
      </a>
    </header>
  );
}
