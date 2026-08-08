import { cn } from '@/lib/utils'
import { useReducedMotion } from 'framer-motion'

interface BarberPoleProps {
  className?: string
  animated?: boolean
}

/**
 * Elemento-assinatura da marca: poste de barbeiro clássico com listras
 * vermelha/branca/azul em diagonal. `animated` liga um loop lento e sutil,
 * desativado automaticamente quando prefers-reduced-motion está ativo.
 */
export function BarberPole({ className, animated = false }: BarberPoleProps) {
  const prefersReducedMotion = useReducedMotion()
  const shouldAnimate = animated && !prefersReducedMotion

  return (
    <div
      className={cn('overflow-hidden rounded-full', shouldAnimate && 'animate-pole-slide', className)}
      style={{
        background:
          'repeating-linear-gradient(45deg, #b0262c 0 14px, #f4ecd8 14px 28px, #1f3a6e 28px 42px)',
        backgroundSize: '100% 240px',
      }}
      aria-hidden="true"
    />
  )
}
