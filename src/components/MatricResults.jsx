import { useFadeIn } from '../hooks/useFadeIn.js'

const RESULTS = [
  { student: 'Anonymous 1', grade: 'End Grade 11',   initial: '42', final: '70', increase: '28',  positive: true  },
  { student: 'Anonymous 2', grade: 'Middle Grade 11', initial: '67', final: '85', increase: '18',  positive: true  },
  { student: 'Georgia',     grade: 'Start Grade 10',  initial: '85', final: '79', increase: '-6',  positive: false },
  { student: 'Anonymous 3', grade: 'Start Grade 11',  initial: '-',  final: '64', increase: '-',   positive: null  },
  { student: 'Sitha',       grade: 'Start Grade 10',  initial: '58', final: '71', increase: '13',  positive: true, highlight: true },
  { student: 'Tristan',     grade: 'Start Grade 11',  initial: '39', final: '75', increase: '36',  positive: true  },
]

export default function MatricResults() {
  const titleRef = useFadeIn({ delay: 0,   distance: 20 })
  const tableRef = useFadeIn({ delay: 150, distance: 24 })

  return (
    <section style={styles.section}>
      {/* Watermark */}
      <span style={styles.watermark} aria-hidden="true">MATRIC RESULTS</span>

      <div ref={titleRef} style={styles.titleRow}>
        <h2 style={styles.title}>Matric Results</h2>
      </div>

      <div ref={tableRef} style={styles.tableWrap}>
        <table style={styles.table}>
          <thead>
            <tr style={styles.headerRow}>
              <th style={styles.th}>STUDENT</th>
              <th style={styles.th}>GRADE JOINED</th>
              <th style={styles.th}>INITIAL MARK %</th>
              <th style={styles.th}>FINAL MATRIC MARK %</th>
              <th style={styles.th}>INCREASE %</th>
            </tr>
          </thead>
          <tbody>
            {RESULTS.map((row, i) => (
              <tr key={i} style={styles.row(row.highlight)}>
                <td style={styles.td}>{row.student}</td>
                <td style={styles.td}>{row.grade}</td>
                <td style={{ ...styles.td, fontWeight: 700 }}>{row.initial}</td>
                <td style={{ ...styles.td, fontWeight: 700 }}>{row.final}</td>
                <td style={{
                  ...styles.td,
                  fontWeight: 700,
                  color: row.positive === true ? '#3db843' : row.positive === false ? '#cc3333' : '#888',
                }}>
                  {row.positive === true ? row.increase : row.increase}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={5} style={styles.footerCell}>Average Increase: 15%!</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  )
}

const styles = {
  section: {
    background: '#faf5ef',
    padding: '80px 24px',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  watermark: {
    position: 'absolute',
    top: 32,
    left: '50%',
    transform: 'translateX(-50%)',
    fontFamily: 'var(--font-sans)',
    fontWeight: 900,
    fontSize: 'clamp(3rem, 8vw, 8rem)',
    color: 'rgba(0,0,0,0.055)',
    whiteSpace: 'nowrap',
    letterSpacing: '0.1em',
    userSelect: 'none',
    pointerEvents: 'none',
  },
  titleRow: {
    marginBottom: 40,
    position: 'relative',
    zIndex: 1,
  },
  title: {
    fontFamily: "'Dancing Script', cursive",
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: 600,
    color: '#1a1a1a',
    textAlign: 'center',
  },
  tableWrap: {
    width: '100%',
    maxWidth: 860,
    borderRadius: 12,
    overflow: 'hidden',
    boxShadow: '0 4px 32px rgba(0,0,0,0.10)',
    position: 'relative',
    zIndex: 1,
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    background: '#fff',
    fontSize: '0.9rem',
  },
  headerRow: {
    background: '#2a7a7d',
  },
  th: {
    padding: '14px 16px',
    color: '#fff',
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    fontSize: '0.78rem',
    letterSpacing: '0.04em',
    textAlign: 'center',
    borderRight: '1px solid rgba(255,255,255,0.15)',
  },
  row: (highlight) => ({
    background: highlight ? '#d6eeee' : 'transparent',
    borderBottom: '1px solid #eee',
    transition: 'background 0.2s',
  }),
  td: {
    padding: '13px 16px',
    textAlign: 'center',
    fontFamily: 'var(--font-sans)',
    fontSize: '0.9rem',
    color: '#333',
  },
  footerCell: {
    padding: '14px 16px',
    textAlign: 'center',
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    fontSize: '0.9rem',
    color: '#333',
    borderTop: '2px solid #eee',
    background: '#fafafa',
  },
}
