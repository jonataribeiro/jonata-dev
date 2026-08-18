import { useEffect, useRef, type ReactNode } from 'react'

type MagneticProps = {
  children: ReactNode
}

export function Magnetic({ children }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = 0
    const onMove = (event: PointerEvent) => {
      const rect = element.getBoundingClientRect()
      const x = event.clientX - (rect.left + rect.width / 2)
      const y = event.clientY - (rect.top + rect.height / 2)
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        element.style.transform = `translate(${x * 0.14}px, ${y * 0.18}px)`
      })
    }
    const onLeave = () => {
      element.style.transform = 'translate(0, 0)'
    }

    element.addEventListener('pointermove', onMove, { passive: true })
    element.addEventListener('pointerleave', onLeave)
    return () => {
      element.removeEventListener('pointermove', onMove)
      element.removeEventListener('pointerleave', onLeave)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div ref={ref} className="magnetic">
      {children}
    </div>
  )
}