import { useEffect, useRef, useState } from "react";
import { LANGS, type Lang } from "@/lib/i18n";

export function LanguageSwitcher({
  lang,
  onChange,
}: {
  lang: Lang;
  onChange: (l: Lang) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = LANGS.find((l) => l.code === lang)!;

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div ref={ref} className="lang-switch">
      <button
        className="lang-trigger"
        onClick={() => setOpen((o) => !o)}
        aria-label="Change language"
      >
        <span className="lang-flag">{current.flag}</span>
        <span className="lang-code">{current.code.toUpperCase()}</span>
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={`lang-chev ${open ? "open" : ""}`}>
          <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
      <div className={`lang-menu ${open ? "open" : ""}`}>
        {LANGS.map((l) => (
          <button
            key={l.code}
            className={`lang-item ${l.code === lang ? "active" : ""}`}
            onClick={() => {
              onChange(l.code);
              setOpen(false);
            }}
          >
            <span className="lang-flag">{l.flag}</span>
            <span>{l.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}