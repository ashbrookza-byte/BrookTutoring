import { useFadeIn } from '../hooks/useFadeIn.js'
import Footer from '../components/Footer.jsx'

const TUTORS = [
  {
    name: 'Mitchell Brook',
    photo: '/tutors/mitchell.jpg',
    role: 'Founder & Lead Tutor',
    subjects: ['Mathematics'],
    grades: 'Grades 10 – 12',
    bio: 'Mitchell founded Brook Tutoring with one goal: make maths clear. He specialises in one-on-one and small group sessions, using a first-principles approach that gives students lasting confidence — not just exam-ready shortcuts.',
    color: '#22c55e',
  },
  {
    name: 'Anna Jacobs',
    photo: '/tutors/anna.jpg',
    role: 'Senior Tutor',
    subjects: ['Mathematics', 'Science', 'Accounting'],
    grades: 'Grades 8 – 11',
    bio: 'Anna brings warmth and rigour in equal measure. Her multi-subject expertise means she can connect concepts across disciplines, helping students see the bigger picture and build genuine academic confidence.',
    color: '#6366f1',
  },
  {
    name: 'Shani Roodt',
    photo: '/tutors/shani.jpg',
    role: 'Language & Maths Tutor',
    subjects: ['Mathematics', 'Afrikaans', 'English'],
    grades: 'Grades 6 – 10',
    bio: 'Shani\'s gentle, nurturing style creates a safe space for students to struggle productively. She guides learners through complex equations and language challenges with the same patient dedication.',
    color: '#f97316',
  },
]

const SUBJECT_COLORS = {
  'Mathematics': { bg: 'rgba(34,197,94,0.1)', color: '#16a34a' },
  'Science':     { bg: 'rgba(99,102,241,0.1)', color: '#6366f1' },
  'Accounting':  { bg: 'rgba(20,184,166,0.1)', color: '#14b8a6' },
  'Afrikaans':   { bg: 'rgba(245,158,11,0.1)', color: '#d97706' },
  'English':     { bg: 'rgba(249,115,22,0.1)', color: '#ea580c' },
}

function TutorCard({ tutor, delay }) {
  const ref = useFadeIn({ delay, distance: 28 })
  return (
    <div ref={ref} style={s.card}>
      <div style={s.photoWrap}>
        <img
          src={tutor.photo}
          alt={tutor.name}
          style={s.photo}
          onError={e => {
            e.target.style.display = 'none'
            e.target.nextSibling.style.display = 'flex'
          }}
        />
        <div style={{ ...s.photoFallback, background: tutor.color }}>
          <span style={s.fallbackInitial}>{tutor.name[0]}</span>
        </div>
        <div style={s.roleBadge}>{tutor.role}</div>
      </div>
      <div style={s.cardBody}>
        <h3 style={s.name}>{tutor.name}</h3>
        <p style={s.grades}>{tutor.grades}</p>
        <p style={s.bio}>{tutor.bio}</p>
        <div style={s.subjects}>
          {tutor.subjects.map(sub => (
            <span
              key={sub}
              style={{ ...s.subjectTag, ...SUBJECT_COLORS[sub] }}
            >
              {sub}
            </span>
          ))}
        </div>
        <a href="/#contact" style={{ ...s.bookBtn, background: tutor.color }}>
          Book with {tutor.name.split(' ')[0]}
        </a>
      </div>
    </div>
  )
}

export default function TutorsPage() {
  const heroRef = useFadeIn({ delay: 0, distance: 20 })

  return (
    <>
      {/* Hero banner */}
      <section style={s.heroBanner}>
        <div style={s.heroOrb} />
        <div ref={heroRef} style={s.heroContent}>
          <span style={s.eyebrow}>Our team</span>
          <h1 style={s.heroTitle}>Meet the Tutors</h1>
          <p style={s.heroSub}>
            Every Brook Tutoring tutor is selected for subject expertise <em>and</em> the
            ability to connect with students, adapt their style, and build real confidence.
          </p>
        </div>
      </section>

      {/* Tutors grid */}
      <section style={s.section}>
        <div style={s.grid}>
          {TUTORS.map((t, i) => (
            <TutorCard key={t.name} tutor={t} delay={i * 140} />
          ))}
        </div>
      </section>

      {/* Join the team strip */}
      <section style={s.joinStrip}>
        <div style={s.joinInner}>
          <div>
            <h2 style={s.joinTitle}>Are you a tutor?</h2>
            <p style={s.joinSub}>We're always looking for passionate educators to join our team.</p>
          </div>
          <a href="/#contact" style={s.joinBtn}>Apply to Teach</a>
        </div>
      </section>

      <Footer />
    </>
  )
}

