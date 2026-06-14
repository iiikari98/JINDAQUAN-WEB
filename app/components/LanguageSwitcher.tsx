"use client";

import { ChevronDown, Globe2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { languages } from "../i18n/languages";
import { useI18n } from "../i18n/I18nProvider";

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const switcherRef = useRef<HTMLDivElement>(null);
  const currentLanguage = languages.find((item) => item.code === language) ?? languages[0];

  useEffect(() => {
    const handleDocumentPointerDown = (event: PointerEvent) => {
      if (switcherRef.current && !switcherRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", handleDocumentPointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handleDocumentPointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div className="language-switcher" ref={switcherRef}>
      <Globe2 size={17} aria-hidden="true" />
      <button
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={t.nav.language}
        className="language-trigger"
        type="button"
        onClick={() => setIsOpen((open) => !open)}
      >
        {currentLanguage.label}
      </button>
      <ChevronDown className={`language-chevron${isOpen ? " is-open" : ""}`} size={15} aria-hidden="true" />

      <div className="language-menu" hidden={!isOpen} role="listbox">
        {languages.map((item) => (
          <button
            aria-selected={item.code === language}
            className="language-option"
            key={item.code}
            role="option"
            type="button"
            onClick={() => {
              setLanguage(item.code);
              setIsOpen(false);
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
