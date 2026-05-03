import { useFadeIn } from '../hooks/useFadeIn.js'

const STATS = [
  { num: '15%',    label: 'Avg Grade Improvement' },
  { num: '2020',   label: 'Established' },
  { num: '5',      label: 'Core Subjects' },
  { num: '1 : 1',  label: 'Personalised Sessions' },
]

export default function Hero() {
  const eyebrowRef = useFadeIn({ delay: 0,   distance: 16 })
  const titleRef   = useFadeIn({ delay: 120, distance: 20 })
  const subRef     = useFadeIn({ delay: 240, distance: 20 })
  const btnsRef    = useFadeIn({ delay: 360, distance: 20 })
  const statsRef   = useFadeIn({ delay: 200, distance: 28 })

  return (
    <section style={s.section}>
      {/* Gradient orbs */}
      <div style={s.orbA} />
      <div style={s.orbB} />

      {/* Dot-grid texture */}
      <div style={s.dots} />

      <div style={s.inner}>
        {/* ── Left ── */}
        <div style={s.left}>
          <div ref={eyebrowRef} style={s.eyebrow}>
            <span style={s.eyebrowDot} />
            PERSONALISED TUTORING · PRETORIA, SA
          </div>

          <div ref={titleRef} style={s.titleGroup}>
            <h1 style={s.titleSerif}>Where students</h1>
            <h1 style={s.titleScript}>actually thrive.</h1>
          </div>

          <p ref={subRef} style={s.sub}>
            Brook Tutoring delivers student-centred, one-on-one lessons built around
            your child's learning style — not a rigid curriculum. Real understanding,
            real results, since 2020.
          </p>

          <div ref={btnsRef} style={s.buttons}>
            <a href="/#contact" style={s.btnPrimary}>
              Book a Free Session
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="/tutors" style={s.btnGhost}>Meet Our Tutors</a>
          </div>
        </div>

        {/* ── Right: stat cards ── */}
        <div ref={statsRef} style={s.right}>
          {STATS.map((stat, i) => (
            <div key={stat.label} style={s.card(i)}>
              <span style={s.cardNum}>{stat.num}</span>
              <span style={s.cardLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div style={s.scrollHint}>
        <div style={s.scrollLine} />
        <span style={s.scrollText}>scroll</span>
      </div>
    </section>
  )
}

const s = {
  section: {
    position: 'relative',
    minHeight: '100vh',
    background: '#080d1a',
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    paddingTop: 72,
  },
  orbA: {
    position: 'absolute',
    top: '-15%', right: '-8%',
    width: 640, height: 640,
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(34,197,94,0.18) 0%, transparent 68%)',
    pointerEvents: 'none',
  },
  orbB: {
    position: 'absolute',
    bottom: '-10%', left: '-5%',
    width: 480, height: 480,
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(34,197,94,0.09) 0%, transparent 68%)',
    pointerEvents: 'none',
  },
  dots: {
    position: 'absolute', inset: 0, pointerEvents: 'none',
    backgroundImage: 'radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px)',
    backgroundSize: '36px 36px',
  },
  inner: {
    position: 'relative', zIndex: 1,
    maxWidth: 1200, margin: '0 auto',
    padding: '60px 32px 100px',
    display: 'grid',
    gridTemplateColumns: '1.1fr 0.9fr',
    gap: 64,
    alignItems: 'center',
    width: '100%',
  },
  left: { display: 'flex', flexDirection: 'column', gap: 28 },
  eyebrow: {
    display: 'inline-flex', alignItems: 'center', gap: 10,
    fontFamily: 'var(--font-sans)', fontSize: '0.72rem',
    fontWeight: 600, letterSpacing: '0.16em',
    color: '#22c55e', textTransform: 'uppercase',
  },
  eyebrowDot: {
    width: 7, height: 7, borderRadius: '50%',
    background: '#22c55e',
    boxShadow: '0 0 8px rgba(34,197,94,0.8)',
    animation: 'pulse 2.5s ease-in-out infinite',
    flexShrink: 0,
  },
  titleGroup: { display: 'flex', flexDirection: 'column', gap: 0 },
  titleSerif: {
    fontFamily: "'DM Serif Display', Georgia, serif",
    fontSize: 'clamp(2.8rem, 5.5vw, 4.8rem)',
    fontWeight: 400, fontStyle: 'italic',
    color: '#ffffff', lineHeight: 1.12,
    letterSpacing: '-0.01em',
  },
  titleScript: {
    fontFamily: "'Dancing Script', cursive",
    fontSize: 'clamp(3.2rem, 6vw, 5.4rem)',
    fontWeight: 700,
    background: 'linear-gradient(135deg, #22c55e 0%, #86efac 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    lineHeight: 1.15,
  },
  sub: {
    fontFamily: 'var(--font-sans)', fontSize: 'clamp(1rem, 1.5vw, 1.1rem)',
    color: 'rgba(255,255,255,0.58)', lineHeight: 1.8,
    maxWidth: 480,
  },
  buttons: { display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'center' },
  btnPrimary: {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    padding: '13px 28px',
    background: 'linear-gradient(135deg, #22c55e, #16a34a)',
    color: '#fff', borderRadius: 50,
    fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 600,
    textDecoration: 'none',
    boxShadow: '0 4px 20px rgba(34,197,94,0.35)',
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
  btnGhost: {
    display: 'inline-flex', alignItems: 'center',
    padding: '13px 28px',
    border: '1.5px solid rgba(255,255,255,0.2)',
    color: 'rgba(255,255,255,0.85)', borderRadius: 50,
    fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 400,
    textDecoration: 'none', backdropFilter: 'blur(8px)',
    background: 'rgba(255,255,255,0.04)',
    transition: 'border-color 0.2s, background 0.2s',
  },
  right: {
    display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16,
  },
  card: (i) => ({
    background: 'rgba(255,255,255,0.05)',
    backdropFilter: 'blur(16px)',
    border: '1px solid rgba(255,255,255,0.09)',
    borderRadius: 16,
    padding: '28px 24px',
    display: 'flex', flexDirection: 'column', gap: 8,
    animation: `${i % 2 === 0 ? 'floatA' : 'floatB'} ${3.5 + i * 0.4}s ease-in-out infinite`,
    animationDelay: `${i * 0.3}s`,
    transition: 'transform 0.2s',
  }),
  cardNum: {
    fontFamily: "'DM Serif Display', Georgia, serif",
    fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
    fontWeight: 700,
    background: 'linear-gradient(135deg, #22c55e, #86efac)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    lineHeight: 1,
  },
  cardLabel: {
    fontFamily: 'var(--font-sans)', fontSize: '0.8rem', fontWeight: 400,
    color: 'rgba(255,255,255,0.45)', lineHeight: 1.4,
  },
  scrollHint: {
    position: 'absolute', bottom: 32, left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
    zIndex: 1,
  },
  scrollLine: {
    width: 1, height: 40,
    background: 'linear-gradient(to bottom, rgba(34,197,94,0.7), transparent)',
    animation: 'pulse 2s ease-in-out infinite',
  },
  scrollText: {
    fontFamily: 'var(--font-sans)', fontSize: '0.65rem',
    letterSpacing: '0.18em', textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.25)',
  },
}
