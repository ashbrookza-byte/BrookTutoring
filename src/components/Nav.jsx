import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  const isHome    = location.pathname === '/'
  const isTutors  = location.pathname === '/tutors'

  return (
    <header style={styles.wrap(scrolled)}>
      <div style={styles.inner}>

        {/* Logo */}
        <Link to="/" style={styles.logo}>
          <div style={styles.logoMark}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 18v-7M10 11c0 0-4-2-6-5M10 11c0 0 4-2 6-5M10 11c0 0-3-5-2-9M10 11c0 0 3-5 2-9M10 11c0 0-5-1-7-3M10 11c0 0 5-1 7-3" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
            </svg>
          </div>
          <span style={styles.logoText}>
            Brook<span style={styles.logoAccent}>Tutoring</span>
          </span>
        </Link>

        {/* Links */}
        <nav style={styles.links}>
          {[
            { label: 'Home',     to: '/',         active: isHome   },
            { label: 'Tutors',   to: '/tutors',   active: isTutors },
            { label: 'Pricing',  to: '/#pricing', active: false    },
            { label: 'Au Pairs', to: '/#contact', active: false    },
          ].map(({ label, to, active }) => (
            to.startsWith('/#')
              ? <a key={label} href={to} style={styles.link(active)}>{label}</a>
              : <Link key={label} to={to} style={styles.link(active)}>{label}</Link>
          ))}
        </nav>

        {/* CTA */}
        <div style={styles.actions}>
          <a href="/#contact" style={styles.ctaBtn}>Book a Lesson</a>
          <button
            style={styles.burger}
            aria-label="Menu"
            onClick={() => setMenuOpen(o => !o)}
          >
            <span style={styles.bar(menuOpen, 0)} />
            <span style={styles.bar(menuOpen, 1)} />
            <span style={styles.bar(menuOpen, 2)} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div style={styles.drawer}>
          {[
            { label: 'Home',     to: '/'       },
            { label: 'Tutors',   to: '/tutors' },
            { label: 'Pricing',  to: '/#pricing' },
            { label: 'Au Pairs', to: '/#contact' },
            { label: 'Book a Lesson', to: '/#contact', highlight: true },
          ].map(({ label, to, highlight }) => (
            to.startsWith('/#')
              ? <a key={label} href={to} style={styles.drawerLink(highlight)}>{label}</a>
              : <Link key={label} to={to} style={styles.drawerLink(highlight)}>{label}</Link>
          ))}
        </div>
      )}
    </header>
  )
}

const styles = {
  wrap: (scrolled) => ({
    position: 'fixed',
    top: 0, left: 0, right: 0,
    zIndex: 200,
    background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    borderBottom: scrolled ? '1px solid #e2e8f0' : '1px solid rgba(255,255,255,0.08)',
    transition: 'all 0.3s ease',
  }),
  inner: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '0 32px',
    height: 72,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 24,
  },
  logo: {
    display: 'flex', alignItems: 'center', gap: 10,
    textDecoration: 'none', flexShrink: 0,
  },
  logoMark: {
    width: 34, height: 34,
    background: 'linear-gradient(135deg, #22c55e, #16a34a)',
    borderRadius: 8,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    boxShadow: '0 2px 8px rgba(34,197,94,0.35)',
  },
  logoText: {
    fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '1rem',
    color: 'var(--dark-2)', letterSpacing: '-0.02em',
  },
  logoAccent: { color: '#22c55e' },
  links: {
    display: 'flex', alignItems: 'center', gap: 36, flex: 1, justifyContent: 'center',
  },
  link: (active) => ({
    fontFamily: 'var(--font-sans)', fontSize: '0.875rem', fontWeight: active ? 600 : 400,
    color: active ? '#22c55e' : '#475569',
    textDecoration: 'none', transition: 'color 0.2s', whiteSpace: 'nowrap',
  }),
  actions: { display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 },
  ctaBtn: {
    padding: '9px 22px',
    background: 'linear-gradient(135deg, #22c55e, #16a34a)',
    color: '#fff', borderRadius: 50,
    fontFamily: 'var(--font-sans)', fontSize: '0.875rem', fontWeight: 600,
    textDecoration: 'none',
    boxShadow: '0 2px 12px rgba(34,197,94,0.3)',
    transition: 'transform 0.2s, box-shadow 0.2s',
    whiteSpace: 'nowrap',
  },
  burger: {
    display: 'none', flexDirection: 'column', gap: 5,
    background: 'none', border: 'none', cursor: 'pointer', padding: 4,
  },
  bar: (open, i) => ({
    display: 'block', width: 22, height: 2,
    background: '#334155', borderRadius: 2, transition: 'all 0.22s ease',
    transform: open
      ? i === 0 ? 'translateY(7px) rotate(45deg)'
      : i === 2 ? 'translateY(-7px) rotate(-45deg)' : 'none'
      : 'none',
    opacity: open && i === 1 ? 0 : 1,
  }),
  drawer: {
    background: '#fff', borderTop: '1px solid #e2e8f0',
    padding: '16px 32px 24px', display: 'flex', flexDirection: 'column', gap: 4,
  },
  drawerLink: (highlight) => ({
    padding: '10px 0',
    fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: highlight ? 600 : 400,
    color: highlight ? '#22c55e' : '#334155', textDecoration: 'none',
    borderBottom: '1px solid #f1f5f9',
  }),
}
