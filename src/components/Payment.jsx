import Card from './Card.jsx'

function prettyDate(date) {
  if (!date) return ''
  const [y, m, d] = date.split('-').map(Number)
  return new Date(y, m - 1, d).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  })
}

export default function Payment({ date, time, leaving }) {
  return (
    <Card leaving={leaving}>
      <h1 className="font-display text-[1.8rem] font-semibold leading-snug text-burgundy sm:text-[2.4rem]">
        it’s a date 💗
      </h1>

      <p className="mt-5 font-body text-sm italic text-inkmuted sm:text-base">
        {date && time ? `${prettyDate(date)} at ${time} — see you then 🌸` : 'see you soon 🌸'}
      </p>

      <p className="mt-8 font-display text-xl font-semibold text-burgundy sm:text-2xl">
        come on, pay ₹10,000 to me 😌
      </p>

      <a href="tel:9491574928" className="pill mt-5 w-full bg-rosedeep py-3.5 text-lg shadow-btn sm:text-xl">
        pay now 💸
      </a>
    </Card>
  )
}
