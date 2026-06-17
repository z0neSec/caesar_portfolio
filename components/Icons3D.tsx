'use client';

/* ──────────────────────────────────────────────────────────
   Shared 3D-style isometric / glossy SVG icons.
   Consistent lighting from the top-left, gradient depth,
   soft highlights. Rendered at 36px inside white tiles.
   ────────────────────────────────────────────────────────── */

type IconProps = { className?: string };
const cls = (c?: string) => c ?? 'w-9 h-9';

export function IconLayers({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={cls(className)}>
      <defs>
        <linearGradient id="i3-lyrT" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0" stopColor="#C4B5FD" /><stop offset="1" stopColor="#7C3AED" />
        </linearGradient>
        <linearGradient id="i3-lyrM" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0" stopColor="#A78BFA" /><stop offset="1" stopColor="#6D28D9" />
        </linearGradient>
      </defs>
      <path d="M24 27 L42 36 L24 45 L6 36 Z" fill="#5B21B6" />
      <path d="M24 18 L42 27 L24 36 L6 27 Z" fill="url(#i3-lyrM)" />
      <path d="M24 9 L42 18 L24 27 L6 18 Z" fill="url(#i3-lyrT)" />
      <path d="M24 9 L42 18 L24 22 L6 18 Z" fill="#fff" opacity="0.25" />
    </svg>
  );
}

export function IconAnim({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={cls(className)}>
      <defs>
        <radialGradient id="i3-anm" cx="0.35" cy="0.3" r="0.8">
          <stop offset="0" stopColor="#FBCFE8" /><stop offset="0.5" stopColor="#EC4899" /><stop offset="1" stopColor="#9D174D" />
        </radialGradient>
      </defs>
      <circle cx="24" cy="24" r="17" fill="url(#i3-anm)" />
      <ellipse cx="18" cy="17" rx="6" ry="4" fill="#fff" opacity="0.35" />
      <path d="M21 17 L33 24 L21 31 Z" fill="#fff" />
    </svg>
  );
}

export function IconCube({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={cls(className)}>
      <defs>
        <linearGradient id="i3-cbT" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#A5B4FC" /><stop offset="1" stopColor="#6366F1" />
        </linearGradient>
      </defs>
      <path d="M24 6 L41 16 L24 26 L7 16 Z" fill="url(#i3-cbT)" />
      <path d="M7 16 L24 26 L24 44 L7 34 Z" fill="#3730A3" />
      <path d="M41 16 L24 26 L24 44 L41 34 Z" fill="#4F46E5" />
      <path d="M24 6 L41 16 L24 21 L7 16 Z" fill="#fff" opacity="0.2" />
    </svg>
  );
}

export function IconGear({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={cls(className)}>
      <defs>
        <linearGradient id="i3-gr" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0" stopColor="#FCD34D" /><stop offset="1" stopColor="#D97706" />
        </linearGradient>
      </defs>
      <g fill="url(#i3-gr)">
        <circle cx="24" cy="24" r="13" />
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i * Math.PI) / 4;
          const x = 24 + Math.cos(a) * 15, y = 24 + Math.sin(a) * 15;
          return <rect key={i} x={x - 3} y={y - 3} width="6" height="6" rx="1.5" transform={`rotate(${(a * 180) / Math.PI} ${x} ${y})`} />;
        })}
      </g>
      <circle cx="24" cy="24" r="5.5" fill="#fff7ed" />
    </svg>
  );
}

/* Award / medal - for "Years Experience" */
export function IconMedal({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={cls(className)}>
      <defs>
        <linearGradient id="i3-mdl" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0" stopColor="#C4B5FD" /><stop offset="1" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
      <path d="M17 6 h6 l-3 14 z" fill="#A78BFA" />
      <path d="M31 6 h-6 l3 14 z" fill="#8B5CF6" />
      <circle cx="24" cy="30" r="12" fill="url(#i3-mdl)" />
      <circle cx="24" cy="30" r="12" fill="#fff" opacity="0.12" />
      <circle cx="24" cy="30" r="7.5" fill="#6D28D9" />
      <path d="M24 26 l1.3 2.7 3 .3 -2.2 2 .6 2.9 -2.7-1.5 -2.7 1.5 .6-2.9 -2.2-2 3-.3 z" fill="#FDE68A" />
    </svg>
  );
}

