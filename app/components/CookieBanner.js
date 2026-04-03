'use client'

import { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <>
      <style>{`
        .cookie-banner {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 200;
          background: #131614;
          border-top: 1px solid rgba(255,255,255,0.08);
          padding: 16px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          font-family: 'DM Sans', system-ui, sans-serif;
          animation: slideUp 0.3s ease;
        }

        .cookie-banner p {
          color: #7a7870;
          font-size: 13px;
          line-height: 1.5;
          margin: 0;
        }

        .cookie-banner a {
          color: #4ade80;
          text-decoration: none;
        }

        .cookie-banner a:hover {
          text-decoration: underline;
        }

        .cookie-btn {
          background: #4ade80;
          color: #0d0f0e;
          border: none;
          padding: 10px 20px;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 500;
          font-family: 'DM Sans', system-ui, sans-serif;
          cursor: pointer;
          white-space: nowrap;
          transition: background 0.2s;
        }

        .cookie-btn:hover {
          background: #86efac;
        }

        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }

        @media (max-width: 768px) {
          .cookie-banner {
            flex-direction: column;
            padding: 16px 20px;
            gap: 12px;
            text-align: center;
          }
        }
      `}</style>

      <div className="cookie-banner">
        <p>
          Diese Website verwendet nur technisch notwendige Cookies.
          Mehr dazu in unserer <a href="/datenschutz">Datenschutzerklärung</a>.
        </p>
        <button className="cookie-btn" onClick={accept}>Verstanden</button>
      </div>
    </>
  )
}
