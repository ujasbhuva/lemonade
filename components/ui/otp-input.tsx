"use client"

import * as React from "react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface OtpInputProps {
  value: string
  onChange: (value: string) => void
  length?: number
  disabled?: boolean
  className?: string
}

export function OtpInput({
  value,
  onChange,
  length = 6,
  disabled = false,
  className,
  ...props
}: OtpInputProps & Omit<React.HTMLAttributes<HTMLDivElement>, "onChange">) {
  const inputRefs = React.useRef<(HTMLInputElement | null)[]>([])
  const [otp, setOtp] = React.useState<string[]>(value.split("").slice(0, length))

  React.useEffect(() => {
    setOtp(value.split("").slice(0, length))
  }, [value, length])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newValue = e.target.value
    if (newValue.length > 1) {
      // Handle paste
      const pastedValue = newValue.slice(0, length)
      const newOtp = [...otp]

      for (let i = 0; i < pastedValue.length; i++) {
        if (index + i < length) {
          newOtp[index + i] = pastedValue[i]
        }
      }

      setOtp(newOtp)
      onChange(newOtp.join(""))

      // Focus on the next empty input or the last input
      const nextIndex = Math.min(index + pastedValue.length, length - 1)
      inputRefs.current[nextIndex]?.focus()
    } else if (newValue.length === 1) {
      // Handle single character input
      const newOtp = [...otp]
      newOtp[index] = newValue
      setOtp(newOtp)
      onChange(newOtp.join(""))

      // Focus on the next input
      if (index < length - 1) {
        inputRefs.current[index + 1]?.focus()
      }
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      // Move to the previous input when backspace is pressed on an empty input
      const newOtp = [...otp]
      newOtp[index - 1] = ""
      setOtp(newOtp)
      onChange(newOtp.join(""))
      inputRefs.current[index - 1]?.focus()
    } else if (e.key === "ArrowLeft" && index > 0) {
      // Move to the previous input when left arrow is pressed
      inputRefs.current[index - 1]?.focus()
    } else if (e.key === "ArrowRight" && index < length - 1) {
      // Move to the next input when right arrow is pressed
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>, index: number) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData("text/plain").trim()
    if (!pastedData) return

    const newOtp = [...otp]
    for (let i = 0; i < pastedData.length; i++) {
      if (index + i < length) {
        newOtp[index + i] = pastedData[i]
      }
    }

    setOtp(newOtp)
    onChange(newOtp.join(""))

    // Focus on the next empty input or the last input
    const nextIndex = Math.min(index + pastedData.length, length - 1)
    inputRefs.current[nextIndex]?.focus()
  }

  return (
    <div className={cn("flex gap-2 justify-center", className)} {...props}>
      {Array.from({ length }).map((_, index) => (
        <Input
          key={index}
          ref={(el) => {
            inputRefs.current[index] = el
            return undefined
          }}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={1}
          value={otp[index] || ""}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={(e) => handlePaste(e, index)}
          disabled={disabled}
          className="w-12 h-12 text-center text-lg"
          aria-label={`OTP digit ${index + 1}`}
        />
      ))}
    </div>
  )
}
