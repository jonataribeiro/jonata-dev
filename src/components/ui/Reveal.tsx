import { createElement, useEffect, useRef, type ElementType, type ReactNode } from 'react'

export type RevealDirection = 'up' | 'left' | 'right' | 'fade'

type RevealProps = {
  children: ReactNode
  delay?: number
  as?: ElementType
  className?: string
  direction?: RevealDirection
  exit?: boolean
}

export function Reveal({
  children,
  delay = 0,
  as = 'div',
  className = '',
  direction = 'up',
  exit = false,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)

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
          const target = entry.target
          const rect = entry.boundingClientRect
          if (entry.isIntersecting) {
            target.classList.add('is-revealed')
            target.classList.remove('is-fading')
            if (!exit) observer.disconnect()
          } else if (exit && rect.bottom < 0) {
            target.classList.add('is-fading')
          }
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -6% 0px' },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [exit])

  return createElement(
    as,
    {
      ref,
      className: `reveal reveal-${direction} ${className}`.trim(),
      style: delay ? { transitionDelay: `${delay}ms` } : undefined,
    },
    children,
  )
}