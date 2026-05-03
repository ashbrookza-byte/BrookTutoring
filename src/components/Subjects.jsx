import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useFadeIn } from '../hooks/useFadeIn.js'

const SUBJECTS = [
  {
    name: 'Mathematics',
    icon: '∑',
    color: '#22c55e', bg: 'rgba(34,197,94,0.08)', border: 'rgba(34,197,94,0.2)',
    grades: 'Grade 6 – 12',
    desc: 'From number sense to calculus. We build genuine mathematical confidence through clear explanation, worked examples, and patient practice.',
    tags: ['Algebra', 'Geometry', 'Trigonometry', 'Calculus'],
  },
  {
    name: 'Science',
    icon: '⚗',
    color: '#6366f1', bg: 'rgba(99,102,241,0.08)', border: 'rgba(99,102,241,0.2)',
    grades: 'Grade 8 – 12',
    desc: 'Biology, chemistry, and physics taught through real-world context. We make abstract concepts concrete and testable.',
    tags: ['Biology', 'Chemistry', 'Physics'],
  },
  {
    name: 'English',
    icon: '✍',
    color: '#f97316', bg: 'rgba(249,115,22,0.08)', border: 'rgba(249,115,22,0.2)',
    grades: 'Grade 4 – 12',
    desc: 'Language fluency, essay structure, comprehension, and oral work. Clear communication is a life skill — we teach it properly.',
    tags: ['Essays', 'Comprehension', 'Language', 'Oral'],
  },
  {
    name: 'Accounting',
    icon: '₿',
    color: '#14b8a6', bg: 'rgba(20,184,166,0.08)', border: 'rgba(20,184,166,0.2)',
    grades: 'Grade 8 – 12',
    desc: 'From basic bookkeeping to financial statements and analysis. We make the numbers logical, not intimidating.',
    tags: ['Bookkeeping', 'Statements', 'Analysis'],
  },
  {
    name: 'Afrikaans',
    icon: 'Aa',
    color: '#f59e0b', bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.2)',
    grades: 'Grade 4 – 12',
    desc: 'First and second language Afrikaans — grammar, comprehension, writing, and oral preparation covered with patience and care.',
    tags: ['Grammar', 'Comprehension', 'Writing', 'Oral'],
  },
]

