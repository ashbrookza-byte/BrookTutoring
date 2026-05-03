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

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const isHome = location.pathname === '/'

  return (
    <header style={styles.header(scrolled)}>
      <div style={styles.inner}>
        {/* Logo */}
        <Link to="/" style={styles.logo}>
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 32 C18 32 18 20 18 18 M18 18 C18 18 10 14 6 10 M18 18 C18 18 26 14 30 10 M18 18 C18 18 12 10 14 4 M18 18 C18 18 24 10 22 4 M18 18 C18 18 8 16 4 14 M18 18 C18 18 28 16 32 14" stroke="#3db843" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M14 30 C14 30 16 26 18 32 C20 26 22 30 22 30" stroke="#5c3d1a" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
            <path d="M16 32 C16 32 17 28 18 32 C19 28 20 32 20 32 C20 34 16 34 16 32Z" fill="#5c3d1a"/>
          </svg>
          <span style={styles.logoText}>
            <span style={styles.logoGreen}>Brook</span>Tutoring
          </span>
        </Link>

        {/* Desktop links */}
        <nav style={styles.links}>
          <Link to="/" style={styles.link(isHome)}>Home</Link>
          <Link to="/tutors" style={styles.link(location.pathname === '/tutors')}>Tutors</Link>
          <a href="/#pricing" style={styles.link(false)}>Monthly Pricing Plans</a>
          <a href="/#contact" style={styles.link(false)}>Book Online</a>
          <a href="/#contact" style={styles.link(false)}>Au pairs</a>
          <a href="/#contact" style={styles.link(false)}>More ▾</a>
        </nav>

        {/* Log In */}
        <a href="/#contact" style={styles.loginBtn}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
          Log In
        </a>

        {/* Burger */}
        <button
          style={styles.burger}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(o => !o)}
        >
          <span style={styles.burgerLine(menuOpen, 0)} />
          <span style={styles.burgerLine(menuOpen, 1)} />
          <span style={styles.burgerLine(menuOpen, 2)} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={styles.mobileMenu}>
          <Link to="/" style={styles.mobileLink}>Home</Link>
          <Link to="/tutors" style={styles.mobileLink}>Tutors</Link>
          <a href="/#pricing" style={styles.mobileLink}>Monthly Pricing Plans</a>
          <a href="/#contact" style={styles.mobileLink}>Book Online</a>
          <a href="/#contact" style={styles.mobileLink}>Au pairs</a>
          <a href="/#contact" style={styles.mobileLink}>More</a>
        </div>
      )}
    </header>
  )
}

const styles = {
  header: (scrolled) => ({
    position: 'fixed',
    top: 0, left: 0, right: 0,
    zIndex: 100,
    background: scrolled ? 'rgba(250,245,239,0.97)' : 'rgba(250,245,239,0.97)',
    backdropFilter: 'blur(8px)',
    borderBottom: '2px solid #3db843',
    boxShadow: scrolled ? '0 2px 12px rgba(0,0,0,0.08)' : 'none',
    transition: 'box-shadow 0.25s ease',
  }),
  inner: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '0 24px',
    height: 68,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    textDecoration: 'none',
    flexShrink: 0,
  },
  logoText: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    fontSize: '1.05rem',
    color: '#222',
    letterSpacing: '-0.01em',
  },
  logoGreen: {
    color: '#3db843',
  },
  links: {
    display: 'flex',
    alignItems: 'center',
    gap: 28,
    flex: 1,
    justifyContent: 'center',
  },
  link: (active) => ({
    fontFamily: 'var(--font-sans)',
    fontSize: '0.875rem',
    fontWeight: active ? 600 : 400,
    color: active ? '#3db843' : '#444',
    textDecoration: 'none',
    transition: 'color 0.2s',
    whiteSpace: 'nowrap',
  }),
  loginBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    padding: '8px 20px',
    background: '#3db843',
    color: '#fff',
    borderRadius: 50,
    fontFamily: 'var(--font-sans)',
    fontSize: '0.875rem',
    fontWeight: 500,
    textDecoration: 'none',
    flexShrink: 0,
    transition: 'background 0.2s, transform 0.2s',
  },
  burger: {
    display: 'none',
    flexDirection: 'column',
    gap: 5,
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 4,
  },
  burgerLine: (open, i) => ({
    display: 'block',
    width: 24,
    height: 2,
    background: '#333',
    borderRadius: 2,
    transition: 'all 0.22s ease',
    transform: open
      ? i === 0 ? 'translateY(7px) rotate(45deg)'
      : i === 1 ? 'scaleX(0)'
      : 'translateY(-7px) rotate(-45deg)'
      : 'none',
    opacity: open && i === 1 ? 0 : 1,
  }),
  mobileMenu: {
    display: 'flex',
    flexDirection: 'column',
    background: '#faf5ef',
    borderTop: '1px solid #e5ddd4',
    padding: '16px 24px',
    gap: 16,
  },
  mobileLink: {
    fontFamily: 'var(--font-sans)',
    fontSize: '1rem',
    fontWeight: 400,
    color: '#333',
    textDecoration: 'none',
  },
}
