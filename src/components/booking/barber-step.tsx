import { UserRound } from 'lucide-react'
import { cn } from '@/lib/utils'
import { BARBERS } from '@/data/barbershop'
import { useBookingStore } from '@/store/booking-store'

export function BarberStep() {
  const barberId = useBookingStore((s) => s.barberId)
  const setBarber = useBookingStore((s) => s.setBarber)

  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-gold-soft">
        1. Profissional
      </h3>
      <div className="mt-3 flex gap-4">
        {BARBERS.map((barber) => {
          const selected = barberId === barber.id
          return (
            <button
              key={barber.id}
              type="button"
              aria-pressed={selected}
              onClick={() => setBarber(barber.id)}
              className="flex flex-col items-center gap-2"
            >
              <span
                className={cn(
                  'flex size-16 items-center justify-center rounded-full border-2 transition-all duration-200 ease-out',
                  selected
                    ? 'scale-[1.03] border-brand-gold bg-brand-gold/15 text-brand-gold'
                    : 'border-brand-gold/25 bg-brand-black-deep text-brand-cream/50 hover:border-brand-gold/50',
                )}
              >
                <UserRound className="size-8" strokeWidth={1.25} />
              </span>
              <span
                className={cn(
                  'text-sm font-medium',
                  selected ? 'text-brand-gold' : 'text-brand-cream/75',
                )}
              >
                {barber.name}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
