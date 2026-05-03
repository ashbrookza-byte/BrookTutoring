import { useState } from 'react'
import { useFadeIn } from '../hooks/useFadeIn.js'

export default function BookingContact() {
  const [form, setForm] = useState({ name: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const titleRef = useFadeIn({ delay: 0,   distance: 16 })
  const leftRef  = useFadeIn({ delay: 100, distance: 24 })
  const rightRef = useFadeIn({ delay: 200, distance: 24 })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', subject: '', message: '' })
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section style={styles.section} id="contact">
      <div ref={titleRef} style={styles.titleWrap}>
        <h2 style={styles.bigTitle}>
          <span style={styles.regularTitle}>Book with </span>
          <span style={styles.scriptTitle}>Brook Tutoring </span>
          <span style={styles.regularTitle}>today!</span>
        </h2>
      </div>

      <div style={styles.inner}>
        {/* Left — contact form */}
        <div ref={leftRef} style={styles.left}>
          <h3 style={styles.sectionLabel}>Contact us</h3>
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Enter a first name</label>
              <input
                type="text"
                placeholder="First name"
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                style={styles.input}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Enter a last name</label>
              <input
                type="text"
                placeholder="Last name"
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Subject needed</label>
              <select
                value={form.subject}
                onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                style={styles.input}
              >
                <option value="">Select a subject…</option>
                <option>Mathematics</option>
                <option>Science (Biology / Chemistry / Physics)</option>
                <option>English</option>
                <option>Accounting</option>
                <option>Afrikaans</option>
                <option>Other</option>
              </select>
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Message</label>
              <textarea
                placeholder="Grade level, current challenges, availability…"
                rows={4}
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                style={{ ...styles.input, resize: 'vertical' }}
              />
            </div>
            <button type="submit" style={styles.submitBtn}>Send Message</button>
            {sent && (
              <p style={styles.success}>✓ Message sent! We'll be in touch within 24 hours.</p>
            )}
          </form>
        </div>

        {/* Right — contact details */}
        <div ref={rightRef} style={styles.right}>
          <ul style={styles.details}>
            <li style={styles.detailItem}>
              <a href="tel:+27835011142" style={styles.detailLink}>(+27) 83 501 1142</a>
            </li>
            <li style={styles.detailItem}>
              <a href="mailto:info@brooktutoring.com" style={styles.detailLink}>info@brooktutoring.com</a>
            </li>
            <li style={styles.detailItem}>
              <span style={styles.detailText}>Menlyn, Pretoria, South Africa</span>
            </li>
          </ul>

          <div style={styles.social}>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" style={styles.socialBtn}>Instagram</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" style={styles.socialBtn}>Facebook</a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" style={styles.socialBtn}>TikTok</a>
          </div>
        </div>
      </div>
    </section>
  )
}

const styles = {
  section: {
    background: '#faf5ef',
    padding: '80px 40px',
  },
  titleWrap: {
    textAlign: 'center',
    marginBottom: 60,
  },
  bigTitle: {
    fontFamily: 'var(--font-sans)',
    fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
    fontWeight: 400,
    color: '#1a1a1a',
  },
  regularTitle: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 400,
  },
  scriptTitle: {
    fontFamily: "'Dancing Script', cursive",
    fontWeight: 600,
  },
  inner: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 1fr',
    gap: 80,
    maxWidth: 1000,
    margin: '0 auto',
    alignItems: 'start',
  },
  left: {},
  sectionLabel: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    fontSize: '1.1rem',
    color: '#1a1a1a',
    marginBottom: 24,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 0,
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
    marginBottom: 18,
  },
  label: {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.8rem',
    color: '#888',
    fontWeight: 400,
  },
  input: {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.9rem',
    color: '#333',
    background: '#fff',
    border: '1px solid #d8d0c8',
    borderRadius: 4,
    padding: '10px 14px',
    outline: 'none',
    transition: 'border-color 0.2s',
    width: '100%',
  },
  submitBtn: {
    padding: '12px 28px',
    background: '#3db843',
    color: '#fff',
    border: 'none',
    borderRadius: 4,
    fontFamily: 'var(--font-sans)',
    fontSize: '0.9rem',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'background 0.2s',
    marginTop: 4,
  },
  success: {
    marginTop: 14,
    color: '#3db843',
    fontWeight: 600,
    fontSize: '0.9rem',
    textAlign: 'center',
  },
  right: {
    paddingTop: 40,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    marginBottom: 32,
  },
  detailItem: {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.95rem',
  },
  detailLink: {
    color: '#1a1a1a',
    textDecoration: 'none',
    transition: 'color 0.2s',
  },
  detailText: {
    color: '#666',
  },
  social: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 10,
  },
  socialBtn: {
    display: 'inline-block',
    padding: '7px 18px',
    border: '1px solid #ccc',
    borderRadius: 50,
    fontFamily: 'var(--font-sans)',
    fontSize: '0.8rem',
    color: '#666',
    textDecoration: 'none',
    transition: 'all 0.2s',
  },
}
