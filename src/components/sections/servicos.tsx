import { Scissors, PenLine } from 'lucide-react'
import { Eyebrow } from '@/components/eyebrow'
import { Reveal } from '@/components/reveal'
import { Button } from '@/components/ui/button'
import { SERVICES } from '@/data/barbershop'
import { useBookingStore } from '@/store/booking-store'

const ICONS = {
  corte: Scissors,
  sobrancelha: PenLine,
}

export function Servicos() {
  const setService = useBookingStore((s) => s.setService)
  const scrollToBooking = useBookingStore((s) => s.scrollToBooking)

  return (
    <section id="servicos" className="bg-brand-black px-5 py-20">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <Eyebrow align="center">Serviços</Eyebrow>
          <h2 className="mt-4 text-center font-heading text-3xl font-semibold text-brand-cream sm:text-4xl">
            Corte e sobrancelha, sem enrolação
          </h2>
        </Reveal>

        <div className="mt-12 flex max-w-xl flex-col gap-5 sm:mx-auto">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.id]
            return (
              <Reveal key={service.id} delay={i * 0.08}>
                <div className="flex flex-col items-start gap-5 rounded-xl border border-brand-gold/20 bg-brand-black-deep p-7 sm:flex-row sm:items-center">
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
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto"
                    onClick={() => {
                      setService(service.id)
                      scrollToBooking()
                    }}
                  >
                    Agendar
                  </Button>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
