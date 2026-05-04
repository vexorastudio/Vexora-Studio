import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import logo from "@/assets/logo.png";
import { dicts, type Lang } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vexora Studio — Розробка сайтів під ключ" },
      {
        name: "description",
        content:
          "Vexora Studio — веб-студія з України. Розробка лендингів, корпоративних сайтів, інтернет-магазинів. UI/UX дизайн, frontend та базовий backend.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [lang, setLang] = useState<Lang>("uk");
  const t = dicts[lang];
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem("vx-lang")) as Lang | null;
    if (stored && stored in dicts) setLang(stored);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") localStorage.setItem("vx-lang", lang);
    if (typeof document !== "undefined") document.documentElement.lang = lang;
  }, [lang]);

  const revealRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add("visible"), i * 70);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [lang]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    const form = e.currentTarget;
    setTimeout(() => {
      setSent(false);
      form.reset();
    }, 3000);
  };

  const onCardMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <div className="vx-app" ref={revealRef}>
      <nav className="vx-nav">
        <a href="#top" className="vx-logo">
          <img src={logo} alt="Vexora Studio" width={36} height={36} />
          <span>Vexora Studio</span>
        </a>
        <div className="vx-nav-right">
          <ul className="vx-nav-links">
            <li><a href="#services">{t.nav.services}</a></li>
            <li><a href="#contact">{t.nav.contact}</a></li>
          </ul>
          <LanguageSwitcher lang={lang} onChange={setLang} />
          <a href="#contact" className="vx-nav-cta">{t.nav.cta}</a>
        </div>
      </nav>

      <header id="top" className="vx-hero">
        <div className="vx-orb vx-orb1" />
        <div className="vx-orb vx-orb2" />
        <div className="vx-orb vx-orb3" />
        <div className="vx-badge">
          <span className="vx-badge-dot" />
          {t.hero.badge}
        </div>
        <h1>
          {t.hero.titleA} <br />
          <span className="grad">{t.hero.titleB}</span>
        </h1>
        <p className="vx-hero-sub">{t.hero.sub}</p>
        <div className="vx-hero-actions">
          <a href="#contact" className="btn-primary">{t.hero.cta1}</a>
          <a href="#services" className="btn-ghost">{t.hero.cta2}</a>
        </div>

        <div className="vx-stats">
          <div className="vx-stat">
            <div className="vx-stat-num">1.7+</div>
            <div className="vx-stat-label">{t.stats.years}</div>
          </div>
          <div className="vx-stat">
            <div className="vx-stat-num">15+</div>
            <div className="vx-stat-label">{t.stats.projects}</div>
          </div>
          <div className="vx-stat">
            <div className="vx-stat-num">87%</div>
            <div className="vx-stat-label">{t.stats.growth}</div>
          </div>
        </div>
      </header>

      <section id="services" className="vx-section">
        <div className="reveal">
          <span className="vx-tag">{t.services.tag}</span>
          <h2 className="vx-title">{t.services.title}</h2>
          <p className="vx-sub">{t.services.sub}</p>
        </div>
        <div className="vx-services">
          {t.services.cards.map((card) => (
            <div key={card.title} className="vx-service reveal" onMouseMove={onCardMove}>
              <span className="vx-service-icon">{card.icon}</span>
              <h3 className="vx-service-title">{card.title}</h3>
              <ul>
                {card.items.map((it) => (<li key={it}>{it}</li>))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="vx-contact-bg">
        <div className="vx-section">
          <div className="vx-contact-inner">
            <div className="reveal">
              <span className="vx-tag">{t.contact.tag}</span>
              <h2 className="vx-title">{t.contact.title}</h2>
              <p className="vx-sub">{t.contact.sub}</p>
              <div className="vx-contact-info">
                <a href="tel:+380977215181" className="vx-contact-item">
                  <div className="vx-contact-icon">📞</div>
                  <div>
                    <div className="vx-contact-label">{t.contact.phone}</div>
                    <div className="vx-contact-value">+38 (097) 721‑51‑81</div>
                  </div>
                </a>
                <a href="mailto:veroxastudiooo@gmail.com" className="vx-contact-item">
                  <div className="vx-contact-icon">✉️</div>
                  <div>
                    <div className="vx-contact-label">{t.contact.email}</div>
                    <div className="vx-contact-value">veroxastudiooo@gmail.com</div>
                  </div>
                </a>
                <div className="vx-contact-item">
                  <div className="vx-contact-icon">🇺🇦</div>
                  <div>
                    <div className="vx-contact-label">{t.contact.location}</div>
                    <div className="vx-contact-value">{t.contact.locationValue}</div>
                  </div>
                </div>
              </div>
            </div>

            <form className="vx-form reveal" onSubmit={onSubmit}>
              <div className="vx-form-row">
                <div className="vx-form-group">
                  <label>{t.contact.name}</label>
                  <input type="text" placeholder={t.contact.namePh} required maxLength={100} />
                </div>
                <div className="vx-form-group">
                  <label>{t.contact.tg}</label>
                  <input type="text" placeholder={t.contact.tgPh} maxLength={100} />
                </div>
              </div>
              <div className="vx-form-group">
                <label>{t.contact.emailLabel}</label>
                <input type="email" placeholder="you@example.com" required maxLength={255} />
              </div>
              <div className="vx-form-group">
                <label>{t.contact.type}</label>
                <select defaultValue="">
                  <option value="" disabled>{t.contact.typeChoose}</option>
                  {t.contact.types.map((tp) => (<option key={tp}>{tp}</option>))}
                </select>
              </div>
              <div className="vx-form-group">
                <label>{t.contact.task}</label>
                <textarea placeholder={t.contact.taskPh} maxLength={1000} />
              </div>
              <button type="submit" className={`vx-form-submit ${sent ? "sent" : ""}`} disabled={sent}>
                {sent ? t.contact.sent : t.contact.submit}
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="vx-footer">
        <div className="vx-footer-logo">
          <img src={logo} alt="" width={28} height={28} />
          <span>Vexora Studio</span>
        </div>
        <ul className="vx-footer-links">
          <li><a href="#services">{t.footer.services}</a></li>
          <li><a href="#contact">{t.footer.contact}</a></li>
          <li><a href="mailto:veroxastudiooo@gmail.com">{t.footer.email}</a></li>
        </ul>
      </footer>
    </div>
  );
}
