import { useState } from 'react'
import Card from './Card.jsx'

const TIMES = ['5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM']

export default function DatePicker({ date, time, onDate, onTime, onSubmit, leaving }) {
  const [tried, setTried] = useState(false)

  const dateMissing = tried && !date
  const timeMissing = tried && !time

  const submit = (e) => {
    e.preventDefault()
    setTried(true)
    if (date && time) onSubmit()
  }

  return (
    <Card leaving={leaving}>
      <div className="text-4xl" aria-hidden="true">📅</div>

      <h1 className="mt-4 font-display text-[1.75rem] font-semibold leading-snug text-burgundy sm:text-[2.35rem]">
        So... when are you free?
      </h1>

      <form onSubmit={submit} noValidate className="mt-9 space-y-6 text-left">
        <div>
          <label htmlFor="date" className="mb-2 block font-display text-lg font-medium text-burgundy">
            Pick a Day 📅
          </label>
          <input
            id="date"
            type="date"
            lang="en-US"
            placeholder="mm/dd/yyyy"
            value={date}
            onChange={(e) => onDate(e.target.value)}
            aria-invalid={dateMissing}
            className={`field ${dateMissing ? 'border-rosedeep' : ''}`}
          />
          {dateMissing && (
            <p className="mt-1.5 pl-1 font-body text-sm italic text-rosedeep">pick a day first 🌷</p>
          )}
        </div>

        <div>
          <label htmlFor="time" className="mb-2 block font-display text-lg font-medium text-burgundy">
            What Time? ⏰
          </label>
          <div className="relative">
            <select
              id="time"
              value={time}
              onChange={(e) => onTime(e.target.value)}
              aria-invalid={timeMissing}
              className={`field appearance-none pr-10 ${time ? '' : 'text-inkmuted/70'} ${
                timeMissing ? 'border-rosedeep' : ''
              }`}
            >
              <option value="">Select a time...</option>
              {TIMES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-inkmuted">▼</span>
          </div>
          {timeMissing && (
            <p className="mt-1.5 pl-1 font-body text-sm italic text-rosedeep">choose a time too ⏰</p>
          )}
        </div>

        <button
          type="submit"
          className="pill w-full bg-rosebtn py-4 text-lg shadow-btn hover:bg-rosedeep sm:text-xl"
        >
          set the date! ♥
        </button>
      </form>
    </Card>
  )
}
