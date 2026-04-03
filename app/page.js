export default function Home() {
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
          color: var(--text);
          letter-spacing: -0.02em;
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

        .nav-cta {
          background: var(--accent);
          color: #0d0f0e !important;
          padding: 8px 18px;
          border-radius: 6px;
          font-weight: 500;
          font-size: 13px !important;
          transition: background 0.2s !important;
        }

        .nav-cta:hover { background: #86efac !important; color: #0d0f0e !important; }

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
        }

        .btn-primary:hover { background: #86efac; transform: translateY(-1px); }

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

        /* GRID STATS */
        .stats-strip {
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          padding: 40px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
        }

        .stat-item {
          padding: 0 40px;
          border-right: 1px solid var(--border);
        }

        .stat-item:first-child { padding-left: 0; }
        .stat-item:last-child { border-right: none; }

        .stat-num {
          font-family: var(--serif);
          font-size: 48px;
          line-height: 1;
          color: var(--text);
          letter-spacing: -0.03em;
          margin-bottom: 6px;
        }

        .stat-num span { color: var(--accent); }

        .stat-desc {
          font-size: 13px;
          color: var(--muted);
          line-height: 1.4;
        }

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

        /* TECH STRIP */
        .tech-strip {
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          padding: 32px 40px;
          display: flex;
          align-items: center;
          gap: 16px;
          overflow: hidden;
        }

        .tech-label {
          font-size: 11px;
          color: var(--muted);
          white-space: nowrap;
          flex-shrink: 0;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .tech-divider {
          width: 1px;
          height: 20px;
          background: var(--border2);
          flex-shrink: 0;
        }

        .tech-tags {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .tech-tag {
          background: var(--bg3);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 4px 14px;
          font-size: 12px;
          color: var(--muted);
        }

        /* CTA */
        .cta-block {
          background: var(--bg2);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 72px 60px;
          text-align: center;
          margin: 0 40px;
          max-width: 1020px;
          margin: 0 auto 100px;
        }

        .cta-block h2 { margin: 0 auto 16px; text-align: center; }
        .cta-block .section-body { margin: 0 auto 36px; text-align: center; }

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

        .footer-logo {
          font-family: var(--serif);
          font-size: 18px;
          color: var(--muted);
        }

        .footer-logo span { color: var(--accent); }

        .footer-copy {
          font-size: 12px;
          color: var(--muted);
        }

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
          .stats-strip { grid-template-columns: 1fr; padding: 0 20px; }
          .stat-item { padding: 32px 0; border-right: none; border-bottom: 1px solid var(--border); }
          .stat-item:last-child { border-bottom: none; }
          section { padding: 60px 20px; }
          .steps { grid-template-columns: 1fr; }
          .cases { grid-template-columns: 1fr; }
          .cta-block { padding: 48px 24px; margin: 0 20px 60px; }
          footer { flex-direction: column; gap: 12px; padding: 24px 20px; text-align: center; }
          .tech-strip { padding: 24px 20px; }
        }
      `}</style>

      <nav>
        <div className="logo">kiotra<span>.</span></div>
        <div className="nav-links">
          <a href="#loesungen">Lösungen</a>
          <a href="#technologie">Technologie</a>
          <a href="mailto:info@kiotra.de">Kontakt</a>
          <a href="https://pumpensteuerung.kiotra.de" className="nav-cta">Demo ansehen</a>
        </div>
      </nav>

      <div className="hero">
        <div className="hero-tag">Industrie IoT für den Mittelstand</div>
        <h1>Ihre Maschinen.<br /><em>Online.</em> In Echtzeit.</h1>
        <p className="hero-body">
          Kiotra verbindet Frequenzumrichter, Steuerungen und Industrieanlagen mit der Cloud —
          ohne großes IT-Projekt. Ihre Kunden steuern ihre Maschinen per App vom Handy.
        </p>
        <div className="hero-actions">
          <a href="https://pumpensteuerung.kiotra.de" className="btn-primary">Live-Demo ansehen</a>
          <a href="mailto:info@kiotra.de" className="btn-secondary">Gespräch vereinbaren</a>
        </div>
      </div>

      <div className="stats-strip">
        <div className="stat-item">
          <div className="stat-num">48<span>h</span></div>
          <div className="stat-desc">Typische Zeit vom Erstgespräch<br />bis zum laufenden Piloten</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">0<span>€</span></div>
          <div className="stat-desc">Investitionskosten für<br />Ihre Endkunden</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">100<span>%</span></div>
          <div className="stat-desc">Browserbasiert — keine App-<br />Installation nötig</div>
        </div>
      </div>

      <section id="loesungen">
        <div className="section-label">Lösungen</div>
        <h2>Für Maschinenbauer im DACH-Raum</h2>
        <p className="section-body">
          Wir bauen die Software. Sie liefern die Maschine. Ihre Kunden bekommen eine
          App die einfach funktioniert.
        </p>
        <div className="cases">
          <div className="case-card">
            <div className="case-icon">⚙</div>
            <div className="case-title">Pumpensteuerung</div>
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

      <div className="tech-strip">
        <span className="tech-label">Technologie</span>
        <div className="tech-divider" />
        <div className="tech-tags">
          {['ESP32', 'Modbus RTU', 'MQTT', 'HiveMQ Cloud', 'Next.js', 'Supabase', 'Vercel', 'PWA'].map(t => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>
      </div>

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

      <div className="cta-block">
        <div className="section-label" style={{marginBottom: '20px'}}>Jetzt starten</div>
        <h2>Ihr erstes Gerät in 48 Stunden online</h2>
        <p className="section-body">
          Wir besprechen Ihr Projekt, klären die technischen Details und
          haben einen Piloten laufen — bevor Sie eine Entscheidung treffen müssen.
        </p>
        <a href="mailto:info@kiotra.de" className="btn-primary">Kostenloses Erstgespräch</a>
      </div>

      <footer>
        <div className="footer-logo">kiotra<span>.</span></div>
        <div className="footer-copy">© 2025 Kiotra · Ein Produkt der athebo.com · info@kiotra.de</div>
      </footer>
    </>
  )
}
