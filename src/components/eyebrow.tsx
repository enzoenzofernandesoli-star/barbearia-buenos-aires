import { cn } from '@/lib/utils'

interface EyebrowProps {
  children: React.ReactNode
  className?: string
  align?: 'left' | 'center'
}

export function Eyebrow({ children, className, align = 'left' }: EyebrowProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-brand-gold',
        align === 'center' && 'justify-center',
        className,
      )}
    >
      <span className="h-px w-8 bg-brand-gold/70" aria-hidden="true" />
      {children}
      {align === 'center' && <span className="h-px w-8 bg-brand-gold/70" aria-hidden="true" />}
    </div>
  )
}
