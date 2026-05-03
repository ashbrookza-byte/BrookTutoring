import { useFadeIn } from '../hooks/useFadeIn.js'

export default function Hero() {
  const titleRef  = useFadeIn({ delay: 100, distance: 20 })
  const subRef    = useFadeIn({ delay: 250, distance: 20 })
  const btnsRef   = useFadeIn({ delay: 400, distance: 20 })

  return (
    <section style={styles.section}>
      {/* Left — math tree image */}
      <div style={styles.imageCol}>
        <img
          src="/math-tree.png"
          alt="Decorative mathematics tree"
          style={styles.treeImg}
          onError={e => { e.target.style.display = 'none' }}
        />
        {/* Fallback decorative element shown when image is missing */}
        <div style={styles.treeFallback}>
          <svg viewBox="0 0 300 480" width="280" height="450" xmlns="http://www.w3.org/2000/svg" opacity="0.25">
            <line x1="150" y1="480" x2="150" y2="280" stroke="#5c3d1a" strokeWidth="14" strokeLinecap="round"/>
            <line x1="150" y1="380" x2="90"  y2="310" stroke="#5c3d1a" strokeWidth="9"  strokeLinecap="round"/>
            <line x1="150" y1="350" x2="210" y2="280" stroke="#5c3d1a" strokeWidth="9"  strokeLinecap="round"/>
            <line x1="150" y1="320" x2="70"  y2="240" stroke="#5c3d1a" strokeWidth="7"  strokeLinecap="round"/>
            <line x1="150" y1="310" x2="230" y2="230" stroke="#5c3d1a" strokeWidth="7"  strokeLinecap="round"/>
            <line x1="150" y1="300" x2="120" y2="200" stroke="#5c3d1a" strokeWidth="5"  strokeLinecap="round"/>
            <line x1="150" y1="290" x2="180" y2="180" stroke="#5c3d1a" strokeWidth="5"  strokeLinecap="round"/>
            <line x1="150" y1="280" x2="150" y2="160" stroke="#5c3d1a" strokeWidth="5"  strokeLinecap="round"/>
            {[
              [60,220],[90,190],[120,160],[150,140],[180,160],[210,190],[240,210],
              [70,170],[110,130],[150,110],[190,130],[230,170],
              [100,100],[150,80],[200,100],
            ].map(([cx,cy],i) => (
              <circle key={i} cx={cx} cy={cy} r={i < 7 ? 22 : i < 12 ? 18 : 14}
                fill={['#3db843','#2ea130','#4ac94f','#5cd461'][i % 4]} opacity="0.7"/>
            ))}
            {/* Math symbols scattered */}
            {['x²','∫','π','√','∑','θ','dy/dx','sin','cos'].map((sym,i) => (
              <text key={i} x={40 + (i*28) % 220} y={80 + (i*53) % 320}
                fontSize="11" fill="#e85c1a" fontFamily="serif" opacity="0.6"
                transform={`rotate(${-15 + i*8}, ${40 + (i*28) % 220}, ${80 + (i*53) % 320})`}>
                {sym}
              </text>
            ))}
          </svg>
        </div>
      </div>

      {/* Right — text content */}
      <div style={styles.textCol}>
        {/* Large watermark background text */}
        <span style={styles.watermark} aria-hidden="true">BROOKTUTORING</span>

        <div style={styles.content}>
          <h1 ref={titleRef} style={styles.scriptTitle}>Brook Tutoring</h1>

          <div ref={subRef} style={styles.taglineWrap}>
            <p style={styles.tagline}>
              HELPING STUDENTS <strong style={styles.taglineBold}>GROW</strong> AND{' '}
              <strong style={styles.taglineBold}>THRIVE</strong>
            </p>
            <p style={styles.tagline}>SINCE 2020</p>
          </div>

          <div ref={btnsRef} style={styles.buttons}>
            <a href="/#contact" style={styles.btn}>Get in touch <span style={styles.arrow}>›</span></a>
            <a href="/#contact" style={styles.btn}>Book a lesson <span style={styles.arrow}>›</span></a>
            <a href="/#courses" style={styles.btn}>Enrol in a Course <span style={styles.arrow}>›</span></a>
          </div>
        </div>
      </div>
    </section>
  )
}

const styles = {
  section: {
    display: 'flex',
    alignItems: 'stretch',
    minHeight: '100vh',
    paddingTop: 68,
    background: '#faf5ef',
    overflow: 'hidden',
  },
  imageCol: {
    flex: '0 0 44%',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    padding: '32px 0 0 40px',
    position: 'relative',
  },
  treeImg: {
    width: '100%',
    maxWidth: 520,
    height: 'auto',
    objectFit: 'contain',
    objectPosition: 'bottom',
  },
  treeFallback: {
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  textCol: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    padding: '60px 60px 60px 20px',
  },
  watermark: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontFamily: 'var(--font-sans)',
    fontWeight: 800,
    fontSize: 'clamp(3.5rem, 8vw, 8rem)',
    color: 'rgba(0,0,0,0.055)',
    whiteSpace: 'nowrap',
    letterSpacing: '0.05em',
    userSelect: 'none',
    pointerEvents: 'none',
    zIndex: 0,
  },
  content: {
    position: 'relative',
    zIndex: 1,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 28,
  },
  scriptTitle: {
    fontFamily: "'Dancing Script', cursive",
    fontWeight: 600,
    fontSize: 'clamp(3rem, 6vw, 5.5rem)',
    color: '#1a1a1a',
    lineHeight: 1.1,
  },
  taglineWrap: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
  tagline: {
    fontFamily: 'var(--font-sans)',
    fontSize: 'clamp(0.65rem, 1.1vw, 0.78rem)',
    letterSpacing: '0.22em',
    color: '#888',
    fontWeight: 300,
    textAlign: 'center',
  },
  taglineBold: {
    fontWeight: 700,
    color: '#555',
  },
  buttons: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 12,
    justifyContent: 'center',
    marginTop: 8,
  },
  btn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    padding: '11px 22px',
    border: '1.5px solid #3db843',
    borderRadius: 6,
    fontFamily: 'var(--font-sans)',
    fontSize: '0.875rem',
    fontWeight: 400,
    color: '#3db843',
    background: 'transparent',
    textDecoration: 'none',
    transition: 'background 0.2s, color 0.2s',
    cursor: 'pointer',
  },
  arrow: {
    fontSize: '1.1rem',
    lineHeight: 1,
  },
}
