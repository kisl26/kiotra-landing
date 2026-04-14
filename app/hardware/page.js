export const metadata = {
  title: 'Hardware – Kiotra',
  description: 'ESP32-basiertes WLAN-Modul für den Schaltschrank. RS-485 + CAN-Bus, kompakt, plug & play.',
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

        h3 {
          font-family: var(--sans);
          font-size: 18px;
          font-weight: 600;
          letter-spacing: -0.01em;
          margin-bottom: 12px;
          margin-top: 32px;
          color: var(--text);
        }

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

        /* Bus diagram — two sources merging into one bus line */
        .bus-diagram {
          margin: 32px 0 48px;
        }

        .bus-layout {
          display: grid;
          grid-template-columns: auto auto 1fr;
          align-items: center;
          gap: 0;
        }

        .bus-sources {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .bus-source-row {
          display: flex;
          align-items: center;
          gap: 0;
        }

        .bus-node {
          background: white;
          border: 1px solid var(--border2);
          border-radius: 10px;
          padding: 16px 14px;
          text-align: center;
          min-width: 130px;
        }

        .bus-node.highlight {
          border-color: var(--accent);
          border-width: 2px;
        }

        .bus-node.optional {
          border-style: dashed;
        }

        .bus-node .diagram-name {
          font-size: 13px;
        }

        .bus-node .diagram-protocol {
          font-size: 10px;
        }

        .bus-merge {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          width: 60px;
          align-self: stretch;
        }

        .bus-merge-line-top,
        .bus-merge-line-bottom {
          position: absolute;
          right: 0;
          height: 2px;
          background: var(--border2);
        }

        .bus-merge-line-top {
          top: calc(50% - 30px);
          width: 60px;
        }

        .bus-merge-line-bottom {
          bottom: calc(50% - 30px);
          width: 60px;
          border-top: 2px dashed var(--muted);
          background: none;
          height: 0;
        }

        .bus-merge-vertical {
          position: absolute;
          right: 0;
          top: calc(50% - 30px);
          bottom: calc(50% - 30px);
          width: 2px;
          background: var(--border2);
        }

        .bus-merge-label {
          position: absolute;
          right: -40px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 10px;
          color: var(--muted);
          font-weight: 500;
          white-space: nowrap;
          background: var(--bg);
          padding: 2px 4px;
          z-index: 1;
        }

        .bus-right {
          display: flex;
          align-items: center;
          gap: 0;
        }

        .bus-right-connector {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 4px;
          min-width: 40px;
        }

        .bus-right-line {
          width: 100%;
          height: 2px;
          background: var(--border2);
          position: relative;
        }

        .bus-right-line::after {
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

        .bus-right-label {
          font-size: 10px;
          color: var(--muted);
          font-weight: 400;
          margin-top: 6px;
          white-space: nowrap;
        }

        .optional-tag {
          display: inline-block;
          font-size: 9px;
          color: var(--muted);
          background: var(--bg2);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 1px 6px;
          margin-top: 4px;
          font-weight: 400;
          letter-spacing: 0.02em;
        }

        /* Simplified bus diagram for all screen sizes */
        .bus-simple {
          display: flex;
          flex-direction: column;
          gap: 0;
          align-items: center;
          margin: 32px 0 48px;
          padding: 24px;
          background: var(--bg2);
          border: 1px solid var(--border);
          border-radius: 12px;
        }

        .bus-simple-row {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
          justify-content: center;
          flex-wrap: wrap;
        }

        .bus-simple-sources {
          display: flex;
          flex-direction: column;
          gap: 8px;
          align-items: flex-end;
        }

        .bus-simple-node {
          background: white;
          border: 1px solid var(--border2);
          border-radius: 10px;
          padding: 14px 16px;
          text-align: center;
          min-width: 110px;
        }

        .bus-simple-node.highlight {
          border-color: var(--accent);
          border-width: 2px;
        }

        .bus-simple-node.optional {
          border-style: dashed;
        }

        .bus-simple-arrow {
          color: var(--border2);
          font-size: 18px;
          flex-shrink: 0;
        }

        .bus-simple-arrow-label {
          font-size: 10px;
          color: var(--muted);
          text-align: center;
          margin-top: 2px;
        }

        .bus-simple-arrow-group {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .bus-simple-bus {
          background: var(--accent-light);
          border: 2px solid var(--accent);
          border-radius: 8px;
          padding: 8px 16px;
          font-size: 12px;
          font-weight: 600;
          color: var(--accent);
          text-align: center;
          white-space: nowrap;
        }

        .bus-simple-brace {
          font-size: 32px;
          color: var(--border2);
          line-height: 1;
          font-weight: 200;
        }

        /* Sensor data section */
        .sensor-subsection {
          background: var(--bg2);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 28px;
          margin: 20px 0 24px;
        }

        .sensor-subsection h3 {
          margin-top: 0;
          margin-bottom: 8px;
        }

        .sensor-subsection p {
          margin-bottom: 12px;
        }

        .sensor-values {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 12px;
        }

        .sensor-chip {
          background: white;
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 6px 12px;
          font-size: 13px;
          color: var(--text);
          font-weight: 400;
        }

        .sensor-chip .sensor-unit {
          color: var(--muted);
          font-weight: 300;
          margin-left: 2px;
        }

        /* Checklist */
        .checklist {
          margin: 24px 0 48px;
        }

        .checklist-group {
          margin-bottom: 32px;
        }

        .checklist-group:last-child {
          margin-bottom: 0;
        }

        .checklist-group-title {
          font-size: 14px;
          font-weight: 600;
          color: var(--text);
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .checklist-group-title .group-icon {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          flex-shrink: 0;
        }

        .checklist-group-title .group-icon.required {
          background: var(--accent-light);
          color: var(--accent);
        }

        .checklist-group-title .group-icon.optional-icon {
          background: #fef3c7;
          color: #d97706;
        }

        .checklist-items {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .checklist-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 15px;
          line-height: 1.5;
          color: var(--muted);
          font-weight: 300;
        }

        .checklist-item::before {
          content: '\\2713';
          flex-shrink: 0;
          width: 20px;
          height: 20px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 600;
          margin-top: 2px;
        }

        .checklist-group.required .checklist-item::before {
          background: var(--accent-light);
          color: var(--accent);
        }

        .checklist-group.optional-group .checklist-item::before {
          background: #fef3c7;
          color: #d97706;
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
          .bus-simple-row { flex-direction: column; gap: 8px; }
          .bus-simple-sources { align-items: center; flex-direction: row; gap: 8px; }
          .bus-simple-brace { transform: rotate(90deg); }
          .bus-simple-arrow { transform: rotate(90deg); }
          .sensor-subsection { padding: 20px; }
          .sensor-values { gap: 6px; }
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
        <a href="/" className="back-link">&larr; Zurück zur Startseite</a>

        <div className="page-tag">Hardware</div>
        <h1>Das WLAN-Modul</h1>
        <p className="intro">
          Ein industrielles WLAN-Modul für die Hutschiene im Schaltschrank. Es liest Betriebsdaten
          per Modbus RTU direkt aus den Registern des Frequenzumrichters aus und überträgt sie
          per WLAN an die Kiotra-Cloud — ohne Eingriff in die bestehende Steuerung.
        </p>

        <div className="product-image">
          <img src="/waveshare-esp32-s3-rs485-can.jpg" alt="WaveShare ESP32-S3 Control Board mit RS485 und CAN" />
        </div>

        <h2>Technische Daten</h2>
        <div className="spec-grid">
          <div className="spec-card">
            <div className="spec-label">Basis</div>
            <div className="spec-value">WaveShare ESP32-S3</div>
            <div className="spec-note">Industrial Control Board (RS485 + CAN)</div>
          </div>
          <div className="spec-card">
            <div className="spec-label">Konnektivität</div>
            <div className="spec-value">WLAN + Bluetooth</div>
            <div className="spec-note">802.11 b/g/n, BLE 5.0</div>
          </div>
          <div className="spec-card">
            <div className="spec-label">Schnittstelle</div>
            <div className="spec-value">RS-485 + CAN</div>
            <div className="spec-note">Beide isoliert, Modbus RTU + CAN 2.0</div>
          </div>
          <div className="spec-card">
            <div className="spec-label">CAN-Bus</div>
            <div className="spec-value">CAN 2.0 / isoliert</div>
            <div className="spec-note">Für CANopen-fähige Frequenzumrichter</div>
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
          <div className="spec-card">
            <div className="spec-label">Maße</div>
            <div className="spec-value">91.6 × 23.3 × 58.7 mm</div>
            <div className="spec-note">Kompaktes Format für jeden Schaltschrank</div>
          </div>
        </div>

        <h2>So funktioniert die Kommunikation</h2>
        <p>
          Das WLAN-Modul ist der Modbus-Master auf dem RS-485-Bus. Es liest zyklisch die
          Register des Frequenzumrichters aus — und optional weitere Modbus-Teilnehmer wie
          I/O-Erweiterungsmodule. Die Daten werden per WLAN an die Kiotra-Cloud gesendet.
          Steuerbefehle (z.B. Drehzahl ändern) kommen über die Cloud zurück und werden
          per Modbus an den Frequenzumrichter weitergegeben.
        </p>

        <div className="bus-simple">
          <div className="bus-simple-row">
            <div className="bus-simple-sources">
              <div className="bus-simple-node">
                <div className="diagram-name">Frequenz&shy;umrichter</div>
                <div className="diagram-protocol">Modbus Slave 1</div>
              </div>
              <div className="bus-simple-node optional">
                <div className="diagram-name">I/O-Modul</div>
                <div className="diagram-protocol">Modbus Slave 2</div>
                <div className="optional-tag">optional</div>
              </div>
            </div>

            <div className="bus-simple-brace">&#125;</div>

            <div className="bus-simple-bus">RS-485 Bus</div>

            <div className="bus-simple-arrow-group">
              <div className="bus-simple-arrow">&harr;</div>
              <div className="bus-simple-arrow-label">Modbus RTU</div>
            </div>

            <div className="bus-simple-node highlight">
              <div className="diagram-name">WLAN-Modul</div>
              <div className="diagram-protocol">ESP32-S3 (Master)</div>
            </div>

            <div className="bus-simple-arrow-group">
              <div className="bus-simple-arrow">&harr;</div>
              <div className="bus-simple-arrow-label">WLAN</div>
            </div>

            <div className="bus-simple-node">
              <div className="diagram-name">Kiotra Cloud</div>
              <div className="diagram-protocol">Server</div>
            </div>

            <div className="bus-simple-arrow-group">
              <div className="bus-simple-arrow">&harr;</div>
              <div className="bus-simple-arrow-label">HTTPS</div>
            </div>

            <div className="bus-simple-node">
              <div className="diagram-name">Endkunde-App</div>
              <div className="diagram-protocol">Browser / PWA</div>
            </div>
          </div>
        </div>

        <h2>Woher kommen die Sensordaten?</h2>
        <p>
          Das WLAN-Modul hat keine eigenen Sensoreingänge. Alle Messwerte werden über
          den Modbus-RTU-Bus ausgelesen — entweder direkt aus dem Frequenzumrichter oder
          von zusätzlichen I/O-Modulen auf demselben Bus.
        </p>

        <div className="sensor-subsection">
          <h3>Vom Frequenzumrichter — standardmäßig verfügbar</h3>
          <p>
            Jeder moderne Frequenzumrichter stellt über seine Modbus-Register bereits eine
            Vielzahl an Betriebsdaten bereit. Das WLAN-Modul liest diese Register zyklisch aus:
          </p>
          <div className="sensor-values">
            <span className="sensor-chip">Ausgabefrequenz <span className="sensor-unit">Hz</span></span>
            <span className="sensor-chip">Motorstrom <span className="sensor-unit">A</span></span>
            <span className="sensor-chip">Zwischenkreisspannung <span className="sensor-unit">V</span></span>
            <span className="sensor-chip">Motortemperatur <span className="sensor-unit">°C</span></span>
            <span className="sensor-chip">Fehlerstatus</span>
            <span className="sensor-chip">Betriebsstunden <span className="sensor-unit">h</span></span>
            <span className="sensor-chip">Leistung <span className="sensor-unit">kW</span></span>
            <span className="sensor-chip">Drehrichtung</span>
          </div>
        </div>

        <div className="sensor-subsection">
          <h3>Zusätzliche Sensoren — optional</h3>
          <p>
            Für Messwerte, die der Frequenzumrichter nicht liefert (z.B. Druck, Durchfluss,
            Füllstand, externe Temperatur), wird ein Modbus-I/O-Erweiterungsmodul auf denselben
            RS-485-Bus geschaltet. Dieses Modul wandelt analoge Sensorsignale (4–20 mA, 0–10V)
            in Modbus-Register um.
          </p>
          <p>
            Das I/O-Modul erhält eine eigene Modbus-Adresse und wird ebenfalls auf der Hutschiene
            montiert. Es teilt sich die 24V-Versorgung und den RS-485-Bus (A+/B−) mit dem
            WLAN-Modul — ein zusätzliches 2-adriges Kabel genügt.
          </p>
          <div className="sensor-values">
            <span className="sensor-chip">Druck <span className="sensor-unit">bar</span></span>
            <span className="sensor-chip">Durchfluss <span className="sensor-unit">l/min</span></span>
            <span className="sensor-chip">Füllstand <span className="sensor-unit">%</span></span>
            <span className="sensor-chip">Ext. Temperatur <span className="sensor-unit">°C</span></span>
            <span className="sensor-chip">Vibration <span className="sensor-unit">mm/s</span></span>
          </div>
        </div>

        <h2>Alles in einem Modul</h2>
        <ul className="parts-list">
          <li>
            <span className="part-name">ESP32-S3 Prozessor</span>
            <span className="part-desc">Dual-Core, WLAN + Bluetooth, OTA-Updates über die Cloud</span>
          </li>
          <li>
            <span className="part-name">RS-485 / Modbus-Bus</span>
            <span className="part-desc">Integrierter Modbus-Master — mehrere Teilnehmer auf einem Bus (FU, I/O-Module)</span>
          </li>
          <li>
            <span className="part-name">CAN-Bus (isoliert)</span>
            <span className="part-desc">Für Frequenzumrichter mit CANopen-Schnittstelle — alternative Kommunikation neben Modbus</span>
          </li>
          <li>
            <span className="part-name">7–36V Weitbereichseingang</span>
            <span className="part-desc">Läuft direkt an 24V DC aus dem Schaltschrank, kein externer Wandler nötig</span>
          </li>
          <li>
            <span className="part-name">Industriegehäuse</span>
            <span className="part-desc">Hutschienenmontage, Schraubklemmen, Status-LEDs</span>
          </li>
          <li>
            <span className="part-name">Kompaktes Format</span>
            <span className="part-desc">Nur 91.6 × 23.3 mm Grundfläche — passt in jeden Schaltschrank</span>
          </li>
        </ul>

        <h2>Was Sie beschaffen müssen</h2>
        <div className="checklist">
          <div className="checklist-group required">
            <div className="checklist-group-title">
              <span className="group-icon required">&#10003;</span>
              Immer benötigt
            </div>
            <ul className="checklist-items">
              <li className="checklist-item">
                1&times; WaveShare ESP32-S3 Control Board (RS485 + CAN)
              </li>
              <li className="checklist-item">
                RS-485-Kabel (2-adrig, z.B. CAT5) zum Modbus-Port des Frequenzumrichters
              </li>
              <li className="checklist-item">
                24V DC Spannungsversorgung (i.d.R. im Schaltschrank bereits vorhanden)
              </li>
              <li className="checklist-item">
                WLAN-Abdeckung im Bereich des Schaltschranks
              </li>
            </ul>
          </div>
          <div className="checklist-group optional-group">
            <div className="checklist-group-title">
              <span className="group-icon optional-icon">+</span>
              Optional — für zusätzliche Sensoren
            </div>
            <ul className="checklist-items">
              <li className="checklist-item">
                1&times; Modbus-RTU-I/O-Modul (Hutschiene, 24V DC, z.B. Waveshare Modbus RTU IO)
              </li>
              <li className="checklist-item">
                Sensoren mit Analogausgang (4–20 mA oder 0–10V)
              </li>
              <li className="checklist-item">
                Weiteres RS-485-Kabel (parallel am selben Bus, A+/B−)
              </li>
            </ul>
          </div>
        </div>

        <h2>Installation</h2>
        <p>
          WLAN-Modul auf die Hutschiene clipsen, RS-485 (A+ / B−) an den Modbus-Port des
          Frequenzumrichters anklemmen, 24V Spannungsversorgung anschließen, WLAN-Zugangsdaten
          über die Kiotra-App konfigurieren — fertig.
          Kein Eingriff in die bestehende Steuerung, keine CE-Problematik.
        </p>
        <p>
          Für zusätzliche Sensoren: Das I/O-Erweiterungsmodul wird ebenfalls auf die Hutschiene
          montiert und an denselben RS-485-Bus angeschlossen (A+/B− parallel verdrahten). In der
          Kiotra-App wird die Modbus-Adresse des I/O-Moduls hinterlegt — die Sensoren werden
          dann automatisch mit ausgelesen.
        </p>

      </div>

      <footer>
        <div className="footer-copy">&copy; 2025 Kiotra</div>
        <div className="footer-links">
          <a href="/impressum">Impressum</a>
          <a href="/datenschutz">Datenschutz</a>
        </div>
      </footer>
    </>
  )
}
