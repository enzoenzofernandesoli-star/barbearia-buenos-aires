import { useMemo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Clock } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useBookingStore } from '@/store/booking-store'
import { generateSlots, groupSlotsByPeriod, type Period } from '@/lib/slots'

const PERIOD_ORDER: Period[] = ['Manhã', 'Tarde', 'Noite']

export function TimeStep() {
  const serviceIds = useBookingStore((s) => s.serviceIds)
  const barberId = useBookingStore((s) => s.barberId)
  const date = useBookingStore((s) => s.date)
  const time = useBookingStore((s) => s.time)
  const setTime = useBookingStore((s) => s.setTime)
  const prefersReducedMotion = useReducedMotion()

  const ready = Boolean(serviceIds.length && barberId && date)

  const groups = useMemo(() => {
    if (!serviceIds.length || !barberId || !date) return null
    const slots = generateSlots(serviceIds, barberId, date)
    return groupSlotsByPeriod(slots)
  }, [serviceIds, barberId, date])

  const totalSlots = groups ? PERIOD_ORDER.reduce((acc, p) => acc + groups[p].length, 0) : 0

  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-gold-soft">
        3. Horário
      </h3>

      {!ready && (
        <div className="mt-3 flex flex-col items-center gap-3 rounded-xl border border-dashed border-brand-gold/25 bg-brand-black-deep px-6 py-10 text-center">
          <Clock className="size-8 text-brand-gold/50" strokeWidth={1.5} />
          <p className="text-sm text-brand-cream/60">
            Escolha um profissional e uma data para ver os horários disponíveis.
          </p>
        </div>
      )}

      {ready && totalSlots === 0 && (
        <motion.div
          key="no-slots"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="mt-3 flex flex-col items-center gap-2 rounded-xl border border-dashed border-brand-gold/25 bg-brand-black-deep px-6 py-10 text-center"
        >
          <Clock className="size-8 text-brand-gold/50" strokeWidth={1.5} />
          <p className="text-sm text-brand-cream/60">
            Não há horários disponíveis neste dia. Tente escolher outra data.
          </p>
        </motion.div>
      )}

      {ready && groups && totalSlots > 0 && (
        <motion.div
          key={`grid-${serviceIds.join(',')}-${barberId}-${date?.toDateString()}`}
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="mt-3 space-y-6"
        >
          {PERIOD_ORDER.filter((period) => groups[period].length > 0).map((period) => (
            <div key={period}>
              <p className="text-xs font-medium text-brand-cream/50">
                {period} <span className="text-brand-cream/35">· {groups[period].length} horários</span>
              </p>
              <motion.div
                className="mt-2 grid grid-cols-3 gap-2 sm:grid-cols-4"
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: {
                    transition: { staggerChildren: prefersReducedMotion ? 0 : 0.03 },
                  },
                }}
              >
                {groups[period].map((slot) => {
                  const selected = time === slot.time
                  return (
                    <motion.button
                      key={slot.time}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => setTime(slot.time)}
                      variants={{
                        hidden: { opacity: 0, y: 8 },
                        show: { opacity: 1, y: 0 },
                      }}
                      whileTap={{ scale: 0.96 }}
                      className={cn(
                        'rounded-md border px-2 py-2 text-sm font-medium transition-all duration-200 ease-out',
                        selected
                          ? 'border-brand-gold bg-brand-gold text-brand-black-deep'
                          : 'border-brand-gold/25 bg-brand-black-deep text-brand-cream hover:border-brand-gold/50',
                      )}
                    >
                      {slot.time}
                    </motion.button>
                  )
                })}
              </motion.div>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  )
}
