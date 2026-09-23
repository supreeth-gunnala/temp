import { useState } from 'react'

// Drop your own picture at public/pug.jpg and it will be used automatically.
// If the file is missing, this little SVG pug is shown instead.
export default function Pug() {
  const [failed, setFailed] = useState(false)

  return (
    <div className="mx-auto h-[120px] w-[120px] overflow-hidden rounded-3xl bg-[#f3dcc4] shadow-md">
      {!failed ? (
        <img
          src="/pug.jpg"
          alt="a very funny pug"
          className="h-full w-full object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <svg viewBox="0 0 120 120" className="h-full w-full" role="img" aria-label="a very funny pug">
          <rect width="120" height="120" fill="#f3dcc4" />
          {/* ears */}
          <path d="M22 30 Q10 60 30 70 Q40 50 38 32 Z" fill="#3a2a25" />
          <path d="M98 30 Q110 60 90 70 Q80 50 82 32 Z" fill="#3a2a25" />
          {/* head */}
          <ellipse cx="60" cy="66" rx="36" ry="34" fill="#e2b98a" />
          {/* muzzle */}
          <ellipse cx="60" cy="82" rx="22" ry="17" fill="#4a352d" />
          {/* forehead wrinkles */}
          <path d="M44 40 Q60 34 76 40" stroke="#c99a68" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M48 47 Q60 42 72 47" stroke="#c99a68" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          {/* eyes */}
          <circle cx="46" cy="62" r="8" fill="#fff" />
          <circle cx="74" cy="62" r="8" fill="#fff" />
          <circle cx="47" cy="63" r="4.5" fill="#1c1210" />
          <circle cx="73" cy="63" r="4.5" fill="#1c1210" />
          <circle cx="48.5" cy="61.5" r="1.4" fill="#fff" />
          <circle cx="74.5" cy="61.5" r="1.4" fill="#fff" />
          {/* nose + mouth */}
          <ellipse cx="60" cy="76" rx="6" ry="4" fill="#1c1210" />
          <path d="M60 80 Q60 88 52 88 M60 80 Q60 88 68 88" stroke="#1c1210" strokeWidth="2" fill="none" strokeLinecap="round" />
          {/* tongue */}
          <path d="M56 88 Q60 100 64 88 Z" fill="#ec8aa0" />
        </svg>
      )}
    </div>
  )
}
