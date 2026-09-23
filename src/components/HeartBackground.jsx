// deterministic pseudo-random so hearts land in the same places on every load
function mulberry32(seed) {
  return () => {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const GLYPHS = ['♥', '♥', '♥', '❀', '♡']
const COLORS = ['#e8a5b5', '#d4859b', '#b8607a', '#f0bcc8', '#a8536d']

const rand = mulberry32(2024)
const HEARTS = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  glyph: GLYPHS[Math.floor(rand() * GLYPHS.length)],
  color: COLORS[Math.floor(rand() * COLORS.length)],
  left: Math.round(rand() * 96),
  top: Math.round(rand() * 94),
  size: Math.round(12 + rand() * 26),
  opacity: +(0.22 + rand() * 0.28).toFixed(2),
  rotate: Math.round(rand() * 50 - 25),
  duration: +(8 + rand() * 7).toFixed(1),
  delay: +(rand() * -10).toFixed(1),
}))

export default function HeartBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      {HEARTS.map((h) => (
        <span
          key={h.id}
          className="absolute animate-float-heart select-none"
          style={{
            left: `${h.left}%`,
            top: `${h.top}%`,
            fontSize: h.size,
            color: h.color,
            '--o': h.opacity,
            '--r': `${h.rotate}deg`,
            '--d': `${h.duration}s`,
            '--delay': `${h.delay}s`,
          }}
        >
          {h.glyph}
        </span>
      ))}
    </div>
  )
}
