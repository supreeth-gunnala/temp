export default function Card({ leaving, children, className = '' }) {
  return (
    <section
      className={`w-[92%] max-w-[640px] rounded-[2.25rem] bg-cream px-6 py-10 text-center shadow-card sm:w-full sm:px-14 sm:py-14 ${
        leaving ? 'animate-card-out' : 'animate-card-in'
      } ${className}`}
    >
      {children}
    </section>
  )
}
