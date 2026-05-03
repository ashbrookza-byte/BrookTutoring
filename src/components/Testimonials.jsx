import { useFadeIn } from '../hooks/useFadeIn.js'

const REVIEWS = [
  {
    quote: 'Mitch is incredibly patient — he repeated concepts as many times as needed without making me feel embarrassed. My maths mark jumped 30% between prelims and finals.',
    author: 'Anri',
    role: 'Matric student, Mathematics',
    initial: 'A',
    color: '#22c55e',
  },
  {
    quote: 'Our daughter was really struggling with accounting. After just a few sessions her confidence completely transformed — she actually enjoys the subject now.',
    author: 'Linda',
    role: 'Parent',
    initial: 'L',
    color: '#6366f1',
  },
  {
    quote: 'Finding a science tutor who genuinely makes my son want to study was something I didn\'t think was possible. Brook Tutoring delivered beyond expectations.',
    author: 'David',
    role: 'Parent',
    initial: 'D',
    color: '#f97316',
  },
]

function ReviewCard({ review, delay }) {
  const ref = useFadeIn({ delay, distance: 20 })
  return (
    <div ref={ref} style={s.card}>
      <div style={s.stars}>{'★★★★★'}</div>
      <blockquote style={s.quote}>"{review.quote}"</blockquote>
      <div style={s.author}>
        <div style={{ ...s.avatar, background: review.color }}>
          {review.initial}
        </div>
        <div>
          <p style={s.name}>{review.author}</p>
          <p style={s.role}>{review.role}</p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const headRef = useFadeIn({ delay: 0, distance: 16 })

  return (
    <section style={s.section}>
      <div style={s.inner}>
        <div ref={headRef} style={s.head}>
          <span style={s.eyebrow}>What families say</span>
          <h2 style={s.title}>Real students. Real results.</h2>
          <p style={s.sub}>
            Don't take our word for it — here's what our students and parents have shared.
          </p>
        </div>

        <div style={s.grid}>
          {REVIEWS.map((r, i) => (
            <ReviewCard key={r.author} review={r} delay={i * 100} />
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div style={s.strip}>
          <p style={s.stripText}>
            Join the students who've already found their edge.
          </p>
          <a href="/#contact" style={s.stripBtn}>Book a Free Intro Session</a>
        </div>
      </div>
    </section>
  )
}

const s = {
  section: { background: '#fff', padding: '100px 32px' },
  inner: {
    maxWidth: 1100, margin: '0 auto',
    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 56,
  },
  head: { textAlign: 'center', maxWidth: 520 },
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
    display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 24, width: '100%',
  },
  card: {
    background: 'var(--light)',
    border: '1px solid var(--border)',
    borderRadius: 16, padding: '32px 28px',
    display: 'flex', flexDirection: 'column', gap: 20,
    borderTop: '3px solid var(--green)',
    transition: 'transform 0.22s, box-shadow 0.22s',
  },
  stars: {
    color: '#f59e0b', fontSize: '0.9rem', letterSpacing: '2px',
  },
  quote: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: '1.05rem', fontStyle: 'italic',
    color: 'var(--dark-3)', lineHeight: 1.7, flex: 1,
  },
  author: {
    display: 'flex', alignItems: 'center', gap: 14,
    paddingTop: 16, borderTop: '1px solid var(--border)',
  },
  avatar: {
    width: 42, height: 42, borderRadius: '50%',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    color: '#fff', fontFamily: 'var(--font-sans)',
    fontWeight: 700, fontSize: '1rem', flexShrink: 0,
  },
  name: {
    fontFamily: 'var(--font-sans)', fontWeight: 600,
    fontSize: '0.9rem', color: 'var(--dark-2)',
  },
  role: {
    fontFamily: 'var(--font-sans)', fontSize: '0.8rem',
    color: 'var(--muted)', marginTop: 2,
  },
  strip: {
    width: '100%',
    background: 'linear-gradient(135deg, var(--dark-2) 0%, var(--dark-3) 100%)',
    borderRadius: 20, padding: '40px 48px',
    display: 'flex', alignItems: 'center',
    justifyContent: 'space-between', flexWrap: 'wrap', gap: 24,
  },
  stripText: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
    fontStyle: 'italic', color: '#fff', maxWidth: 420,
  },
  stripBtn: {
    padding: '13px 32px',
    background: 'linear-gradient(135deg, #22c55e, #16a34a)',
    color: '#fff', borderRadius: 50,
    fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 600,
    textDecoration: 'none', whiteSpace: 'nowrap',
    boxShadow: '0 4px 20px rgba(34,197,94,0.35)',
  },
}
