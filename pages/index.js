import { useState, useEffect } from 'react'
import Head from 'next/head'

const tools = [
  { name: 'temperature-converter', path: '/tool1' },
  { name: 'cat-facts', path: '/tool2' },
  { name: 'hockey', path: '/tool3' },
  { name: 'board', path: '/tool4' },
  { name: 'login', path: '/tool5' },
  { name: 'spotify', path: '/tool6' },
  { name: 'wifi-psk', path: '/tool7' },
  { name: 'blog', path: '/tool8' },
  { name: 'session-cookie', path: '/tool9' },
]

const apis = [
  { name: 'hello', path: '/.netlify/functions/hello', badge: 'fn' },
  { name: 'board', path: '/api/board', badge: 'api' },
  { name: 'cat-facts', path: '/api/cat-facts', badge: 'api' },
  { name: 'hockey', path: '/api/hockey', badge: 'api' },
  { name: 'baseball', path: '/api/baseball', badge: 'api' },
  { name: 'huskies', path: '/api/huskies', badge: 'api' },
]


function Card({ name, path, url, badge, index }) {
  const href = url || path
  const displayPath = url ? url.replace('https://', '') : path
  const delay = `${0.04 + index * 0.03}s`

  return (
    <a href={href} className="card" style={{ animationDelay: delay }}>
      <span className="card-name">{name}</span>
      {badge && <span className="badge">{badge}</span>}
      <span className="card-path">{displayPath}</span>
      <span className="arrow">↗</span>
      <style jsx>{`
        .card {
          position: relative;
          background: var(--surface);
          padding: 1.5rem 1.6rem 1.5rem;
          text-decoration: none;
          color: var(--text);
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          overflow: hidden;
          transition: background 0.12s ease, color 0.12s ease;
          animation: fadeUp 0.5s ease both;
        }
        .card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--accent-glow);
          opacity: 0;
          transition: opacity 0.12s ease;
        }
        .card:hover {
          background: var(--surface-hi);
        }
        .card:hover::after {
          opacity: 1;
        }
        .card:hover .card-name {
          color: var(--accent);
        }
        .card:hover .arrow {
          transform: translate(3px, -3px);
          color: var(--accent);
        }
        .card:hover .badge {
          color: var(--accent-dim);
          border-color: var(--accent-dim);
        }
        .card-name {
          font-size: 1rem;
          color: var(--text-bright);
          transition: color 0.12s;
          position: relative;
          z-index: 1;
        }
        .card-path {
          font-size: 0.75rem;
          color: var(--text-muted);
          position: relative;
          z-index: 1;
        }
        .badge {
          display: inline-flex;
          align-items: center;
          font-size: 0.62rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 0.15em 0.45em;
          border: 1px solid var(--border-hi);
          border-radius: 2px;
          color: var(--text-muted);
          width: fit-content;
          position: relative;
          z-index: 1;
          transition: color 0.12s, border-color 0.12s;
        }
        .arrow {
          position: absolute;
          top: 0.7rem;
          right: 0.75rem;
          font-size: 0.65rem;
          color: var(--border-hi);
          transition: transform 0.12s ease, color 0.12s ease;
          z-index: 1;
        }
      `}</style>
    </a>
  )
}

function Section({ label, items, startIndex = 0 }) {
  return (
    <section>
      <div className="section-label">
        <h2>{label}</h2>
      </div>
      <div className="grid">
        {items.map((item, i) => (
          <Card key={item.path || item.url} {...item} index={startIndex + i} />
        ))}
      </div>
      <style jsx>{`
        section {
          position: relative;
          z-index: 1;
          margin-bottom: 3rem;
        }
        .section-label {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }
        .section-label::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--border);
        }
        h2 {
          font-size: 0.6rem;
          font-weight: normal;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--text-muted);
          white-space: nowrap;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
        }
        @media (max-width: 480px) {
          .grid { grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); }
        }
      `}</style>
    </section>
  )
}

export default function Home() {
  const [baseDomain, setBaseDomain] = useState('bhenning.com')

  useEffect(() => {
    const parts = window.location.hostname.split('.')
    if (parts.length >= 2) setBaseDomain(parts.slice(-2).join('.'))
  }, [])

  const sites = Array.from({ length: 9 }, (_, i) => ({
    name: `site${i + 1}`,
    url: `https://site${i + 1}.${baseDomain}`,
  }))

  return (
    <>
      <Head>
        <title>site5 — bhenning.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <p className="header-eyebrow">bhenning.com / dashboard</p>
        <h1>site<em>5</em></h1>
        <p className="header-sub">tools &amp; utilities — select a destination (next.js)</p>
        <div className="header-rule" />
      </header>

      <Section label="Tools &amp; Pages" items={tools} startIndex={0} />
      <Section label="APIs &amp; Functions" items={apis} startIndex={tools.length} />
      <Section label="Sites" items={sites} startIndex={tools.length + apis.length} />

      <footer>bhenning.com &mdash; site5</footer>

      <style jsx>{`
        header {
          position: relative;
          z-index: 1;
          margin-bottom: 3.5rem;
        }
        .header-eyebrow {
          font-size: 0.6rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 0.6rem;
        }
        h1 {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: normal;
          color: var(--text-bright);
          letter-spacing: -0.02em;
          line-height: 1;
        }
        h1 em {
          font-style: normal;
          color: var(--accent);
        }
        .header-sub {
          margin-top: 0.8rem;
          font-size: 0.7rem;
          color: var(--text-muted);
          letter-spacing: 0.05em;
        }
        .header-rule {
          margin-top: 1.75rem;
          height: 1px;
          background: linear-gradient(to right, var(--border-hi), var(--border), transparent);
        }
        footer {
          position: relative;
          z-index: 1;
          margin-top: 1rem;
          padding-top: 1.25rem;
          border-top: 1px solid var(--border);
          font-size: 0.58rem;
          color: var(--text-muted);
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  )
}
