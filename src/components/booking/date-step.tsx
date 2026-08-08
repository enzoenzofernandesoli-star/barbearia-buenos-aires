import { useMemo, useRef } from 'react'
import { addDays, format, isSameDay, startOfDay } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useBookingStore } from '@/store/booking-store'

const DAYS_AHEAD = 14

export function DateStep() {
  const date = useBookingStore((s) => s.date)
  const setDate = useBookingStore((s) => s.setDate)
  const scrollerRef = useRef<HTMLDivElement>(null)

  const days = useMemo(() => {
    const today = startOfDay(new Date())
    return Array.from({ length: DAYS_AHEAD }, (_, i) => addDays(today, i))
  }, [])

  const headerLabel = useMemo(() => {
    const label = format(date ?? days[0], "MMMM 'de' yyyy", { locale: ptBR })
    return label.charAt(0).toUpperCase() + label.slice(1)
  }, [date, days])

  function scrollBy(amount: number) {
    scrollerRef.current?.scrollBy({ left: amount, behavior: 'smooth' })
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-gold-soft">
          2. Data
        </h3>
        <div className="flex items-center gap-3">
          <span className="text-sm text-brand-cream/70">{headerLabel}</span>
          <div className="flex gap-1">
            <button
              type="button"
              aria-label="Ver dias anteriores"
              onClick={() => scrollBy(-240)}
              className="flex size-7 items-center justify-center rounded-full border border-brand-gold/30 text-brand-gold/80 hover:border-brand-gold hover:text-brand-gold"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              aria-label="Ver próximos dias"
              onClick={() => scrollBy(240)}
              className="flex size-7 items-center justify-center rounded-full border border-brand-gold/30 text-brand-gold/80 hover:border-brand-gold hover:text-brand-gold"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </div>

      <div ref={scrollerRef} className="mt-3 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:thin]">
        {days.map((day) => {
          const selected = date ? isSameDay(day, date) : false
          return (
            <button
              key={day.toISOString()}
              type="button"
              aria-pressed={selected}
              onClick={() => setDate(day)}
              className={cn(
                'flex min-w-14 shrink-0 flex-col items-center rounded-full border px-2 py-3 transition-all duration-200 ease-out',
                selected
                  ? 'scale-[1.03] border-brand-gold bg-brand-gold text-brand-black-deep'
                  : 'border-brand-gold/20 bg-brand-black-deep text-brand-cream hover:border-brand-gold/40',
              )}
            >
              <span
                className={cn(
                  'text-[10px] font-semibold uppercase tracking-wide',
                  selected ? 'text-brand-black-deep/70' : 'text-brand-cream/50',
                )}
              >
                {format(day, 'EEEEEE', { locale: ptBR })}
              </span>
              <span className="mt-1 text-base font-semibold">{format(day, 'd')}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
