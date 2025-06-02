import React, { useEffect, useRef, ReactElement } from 'react'
import gsap from 'gsap'

type GsapMagicIconsProps = {
  children: ReactElement
}

const GsapMagicIcons: React.FC<GsapMagicIconsProps> = ({ children }) => {
  const magnetic = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!magnetic.current) return

    const xTo = gsap.quickTo(magnetic.current, "x", { duration: 1, ease: "elastic.out(2, 1)" })
    const yTo = gsap.quickTo(magnetic.current, "y", { duration: 1, ease: "elastic.out(2, 1)" })

    const mouseMove = (e: MouseEvent) => {
      if (!magnetic.current) return
      const { clientX, clientY } = e
      const { height, width, left, top } = magnetic.current.getBoundingClientRect()
      const x = clientX - (left + width / 2)
      const y = clientY - (top + height / 2)
      xTo(x)
      yTo(y)
    }

    const mouseLeave = () => {
      if (!magnetic.current) return
      gsap.to(magnetic.current, { x: 0, duration: 1 })
      gsap.to(magnetic.current, { y: 0, duration: 1 })
      xTo(0)
      yTo(0)
    }

    magnetic.current.addEventListener("mousemove", mouseMove)
    magnetic.current.addEventListener("mouseleave", mouseLeave)

    return () => {
      if (!magnetic.current) return
      magnetic.current.removeEventListener("mousemove", mouseMove)
      magnetic.current.removeEventListener("mouseleave", mouseLeave)
    }
  }, [])

  return (
    <div ref={magnetic} >
      {children}
    </div>
  )
}

export default GsapMagicIcons