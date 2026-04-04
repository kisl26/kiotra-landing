export const metadata = {
  title: 'Datenschutzerklärung – Kiotra',
  description: 'Datenschutzerklärung der Kiotra Website.',
}

export default function Datenschutz() {
  return (
    <>
      <style>{`
        :root {
          --bg: #fafaf8;
          --bg2: #f0f4f0;
          --bg3: #e5e9e4;
          --border: rgba(0,0,0,0.08);
          --border2: rgba(0,0,0,0.14);
          --text: #1a1d1b;
          --muted: #5c6560;
          --accent: #16a34a;
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

        .legal-page {
          max-width: 720px;
          margin: 0 auto;
          padding: 120px 40px 80px;
        }

        .legal-nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          padding: 18px 40px;
          display: flex;
          align-items: center;
          border-bottom: 1px solid var(--border);
          background: rgba(250,250,248,0.85);
          backdrop-filter: blur(12px);
        }

        .legal-nav a {
          font-family: var(--serif);
          font-size: 22px;
          color: var(--text);
          letter-spacing: -0.02em;
          text-decoration: none;
        }

        .legal-nav a span { color: var(--accent); }

        .legal-page h1 {
          font-family: var(--serif);
          font-size: 36px;
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin-bottom: 40px;
        }

        .legal-page h2 {
          font-family: var(--sans);
          font-size: 18px;
          font-weight: 500;
          color: var(--text);
          margin-top: 36px;
          margin-bottom: 12px;
        }

        .legal-page h3 {
          font-family: var(--sans);
          font-size: 15px;
          font-weight: 500;
          color: var(--text);
          margin-top: 20px;
          margin-bottom: 8px;
        }

        .legal-page p,
        .legal-page li {
          color: var(--muted);
          font-size: 15px;
          line-height: 1.7;
          margin-bottom: 12px;
        }

        .legal-page ul {
          padding-left: 20px;
          margin-bottom: 12px;
        }

        .legal-page a {
          color: var(--accent);
          text-decoration: none;
        }

        .legal-page a:hover { text-decoration: underline; }

        @media (max-width: 768px) {
          .legal-nav { padding: 16px 20px; }
          .legal-page { padding: 100px 20px 60px; }
        }
      `}</style>

      <nav className="legal-nav">
        <a href="/">K<span>iot</span>ra</a>
      </nav>

      <main className="legal-page">
        <h1>Datenschutzerklärung</h1>

        <h2>1. Verantwortlicher</h2>
        <p>
          Verantwortlich für die Datenverarbeitung auf dieser Website:<br /><br />
          Marc Schilling<br />
          Kapellenbergstraße 8<br />
          61389 Schmitten<br />
          E-Mail: <a href="mailto:schmd84@gmail.com">schmd84@gmail.com</a>
        </p>

        <h2>2. Hosting</h2>
        <p>
          Diese Website wird bei <strong>Vercel Inc.</strong> (340 S Lemon Ave #4133, Walnut, CA 91789, USA)
          gehostet. Beim Besuch dieser Website werden automatisch Informationen in sogenannten
          Server-Log-Dateien gespeichert, die Ihr Browser automatisch übermittelt. Dies umfasst:
        </p>
        <ul>
          <li>IP-Adresse des anfragenden Rechners</li>
          <li>Datum und Uhrzeit der Anfrage</li>
          <li>Name und URL der abgerufenen Datei</li>
          <li>Verwendeter Browser und Betriebssystem</li>
          <li>Referrer URL</li>
        </ul>
        <p>
          Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse
          an der sicheren und effizienten Bereitstellung der Website). Vercel verarbeitet Daten ggf.
          auch in den USA. Es gelten die Standardvertragsklauseln der EU-Kommission.
        </p>

        <h2>3. Kontaktformular</h2>
        <p>
          Wenn Sie uns über das Kontaktformular kontaktieren, werden Ihre Angaben (Name, E-Mail,
          Firma, Telefon, Nachricht) zur Bearbeitung Ihrer Anfrage verarbeitet. Die Daten werden
          über den Dienst <strong>Formspree</strong> (Formspree Inc., USA) übermittelt und per
          E-Mail an uns weitergeleitet.
        </p>
        <p>
          Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche
          Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung
          von Anfragen). Formspree verarbeitet Daten in den USA auf Basis der
          EU-Standardvertragsklauseln.
        </p>

        <h2>4. Cookies</h2>
        <p>
          Diese Website verwendet ausschließlich technisch notwendige Cookies bzw.
          Local-Storage-Einträge (z.B. zur Speicherung Ihrer Cookie-Einstellungen).
          Es werden keine Tracking- oder Marketing-Cookies eingesetzt.
        </p>

        <h2>5. Ihre Rechte</h2>
        <p>Sie haben jederzeit folgende Rechte bezüglich Ihrer personenbezogenen Daten:</p>
        <ul>
          <li><strong>Auskunft</strong> (Art. 15 DSGVO) — Sie können Auskunft über Ihre gespeicherten Daten verlangen.</li>
          <li><strong>Berichtigung</strong> (Art. 16 DSGVO) — Sie können die Berichtigung unrichtiger Daten verlangen.</li>
          <li><strong>Löschung</strong> (Art. 17 DSGVO) — Sie können die Löschung Ihrer Daten verlangen.</li>
          <li><strong>Einschränkung</strong> (Art. 18 DSGVO) — Sie können die Einschränkung der Verarbeitung verlangen.</li>
          <li><strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO) — Sie können Ihre Daten in einem gängigen Format erhalten.</li>
          <li><strong>Widerspruch</strong> (Art. 21 DSGVO) — Sie können der Verarbeitung widersprechen.</li>
        </ul>
        <p>
          Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{' '}
          <a href="mailto:schmd84@gmail.com">schmd84@gmail.com</a>
        </p>

        <h2>6. Beschwerderecht</h2>
        <p>
          Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung
          Ihrer personenbezogenen Daten zu beschweren. Die für uns zuständige Aufsichtsbehörde ist:
        </p>
        <p>
          Der Hessische Beauftragte für Datenschutz und Informationsfreiheit<br />
          Postfach 3163<br />
          65021 Wiesbaden
        </p>

        <h2>7. Aktualität</h2>
        <p>Stand dieser Datenschutzerklärung: April 2026</p>
      </main>
    </>
  )
}
