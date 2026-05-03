import { useFadeIn } from '../hooks/useFadeIn.js'
import { Link } from 'react-router-dom'

const SUBJECTS = [
  {
    name: 'Mathematics',
    desc: 'Master the complexities of maths with our expert tutors. From algebra to calculus, we provide comprehensive support tailored to your learning pace and style.',
  },
  {
    name: 'Science',
    desc: 'Unleash your scientific curiosity with our engaging science tutors. Whether it\'s biology, chemistry, or physics, we make learning science exciting and understandable.',
  },
  {
    name: 'English',
    desc: 'Immerse yourself in the world of English. Our language tutors provide personalised lessons, helping you become fluent and confident in your English skills. Join us to enhance your communication skills.',
  },
  {
    name: 'Accounting',
    desc: 'Expert accounting guidance! Our tutors provide tailored support from basic bookkeeping to advanced financial analysis. Achieve your accounting goals with us today!',
  },
  {
    name: 'Afrikaans',
    desc: 'Learn Afrikaans with our dedicated tutors. We make mastering the language enjoyable and approachable, helping you build confidence in your skills!',
  },
]

function SubjectCard({ name, desc, delay }) {
  const ref = useFadeIn({ delay, distance: 20 })
  return (
    <div ref={ref} style={styles.card}>
      <h3 style={styles.cardTitle}>{name}</h3>
      <p style={styles.cardDesc}>{desc}</p>
      <Link to="/tutors" style={styles.btn}>Find a Tutor</Link>
    </div>
  )
}

export default function Subjects() {
  const titleRef = useFadeIn({ delay: 0, distance: 16 })

  return (
    <section style={styles.section} id="subjects">
      <div ref={titleRef} style={styles.titleRow}>
        <div style={styles.rule} />
        <h2 style={styles.title}>Subjects Offered</h2>
        <div style={styles.rule} />
      </div>

      {/* Row 1: 3 subjects */}
      <div style={styles.row3}>
        {SUBJECTS.slice(0, 3).map((s, i) => (
          <SubjectCard key={s.name} name={s.name} desc={s.desc} delay={i * 100} />
        ))}
      </div>

      <div style={styles.divider} />

      {/* Row 2: 2 subjects centred */}
      <div style={styles.row2}>
        {SUBJECTS.slice(3).map((s, i) => (
          <SubjectCard key={s.name} name={s.name} desc={s.desc} delay={i * 100} />
        ))}
      </div>
    </section>
  )
}

const styles = {
  section: {
    background: '#fff',
    padding: '80px 40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 0,
  },
  titleRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 24,
    width: '100%',
    maxWidth: 1100,
    marginBottom: 56,
  },
  title: {
    fontFamily: 'var(--font-serif)',
    fontWeight: 400,
    fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)',
    color: '#1a1a1a',
    whiteSpace: 'nowrap',
  },
  rule: {
    flex: 1,
    height: 1,
    background: '#ddd',
  },
  row3: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 48,
    width: '100%',
    maxWidth: 1100,
  },
  divider: {
    width: '100%',
    maxWidth: 1100,
    height: 1,
    background: '#e5ddd4',
    margin: '56px 0',
  },
  row2: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: 48,
    width: '100%',
    maxWidth: 740,
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: 16,
    padding: '8px 12px',
  },
  cardTitle: {
    fontFamily: 'var(--font-serif)',
    fontWeight: 400,
    fontSize: '1.5rem',
    color: '#1a1a1a',
  },
  cardDesc: {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.9rem',
    color: '#666',
    lineHeight: 1.7,
    flex: 1,
  },
  btn: {
    display: 'inline-block',
    padding: '11px 28px',
    background: '#3db843',
    color: '#fff',
    borderRadius: 50,
    fontFamily: "'Dancing Script', cursive",
    fontWeight: 600,
    fontSize: '1.05rem',
    textDecoration: 'none',
    marginTop: 4,
    transition: 'background 0.2s, transform 0.2s',
    boxShadow: '0 2px 8px rgba(61,184,67,0.25)',
  },
}
