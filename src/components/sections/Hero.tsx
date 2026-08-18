import { useEffect, useRef } from 'react'
import { curriculoUrl, profile } from '../../data/profile'
import { Device } from '../ui/Device'
import { Magnetic } from '../ui/Magnetic'
import { Icon } from '../ui/Icon'

const streams = [
  { left: '10%', duration: 11, opacity: 0.5 },
  { left: '68%', duration: 8, opacity: 0.35 },
  { left: '88%', duration: 13, opacity: 0.45 },
]

const midDots = [
  { left: '22%', top: '30%', size: 4 },
  { left: '55%', top: '68%', size: 3 },
  { left: '80%', top: '18%', size: 3 },
  { left: '36%', top: '82%', size: 2 },
]

export function Hero() {
  const bgRef = useRef<HTMLDivElement>(null)
  const midRef = useRef<HTMLDivElement>(null)
  const fgRef = useRef<HTMLDivElement>(null)
  const tiltRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const bg = bgRef.current
    const mid = midRef.current
    const fg = fgRef.current
    if (!bg || !mid || !fg) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (window.matchMedia('(pointer: coarse)').matches) return

    let frame = 0
    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        const y = window.scrollY
        if (y < window.innerHeight * 1.1) {
          bg.style.transform = `translate3d(0, ${y * -0.06}px, 0)`
          mid.style.transform = `translate3d(0, ${y * -0.02}px, 0)`
          fg.style.transform = `translate3d(0, ${y * 0.025}px, 0)`
        }
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    const zone = tiltRef.current
    if (!zone) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (window.matchMedia('(pointer: coarse)').matches) return

    let frame = 0
    const onMove = (event: MouseEvent) => {
      const rect = zone.getBoundingClientRect()
      const px = (event.clientX - rect.left) / rect.width - 0.5
      const py = (event.clientY - rect.top) / rect.height - 0.5
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        zone.style.setProperty('--ry', `${px * 7}deg`)
        zone.style.setProperty('--rx', `${py * -5}deg`)
      })
    }
    const onLeave = () => {
      zone.style.setProperty('--ry', '0deg')
      zone.style.setProperty('--rx', '0deg')
    }

    zone.addEventListener('mousemove', onMove, { passive: true })
    zone.addEventListener('mouseleave', onLeave)
    return () => {
      zone.removeEventListener('mousemove', onMove)
      zone.removeEventListener('mouseleave', onLeave)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="hero-bg" ref={bgRef} aria-hidden="true">
        <div className="hero-atmosphere" />
        <div className="hero-grid" />
        <div className="hero-glow hero-glow-a" />
        <div className="hero-glow hero-glow-b" />
      </div>

      <div className="hero-mid" ref={midRef} aria-hidden="true">
        {streams.map((stream, index) => (
          <span
            key={index}
            className="stream"
            style={{
              left: stream.left,
              opacity: stream.opacity,
              animationDuration: `${stream.duration}s`,
            }}
          />
        ))}
        {midDots.map((dot, index) => (
          <span
            key={index}
            className="hero-dot"
            style={{
              left: dot.left,
              top: dot.top,
              width: dot.size,
              height: dot.size,
            }}
          />
        ))}
        <div className="hero-nodes">
          <svg viewBox="0 0 320 140" fill="none">
            <path className="node-line" d="M20 20 L120 40 L210 22 L300 60" />
            <path className="node-line" d="M120 40 L130 120 L260 110 L300 60" />
            <path className="node-line" d="M210 22 L260 110" />
            <circle className="node" cx="20" cy="20" r="3" />
            <circle className="node" cx="120" cy="40" r="3" />
            <circle className="node" cx="210" cy="22" r="3" />
            <circle className="node" cx="300" cy="60" r="3" />
            <circle className="node" cx="130" cy="120" r="3" />
            <circle className="node" cx="260" cy="110" r="3" />
          </svg>
        </div>
      </div>

      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="hero-eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            {profile.role}
          </p>
          <h1 id="hero-title" className="hero-title">
            <span className="hero-name-first">{profile.firstName.toUpperCase()}</span>
            <span className="hero-name-last">{profile.lastName.toUpperCase()}</span>
            <span className="name-cursor" aria-hidden="true">
              _
            </span>
          </h1>
          <p className="hero-headline">
            Backend <em>sólido</em>.
            <br />
            Dados <em>inteligentes</em>.
            <br />
            Soluções que <em>escalam</em>.
          </p>
          <p className="hero-description">{profile.intro}</p>
          <div className="hero-actions">
            <Magnetic>
              <a className="btn btn-primary" href="#projetos">
                Explorar projetos
                <span className="btn-arrow" aria-hidden="true">
                  →
                </span>
              </a>
            </Magnetic>
            <Magnetic>
              <a className="btn btn-ghost" href={curriculoUrl} download>
                Baixar currículo
                <Icon name="download" size={16} />
              </a>
            </Magnetic>
          </div>
          <p className="hero-meta">// jonataribeiro.dev</p>
        </div>

        <div className="hero-device" ref={fgRef}>
          <div className="hero-device-zone" ref={tiltRef}>
            <Device />
          </div>
        </div>
      </div>

      <div className="hero-trace" aria-hidden="true" />

      <a className="hero-scroll" href="#sobre">
        scroll
        <span className="hero-scroll-line" aria-hidden="true" />
      </a>
    </section>
  )
}