"use client"

import { useEffect, useState } from "react"
import confetti from "canvas-confetti"

interface ConfettiProps {
  duration?: number
}

export function Confetti({ duration = 3000 }: ConfettiProps) {
  const [isActive, setIsActive] = useState(true)

  useEffect(() => {
    if (isActive) {
      const end = Date.now() + duration

      const colors = ["#a2e860", "#ffffff", "#e8e860"]
      ;(function frame() {
        confetti({
          particleCount: 2,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors,
        })

        confetti({
          particleCount: 2,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors,
        })

        if (Date.now() < end) {
          requestAnimationFrame(frame)
        }
      })()

      setTimeout(() => {
        setIsActive(false)
      }, duration)
    }
  }, [isActive, duration])

  return null
}
