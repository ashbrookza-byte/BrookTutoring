import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.inner}>
        <Link to="/" style={styles.logo}>
          <span style={styles.logoGreen}>Brook</span>Tutoring
        </Link>
        <p style={styles.copy}>© {new Date().getFullYear()} Brook Tutoring. Menlyn, Pretoria, South Africa.</p>
        <nav style={styles.links}>
          <a href="/#subjects" style={styles.link}>Subjects</a>
          <Link to="/tutors" style={styles.link}>Tutors</Link>
          <a href="/#pricing" style={styles.link}>Pricing</a>
          <a href="/#contact" style={styles.link}>Contact</a>
        </nav>
      </div>
    </footer>
  )
}

const styles = {
  footer: {
    background: '#0d2b3e',
    padding: '36px 24px',
    borderTop: '3px solid #3db843',
  },
  inner: {
    maxWidth: 1100,
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 16,
  },
  logo: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    fontSize: '1rem',
    color: '#fff',
    textDecoration: 'none',
  },
  logoGreen: {
    color: '#3db843',
  },
  copy: {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.8rem',
    color: 'rgba(255,255,255,0.4)',
  },
  links: {
    display: 'flex',
    gap: 24,
  },
  link: {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.85rem',
    color: 'rgba(255,255,255,0.5)',
    textDecoration: 'none',
    transition: 'color 0.2s',
  },
}