/* Trending up - for improvement metrics */
export function IconTrend({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={cls(className)}>
      <defs>
        <linearGradient id="i3-trd" x1="0" y1="1" x2="0.4" y2="0">
          <stop offset="0" stopColor="#818CF8" /><stop offset="1" stopColor="#4338CA" />
        </linearGradient>
      </defs>
      <path d="M24 27 L42 36 L24 45 L6 36 Z" fill="#3730A3" opacity="0.85" />
      <path d="M12 31 L20 25 L26 29 L36 20" stroke="url(#i3-trd)" strokeWidth="3.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M30 19 L37 18 L37 25" stroke="url(#i3-trd)" strokeWidth="3.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* Lightning bolt - for speed / handoff */
export function IconBolt({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={cls(className)}>
      <defs>
        <linearGradient id="i3-blt" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0" stopColor="#DDD6FE" /><stop offset="1" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
      <path d="M27 5 L12 27 H22 L20 43 L36 19 H25 Z" fill="url(#i3-blt)" />
      <path d="M27 5 L12 27 H22 L27 5 Z" fill="#fff" opacity="0.22" />
    </svg>
  );
}

/* Target - for conversion */
export function IconTarget({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={cls(className)}>
      <defs>
        <radialGradient id="i3-tgt" cx="0.35" cy="0.3" r="0.85">
          <stop offset="0" stopColor="#93C5FD" /><stop offset="1" stopColor="#2563EB" />
        </radialGradient>
      </defs>
      <circle cx="24" cy="24" r="17" fill="url(#i3-tgt)" />
      <circle cx="24" cy="24" r="11.5" fill="#fff" opacity="0.9" />
      <circle cx="24" cy="24" r="7" fill="#2563EB" />
      <circle cx="24" cy="24" r="3" fill="#fff" />
      <ellipse cx="18" cy="17" rx="5" ry="3" fill="#fff" opacity="0.3" />
    </svg>
  );
}

/* Location pin */
export function IconPin({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={cls(className)}>
      <defs>
        <linearGradient id="i3-pin" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0" stopColor="#C4B5FD" /><stop offset="1" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
      <path d="M24 6 c-7 0-12 5-12 12 0 8 12 22 12 22 s12-14 12-22 c0-7-5-12-12-12 z" fill="url(#i3-pin)" />
      <path d="M24 6 c-7 0-12 5-12 12 0 1 .2 2 .5 3 C14 15 18 11 24 11 Z" fill="#fff" opacity="0.2" />
      <circle cx="24" cy="18" r="5" fill="#fff" />
    </svg>
  );
}

/* Phone */
export function IconPhone({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={cls(className)}>
      <defs>
        <linearGradient id="i3-phn" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0" stopColor="#A7F3D0" /><stop offset="1" stopColor="#059669" />
        </linearGradient>
      </defs>
      <rect x="15" y="6" width="18" height="36" rx="5" fill="url(#i3-phn)" />
      <rect x="15" y="6" width="18" height="14" rx="5" fill="#fff" opacity="0.18" />
      <rect x="18.5" y="11" width="11" height="22" rx="2" fill="#ECFDF5" opacity="0.55" />
      <circle cx="24" cy="37" r="1.8" fill="#fff" />
    </svg>
  );
}

/* Mail */
export function IconMail({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={cls(className)}>
      <defs>
        <linearGradient id="i3-ml" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0" stopColor="#FBCFE8" /><stop offset="1" stopColor="#DB2777" />
        </linearGradient>
      </defs>
      <rect x="7" y="12" width="34" height="24" rx="5" fill="url(#i3-ml)" />
      <path d="M9 15 L24 27 L39 15" stroke="#fff" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="7" y="12" width="34" height="8" rx="5" fill="#fff" opacity="0.16" />
    </svg>
  );
}

/* Globe / link */
export function IconGlobe({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={cls(className)}>
      <defs>
        <radialGradient id="i3-glb" cx="0.35" cy="0.3" r="0.85">
          <stop offset="0" stopColor="#A5B4FC" /><stop offset="1" stopColor="#4338CA" />
        </radialGradient>
      </defs>
      <circle cx="24" cy="24" r="17" fill="url(#i3-glb)" />
      <ellipse cx="24" cy="24" rx="7" ry="17" fill="none" stroke="#E0E7FF" strokeWidth="1.6" opacity="0.7" />
      <line x1="8" y1="24" x2="40" y2="24" stroke="#E0E7FF" strokeWidth="1.6" opacity="0.7" />
      <path d="M11 17 H37 M11 31 H37" stroke="#E0E7FF" strokeWidth="1.4" opacity="0.5" />
      <ellipse cx="18" cy="16" rx="5" ry="3" fill="#fff" opacity="0.28" />
    </svg>
  );
}
