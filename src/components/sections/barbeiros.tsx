import { useState } from 'react'
import { ChevronDown, UserRound } from 'lucide-react'
import { Eyebrow } from '@/components/eyebrow'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'
import { BARBERS } from '@/data/barbershop'
import { useBookingStore } from '@/store/booking-store'

export function Barbeiros() {
  const [openId, setOpenId] = useState<string | null>(null)
  const setBarber = useBookingStore((s) => s.setBarber)
  const scrollToBooking = useBookingStore((s) => s.scrollToBooking)

  return (
    <section id="barbeiros" className="bg-brand-black px-5 py-20">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <Eyebrow align="center">A equipe</Eyebrow>
          <h2 className="mt-4 text-center font-heading text-3xl font-semibold text-brand-cream sm:text-4xl">
            Sempre os mesmos, sempre de confiança
          </h2>
          <p className="mt-3 text-center text-sm text-brand-cream/60">
            Clique para conhecer um pouco de cada um.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-col gap-4">
          {BARBERS.map((barber, i) => {
            const bioId = `barber-bio-${barber.id}`
            const open = openId === barber.id
            return (
              <Reveal key={barber.id} delay={i * 0.1}>
                <div className="overflow-hidden rounded-xl border border-brand-gold/20 bg-brand-black-deep">
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={bioId}
                    onClick={() => setOpenId(open ? null : barber.id)}
                    className="flex w-full items-center gap-4 p-5 text-left transition-colors hover:bg-white/[0.03] sm:p-6"
                  >
                    <span
                      className={cn(
                        'flex size-16 shrink-0 items-center justify-center rounded-full border-2 transition-colors',
                        open
                          ? 'border-brand-gold bg-brand-gold/15 text-brand-gold'
                          : 'border-brand-gold/30 text-brand-gold/70',
                      )}
                    >
                      <UserRound className="size-9" strokeWidth={1.25} />
                    </span>
                    <span className="flex-1">
                      <span className="block font-heading text-xl font-semibold text-brand-cream">
                        {barber.name}
                      </span>
                      <span className="block text-xs uppercase tracking-widest text-brand-gold/70">
                        {barber.tagline}
                      </span>
                    </span>
                    <ChevronDown
                      className={cn(
                        'size-5 shrink-0 text-brand-gold/70 transition-transform duration-300',
                        open && 'rotate-180',
                      )}
                    />
                  </button>

                  <div
                    id={bioId}
                    className="grid transition-[grid-template-rows] duration-300 ease-out"
                    style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-6 sm:px-6">
                        <p className="text-sm leading-relaxed text-brand-cream/70">{barber.bio}</p>
                        <button
                          type="button"
                          onClick={() => {
                            setBarber(barber.id)
                            scrollToBooking()
                          }}
                          className="mt-4 text-sm font-medium text-brand-gold underline-offset-4 hover:underline"
                        >
                          Agendar com {barber.name} →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
