export const metadata = {
  title: 'Impressum – Kiotra',
  description: 'Impressum der Kiotra Website.',
}

export default function Impressum() {
  return (
    <>
      <style>{`
        :root {
          --bg: #ffffff;
          --bg2: #f5f7f5;
          --bg3: #eaede9;
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
          background: rgba(255,255,255,0.85);
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

        .legal-page p {
          color: var(--muted);
          font-size: 15px;
          line-height: 1.7;
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
        <h1>Impressum</h1>

        <h2>Angaben gemäß § 5 TMG</h2>
        <p>
          Marc Schilling<br />
          Kapellenbergstraße 8<br />
          61389 Schmitten
        </p>

        <h2>Kontakt</h2>
        <p>
          E-Mail: <a href="mailto:schmd84@gmail.com">schmd84@gmail.com</a>
        </p>

        <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
        <p>
          Marc Schilling<br />
          Kapellenbergstraße 8<br />
          61389 Schmitten
        </p>

        <h2>Haftung für Inhalte</h2>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
          nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
          Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
          Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen.
        </p>
        <p>
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
          allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
          erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
          Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
          entfernen.
        </p>

        <h2>Haftung für Links</h2>
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
          Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
          Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche
          Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
          erkennbar.
        </p>

        <h2>Urheberrecht</h2>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
          deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
          Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung
          des jeweiligen Autors bzw. Erstellers.
        </p>
      </main>
    </>
  )
}
