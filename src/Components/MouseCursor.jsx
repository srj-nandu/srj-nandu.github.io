import { useEffect, useRef, useState } from 'react'

const INTERACTIVE_SELECTOR =
  'a, button, input, textarea, select, summary, [role="button"], .button, .contact-link-card, .nav-cta'

function MouseCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false)
  const [isPressed, setIsPressed] = useState(false)
  const [isEnabled, setIsEnabled] = useState(false)
  const dotRef = useRef(null)
  const haloShellRef = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined
    }

    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)')
    const updateCapability = () => {
      setIsEnabled(mediaQuery.matches)
    }

    updateCapability()

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', updateCapability)
    } else {
      mediaQuery.addListener(updateCapability)
    }

    return () => {
      if (typeof mediaQuery.removeEventListener === 'function') {
        mediaQuery.removeEventListener('change', updateCapability)
      } else {
        mediaQuery.removeListener(updateCapability)
      }
    }
  }, [])

  useEffect(() => {
    if (!isEnabled) {
      setIsVisible(false)
      setIsHoveringInteractive(false)
      setIsPressed(false)
      return undefined
    }

    const dotElement = dotRef.current
    const haloElement = haloShellRef.current

    if (!dotElement || !haloElement) {
      return undefined
    }

    let animationFrameId = 0
    let currentX = window.innerWidth / 2
    let currentY = window.innerHeight / 2
    let targetX = currentX
    let targetY = currentY

    const render = () => {
      currentX += (targetX - currentX) * 0.18
      currentY += (targetY - currentY) * 0.18

      dotElement.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`
      haloElement.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`

      animationFrameId = window.requestAnimationFrame(render)
    }

    const updateHoverState = (eventTarget) => {
      setIsHoveringInteractive(Boolean(eventTarget?.closest(INTERACTIVE_SELECTOR)))
    }

    const handlePointerMove = (event) => {
      targetX = event.clientX
      targetY = event.clientY
      setIsVisible(true)
      updateHoverState(event.target)
    }

    const handlePointerDown = () => {
      setIsPressed(true)
    }

    const handlePointerUp = () => {
      setIsPressed(false)
    }

    const handlePointerLeave = () => {
      setIsVisible(false)
      setIsHoveringInteractive(false)
      setIsPressed(false)
    }

    const handlePointerEnter = (event) => {
      targetX = event.clientX
      targetY = event.clientY
      currentX = event.clientX
      currentY = event.clientY
      setIsVisible(true)
      updateHoverState(event.target)
    }

    const handleMouseOver = (event) => {
      updateHoverState(event.target)
    }

    animationFrameId = window.requestAnimationFrame(render)
    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerdown', handlePointerDown)
    window.addEventListener('pointerup', handlePointerUp)
    document.addEventListener('mouseleave', handlePointerLeave)
    document.addEventListener('pointerenter', handlePointerEnter)
    document.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.cancelAnimationFrame(animationFrameId)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerdown', handlePointerDown)
      window.removeEventListener('pointerup', handlePointerUp)
      document.removeEventListener('mouseleave', handlePointerLeave)
      document.removeEventListener('pointerenter', handlePointerEnter)
      document.removeEventListener('mouseover', handleMouseOver)
    }
  }, [isEnabled])

  if (!isEnabled) {
    return null
  }

  const cursorClassName = [
    'cursor-layer',
    isVisible ? 'is-visible' : '',
    isHoveringInteractive ? 'is-hovering' : '',
    isPressed ? 'is-pressed' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={cursorClassName} aria-hidden="true">
      <div className="cursor-halo-shell" ref={haloShellRef}>
        <div className="cursor-halo" />
      </div>
      <div className="cursor-dot" ref={dotRef} />
    </div>
  )
}

export default MouseCursor
