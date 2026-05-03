import { useState } from 'react'
import { useFadeIn } from '../hooks/useFadeIn.js'

const CONTACT_ITEMS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.59a16 16 0 0 0 5.5 5.5l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/>
      </svg>
    ),
    label: 'Phone',
    value: '(+27) 83 501 1142',
    href: 'tel:+27835011142',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'Email',
    value: 'info@brooktutoring.com',
    href: 'mailto:info@brooktutoring.com',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Location',
    value: 'Menlyn, Pretoria, South Africa',
    href: null,
  },
]

export default function BookingContact() {
  const [form, setForm] = useState({ firstName: '', lastName: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const leftRef  = useFadeIn({ delay: 0,   distance: 24 })
  const rightRef = useFadeIn({ delay: 150, distance: 24 })

  const set = (key) => (e) => setForm(f => ({ ...f, [key]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSent(true)
      setForm({ firstName: '', lastName: '', subject: '', message: '' })
      setTimeout(() => setSent(false), 6000)
    }, 900)
  }

  return (
    <section style={s.section} id="contact">
      {/* Orb */}
      <div style={s.orb} />
      <div style={s.texture} />

      <div style={s.inner}>
        {/* Left */}
        <div ref={leftRef} style={s.left}>
          <span style={s.eyebrow}>Get in touch</span>
          <h2 style={s.title}>
            Ready to <em style={s.titleEm}>get started?</em>
          </h2>
          <p style={s.sub}>
            Tell us your child's grade, the subject they need help with, and we'll match
            them with the perfect tutor — usually within 24 hours.
          </p>

          <div style={s.contactList}>
            {CONTACT_ITEMS.map((item) => (
              <div key={item.label} style={s.contactItem}>
                <div style={s.contactIcon}>{item.icon}</div>
                <div>
                  <p style={s.contactLabel}>{item.label}</p>
                  {item.href
                    ? <a href={item.href} style={s.contactValue}>{item.value}</a>
                    : <p style={s.contactValue}>{item.value}</p>
                  }
                </div>
              </div>
            ))}
          </div>

          <div style={s.social}>
            {['Instagram', 'Facebook', 'TikTok'].map(name => (
              <a key={name} href="#" style={s.socialBtn}>{name}</a>
            ))}
          </div>
        </div>

        {/* Right — form card */}
        <div ref={rightRef} style={s.formCard}>
          <h3 style={s.formTitle}>Send us a message</h3>
          <form onSubmit={handleSubmit} style={s.form}>
            <div style={s.row}>
              <div style={s.group}>
                <label style={s.label}>First name</label>
                <input style={s.input} placeholder="Jane" value={form.firstName} onChange={set('firstName')} required />
              </div>
              <div style={s.group}>
                <label style={s.label}>Last name</label>
                <input style={s.input} placeholder="Smith" value={form.lastName} onChange={set('lastName')} />
              </div>
            </div>
            <div style={s.group}>
              <label style={s.label}>Subject needed</label>
              <select style={s.input} value={form.subject} onChange={set('subject')}>
                <option value="">Select a subject…</option>
                <option>Mathematics</option>
                <option>Science (Biology / Chemistry / Physics)</option>
                <option>English</option>
                <option>Accounting</option>
                <option>Afrikaans</option>
                <option>Other</option>
              </select>
            </div>
            <div style={s.group}>
              <label style={s.label}>Tell us more</label>
              <textarea
                style={{ ...s.input, resize: 'vertical' }}
                rows={4}
                placeholder="Grade level, current challenges, your availability…"
                value={form.message}
                onChange={set('message')}
              />
            </div>
            <button type="submit" style={s.submitBtn} disabled={loading}>
              {loading ? 'Sending…' : 'Send Message'}
              {!loading && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              )}
            </button>
            {sent && (
              <div style={s.success}>
                ✓ Message received! We'll be in touch within 24 hours.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

const s = {
  section: {
    background: 'var(--dark-2)',
    padding: '100px 32px',
    position: 'relative', overflow: 'hidden',
  },
  orb: {
    position: 'absolute', top: '-20%', right: '-10%',
    width: 600, height: 600, borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 65%)',
    pointerEvents: 'none',
  },
  texture: {
    position: 'absolute', inset: 0, pointerEvents: 'none',
    backgroundImage: 'radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)',
    backgroundSize: '32px 32px',
  },
  inner: {
    position: 'relative', zIndex: 1,
    maxWidth: 1100, margin: '0 auto',
    display: 'grid', gridTemplateColumns: '1fr 1.1fr',
    gap: 72, alignItems: 'start',
  },
  left: { display: 'flex', flexDirection: 'column', gap: 32 },
  eyebrow: {
    display: 'inline-block',
    fontFamily: 'var(--font-sans)', fontSize: '0.72rem',
    fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase',
    color: 'var(--green)',
  },
  title: {
    fontFamily: "'DM Serif Display', Georgia, serif",
    fontSize: 'clamp(2rem, 4vw, 2.8rem)',
    fontWeight: 700, color: '#fff', lineHeight: 1.2,
  },
  titleEm: { fontStyle: 'italic', color: 'var(--green)' },
  sub: {
    fontFamily: 'var(--font-sans)', fontSize: '1rem',
    color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginTop: -8,
  },
  contactList: { display: 'flex', flexDirection: 'column', gap: 20 },
  contactItem: { display: 'flex', alignItems: 'flex-start', gap: 16 },
  contactIcon: {
    width: 44, height: 44, borderRadius: 12, flexShrink: 0,
    background: 'rgba(34,197,94,0.12)', color: 'var(--green)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  contactLabel: {
    fontFamily: 'var(--font-sans)', fontSize: '0.75rem',
    color: 'rgba(255,255,255,0.35)', marginBottom: 3, fontWeight: 500,
    textTransform: 'uppercase', letterSpacing: '0.08em',
  },
  contactValue: {
    fontFamily: 'var(--font-sans)', fontSize: '0.95rem',
    color: 'rgba(255,255,255,0.8)', fontWeight: 400, textDecoration: 'none',
  },
  social: { display: 'flex', gap: 10, flexWrap: 'wrap' },
  socialBtn: {
    padding: '7px 18px',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: 50,
    fontFamily: 'var(--font-sans)', fontSize: '0.8rem',
    color: 'rgba(255,255,255,0.45)',
    textDecoration: 'none',
    transition: 'border-color 0.2s, color 0.2s',
  },
  formCard: {
    background: '#fff', borderRadius: 20,
    padding: '40px 36px',
    boxShadow: '0 24px 64px rgba(0,0,0,0.3)',
  },
  formTitle: {
    fontFamily: "'DM Serif Display', Georgia, serif",
    fontSize: '1.4rem', fontWeight: 700,
    color: 'var(--dark-2)', marginBottom: 28,
  },
  form: { display: 'flex', flexDirection: 'column', gap: 18 },
  row: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 },
  group: { display: 'flex', flexDirection: 'column', gap: 6 },
  label: {
    fontFamily: 'var(--font-sans)', fontSize: '0.8rem',
    fontWeight: 600, color: 'var(--slate)',
  },
  input: {
    fontFamily: 'var(--font-sans)', fontSize: '0.9rem',
    color: 'var(--dark-3)', background: 'var(--light)',
    border: '1.5px solid var(--border)', borderRadius: 10,
    padding: '11px 14px', outline: 'none', width: '100%',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  },
  submitBtn: {
    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
    padding: '13px 28px',
    background: 'linear-gradient(135deg, #22c55e, #16a34a)',
    color: '#fff', border: 'none', borderRadius: 50,
    fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 600,
    cursor: 'pointer', width: '100%', marginTop: 4,
    boxShadow: '0 4px 20px rgba(34,197,94,0.3)',
    transition: 'opacity 0.2s',
  },
  success: {
    background: 'rgba(34,197,94,0.1)', color: '#16a34a',
    border: '1px solid rgba(34,197,94,0.25)',
    borderRadius: 10, padding: '12px 16px',
    fontFamily: 'var(--font-sans)', fontSize: '0.875rem', fontWeight: 600,
    textAlign: 'center',
  },
}
