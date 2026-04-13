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
          margin-bottom: 48px;
          transition: color 0.15s;
        }

        .back-link:hover { color: var(--accent); }

        .page-tag {
          display: flex;
          width: fit-content;
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

        .product-image {
          background: var(--bg2);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 40px;
          text-align: center;
          margin-bottom: 56px;
        }

        .product-image img {
          max-width: 360px;
          width: 100%;
          height: auto;
          border-radius: 8px;
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
          margin: 32px 0 48px;
        }

        .diagram-flow {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr;
          align-items: center;
          gap: 0;
        }

        .diagram-node {
          background: white;
          border: 1px solid var(--border2);
          border-radius: 10px;
          padding: 20px 16px;
          text-align: center;
        }

        .diagram-node.highlight {
          border-color: var(--accent);
          border-width: 2px;
        }

        .diagram-name {
          font-size: 14px;
          font-weight: 500;
          color: var(--text);
          margin-bottom: 4px;
        }

        .diagram-node.highlight .diagram-name {
          color: var(--accent);
        }

        .diagram-protocol {
          font-size: 11px;
          color: var(--muted);
          font-weight: 300;
        }

        .diagram-connector {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 4px;
        }

        .diagram-line {
          width: 100%;
          min-width: 24px;
          height: 2px;
          background: var(--border2);
          position: relative;
        }

        .diagram-line::after {
          content: '';
          position: absolute;
          right: -1px;
          top: -3px;
          width: 0;
          height: 0;
          border-top: 4px solid transparent;
          border-bottom: 4px solid transparent;
          border-left: 6px solid var(--border2);
        }

        .diagram-connector-label {
          font-size: 10px;
          color: var(--muted);
          font-weight: 400;
          margin-top: 6px;
          white-space: nowrap;
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
          .diagram-flow {
            grid-template-columns: 1fr;
            gap: 0;
          }
          .diagram-connector {
            padding: 4px 0;
          }
          .diagram-line {
            width: 2px;
            min-width: 2px;
            height: 20px;
            margin: 0 auto;
          }
          .diagram-line::after {
            right: auto;
            left: -3px;
            top: auto;
            bottom: -1px;
            border-left: 4px solid transparent;
            border-right: 4px solid transparent;
            border-top: 6px solid var(--border2);
          }
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
        <h1>Das WLAN-Modul</h1>
        <p className="intro">
          Ein industrielles WLAN-Modul für die Hutschiene im Schaltschrank. Verbindet den
          Frequenzumrichter per Modbus RTU mit der Kiotra-Cloud — ohne Eingriff in die
          bestehende Steuerung.
        </p>

        <div className="product-image">
          <img src="/waveshare-esp32-s3-relay.jpg" alt="WaveShare ESP32-S3 Industrial 6CH WiFi Relay Module" />
        </div>

        <h2>Technische Daten</h2>
        <div className="spec-grid">
          <div className="spec-card">
            <div className="spec-label">Basis</div>
            <div className="spec-value">WaveShare ESP32-S3</div>
            <div className="spec-note">Industrial 6CH Relay Module</div>
          </div>
          <div className="spec-card">
            <div className="spec-label">Konnektivität</div>
            <div className="spec-value">WLAN + Bluetooth</div>
            <div className="spec-note">802.11 b/g/n, BLE 5.0</div>
          </div>
          <div className="spec-card">
            <div className="spec-label">Schnittstelle</div>
            <div className="spec-value">RS-485 / Modbus RTU</div>
            <div className="spec-note">Integriert, bis 115.200 Baud</div>
          </div>
          <div className="spec-card">
            <div className="spec-label">Relais</div>
            <div className="spec-value">6 Kanäle</div>
            <div className="spec-note">Für digitale Schaltausgänge</div>
          </div>
          <div className="spec-card">
            <div className="spec-label">Spannungsversorgung</div>
            <div className="spec-value">7–36V DC</div>
            <div className="spec-note">Direkt aus dem Schaltschrank (24V)</div>
          </div>
          <div className="spec-card">
            <div className="spec-label">Montage</div>
            <div className="spec-value">Hutschiene (DIN)</div>
            <div className="spec-note">Industriegehäuse, Schraubklemmen</div>
          </div>
        </div>

        <h2>So funktioniert die Kommunikation</h2>
        <p>
          Das WLAN-Modul sitzt zwischen Frequenzumrichter und Cloud. Es liest Sensordaten
          per Modbus RTU aus und sendet sie per WLAN an die Kiotra-Plattform. Steuerbefehle
          vom Endkunden (z.B. Drehzahl ändern) kommen über die Cloud zurück zum Modul und
          werden per Modbus an den Frequenzumrichter weitergegeben.
        </p>

        <div className="diagram">
          <div className="diagram-flow">
            <div className="diagram-node">
              <div className="diagram-name">Frequenz&shy;umrichter</div>
              <div className="diagram-protocol">Maschine</div>
            </div>
            <div className="diagram-connector">
              <div className="diagram-line" />
              <div className="diagram-connector-label">RS-485</div>
            </div>
            <div className="diagram-node highlight">
              <div className="diagram-name">WLAN-Modul</div>
              <div className="diagram-protocol">ESP32-S3</div>
            </div>
            <div className="diagram-connector">
              <div className="diagram-line" />
              <div className="diagram-connector-label">WLAN</div>
            </div>
            <div className="diagram-node">
              <div className="diagram-name">Kiotra Cloud</div>
              <div className="diagram-protocol">Server</div>
            </div>
            <div className="diagram-connector">
              <div className="diagram-line" />
              <div className="diagram-connector-label">HTTPS</div>
            </div>
            <div className="diagram-node">
              <div className="diagram-name">Endkunde-App</div>
              <div className="diagram-protocol">Browser / PWA</div>
            </div>
          </div>
        </div>

        <h2>Alles in einem Modul</h2>
        <ul className="parts-list">
          <li>
            <span className="part-name">ESP32-S3 Prozessor</span>
            <span className="part-desc">Dual-Core, WLAN + Bluetooth, OTA-Updates über die Cloud</span>
          </li>
          <li>
            <span className="part-name">RS-485 integriert</span>
            <span className="part-desc">Direkter Anschluss an den Modbus-Port des Frequenzumrichters</span>
          </li>
          <li>
            <span className="part-name">6 Relais-Ausgänge</span>
            <span className="part-desc">Für digitale Schaltbefehle — z.B. Ein/Aus, Richtungswechsel</span>
          </li>
          <li>
            <span className="part-name">7–36V Weitbereichseingang</span>
            <span className="part-desc">Läuft direkt an 24V DC aus dem Schaltschrank, kein externer Wandler nötig</span>
          </li>
          <li>
            <span className="part-name">Industriegehäuse</span>
            <span className="part-desc">Hutschienenmontage, Schraubklemmen, Status-LEDs</span>
          </li>
        </ul>

        <h2>Installation</h2>
        <p>
          Modul auf die Hutschiene clipsen, RS-485 (A+ / B−) an den Modbus-Port des
          Frequenzumrichters anklemmen, 24V Spannungsversorgung anschließen, WLAN-Zugangsdaten
          über die Kiotra-App konfigurieren — fertig.
          Kein Eingriff in die bestehende Steuerung, keine CE-Problematik.
        </p>

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
