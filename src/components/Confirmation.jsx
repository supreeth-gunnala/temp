import Card from './Card.jsx'

export default function Confirmation({ leaving, onAccept }) {
  return (
    <Card leaving={leaving}>
      <h1 className="font-display text-[1.6rem] font-semibold leading-snug text-burgundy sm:text-[2.2rem]">
        glad you didn't say no. be ready
        <br />
        by 6, I'm coming to get you 🚗
      </h1>

      <p className="mx-auto mt-7 max-w-md font-body text-[0.95rem] italic leading-relaxed text-inkmuted sm:text-base">
        P.S. normal people text. I made a website on Replit, during lunch, for you.
        <br className="hidden sm:block" /> no big deal.
      </p>

      <div className="mt-6 text-lg tracking-[0.35em] text-rosebtn" aria-hidden="true">
        ♥ ♥ ♥ ♥ ♥
      </div>

      <div className="relative mt-7">
        <button
          type="button"
          onClick={onAccept}
          className="pill w-full bg-rosebtn py-4 text-lg shadow-btn hover:bg-rosedeep sm:text-xl"
        >
          ok I accept 💝
        </button>
      </div>
    </Card>
  )
}
