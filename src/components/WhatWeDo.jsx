import { useFadeIn } from '../hooks/useFadeIn.js'

export default function WhatWeDo() {
  const cardRef = useFadeIn({ delay: 100, distance: 28 })

  return (
    <section style={styles.section}>
      {/* Teal math background */}
      <img
        src="/math-bg.jpg"
        alt=""
        aria-hidden="true"
        style={styles.bgImg}
        onError={e => { e.target.style.display = 'none' }}
      />
      <div style={styles.overlay} />

      {/* Card */}
      <div ref={cardRef} style={styles.card}>
        <h2 style={styles.title}>What We Do</h2>
        <p style={styles.body}>
          Welcome to Brook Tutoring, where we are dedicated to providing student-centred,
          personalised learning experiences. Our approach breaks down subjects to their core
          principles, ensuring that each student gains a deep and lasting understanding. Our
          passionate tutors foster curiosity and critical thinking, helping learners master
          challenging concepts while exploring their real-world applications. We are committed
          to tailoring our lessons to suit the unique learning style of each student, providing
          the support they need to achieve and exceed their academic goals.
        </p>
        <a href="/tutors" style={styles.btn}>Learn More <span>›</span></a>
      </div>
    </section>
  )
}

const styles = {
  section: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 520,
    padding: '80px 24px',
    overflow: 'hidden',
    background: '#1a4a45',
  },
  bgImg: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: 0.35,
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    background: 'rgba(20,58,54,0.72)',
  },
  card: {
    position: 'relative',
    zIndex: 1,
    background: '#fff',
    borderRadius: 8,
    padding: '52px 56px',
    maxWidth: 620,
    textAlign: 'center',
    boxShadow: '0 8px 48px rgba(0,0,0,0.25)',
  },
  title: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    fontSize: 'clamp(1.6rem, 3vw, 2rem)',
    color: '#1a1a1a',
    marginBottom: 20,
  },
  body: {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.95rem',
    color: '#555',
    lineHeight: 1.8,
    marginBottom: 32,
  },
  btn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    padding: '10px 28px',
    border: '1.5px solid #333',
    borderRadius: 4,
    fontFamily: 'var(--font-sans)',
    fontSize: '0.875rem',
    fontWeight: 400,
    color: '#333',
    background: 'transparent',
    textDecoration: 'none',
    transition: 'background 0.2s, color 0.2s',
  },
}
