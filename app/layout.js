import CookieBanner from './components/CookieBanner'

export const metadata = {
  title: 'Kiotra - IoT für den Maschinenbau',
  description: 'Kiotra verbindet Ihre Maschinen mit der Cloud. Einfach. Sicher. Ohne großes IT-Projekt.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
