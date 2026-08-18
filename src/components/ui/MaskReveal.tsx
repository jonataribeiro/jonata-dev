import { useEffect, useRef, type ReactNode } from 'react'

type MaskRevealProps = {
  children: ReactNode
}

export function MaskReveal({ children }: MaskRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      element.classList.add('is-revealed')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            element.classList.add('is-revealed')
            observer.disconnect()
          }
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="mask-reveal">
      <div className="mask-reveal-inner">{children}</div>
    </div>
  )
}