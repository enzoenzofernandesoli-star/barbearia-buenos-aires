import { Scissors, PenLine } from 'lucide-react'
import { Eyebrow } from '@/components/eyebrow'
import { Reveal } from '@/components/reveal'
import { DateStep } from '@/components/booking/date-step'
import { BarberStep } from '@/components/booking/barber-step'
import { TimeStep } from '@/components/booking/time-step'
import { SummaryCard } from '@/components/booking/summary-card'
import { SERVICES } from '@/data/barbershop'
import { useBookingStore } from '@/store/booking-store'

const ICONS = {
  corte: Scissors,
  sobrancelha: PenLine,
}

export function Agendamento() {
  const serviceId = useBookingStore((s) => s.serviceId)
  const service = SERVICES.find((s) => s.id === serviceId)

  return (
    <section id="agendamento" className="bg-brand-black-deep px-5 py-20">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <Eyebrow align="center">Agendamento</Eyebrow>
          <h2 className="mt-4 text-center font-heading text-3xl font-semibold text-brand-cream sm:text-4xl">
            Marque seu horário
          </h2>
        </Reveal>

        <div className="mt-10 rounded-xl border border-brand-gold/15 bg-brand-black p-6 sm:p-8">
          {!service ? (
            <div className="flex flex-col items-center gap-3 rounded-xl border border-dashed border-brand-gold/25 bg-brand-black-deep px-6 py-10 text-center">
              <p className="text-sm text-brand-cream/60">
                Escolha um serviço para começar o agendamento.
              </p>
              <a
                href="#servicos"
                className="text-sm font-medium text-brand-gold underline-offset-4 hover:underline"
              >
                Ver serviços
              </a>
            </div>
          ) : (
            <>
              <ServiceSummary />
              <div className="mt-8 space-y-8">
                <BarberStep />
                <DateStep />
                <TimeStep />
              </div>
              <SummaryCard />
            </>
          )}
        </div>
      </div>
    </section>
  )
}

function ServiceSummary() {
  const serviceId = useBookingStore((s) => s.serviceId)
  const service = SERVICES.find((s) => s.id === serviceId)
  if (!service) return null

  const Icon = ICONS[service.id]

  return (
    <div className="flex items-center gap-3 rounded-xl border border-brand-gold/25 bg-brand-gold/5 p-4">
      <Icon className="size-6 shrink-0 text-brand-gold" strokeWidth={1.5} />
      <div className="flex-1">
        <p className="font-medium text-brand-cream">{service.name}</p>
        <p className="text-xs text-brand-cream/55">
          R$ {service.price.toFixed(2).replace('.', ',')} · ~{service.durationMin} min
        </p>
      </div>
      <a
        href="#servicos"
        className="text-xs font-medium text-brand-gold/80 underline-offset-4 hover:underline"
      >
        Trocar
      </a>
    </div>
  )
}
