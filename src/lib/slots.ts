import { SERVICES, type BarberId, type ServiceId } from '@/data/barbershop'

const OPEN_HOUR = 9
const CLOSE_HOUR = 19

export type Period = 'Manhã' | 'Tarde' | 'Noite'

export interface TimeSlot {
  time: string
  period: Period
}

function periodFor(hour: number): Period {
  if (hour < 12) return 'Manhã'
  if (hour < 18) return 'Tarde'
  return 'Noite'
}

/** Hash simples e determinístico — usado só para simular horários já ocupados. */
function seededRandom(seed: string) {
  let h = 0
  for (let i = 0; i < seed.length; i++) {
    h = (h << 5) - h + seed.charCodeAt(i)
    h |= 0
  }
  return () => {
    h = (h * 1103515245 + 12345) & 0x7fffffff
    return h / 0x7fffffff
  }
}

/**
 * Simulação de horários disponíveis no frontend — a barbearia não tem
 * sistema de agenda real. Se um dia houver integração de agenda de verdade,
 * substituir esta função por uma chamada à API correspondente.
 */
export function generateSlots(serviceId: ServiceId, barberId: BarberId, date: Date): TimeSlot[] {
  const service = SERVICES.find((s) => s.id === serviceId)
  const durationMin = service?.durationMin ?? 30
  const slots: TimeSlot[] = []

  const seedKey = `${barberId}-${date.toDateString()}-${serviceId}`
  const rand = seededRandom(seedKey)

  for (let minutes = OPEN_HOUR * 60; minutes + durationMin <= CLOSE_HOUR * 60; minutes += durationMin) {
    const hour = Math.floor(minutes / 60)
    const minute = minutes % 60
    const isTaken = rand() < 0.22
    if (isTaken) continue
    slots.push({
      time: `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`,
      period: periodFor(hour),
    })
  }

  return slots
}

export function groupSlotsByPeriod(slots: TimeSlot[]): Record<Period, TimeSlot[]> {
  const groups: Record<Period, TimeSlot[]> = { Manhã: [], Tarde: [], Noite: [] }
  for (const slot of slots) {
    groups[slot.period].push(slot)
  }
  return groups
}
