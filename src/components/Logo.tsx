export default function Logo({ className = 'h-7 w-auto' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-label="Bob App logo">
      <rect x="2" y="2" width="44" height="44" rx="12" fill="url(#g)" />
      <path d="M14 32c0-5 4-9 9-9s9 4 9 9" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <circle cx="19" cy="19" r="2.5" fill="white" />
      <circle cx="29" cy="19" r="2.5" fill="white" />
      <defs>
        <linearGradient id="g" x1="2" y1="2" x2="46" y2="46">
          <stop stopColor="#4b7bff" />
          <stop offset="1" stopColor="#22c55e" />
        </linearGradient>
      </defs>
    </svg>
  )
}
