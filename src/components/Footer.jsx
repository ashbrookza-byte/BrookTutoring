import { Link } from 'react-router-dom'

const LINKS = {
  'Learn': [
    { label: 'Mathematics', to: '/tutors' },
    { label: 'Science',     to: '/tutors' },
    { label: 'English',     to: '/tutors' },
    { label: 'Accounting',  to: '/tutors' },
    { label: 'Afrikaans',   to: '/tutors' },
  ],
  'Company': [
    { label: 'Our Tutors',  to: '/tutors'   },
    { label: 'Pricing',     to: '/#pricing' },
    { label: 'Au Pairs',    to: '/#contact' },
    { label: 'Book Online', to: '/#contact' },
  ],
  'Contact': [
    { label: '(+27) 83 501 1142',      href: 'tel:+27835011142'              },
    { label: 'info@brooktutoring.com', href: 'mailto:info@brooktutoring.com' },
    { label: 'Menlyn, Pretoria, SA',   href: null                            },
  ],
}

export default function Footer() {
  return (
    <footer style={s.footer}>
      <div style={s.inner}>
        {/* Brand column */}
        <div style={s.brand}>
          <Link to="/" style={s.logo}>
            <div style={s.logoMark}>
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path d="M10 18v-7M10 11c0 0-4-2-6-5M10 11c0 0 4-2 6-5M10 11c0 0-3-5-2-9M10 11c0 0 3-5 2-9M10 11c0 0-5-1-7-3M10 11c0 0 5-1 7-3" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
              </svg>
            </div>
            <span style={s.logoText}>Brook<span style={s.logoGreen}>Tutoring</span></span>
          </Link>
          <p style={s.tagline}>
            Personalised, student-centred tutoring that builds real understanding.
            Helping students grow and thrive since 2020.
          </p>
          <div style={s.social}>
            {['Instagram', 'Facebook', 'TikTok'].map(n => (
              <a key={n} href="#" style={s.socialBtn}>{n}</a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(LINKS).map(([heading, items]) => (
          <div key={heading} style={s.col}>
            <p style={s.colHead}>{heading}</p>
            <ul style={s.colList}>
              {items.map(({ label, to, href }) => (
                <li key={label}>
                  {to
                    ? (to.startsWith('/#')
                        ? <a href={to} style={s.colLink}>{label}</a>
                        : <Link to={to} style={s.colLink}>{label}</Link>)
                    : href
                    ? <a href={href} style={s.colLink}>{label}</a>
                    : <span style={s.colLink}>{label}</span>
                  }
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={s.bottom}>
        <p style={s.copy}>© {new Date().getFullYear()} Brook Tutoring. All rights reserved. Menlyn, Pretoria, South Africa.</p>
        <div style={s.bottomLinks}>
          <a href="#" style={s.bottomLink}>Privacy Policy</a>
          <a href="#" style={s.bottomLink}>Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}

const s = {
  footer: {
    background: '#040810',
    borderTop: '1px solid rgba(255,255,255,0.06)',
    padding: '72px 32px 0',
  },
  inner: {
    maxWidth: 1100, margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '2fr 1fr 1fr 1fr',
    gap: 48, paddingBottom: 56,
    borderBottom: '1px solid rgba(255,255,255,0.06)',
  },
  brand: { display: 'flex', flexDirection: 'column', gap: 20 },
  logo: {
    display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none',
  },
  logoMark: {
    width: 32, height: 32, borderRadius: 8,
    background: 'linear-gradient(135deg, #22c55e, #16a34a)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  logoText: {
    fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '0.95rem',
    color: '#fff', letterSpacing: '-0.02em',
  },
  logoGreen: { color: '#22c55e' },
  tagline: {
    fontFamily: 'var(--font-sans)', fontSize: '0.875rem',
    color: 'rgba(255,255,255,0.35)', lineHeight: 1.7, maxWidth: 280,
  },
  social: { display: 'flex', gap: 8 },
  socialBtn: {
    padding: '6px 14px',
    border: '1px solid rgba(255,255,255,0.1)', borderRadius: 50,
    fontFamily: 'var(--font-sans)', fontSize: '0.75rem',
    color: 'rgba(255,255,255,0.35)', textDecoration: 'none',
    transition: 'border-color 0.2s, color 0.2s',
  },
  col: { display: 'flex', flexDirection: 'column', gap: 16 },
  colHead: {
    fontFamily: 'var(--font-sans)', fontSize: '0.72rem',
    fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.4)',
  },
  colList: { display: 'flex', flexDirection: 'column', gap: 10 },
  colLink: {
    fontFamily: 'var(--font-sans)', fontSize: '0.875rem',
    color: 'rgba(255,255,255,0.5)', textDecoration: 'none',
    transition: 'color 0.2s',
  },
  bottom: {
    maxWidth: 1100, margin: '0 auto',
    padding: '20px 0',
    display: 'flex', alignItems: 'center',
    justifyContent: 'space-between', flexWrap: 'wrap', gap: 12,
  },
  copy: {
    fontFamily: 'var(--font-sans)', fontSize: '0.78rem',
    color: 'rgba(255,255,255,0.2)',
  },
  bottomLinks: { display: 'flex', gap: 20 },
  bottomLink: {
    fontFamily: 'var(--font-sans)', fontSize: '0.78rem',
    color: 'rgba(255,255,255,0.2)', textDecoration: 'none',
  },
}
