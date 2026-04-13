export const metadata = {
  title: 'Hardware – Kiotra',
  description: 'ESP32-basiertes WLAN-Modul für den Schaltschrank. Modbus RTU, kompakt, plug & play.',
}

export default function HardwarePage() {
  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg: #fafaf8;
          --bg2: #f0f4f0;
          --bg3: #e5e9e4;
          --border: rgba(0,0,0,0.08);
          --border2: rgba(0,0,0,0.14);
          --text: #1a1d1b;
          --muted: #5c6560;
          --accent: #16a34a;
          --accent-light: #dcfce7;
          --serif: 'DM Serif Display', Georgia, serif;
          --sans: 'DM Sans', system-ui, sans-serif;
        }

        body {
          background: var(--bg);
          color: var(--text);
          font-family: var(--sans);
          font-size: 16px;
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
        }

        nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          padding: 18px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--border);
          background: rgba(250,250,248,0.85);
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

        .content {
          max-width: 860px;
          margin: 0 auto;
          padding: 120px 40px 80px;
        }

        .back-link {
          display: inline-block;
          color: var(--muted);
          text-decoration: none;
          font-size: 14px;
          margin-bottom: 32px;
          transition: color 0.15s;
        }

        .back-link:hover { color: var(--accent); }

        .page-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--accent-light);
          border: 1px solid rgba(22,163,74,0.2);
          border-radius: 20px;
          padding: 5px 14px;
          font-size: 12px;
          color: var(--accent);
          font-weight: 500;
          letter-spacing: 0.04em;
          margin-bottom: 24px;
        }

        .page-tag::before {
          content: '';
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--accent);
        }

        h1 {
          font-family: var(--serif);
          font-size: clamp(36px, 5vw, 56px);
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 20px;
        }

        .intro {
          font-size: 18px;
          color: var(--muted);
          line-height: 1.7;
          font-weight: 300;
          max-width: 620px;
          margin-bottom: 56px;
        }

        h2 {
          font-family: var(--serif);
          font-size: 28px;
          letter-spacing: -0.02em;
          margin-bottom: 16px;
          margin-top: 56px;
        }

        h2:first-of-type { margin-top: 0; }

        p {
          color: var(--muted);
          line-height: 1.7;
          font-weight: 300;
          margin-bottom: 16px;
        }

        .spec-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 16px;
          margin: 32px 0 48px;
        }

        .spec-card {
          background: var(--bg2);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 24px;
        }

        .spec-label {
          font-size: 12px;
          color: var(--accent);
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .spec-value {
          font-size: 16px;
          font-weight: 500;
          color: var(--text);
          line-height: 1.4;
        }

        .spec-note {
          font-size: 13px;
          color: var(--muted);
          margin-top: 4px;
          font-weight: 300;
        }

        .diagram {
          background: var(--bg2);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 40px;
          margin: 32px 0 48px;
          text-align: center;
        }

        .diagram-flow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .diagram-box {
          background: white;
          border: 1px solid var(--border2);
          border-radius: 8px;
          padding: 16px 20px;
          font-size: 14px;
          font-weight: 500;
          color: var(--text);
          min-width: 140px;
        }

        .diagram-box.highlight {
          border-color: var(--accent);
          background: var(--accent-light);
          color: var(--accent);
        }

        .diagram-arrow {
          font-size: 20px;
          color: var(--muted);
        }

        .diagram-label {
          font-size: 11px;
          color: var(--muted);
          margin-top: 6px;
          font-weight: 300;
        }

        .parts-list {
          list-style: none;
          margin: 24px 0 48px;
        }

        .parts-list li {
          display: flex;
          align-items: baseline;
          gap: 12px;
          padding: 12px 0;
          border-bottom: 1px solid var(--border);
          font-size: 15px;
        }

        .parts-list li:last-child { border-bottom: none; }

        .part-name {
          font-weight: 500;
          color: var(--text);
          min-width: 200px;
        }

        .part-desc {
          color: var(--muted);
          font-weight: 300;
        }

        .cta-section {
          background: var(--bg2);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 40px;
          text-align: center;
          margin-top: 64px;
        }

        .cta-section p {
          text-align: center;
          max-width: 480px;
          margin: 0 auto 24px;
        }

        .btn-primary {
          background: var(--accent);
          color: #ffffff;
          padding: 14px 28px;
          border-radius: 8px;
          font-weight: 500;
          font-size: 15px;
          text-decoration: none;
          transition: background 0.2s, transform 0.15s;
          display: inline-block;
          font-family: var(--sans);
        }

        .btn-primary:hover { background: #15803d; transform: translateY(-1px); }

        footer {
          border-top: 1px solid var(--border);
          padding: 32px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 860px;
          margin: 80px auto 0;
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

        @media (max-width: 768px) {
          nav { padding: 16px 20px; }
          .content { padding: 100px 20px 60px; }
          .spec-grid { grid-template-columns: 1fr; }
          .diagram-flow { flex-direction: column; }
          .diagram-arrow { transform: rotate(90deg); }
          .parts-list li { flex-direction: column; gap: 4px; }
          .part-name { min-width: auto; }
          footer { flex-direction: column; gap: 12px; padding: 24px 20px; text-align: center; }
        }
      `}</style>

      <nav>
        <a href="/" className="logo">K<span>iot</span>ra</a>
        <div className="nav-links">
          <a href="/#loesungen">Lösungen</a>
          <a href="/#kontakt">Kontakt</a>
        </div>
      </nav>

      <div className="content">
        <a href="/" className="back-link">← Zurück zur Startseite</a>

        <div className="page-tag">Hardware</div>
        <h1>Das Kiotra-Modul</h1>
        <p className="intro">
          Ein kompaktes WLAN-Modul für die Hutschiene im Schaltschrank. Verbindet den
          Frequenzumrichter per Modbus RTU mit der Kiotra-Cloud — ohne Eingriff in die
          bestehende Steuerung.
        </p>

        <h2>Technische Daten</h2>
        <div className="spec-grid">
          <div className="spec-card">
            <div className="spec-label">Mikrocontroller</div>
            <div className="spec-value">ESP32-S3</div>
            <div className="spec-note">Dual-Core, 240 MHz, 8 MB Flash</div>
          </div>
          <div className="spec-card">
            <div className="spec-label">Konnektivität</div>
            <div className="spec-value">WLAN 2.4 GHz</div>
            <div className="spec-note">802.11 b/g/n, WPA2</div>
          </div>
          <div className="spec-card">
            <div className="spec-label">Schnittstelle</div>
            <div className="spec-value">RS-485 / Modbus RTU</div>
            <div className="spec-note">Halbduplex, bis 115.200 Baud</div>
          </div>
          <div className="spec-card">
            <div className="spec-label">Spannungsversorgung</div>
            <div className="spec-value">24V DC</div>
            <div className="spec-note">Direkt aus dem Schaltschrank</div>
          </div>
          <div className="spec-card">
            <div className="spec-label">Montage</div>
            <div className="spec-value">Hutschiene (DIN)</div>
            <div className="spec-note">Kompaktes Gehäuse, Hutschienenclip</div>
          </div>
          <div className="spec-card">
            <div className="spec-label">Cloud-Protokoll</div>
            <div className="spec-value">HTTPS / WebSocket</div>
            <div className="spec-note">TLS-verschlüsselt, Supabase Realtime</div>
          </div>
        </div>

        <h2>So funktioniert die Kommunikation</h2>
        <p>
          Das Kiotra-Modul sitzt zwischen Frequenzumrichter und Cloud. Es liest Sensordaten
          per Modbus RTU aus und sendet sie per WLAN an die Kiotra-Plattform. Steuerbefehle
          vom Endkunden (z.B. Drehzahl ändern) kommen über die Cloud zurück zum Modul und
          werden per Modbus an den Frequenzumrichter weitergegeben.
        </p>

        <div className="diagram">
          <div className="diagram-flow">
            <div className="diagram-box">
              Frequenzumrichter
              <div className="diagram-label">Modbus RTU</div>
            </div>
            <div className="diagram-arrow">⇄</div>
            <div className="diagram-box highlight">
              Kiotra-Modul
              <div className="diagram-label">ESP32 + RS-485</div>
            </div>
            <div className="diagram-arrow">⇄</div>
            <div className="diagram-box">
              Kiotra Cloud
              <div className="diagram-label">WLAN / HTTPS</div>
            </div>
            <div className="diagram-arrow">⇄</div>
            <div className="diagram-box">
              Endkunde-App
              <div className="diagram-label">Browser / PWA</div>
            </div>
          </div>
        </div>

        <h2>Komponenten</h2>
        <ul className="parts-list">
          <li>
            <span className="part-name">ESP32-S3 DevKit</span>
            <span className="part-desc">Herzstück des Moduls — WLAN, Rechenleistung, OTA-Updates</span>
          </li>
          <li>
            <span className="part-name">RS-485 Transceiver</span>
            <span className="part-desc">MAX485 oder vergleichbar — wandelt UART in RS-485 für Modbus RTU</span>
          </li>
          <li>
            <span className="part-name">24V → 3.3V Wandler</span>
            <span className="part-desc">DC/DC Step-Down — versorgt den ESP32 direkt aus der Schaltschrank-Spannung</span>
          </li>
          <li>
            <span className="part-name">Hutschienengehäuse</span>
            <span className="part-desc">Kompaktes DIN-Gehäuse mit Schraubklemmen für RS-485 und Stromversorgung</span>
          </li>
          <li>
            <span className="part-name">Status-LEDs</span>
            <span className="part-desc">WLAN-Verbindung, Cloud-Status, Modbus-Aktivität auf einen Blick</span>
          </li>
        </ul>

        <h2>Installation</h2>
        <p>
          Das Modul wird vom Elektriker auf die Hutschiene im Schaltschrank geclipst.
          Zwei Drähte zum Modbus-Port des Frequenzumrichters (A+ / B−), 24V Spannungsversorgung
          anklemmen, WLAN-Zugangsdaten über die Kiotra-App konfigurieren — fertig.
          Kein Eingriff in die bestehende Steuerung, keine CE-Problematik.
        </p>

        <div className="cta-section">
          <h2 style={{marginTop: 0}}>Interesse?</h2>
          <p>
            Wir liefern das Modul fertig konfiguriert für Ihre Maschine.
            Sprechen Sie uns an.
          </p>
          <a href="/#kontakt" className="btn-primary">Kontakt aufnehmen</a>
        </div>
      </div>

      <footer>
        <div className="footer-copy">© 2025 Kiotra</div>
        <div className="footer-links">
          <a href="/impressum">Impressum</a>
          <a href="/datenschutz">Datenschutz</a>
        </div>
      </footer>
    </>
  )
}