function SubjectCard({ s: subj, delay }) {
  const [hovered, setHovered] = useState(false)
  const ref = useFadeIn({ delay, distance: 20 })

  return (
    <div
      ref={ref}
      style={{
        ...styles.card,
        borderColor: hovered ? subj.border : 'var(--border)',
        transform: hovered ? 'translateY(-6px)' : 'none',
        boxShadow: hovered ? `0 16px 40px rgba(0,0,0,0.10)` : 'var(--shadow)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ ...styles.iconBadge, background: subj.bg, color: subj.color }}>
        {subj.icon}
      </div>
      <div style={styles.cardTop}>
        <h3 style={{ ...styles.cardName, color: hovered ? subj.color : 'var(--dark-2)' }}>
          {subj.name}
        </h3>
        <span style={styles.grades}>{subj.grades}</span>
      </div>
      <p style={styles.desc}>{subj.desc}</p>
      <div style={styles.tags}>
        {subj.tags.map(t => (
          <span key={t} style={{ ...styles.tag, background: subj.bg, color: subj.color }}>
            {t}
          </span>
        ))}
      </div>
      <Link
        to="/tutors"
        style={{
          ...styles.link,
          color: subj.color,
          borderColor: subj.border,
          background: hovered ? subj.bg : 'transparent',
        }}
      >
        Find a Tutor →
      </Link>
    </div>
  )
}

export default function Subjects() {
  const headRef = useFadeIn({ delay: 0, distance: 16 })

  return (
    <section style={styles.section} id="subjects">
      <div style={styles.inner}>
        <div ref={headRef} style={styles.head}>
          <span style={styles.eyebrow}>What we teach</span>
          <h2 style={styles.title}>Subjects we cover</h2>
          <p style={styles.sub}>
            Expert tutors matched to your child's curriculum, learning pace, and style.
          </p>
        </div>

        <div style={styles.grid}>
          {SUBJECTS.map((subj, i) => (
            <SubjectCard key={subj.name} s={subj} delay={i * 90} />
          ))}
          {/* CTA card */}
          <div style={styles.ctaCard}>
            <h3 style={styles.ctaTitle}>Don't see your subject?</h3>
            <p style={styles.ctaBody}>
              We're growing our team. Reach out and we'll find the right fit for your child.
            </p>
            <a href="/#contact" style={styles.ctaBtn}>Get in touch</a>
          </div>
        </div>
      </div>
    </section>
  )
}

const styles = {
  section: { background: 'var(--light)', padding: '100px 32px' },
  inner: { maxWidth: 1100, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 56 },
  head: { textAlign: 'center', maxWidth: 520 },
  eyebrow: {
    display: 'inline-block',
    fontFamily: 'var(--font-sans)', fontSize: '0.72rem',
    fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase',
    color: 'var(--green)', marginBottom: 14,
  },
  title: {
    fontFamily: "'DM Serif Display', Georgia, serif",
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
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 24, width: '100%',
  },
  card: {
    background: '#fff', border: '1px solid var(--border)',
    borderRadius: 16, padding: '32px 28px',
    display: 'flex', flexDirection: 'column', gap: 16,
    transition: 'transform 0.22s, box-shadow 0.22s, border-color 0.22s',
    cursor: 'default',
  },
  iconBadge: {
    width: 52, height: 52, borderRadius: 12,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '1.5rem', fontWeight: 700, flexShrink: 0,
  },
  cardTop: { display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 8 },
  cardName: {
    fontFamily: "'DM Serif Display', Georgia, serif",
    fontSize: '1.25rem', fontWeight: 700, transition: 'color 0.22s',
  },
  grades: {
    fontFamily: 'var(--font-sans)', fontSize: '0.75rem',
    color: 'var(--muted)', whiteSpace: 'nowrap',
  },
  desc: {
    fontFamily: 'var(--font-sans)', fontSize: '0.875rem',
    color: 'var(--muted)', lineHeight: 1.7, flex: 1,
  },
  tags: { display: 'flex', flexWrap: 'wrap', gap: 6 },
  tag: {
    padding: '3px 10px', borderRadius: 50,
    fontFamily: 'var(--font-sans)', fontSize: '0.72rem', fontWeight: 600,
  },
  link: {
    display: 'inline-flex', alignItems: 'center',
    padding: '9px 18px', borderRadius: 8,
    border: '1.5px solid',
    fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 600,
    textDecoration: 'none', transition: 'background 0.2s',
    alignSelf: 'flex-start', marginTop: 'auto',
  },
  ctaCard: {
    background: 'var(--dark-2)', borderRadius: 16, padding: '32px 28px',
    display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 16,
  },
  ctaTitle: {
    fontFamily: "'DM Serif Display', Georgia, serif",
    fontSize: '1.25rem', fontWeight: 700,
    color: '#fff',
  },
  ctaBody: {
    fontFamily: 'var(--font-sans)', fontSize: '0.875rem',
    color: 'rgba(255,255,255,0.5)', lineHeight: 1.7,
  },
  ctaBtn: {
    display: 'inline-flex', alignItems: 'center',
    padding: '10px 22px',
    background: 'linear-gradient(135deg, #22c55e, #16a34a)',
    color: '#fff', borderRadius: 50,
    fontFamily: 'var(--font-sans)', fontSize: '0.875rem', fontWeight: 600,
    textDecoration: 'none', alignSelf: 'flex-start',
    boxShadow: '0 4px 16px rgba(34,197,94,0.3)',
  },
}
