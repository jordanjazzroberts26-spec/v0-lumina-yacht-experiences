"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

interface ScrollAnimationProps {
  children: ReactNode
  className?: string
  delay?: number
  animation?: "fade-in" | "fade-up" | "fade-left" | "scale-in"
}

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

export function ScrollAnimation({
  children,
  className = "",
  delay = 0,
  animation = "fade-up",
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    setReduceMotion(prefersReducedMotion())
  }, [])

  useEffect(() => {
    if (reduceMotion) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay, reduceMotion])

  const animationClasses: Record<string, string> = {
    "fade-in": "animate-fade-in",
    "fade-up": "animate-fade-up",
    "fade-left": "animate-fade-left",
    "scale-in": "animate-scale-in",
  }

  const visibleClass = reduceMotion
    ? "opacity-100"
    : isVisible
      ? animationClasses[animation]
      : "opacity-0"

  return (
    <div ref={ref} className={`${className} ${visibleClass}`}>
      {children}
    </div>
  )
}

export function useScrollToTop() {
  const scrollToTop = () => {
    const behavior = prefersReducedMotion() ? "auto" : "smooth"
    window.scrollTo({ top: 0, behavior })
  }
  return scrollToTop
}

export function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return

    if (prefersReducedMotion()) {
      setCount(target)
      return
    }

    let startTime: number | null = null
    const startValue = 0

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const easeOutQuad = 1 - (1 - progress) * (1 - progress)
      setCount(Math.floor(startValue + (target - startValue) * easeOutQuad))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [target, duration, start])

  return count
}
