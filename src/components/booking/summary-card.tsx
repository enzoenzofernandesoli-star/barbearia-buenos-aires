import { motion } from 'framer-motion'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useBookingStore } from '@/store/booking-store'
import { SERVICES, BARBERS } from '@/data/barbershop'
import { whatsappUrl } from '@/data/business'

export function SummaryCard() {
  const serviceId = useBookingStore((s) => s.serviceId)
  const date = useBookingStore((s) => s.date)
  const barberId = useBookingStore((s) => s.barberId)
  const time = useBookingStore((s) => s.time)

  const service = SERVICES.find((s) => s.id === serviceId)
  const barber = BARBERS.find((b) => b.id === barberId)
  const complete = Boolean(service && date && barber && time)

  if (!complete || !service || !date || !barber || !time) return null

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="mt-8 rounded-xl border border-brand-gold bg-brand-gold/10 p-6"
    >
      <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
        Resumo do agendamento
      </p>
      <dl className="mt-4 space-y-2 text-sm">
        <div className="flex justify-between">
          <dt className="text-brand-cream/60">Serviço</dt>
          <dd className="font-medium text-brand-cream">{service.name}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-brand-cream/60">Data</dt>
          <dd className="font-medium capitalize text-brand-cream">
            {format(date, "EEEE, d 'de' MMMM", { locale: ptBR })}
          </dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-brand-cream/60">Barbeiro</dt>
          <dd className="font-medium text-brand-cream">{barber.name}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-brand-cream/60">Horário</dt>
          <dd className="font-medium text-brand-cream">{time}</dd>
        </div>
      </dl>

      <Button variant="whatsapp" size="lg" className="mt-6 w-full" asChild>
        <a
          href={whatsappUrl(
            `Olá! Gostaria de agendar: ${service.name} com ${barber.name} no dia ${format(date, 'dd/MM')} às ${time}.`,
          )}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle className="size-5" />
          Confirmar no WhatsApp
        </a>
      </Button>
      <p className="mt-3 text-center text-xs text-brand-cream/50">
        O horário será confirmado pelo barbeiro via WhatsApp.
      </p>
    </motion.div>
  )
}
