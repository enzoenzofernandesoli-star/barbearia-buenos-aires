import { Check, Scissors, PenLine } from 'lucide-react'
import { Eyebrow } from '@/components/eyebrow'
import { Reveal } from '@/components/reveal'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { SERVICES } from '@/data/barbershop'
import { useBookingStore } from '@/store/booking-store'

const ICONS = {
  corte: Scissors,
  sobrancelha: PenLine,
}

export function Servicos() {
  const serviceIds = useBookingStore((s) => s.serviceIds)
  const toggleService = useBookingStore((s) => s.toggleService)
  const scrollToBooking = useBookingStore((s) => s.scrollToBooking)

  return (
    <section id="servicos" className="bg-brand-black px-5 py-20">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <Eyebrow align="center">Serviços</Eyebrow>
          <h2 className="mt-4 text-center font-heading text-3xl font-semibold text-brand-cream sm:text-4xl">
            Corte e sobrancelha, sem enrolação
          </h2>
          <p className="mt-3 text-center text-sm text-brand-cream/60">
            Pode escolher mais de um serviço no mesmo horário.
          </p>
        </Reveal>

        <div className="mt-12 flex max-w-xl flex-col gap-5 sm:mx-auto">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.id]
            const selected = serviceIds.includes(service.id)
            return (
              <Reveal key={service.id} delay={i * 0.08}>
                <button
                  type="button"
                  aria-pressed={selected}
                  onClick={() => toggleService(service.id)}
                  className={cn(
                    'flex w-full flex-col items-start gap-5 rounded-xl border p-7 text-left transition-all duration-200 ease-out sm:flex-row sm:items-center',
                    selected
                      ? 'border-brand-gold bg-brand-gold/10'
                      : 'border-brand-gold/20 bg-brand-black-deep hover:border-brand-gold/40',
                  )}
                >
                  <span
                    className={cn(
                      'flex size-8 shrink-0 items-center justify-center rounded-md border transition-colors',
                      selected
                        ? 'border-brand-gold bg-brand-gold text-brand-black-deep'
                        : 'border-brand-gold/40 text-transparent',
                    )}
                  >
                    <Check className="size-5" strokeWidth={2.5} />
                  </span>
                  <Icon className="size-8 shrink-0 text-brand-gold" strokeWidth={1.5} />
                  <div className="flex-1">
                    <h3 className="font-heading text-2xl font-semibold text-brand-cream">
                      {service.name}
                    </h3>
                    <p className="mt-1 text-sm text-brand-cream/65">{service.description}</p>
                    <div className="mt-3 flex items-baseline gap-2">
                      <span className="text-xl font-bold text-brand-gold">
                        R$ {service.price.toFixed(2).replace('.', ',')}
                      </span>
                      <span className="text-sm text-brand-cream/50">
                        · ~{service.durationMin} min
                      </span>
                    </div>
                  </div>
                </button>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.16}>
          <div className="mt-8 flex justify-center">
            <Button
              size="lg"
              disabled={serviceIds.length === 0}
              onClick={scrollToBooking}
            >
              {serviceIds.length === 0
                ? 'Escolha um serviço'
                : serviceIds.length === 1
                  ? 'Agendar'
                  : `Agendar ${serviceIds.length} serviços`}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
