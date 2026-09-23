import { useCallback, useEffect, useState } from 'react'
import HeartBackground from './components/HeartBackground.jsx'
import DateInvitation from './components/DateInvitation.jsx'
import DatePicker from './components/DatePicker.jsx'
import Confirmation from './components/Confirmation.jsx'
import Payment from './components/Payment.jsx'

const STORAGE_KEY = 'date-invite:v1'

function loadSaved() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

export default function App() {
  const saved = loadSaved()
  const [step, setStep] = useState(1) // 1 | 2 | 3 | 4
  const [leaving, setLeaving] = useState(false)
  const [date, setDate] = useState(saved.date || '')
  const [time, setTime] = useState(saved.time || '')

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ date, time }))
    } catch {
      /* storage unavailable, state still works in memory */
    }
  }, [date, time])

  // fade the current card out, then swap screens
  const goTo = useCallback((next) => {
    setLeaving(true)
    window.setTimeout(() => {
      setStep(next)
      setLeaving(false)
      window.scrollTo({ top: 0 })
    }, 260)
  }, [])

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-blush px-4 py-10">
      <HeartBackground />

      <main className="relative z-10 flex w-full flex-1 items-center justify-center">
        {step === 1 && <DateInvitation leaving={leaving} onYes={() => goTo(2)} />}
        {step === 2 && (
          <DatePicker
            leaving={leaving}
            date={date}
            time={time}
            onDate={setDate}
            onTime={setTime}
            onSubmit={() => goTo(3)}
          />
        )}
        {step === 3 && <Confirmation leaving={leaving} onAccept={() => goTo(4)} />}
        {step === 4 && <Payment leaving={leaving} date={date} time={time} />}
      </main>

      <footer className="relative z-10 mt-6 font-body text-[11px] tracking-wide text-gray-400">
        ◼ built on Replit 🌸
      </footer>
    </div>
  )
}
