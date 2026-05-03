import { useFadeIn } from '../hooks/useFadeIn.js'

const RESULTS = [
  { student: 'Anonymous 1', grade: 'End Grade 11',    initial: '42', final: '70', increase: '+28', pos: true  },
  { student: 'Anonymous 2', grade: 'Middle Grade 11', initial: '67', final: '85', increase: '+18', pos: true  },
  { student: 'Georgia',     grade: 'Start Grade 10',  initial: '85', final: '79', increase: '−6',  pos: false },
  { student: 'Anonymous 3', grade: 'Start Grade 11',  initial: '—',  final: '64', increase: '—',   pos: null  },
  { student: 'Sitha',       grade: 'Start Grade 10',  initial: '58', final: '71', increase: '+13', pos: true, highlight: true },
  { student: 'Tristan',     grade: 'Start Grade 11',  initial: '39', final: '75', increase: '+36', pos: true  },
]

export default function MatricResults() {
  const headRef  = useFadeIn({ delay: 0,   distance: 16 })
  const tableRef = useFadeIn({ delay: 180, distance: 24 })

  return (
    <section style={s.section}>
      {/* Subtle grid texture */}
      <div style={s.texture} />

      <div style={s.inner}>
        <div ref={headRef} style={s.head}>
          <span style={s.eyebrow}>Proof of concept</span>
          <h2 style={s.title}>Matric Results</h2>
          <p style={s.sub}>
            Real data from real students. An average improvement of{' '}
            <strong style={s.highlight}>15%</strong> across all matric learners.
          </p>
        </div>

        <div ref={tableRef} style={s.tableCard}>
          <table style={s.table}>
            <thead>
              <tr>
                {['Student', 'Grade Joined', 'Initial Mark', 'Final Mark', 'Improvement'].map(h => (
                  <th key={h} style={s.th}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {RESULTS.map((r, i) => (
                <tr key={i} style={s.tr(r.highlight, i)}>
                  <td style={{ ...s.td, fontWeight: 600, color: 'var(--dark-2)' }}>{r.student}</td>
                  <td style={s.td}>{r.grade}</td>
                  <td style={{ ...s.td, fontWeight: 600 }}>{r.initial}</td>
                  <td style={{ ...s.td, fontWeight: 600 }}>{r.final}</td>
                  <td style={s.td}>
                    <span style={s.badge(r.pos)}>{r.increase}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={s.footer}>
            <span style={s.footerText}>Average Improvement Across All Students</span>
            <span style={s.footerNum}>+15%</span>
          </div>
        </div>
      </div>
    </section>
  )
}

const s = {
  section: {
    background: 'var(--dark-2)',
    padding: '100px 32px',
    position: 'relative',
    overflow: 'hidden',
  },
  texture: {
    position: 'absolute', inset: 0, pointerEvents: 'none',
    backgroundImage: 'radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)',
    backgroundSize: '32px 32px',
  },
  inner: {
    position: 'relative', zIndex: 1,
    maxWidth: 900, margin: '0 auto',
    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 52,
  },
  head: { textAlign: 'center', maxWidth: 540 },
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
    color: '#fff', lineHeight: 1.2, marginBottom: 16,
  },
  sub: {
    fontFamily: 'var(--font-sans)', fontSize: '1.05rem',
    color: 'rgba(255,255,255,0.5)', lineHeight: 1.75,
  },
  highlight: { color: 'var(--green)', fontWeight: 700 },
  tableCard: {
    width: '100%',
    background: 'rgba(255,255,255,0.04)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 20,
    overflow: 'hidden',
  },
  table: { width: '100%', borderCollapse: 'collapse' },
  th: {
    padding: '14px 20px',
    fontFamily: 'var(--font-sans)', fontSize: '0.72rem',
    fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.4)',
    borderBottom: '1px solid rgba(255,255,255,0.07)',
    textAlign: 'left',
  },
  tr: (highlight, i) => ({
    background: highlight
      ? 'rgba(34,197,94,0.08)'
      : i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)',
    transition: 'background 0.2s',
    borderBottom: '1px solid rgba(255,255,255,0.05)',
  }),
  td: {
    padding: '15px 20px',
    fontFamily: 'var(--font-sans)', fontSize: '0.9rem',
    color: 'rgba(255,255,255,0.7)', textAlign: 'left',
  },
  badge: (pos) => ({
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    padding: '3px 12px', borderRadius: 50,
    fontFamily: 'var(--font-sans)', fontSize: '0.82rem', fontWeight: 700,
    background: pos === true
      ? 'rgba(34,197,94,0.15)'
      : pos === false
      ? 'rgba(239,68,68,0.15)'
      : 'rgba(255,255,255,0.07)',
    color: pos === true ? '#4ade80' : pos === false ? '#f87171' : 'rgba(255,255,255,0.35)',
  }),
  footer: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '18px 24px',
    borderTop: '1px solid rgba(255,255,255,0.08)',
    background: 'rgba(34,197,94,0.06)',
  },
  footerText: {
    fontFamily: 'var(--font-sans)', fontSize: '0.85rem',
    fontWeight: 600, color: 'rgba(255,255,255,0.6)',
  },
  footerNum: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: '1.8rem', fontWeight: 700,
    background: 'linear-gradient(135deg, #22c55e, #86efac)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
}
