import { useFadeIn } from '../hooks/useFadeIn.js'

const PILLARS = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
    color: '#22c55e',
    bg: 'rgba(34,197,94,0.1)',
    title: 'First Principles',
    body: 'We break every subject down to its core so students genuinely understand — not just memorise. That understanding lasts long after the exam.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    color: '#6366f1',
    bg: 'rgba(99,102,241,0.1)',
    title: 'Built Around Your Child',
    body: 'Every lesson is tailored to how your child thinks and learns. No two students are the same — so no two lesson plans should be either.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.1)',
    title: 'Trackable Progress',
    body: 'Regular check-ins, session notes, and honest progress reporting keep parents informed and students accountable — without extra pressure.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    color: '#ec4899',
    bg: 'rgba(236,72,153,0.1)',
    title: 'Patient, Encouraging Tutors',
    body: 'Our tutors are handpicked for both subject knowledge and their ability to build confidence. A student who believes in themselves learns faster.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    color: '#14b8a6',
    bg: 'rgba(20,184,166,0.1)',
    title: 'Proven Results',
    body: 'An average of 15% grade improvement across our matric students. Real outcomes from focused, consistent, personalised sessions.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    color: '#f97316',
    bg: 'rgba(249,115,22,0.1)',
    title: 'Menlyn, Pretoria Based',
    body: 'Conveniently located in Menlyn. We offer in-person and online sessions to suit your schedule and location anywhere in Pretoria.',
  },
]

function PillarCard({ pillar, delay }) {
  const ref = useFadeIn({ delay, distance: 24 })
  return (
    <div ref={ref} style={s.card}>
      <div style={s.iconWrap(pillar.bg, pillar.color)}>{pillar.icon}</div>
      <h3 style={s.cardTitle}>{pillar.title}</h3>
      <p style={s.cardBody}>{pillar.body}</p>
    </div>
  )
}

export default function WhatWeDo() {
  const headRef = useFadeIn({ delay: 0, distance: 16 })

  return (
    <section style={s.section}>
      <div style={s.inner}>
        <div ref={headRef} style={s.head}>
          <span style={s.eyebrow}>Why Brook Tutoring</span>
          <h2 style={s.title}>What sets us apart</h2>
          <p style={s.sub}>
            We don't just cover the work — we change how students relate to it.
          </p>
        </div>
        <div style={s.grid}>
          {PILLARS.map((p, i) => (
            <PillarCard key={p.title} pillar={p} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}

const s = {
  section: { background: '#fff', padding: '100px 32px' },
  inner: { maxWidth: 1100, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 56 },
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
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 24, width: '100%',
  },
  card: {
    padding: '32px 28px',
    background: 'var(--light)',
    border: '1px solid var(--border)',
    borderRadius: 16,
    display: 'flex', flexDirection: 'column', gap: 14,
    transition: 'transform 0.22s, box-shadow 0.22s',
  },
  iconWrap: (bg, color) => ({
    width: 56, height: 56, borderRadius: 14,
    background: bg, color: color,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0,
  }),
  cardTitle: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: '1.15rem', fontWeight: 700,
    color: 'var(--dark-2)',
  },
  cardBody: {
    fontFamily: 'var(--font-sans)', fontSize: '0.9rem',
    color: 'var(--muted)', lineHeight: 1.7,
  },
}
