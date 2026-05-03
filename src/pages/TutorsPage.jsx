import { useFadeIn } from '../hooks/useFadeIn.js'
import Footer from '../components/Footer.jsx'

const TUTORS = [
  {
    name: 'Mitchell Brook',
    photo: '/tutors/mitchell.jpg',
    bio: 'Mitchell is the founder of Brook Tutoring. He specialises in maths tutoring, offering both one-on-one and group sessions. Mitchell\'s goal is to make learning clear, helping students build confidence and succeed in a supportive environment.',
    grades: 'Grades: 10 - 12',
    subjects: ['Mathematics'],
  },
  {
    name: 'Anna Jacobs',
    photo: '/tutors/anna.jpg',
    bio: 'Anna is a dedicated tutor committed to making Maths, Science, and Accounting accessible and enjoyable. She fosters a supportive learning environment that helps students build confidence while delivering engaging and effective lessons.',
    grades: 'Grade 8 - 11',
    subjects: ['Mathematics', 'Science', 'Accounting'],
  },
  {
    name: 'Shani Roodt',
    photo: '/tutors/shani.jpg',
    bio: 'Shani is a talented tutor in Maths, Afrikaans, and English. Her gentle approach fosters a nurturing environment, helping students thrive. With dedication and a personal connection, Shani guides learners through complex equations and language mastery.',
    grades: 'Grades: 6 - 10',
    subjects: ['Mathematics', 'Afrikaans', 'English'],
  },
]

function TutorCard({ tutor, delay }) {
  const ref = useFadeIn({ delay, distance: 24 })
  return (
    <div ref={ref} style={styles.card}>
      <div style={styles.photoWrap}>
        <img
          src={tutor.photo}
          alt={tutor.name}
          style={styles.photo}
          onError={e => {
            e.target.style.display = 'none'
            e.target.nextSibling.style.display = 'flex'
          }}
        />
        <div style={styles.photoFallback}>
          <span style={styles.photoInitial}>{tutor.name[0]}</span>
        </div>
      </div>
      <h3 style={styles.name}>{tutor.name}</h3>
      <p style={styles.bio}>{tutor.bio}</p>
      <p style={styles.grades}>{tutor.grades}</p>
      <div style={styles.tags}>
        {tutor.subjects.map(s => (
          <span key={s} style={styles.tag}>{s}</span>
        ))}
      </div>
    </div>
  )
}

export default function TutorsPage() {
  const titleRef = useFadeIn({ delay: 0, distance: 16 })

  return (
    <>
      <div style={styles.page}>
        {/* Mathematics Tutors */}
        <section style={styles.section}>
          <div ref={titleRef} style={styles.titleWrap}>
            <h2 style={styles.sectionTitle}>Mathematics Tutors</h2>
            <div style={styles.rule} />
          </div>

          <div style={styles.grid}>
            {TUTORS.map((t, i) => (
              <TutorCard key={t.name} tutor={t} delay={i * 120} />
            ))}
          </div>
        </section>

        {/* CTA strip */}
        <section style={styles.cta}>
          <p style={styles.ctaText}>Want to book a session with one of our tutors?</p>
          <a href="/#contact" style={styles.ctaBtn}>Book Now</a>
        </section>
      </div>
      <Footer />
    </>
  )
}

const styles = {
  page: {
    background: '#faf5ef',
    minHeight: '100vh',
    paddingTop: 68,
  },
  section: {
    padding: '80px 40px',
    maxWidth: 1160,
    margin: '0 auto',
  },
  titleWrap: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 16,
    marginBottom: 56,
  },
  sectionTitle: {
    fontFamily: "'Dancing Script', cursive",
    fontWeight: 600,
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    color: '#1a1a1a',
    textAlign: 'center',
  },
  rule: {
    width: '100%',
    maxWidth: 560,
    height: 1,
    background: '#ddd',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 40,
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: 14,
  },
  photoWrap: {
    width: '100%',
    aspectRatio: '3/4',
    borderRadius: 4,
    overflow: 'hidden',
    background: '#e5ddd4',
    position: 'relative',
  },
  photo: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'top',
  },
  photoFallback: {
    display: 'none',
    position: 'absolute',
    inset: 0,
    alignItems: 'center',
    justifyContent: 'center',
    background: '#c8d8c8',
  },
  photoInitial: {
    fontFamily: "'Dancing Script', cursive",
    fontSize: '4rem',
    color: '#3db843',
    fontWeight: 700,
  },
  name: {
    fontFamily: 'var(--font-serif)',
    fontWeight: 400,
    fontSize: '1.3rem',
    color: '#1a1a1a',
  },
  bio: {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.875rem',
    color: '#666',
    lineHeight: 1.7,
  },
  grades: {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.85rem',
    color: '#888',
    marginTop: 'auto',
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 6,
    justifyContent: 'center',
  },
  tag: {
    padding: '3px 12px',
    background: 'rgba(61,184,67,0.12)',
    borderRadius: 50,
    fontSize: '0.75rem',
    color: '#2a9e30',
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
  },
  cta: {
    background: '#0d2b3e',
    padding: '60px 40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 24,
  },
  ctaText: {
    fontFamily: 'var(--font-serif)',
    fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
    fontStyle: 'italic',
    color: 'rgba(255,255,255,0.85)',
    textAlign: 'center',
  },
  ctaBtn: {
    padding: '12px 36px',
    background: '#3db843',
    color: '#fff',
    borderRadius: 50,
    fontFamily: 'var(--font-sans)',
    fontSize: '0.95rem',
    fontWeight: 500,
    textDecoration: 'none',
    transition: 'background 0.2s',
  },
}
