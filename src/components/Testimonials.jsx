import { useState } from 'react'

const TESTIMONIALS = [
  {
    quote: '"Best tutor ever! Mitch is very patient and will repeat something 1000 times to make sure you understand. He raised my maths mark by 30% between prelims and finals!"',
    author: 'Anri',
  },
  {
    quote: '"Our daughter was really struggling with accounting. After just a few sessions her confidence transformed — she actually enjoys it now."',
    author: 'Linda',
  },
  {
    quote: '"Finding a great science tutor who actually makes my son want to study was something I didn\'t think was possible. Brook Tutoring delivered."',
    author: 'David',
  },
]

export default function Testimonials() {
  const [idx, setIdx] = useState(0)

  const prev = () => setIdx(i => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  const next = () => setIdx(i => (i + 1) % TESTIMONIALS.length)

  const t = TESTIMONIALS[idx]

  return (
    <section style={styles.section}>
      {/* Background image */}
      <img
        src="/stone-bg.jpg"
        alt=""
        aria-hidden="true"
        style={styles.bgImg}
        onError={e => { e.target.style.display = 'none' }}
      />
      {/* Stone texture fallback */}
      <div style={styles.overlay} />

      {/* Decorative chair image */}
      <img
        src="/chair.png"
        alt=""
        aria-hidden="true"
        style={styles.chair}
        onError={e => { e.target.style.display = 'none' }}
      />

      {/* Prev arrow */}
      <button style={styles.arrow} onClick={prev} aria-label="Previous testimonial">‹</button>

      {/* Content */}
      <div style={styles.content}>
        <p style={styles.heading}>What Clients Say...</p>
        <blockquote style={styles.quote} key={idx}>
          {t.quote}
        </blockquote>
        <p style={styles.author}>- {t.author}</p>

        {/* Dots */}
        <div style={styles.dots}>
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              style={styles.dot(i === idx)}
              onClick={() => setIdx(i)}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Next arrow */}
      <button style={{ ...styles.arrow, ...styles.arrowRight }} onClick={next} aria-label="Next testimonial">›</button>
    </section>
  )
}

const styles = {
  section: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 480,
    padding: '80px 80px',
    overflow: 'hidden',
    background: '#2a2a2a',
  },
  bgImg: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: 0.75,
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    background: 'rgba(20,20,20,0.45)',
  },
  chair: {
    position: 'absolute',
    bottom: 0,
    left: '6%',
    height: '55%',
    width: 'auto',
    objectFit: 'contain',
    zIndex: 1,
    opacity: 0.9,
  },
  arrow: {
    position: 'relative',
    zIndex: 2,
    background: 'none',
    border: 'none',
    color: 'rgba(255,255,255,0.7)',
    fontSize: '3rem',
    lineHeight: 1,
    cursor: 'pointer',
    padding: '0 20px',
    flexShrink: 0,
    transition: 'color 0.2s',
    fontFamily: 'Georgia, serif',
  },
  arrowRight: {},
  content: {
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
    maxWidth: 780,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,
  },
  heading: {
    fontFamily: "'Dancing Script', cursive",
    fontStyle: 'italic',
    fontWeight: 600,
    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)',
    color: '#3db843',
  },
  quote: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: 'clamp(1.1rem, 2.2vw, 1.5rem)',
    fontStyle: 'normal',
    color: 'rgba(255,255,255,0.92)',
    lineHeight: 1.65,
    animation: 'fadeInUp 0.5s ease',
  },
  author: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontStyle: 'italic',
    fontSize: '1rem',
    color: 'rgba(255,255,255,0.65)',
  },
  dots: {
    display: 'flex',
    gap: 10,
    marginTop: 8,
  },
  dot: (active) => ({
    width: active ? 28 : 10,
    height: 10,
    borderRadius: 5,
    background: active ? '#fff' : 'rgba(255,255,255,0.35)',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    transition: 'all 0.3s ease',
  }),
}
