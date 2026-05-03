import { useFadeIn } from '../hooks/useFadeIn.js'

const STATS = [
  { num: '15%',   label: 'Average grade improvement across matric students' },
  { num: '36pts', label: 'Highest single-student improvement recorded'      },
  { num: '5',     label: 'Core subjects covered by our tutor team'          },
  { num: '100%',  label: 'Of matric students improved or maintained marks'  },
]

export default function StudentShowcase() {
  const headRef = useFadeIn({ delay: 0,   distance: 16 })
  const gridRef = useFadeIn({ delay: 150, distance: 24 })

  return (
    <section style={s.section}>
      <div style={s.inner}>
        <div ref={headRef} style={s.head}>
          <span style={s.eyebrow}>Results that speak</span>
          <h2 style={s.title}>The numbers don't lie.</h2>
          <p style={s.sub}>
            Our matric students consistently outperform expectations.
            Here's what focused, personalised tutoring actually looks like.
          </p>
        </div>

        <div ref={gridRef} style={s.grid}>
          {STATS.map((st) => (
            <div key={st.label} style={s.card}>
              <span style={s.num}>{st.num}</span>
              <p style={s.cardLabel}>{st.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const s = {
  section: {
    background: 'var(--light)',
    padding: '100px 32px',
    borderTop: '1px solid var(--border)',
  },
  inner: {
    maxWidth: 1100, margin: '0 auto',
    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 56,
  },
  head: { textAlign: 'center', maxWidth: 560 },
  eyebrow: {
    display: 'inline-block',
    fontFamily: 'var(--font-sans)', fontSize: '0.72rem',
    fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase',
    color: 'var(--green)', marginBottom: 14,
  },
  title: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 'clamp(2rem, 4vw, 2.8rem)',
    fontWeight: 700, fontStyle: 'italic',
    color: 'var(--dark-2)', lineHeight: 1.2, marginBottom: 16,
  },
  sub: {
    fontFamily: 'var(--font-sans)', fontSize: '1.05rem',
    color: 'var(--muted)', lineHeight: 1.75,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 24, width: '100%',
  },
  card: {
    background: 'var(--white)',
    border: '1px solid var(--border)',
    borderRadius: 16,
    padding: '36px 28px',
    display: 'flex', flexDirection: 'column', gap: 12,
    borderTop: '3px solid var(--green)',
    boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
    transition: 'transform 0.22s, box-shadow 0.22s',
  },
  num: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 'clamp(2.2rem, 3.5vw, 3rem)',
    fontWeight: 700,
    background: 'linear-gradient(135deg, #22c55e, #16a34a)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    lineHeight: 1,
  },
  cardLabel: {
    fontFamily: 'var(--font-sans)', fontSize: '0.875rem',
    color: 'var(--slate)', lineHeight: 1.55, fontWeight: 400,
  },
}