const s = {
  heroBanner: {
    background: 'var(--dark-2)',
    padding: '140px 32px 100px',
    position: 'relative', overflow: 'hidden',
  },
  heroOrb: {
    position: 'absolute', top: '-20%', right: '-5%',
    width: 500, height: 500, borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(34,197,94,0.15) 0%, transparent 65%)',
    pointerEvents: 'none',
  },
  heroContent: {
    position: 'relative', zIndex: 1,
    maxWidth: 640, margin: '0 auto', textAlign: 'center',
  },
  eyebrow: {
    display: 'inline-block', marginBottom: 16,
    fontFamily: 'var(--font-sans)', fontSize: '0.72rem',
    fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase',
    color: 'var(--green)',
  },
  heroTitle: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
    fontWeight: 700, fontStyle: 'italic',
    color: '#fff', lineHeight: 1.15, marginBottom: 20,
  },
  heroSub: {
    fontFamily: 'var(--font-sans)', fontSize: '1.05rem',
    color: 'rgba(255,255,255,0.5)', lineHeight: 1.8,
  },
  section: {
    background: 'var(--light)', padding: '80px 32px',
  },
  grid: {
    maxWidth: 1100, margin: '0 auto',
    display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28,
  },
  card: {
    background: '#fff',
    border: '1px solid var(--border)',
    borderRadius: 20, overflow: 'hidden',
    display: 'flex', flexDirection: 'column',
    boxShadow: 'var(--shadow)',
    transition: 'transform 0.22s, box-shadow 0.22s',
  },
  photoWrap: {
    position: 'relative', width: '100%',
    aspectRatio: '4/3', overflow: 'hidden',
    background: '#e2e8f0',
  },
  photo: {
    width: '100%', height: '100%',
    objectFit: 'cover', objectPosition: 'top center',
  },
  photoFallback: {
    display: 'none', position: 'absolute', inset: 0,
    alignItems: 'center', justifyContent: 'center',
  },
  fallbackInitial: {
    fontFamily: "'Dancing Script', cursive",
    fontSize: '5rem', fontWeight: 700, color: '#fff', opacity: 0.7,
  },
  roleBadge: {
    position: 'absolute', bottom: 12, left: 12,
    padding: '5px 12px',
    background: 'rgba(8,13,26,0.75)', backdropFilter: 'blur(8px)',
    borderRadius: 50,
    fontFamily: 'var(--font-sans)', fontSize: '0.72rem',
    fontWeight: 600, color: '#fff',
  },
  cardBody: {
    padding: '24px', display: 'flex', flexDirection: 'column', gap: 12, flex: 1,
  },
  name: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: '1.25rem', fontWeight: 700, color: 'var(--dark-2)',
  },
  grades: {
    fontFamily: 'var(--font-sans)', fontSize: '0.8rem',
    color: 'var(--muted)', marginTop: -4,
  },
  bio: {
    fontFamily: 'var(--font-sans)', fontSize: '0.875rem',
    color: 'var(--slate)', lineHeight: 1.7, flex: 1,
  },
  subjects: { display: 'flex', flexWrap: 'wrap', gap: 6 },
  subjectTag: {
    padding: '3px 10px', borderRadius: 50,
    fontFamily: 'var(--font-sans)', fontSize: '0.72rem', fontWeight: 600,
  },
  bookBtn: {
    display: 'block', textAlign: 'center',
    padding: '11px', borderRadius: 10,
    fontFamily: 'var(--font-sans)', fontSize: '0.875rem', fontWeight: 600,
    color: '#fff', textDecoration: 'none', marginTop: 4,
    transition: 'opacity 0.2s',
  },
  joinStrip: {
    background: 'var(--light)',
    borderTop: '1px solid var(--border)',
    padding: '60px 32px',
  },
  joinInner: {
    maxWidth: 1100, margin: '0 auto',
    display: 'flex', alignItems: 'center',
    justifyContent: 'space-between', flexWrap: 'wrap', gap: 24,
  },
  joinTitle: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: '1.6rem', fontWeight: 700, fontStyle: 'italic',
    color: 'var(--dark-2)', marginBottom: 6,
  },
  joinSub: {
    fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--muted)',
  },
  joinBtn: {
    padding: '12px 28px',
    background: 'linear-gradient(135deg, #22c55e, #16a34a)',
    color: '#fff', borderRadius: 50,
    fontFamily: 'var(--font-sans)', fontSize: '0.9rem', fontWeight: 600,
    textDecoration: 'none', whiteSpace: 'nowrap',
    boxShadow: '0 4px 16px rgba(34,197,94,0.3)',
  },
}
