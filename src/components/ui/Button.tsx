import { clsx } from 'clsx'
import Link from 'next/link'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

type Props = {
  href?: string
  children: React.ReactNode
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
  ariaLabel?: string
  variant?: Variant
  size?: Size
}

/* Base commune */
const baseClasses =
  'inline-flex items-center justify-center rounded-xl2 px-5 py-3 text-sm font-semibold transition-transform active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500'

/* Variantes de style (tokens @theme) */
const variantClasses: Record<Variant, string> = {
  primary:  'bg-brand-500 text-white hover:bg-brand-600 ring-1 ring-brand-400 shadow-glow',
  secondary:'bg-brand-100 text-brand-800 hover:bg-brand-200 ring-1 ring-brand-300',
  ghost:    'bg-transparent text-brand-500 hover:bg-brand-50 ring-1 ring-brand-200',
}

/* Tailles */
const sizeClasses: Record<Size, string> = {
  sm: 'px-3 py-2 text-xs',
  md: 'px-5 py-3 text-sm',
  lg: 'px-6 py-3.5 text-base',
}

export default function Button({
  href,
  children,
  onClick,
  className,
  type = 'button',
  ariaLabel,
  variant = 'primary',
  size = 'md',
}: Props) {
  const classes = clsx(baseClasses, variantClasses[variant], sizeClasses[size], className)

  if (href) {
    return (
      <Link href={href} aria-label={ariaLabel} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} aria-label={ariaLabel} className={classes}>
      {children}
    </button>
  )
}
