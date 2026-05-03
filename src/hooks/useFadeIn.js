import { useEffect, useRef } from 'react'

export function useFadeIn({ delay = 0, threshold = 0.12, distance = 32 } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    el.style.opacity   = '0'
    el.style.transform = `translateY(${distance}px)`
    el.style.transition = `opacity 0.85s ease ${delay}ms, transform 0.85s ease ${delay}ms`

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.opacity   = '1'
        el.style.transform = 'translateY(0)'
        observer.disconnect()
      }
    }, { threshold })

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay, threshold, distance])

  return ref
}
