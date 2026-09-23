import { useRef, useState } from 'react'
import Card from './Card.jsx'
import Pug from './Pug.jsx'

const NO_LINES = [
  'no 🐾',
  'are you sure? 🥺',
  'think again…',
  'pretty please 🥹',
  "i'll bring snacks 🍪",
  'the pug is sad 🐶',
  'last chance 💔',
]

export default function DateInvitation({ onYes, leaving }) {
  const [noCount, setNoCount] = useState(0)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const noButtonRef = useRef(null)
  const lastDodgeRef = useRef(0)

  const dodge = (event) => {
    // Move in the opposite direction from the approaching pointer.
    const rect = noButtonRef.current?.getBoundingClientRect()
    const range = typeof window !== 'undefined' && window.innerWidth < 480 ? 55 : 120
    const pointerX = event?.clientX ?? rect?.left ?? 0
    const pointerY = event?.clientY ?? rect?.top ?? 0
    const x = Math.round((pointerX < (rect?.left ?? 0) + (rect?.width ?? 0) / 2 ? 1 : -1) * (range * 0.7 + Math.random() * range * 0.3))
    const y = Math.round((pointerY < (rect?.top ?? 0) + (rect?.height ?? 0) / 2 ? 1 : -1) * (25 + Math.random() * 30))
    setOffset({ x, y })
  }

  const handleNoAttempt = (event) => {
    event.preventDefault()
    setNoCount((n) => n + 1)
    dodge(event)
  }

  const dodgeWhenNearby = (event) => {
    const rect = noButtonRef.current?.getBoundingClientRect()
    if (!rect || Date.now() - lastDodgeRef.current < 220) return

    const padding = 70
    const isNearby =
      event.clientX >= rect.left - padding &&
      event.clientX <= rect.right + padding &&
      event.clientY >= rect.top - padding &&
      event.clientY <= rect.bottom + padding

    if (isNearby) {
      lastDodgeRef.current = Date.now()
      dodge(event)
    }
  }

  // YES grows a little every time NO is pressed (capped so the layout stays tidy)
  const yesScale = Math.min(1 + noCount * 0.06, 1.4)
  const noLabel = NO_LINES[Math.min(noCount, NO_LINES.length - 1)]

  return (
    <Card leaving={leaving}>
      <Pug />

      <h1 className="mx-auto mt-8 max-w-[28rem] font-display text-[1.75rem] font-semibold leading-snug text-burgundy sm:text-[2.35rem]">
        🌸 Will you go on a date with me? 🌸
      </h1>

      <div className="mt-9 flex items-center justify-center gap-4" onPointerMove={dodgeWhenNearby}>
        <button
          type="button"
          onClick={onYes}
          className="pill bg-rosebtn px-9 py-3.5 text-lg tracking-wide shadow-btn hover:bg-rosedeep sm:px-11 sm:text-xl"
          style={{ transform: `scale(${yesScale})`, transition: 'transform 250ms ease, background-color 200ms' }}
        >
          YES ▼
        </button>

        <button
          ref={noButtonRef}
          type="button"
          onPointerEnter={dodge}
          onPointerDown={handleNoAttempt}
          onClick={handleNoAttempt}
          className="pill bg-lavender px-6 py-2.5 text-base shadow-btnlav hover:bg-lavenderdeep"
          style={{
            translate: `${offset.x}px ${offset.y}px`,
            transition: 'translate 350ms cubic-bezier(0.34, 1.56, 0.64, 1), transform 200ms',
          }}
        >
          {noLabel}
        </button>
      </div>
    </Card>
  )
}
