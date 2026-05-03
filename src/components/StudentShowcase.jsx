import { useFadeIn } from '../hooks/useFadeIn.js'

export default function StudentShowcase() {
  const textRef = useFadeIn({ delay: 100, distance: 24 })

  return (
    <section style={styles.section}>
      {/* Left — text */}
      <div style={styles.textCol}>
        <p ref={textRef} style={styles.text}>
          ...Excuse us while we Show off our ex-mathematics students...
        </p>
      </div>

      {/* Right — background image */}
      <div style={styles.imageCol}>
        <img
          src="/engineering-bg.jpg"
          alt="Engineering blueprint"
          style={styles.img}
          onError={e => {
            e.target.parentElement.style.background =
              'linear-gradient(135deg, #0d2b3e 0%, #1a4a6e 50%, #0a1e30 100%)'
            e.target.style.display = 'none'
          }}
        />
        {/* Blueprint grid overlay */}
        <div style={styles.overlay} />
      </div>
    </section>
  )
}

const styles = {
  section: {
    display: 'flex',
    minHeight: 320,
    overflow: 'hidden',
  },
  textCol: {
    flex: '0 0 42%',
    background: '#faf5ef',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '60px 48px',
  },
  text: {
    fontFamily: "'Dancing Script', cursive",
    fontStyle: 'italic',
    fontWeight: 600,
    fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
    color: '#3db843',
    lineHeight: 1.5,
    textAlign: 'left',
  },
  imageCol: {
    flex: 1,
    position: 'relative',
    overflow: 'hidden',
    background: '#0d2b3e',
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: 0.85,
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    backgroundImage: `
      linear-gradient(rgba(100,180,220,0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(100,180,220,0.1) 1px, transparent 1px)
    `,
    backgroundSize: '40px 40px',
  },
}
