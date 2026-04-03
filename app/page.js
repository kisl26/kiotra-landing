'use client'

import { useState } from 'react'

export default function Home() {
  const [formState, setFormState] = useState({ status: 'idle', message: '' })

  async function handleSubmit(e) {
    e.preventDefault()
    setFormState({ status: 'sending', message: '' })

    const form = e.target
    const data = new FormData(form)

    try {
      const res = await fetch('https://formspree.io/f/xlgoprwp', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setFormState({ status: 'success', message: 'Nachricht gesendet! Wir melden uns innerhalb von 24h.' })
        form.reset()
      } else {
        setFormState({ status: 'error', message: 'Fehler beim Senden. Bitte versuchen Sie es erneut.' })
      }
    } catch {
      setFormState({ status: 'error', message: 'Netzwerkfehler. Bitte prüfen Sie Ihre Verbindung.' })
    }
  }

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg: #0d0f0e;
          --bg2: #131614;
          --bg3: #1a1d1b;
          --border: rgba(255,255,255,0.08);
          --border2: rgba(255,255,255,0.14);
          --text: #e8e6e0;
          --muted: #7a7870;
          --accent: #4ade80;
          --accent2: #16a34a;
          --serif: 'DM Serif Display', Georgia, serif;
          --sans: 'DM Sans', system-ui, sans-serif;
        }

        html { scroll-behavior: smooth; }

        body {
          background: var(--bg);
          color: var(--text);
          font-family: var(--sans);
          font-size: 16px;
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
        }

        /* NAV */
        nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          padding: 18px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--border);
          background: rgba(13,15,14,0.85);
          backdrop-filter: blur(12px);
        }

        .logo {
          font-family: var(--serif);
          font-size: 22px;
          color: var(--text) !important;
          letter-spacing: -0.02em;
          text-decoration: none;
        }

        .logo span { color: var(--accent); }

        nav a {
          color: var(--muted);
          text-decoration: none;
          font-size: 14px;
          transition: color 0.2s;
        }

        nav a:hover { color: var(--text); }

        .nav-links { display: flex; gap: 32px; align-items: center; }

        /* HERO */
        .hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          padding: 120px 40px 80px;
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
        }

        .hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1px solid var(--border2);
          border-radius: 20px;
          padding: 5px 14px;
          font-size: 12px;
          color: var(--accent);
          font-weight: 500;
          letter-spacing: 0.04em;
          margin-bottom: 32px;
        }

        .hero-tag::before {
          content: '';
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--accent);
        }

        h1 {
          font-family: var(--serif);
          font-size: clamp(42px, 6vw, 80px);
          line-height: 1.08;
          letter-spacing: -0.03em;
          color: var(--text);
          max-width: 760px;
          margin-bottom: 28px;
        }

        h1 em {
          font-style: italic;
          color: var(--accent);
        }

        .hero-body {
          font-size: 18px;
          color: var(--muted);
          max-width: 520px;
          line-height: 1.65;
          margin-bottom: 44px;
          font-weight: 300;
        }

        .hero-actions { display: flex; gap: 14px; align-items: center; flex-wrap: wrap; }

        .btn-primary {
          background: var(--accent);
          color: #0d0f0e;
          padding: 14px 28px;
          border-radius: 8px;
          font-weight: 500;
          font-size: 15px;
          text-decoration: none;
          transition: background 0.2s, transform 0.15s;
          display: inline-block;
          border: none;
          cursor: pointer;
          font-family: var(--sans);
        }

        .btn-primary:hover { background: #86efac; transform: translateY(-1px); }

        .btn-primary:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        .btn-secondary {
          color: var(--muted);
          padding: 14px 28px;
          border-radius: 8px;
          font-size: 15px;
          text-decoration: none;
          border: 1px solid var(--border2);
          transition: border-color 0.2s, color 0.2s;
          display: inline-block;
        }

        .btn-secondary:hover { color: var(--text); border-color: rgba(255,255,255,0.25); }

        /* SECTION */
        section {
          max-width: 1100px;
          margin: 0 auto;
          padding: 100px 40px;
        }

        .section-label {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.1em;
          color: var(--accent);
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        h2 {
          font-family: var(--serif);
          font-size: clamp(32px, 4vw, 52px);
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: var(--text);
          max-width: 600px;
          margin-bottom: 20px;
        }

        .section-body {
          font-size: 16px;
          color: var(--muted);
          max-width: 480px;
          line-height: 1.7;
          font-weight: 300;
          margin-bottom: 60px;
        }

        /* USE CASES */
        .cases {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-top: 20px;
        }

        .case-card {
          background: var(--bg2);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 32px;
          transition: border-color 0.2s;
          text-decoration: none;
          display: block;
        }

        .case-card:hover { border-color: var(--border2); }

        .case-icon {
          width: 40px; height: 40px;
          background: var(--bg3);
          border: 1px solid var(--border2);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          font-size: 18px;
        }

        .case-title {
          font-size: 16px;
          font-weight: 500;
          color: var(--text);
          margin-bottom: 8px;
        }

        .case-desc {
          font-size: 13px;
          color: var(--muted);
          line-height: 1.6;
          font-weight: 300;
        }

        .case-tag {
          display: inline-block;
          margin-top: 16px;
          font-size: 11px;
          color: var(--accent);
          font-weight: 500;
          letter-spacing: 0.04em;
        }

        /* HOW IT WORKS */
        .steps {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
          border-radius: 12px;
          overflow: hidden;
        }

        .step {
          background: var(--bg2);
          padding: 36px 32px;
        }

        .step-num {
          font-family: var(--serif);
          font-size: 48px;
          color: var(--border2);
          line-height: 1;
          margin-bottom: 20px;
          letter-spacing: -0.03em;
        }

        .step-title {
          font-size: 16px;
          font-weight: 500;
          color: var(--text);
          margin-bottom: 10px;
        }

        .step-desc {
          font-size: 14px;
          color: var(--muted);
          line-height: 1.6;
          font-weight: 300;
        }

        /* CONTACT FORM */
        .cta-block {
          background: var(--bg2);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 72px 60px;
          max-width: 1020px;
          margin: 0 auto 100px;
        }

        .cta-block h2 { margin: 0 auto 16px; text-align: center; }
        .cta-block .section-body { margin: 0 auto 36px; text-align: center; }

        .contact-form {
          max-width: 560px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .contact-form input,
        .contact-form textarea {
          width: 100%;
          background: var(--bg3);
          border: 1px solid var(--border2);
          border-radius: 8px;
          padding: 14px 16px;
          color: var(--text);
          font-family: var(--sans);
          font-size: 14px;
          transition: border-color 0.2s;
          outline: none;
        }

        .contact-form input::placeholder,
        .contact-form textarea::placeholder {
          color: var(--muted);
        }

        .contact-form input:focus,
        .contact-form textarea:focus {
          border-color: var(--accent);
        }

        .contact-form textarea {
          resize: vertical;
          min-height: 120px;
        }

        .form-submit {
          text-align: center;
          margin-top: 8px;
        }

        .form-message {
          text-align: center;
          font-size: 14px;
          padding: 12px;
          border-radius: 8px;
        }

        .form-message.success {
          color: var(--accent);
          background: rgba(74, 222, 128, 0.1);
          border: 1px solid rgba(74, 222, 128, 0.2);
        }

        .form-message.error {
          color: #f87171;
          background: rgba(248, 113, 113, 0.1);
          border: 1px solid rgba(248, 113, 113, 0.2);
        }

        /* FOOTER */
        footer {
          border-top: 1px solid var(--border);
          padding: 32px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1100px;
          margin: 0 auto;
        }

        .footer-copy {
          font-size: 13px;
          color: var(--muted);
        }

        .footer-links {
          display: flex;
          gap: 24px;
        }

        .footer-links a {
          font-size: 13px;
          color: var(--muted);
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-links a:hover { color: var(--text); }

        /* ANIMATIONS */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .hero-tag { animation: fadeUp 0.6s ease both; }
        h1 { animation: fadeUp 0.6s 0.1s ease both; }
        .hero-body { animation: fadeUp 0.6s 0.2s ease both; }
        .hero-actions { animation: fadeUp 0.6s 0.3s ease both; }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          nav { padding: 16px 20px; }
          .nav-links { gap: 16px; }
          .hero { padding: 100px 20px 60px; }
          section { padding: 60px 20px; }
          .cases { grid-template-columns: 1fr; }
          .steps { grid-template-columns: 1fr; }
          .cta-block { padding: 48px 24px; margin: 0 20px 60px; }
          .form-row { grid-template-columns: 1fr; }
          footer { flex-direction: column; gap: 12px; padding: 24px 20px; text-align: center; }
        }
      `}</style>

      <nav>
        <a href="/" className="logo">k<span>iot</span>ra</a>
        <div className="nav-links">
          <a href="#loesungen">Lösungen</a>
          <a href="#kontakt">Kontakt</a>
        </div>
      </nav>

      <div className="hero">
        <div className="hero-tag">IoT für den Maschinenbau</div>
        <h1>Ihre Maschinen.<br /><em>Online.</em> In Echtzeit.</h1>
        <p className="hero-body">
          Kiotra verbindet Frequenzumrichter, Steuerungen und Industrieanlagen mit der Cloud —
          ohne großes IT-Projekt. Ihre Kunden steuern ihre Maschinen per App vom Handy.
        </p>
      </div>

      <section id="loesungen">
        <div className="section-label">Lösungen</div>
        <h2>Für Maschinenbauer</h2>
        <p className="section-body">
          Wir bauen die Software. Sie liefern die Maschine. Ihre Kunden bekommen eine
          App die einfach funktioniert.
        </p>
        <div className="cases">
          <div className="case-card">
            <div className="case-icon">⚙</div>
            <div className="case-title">Maschinen steuern per App</div>
            <div className="case-desc">
              Frequenzumrichter per App steuern — Ein/Aus, Drehzahl, Echtzeitstatus.
              Modbus RTU über WLAN, ohne Eingriff in die bestehende Steuerung.
            </div>
            <a href="https://pumpensteuerung.kiotra.de" className="case-tag">→ Live-Demo ansehen</a>
          </div>
          <div className="case-card">
            <div className="case-icon">📡</div>
            <div className="case-title">Fernüberwachung</div>
            <div className="case-desc">
              Betriebsstunden, Fehlercode-Alarme und Statusmeldungen per Push-Nachricht.
              Ihr Kundendienst sieht Probleme bevor der Kunde anruft.
            </div>
            <div className="case-tag">→ Auf Anfrage</div>
          </div>
          <div className="case-card">
            <div className="case-icon">🏭</div>
            <div className="case-title">Hersteller-Dashboard</div>
            <div className="case-desc">
              Alle Ihrer Kunden auf einen Blick. Welche Maschinen laufen, welche offline sind,
              wann die letzte Wartung war. Ihr Service-Team hat immer den Überblick.
            </div>
            <div className="case-tag">→ Auf Anfrage</div>
          </div>
          <div className="case-card">
            <div className="case-icon">🔧</div>
            <div className="case-title">White Label</div>
            <div className="case-desc">
              Die App erscheint unter Ihrem Markennamen. Ihr Logo, Ihre Farben, Ihre Domain.
              Kiotra arbeitet unsichtbar im Hintergrund.
            </div>
            <div className="case-tag">→ Auf Anfrage</div>
          </div>
        </div>
      </section>

      <section id="technologie">
        <div className="section-label">So funktioniert es</div>
        <h2>Drei Schritte bis zur laufenden App</h2>
        <p className="section-body">
          Kein Programmieraufwand für Sie. Kein Eingriff in die CE-Kennzeichnung.
          Keine monatlichen Fixkosten bis die ersten Maschinen im Feld sind.
        </p>
        <div className="steps">
          <div className="step">
            <div className="step-num">01</div>
            <div className="step-title">Hardware einbauen</div>
            <div className="step-desc">
              Ihr Elektriker baut ein kleines WLAN-Modul in den Schaltschrank ein und
              klemmt es an den Modbus-Port des Frequenzumrichters. Kein Eingriff in
              die Steuerung, keine CE-Problematik.
            </div>
          </div>
          <div className="step">
            <div className="step-num">02</div>
            <div className="step-title">QR-Code scannen</div>
            <div className="step-desc">
              Jede Maschine bekommt einen QR-Code auf dem Schaltschrank. Ihr Endkunde
              scannt ihn einmal mit dem Handy — die Maschine erscheint sofort in seiner App.
              Kein Account-Setup, kein Passwort.
            </div>
          </div>
          <div className="step">
            <div className="step-num">03</div>
            <div className="step-title">Steuern & überwachen</div>
            <div className="step-desc">
              Der Endkunde öffnet die App im Browser — auf jedem Handy, Tablet oder PC.
              Ein/Aus, Drehzahlregelung, Statusanzeige in Echtzeit. Auch wenn er
              gerade nicht vor der Maschine steht.
            </div>
          </div>
        </div>
      </section>

      <section id="sicherheit">
        <div className="section-label">Sicherheit</div>
        <h2>Für welche Maschinen ist das geeignet?</h2>
        <p className="section-body" style={{maxWidth: '680px'}}>
          Die App-Steuerung von Kiotra ist für Maschinen konzipiert, bei denen Ein/Aus und
          Drehzahlregelung im Normalbetrieb ferngesteuert werden sollen — ohne Eingriff in die
          bestehende Sicherheitstechnik. Typische Anwendungen sind Pumpen, Förderbänder, Mischer
          und Lüftungsanlagen mit Frequenzumrichter, die bereits über eine Modbus-RTU-Schnittstelle
          verfügen. Notaus, Motorschutz und alle sicherheitsrelevanten Funktionen bleiben dabei
          vollständig erhalten und werden durch die App-Steuerung nicht berührt. Kiotra übernimmt
          ausschließlich Komfortfunktionen — die Verantwortung für die Maschinensicherheit verbleibt
          beim Hersteller und seiner bestehenden Steuerungstechnik.
        </p>
      </section>

      <div className="cta-block" id="kontakt">
        <div className="section-label" style={{marginBottom: '20px', textAlign: 'center'}}>Kontakt</div>
        <h2>Lassen Sie uns sprechen</h2>
        <p className="section-body">
          Erzählen Sie uns von Ihrem Projekt. Wir melden uns innerhalb von 24 Stunden
          mit einem konkreten Vorschlag.
        </p>

        {formState.status === 'success' ? (
          <div className="form-message success">{formState.message}</div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input type="text" name="name" placeholder="Name *" required />
              <input type="email" name="email" placeholder="E-Mail *" required />
            </div>
            <div className="form-row">
              <input type="text" name="firma" placeholder="Firma" />
              <input type="tel" name="telefon" placeholder="Telefon" />
            </div>
            <textarea name="nachricht" placeholder="Ihre Nachricht *" required />
            {formState.status === 'error' && (
              <div className="form-message error">{formState.message}</div>
            )}
            <div className="form-submit">
              <button type="submit" className="btn-primary" disabled={formState.status === 'sending'}>
                {formState.status === 'sending' ? 'Wird gesendet...' : 'Nachricht senden'}
              </button>
            </div>
          </form>
        )}
      </div>

      <footer>
        <div className="footer-copy">© 2025 kiotra</div>
        <div className="footer-links">
          <a href="/impressum">Impressum</a>
          <a href="/datenschutz">Datenschutz</a>
        </div>
      </footer>
    </>
  )
}
