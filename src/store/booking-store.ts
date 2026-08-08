import { create } from 'zustand'
import type { BarberId, ServiceId } from '@/data/barbershop'

interface BookingState {
  serviceId: ServiceId | null
  date: Date | null
  barberId: BarberId | null
  time: string | null
  setService: (id: ServiceId) => void
  setDate: (date: Date) => void
  setBarber: (id: BarberId) => void
  setTime: (time: string) => void
  reset: () => void
  scrollToBooking: () => void
}

export const useBookingStore = create<BookingState>((set) => ({
  serviceId: null,
  date: null,
  barberId: null,
  time: null,
  setService: (serviceId) => set({ serviceId, time: null }),
  setDate: (date) => set({ date, time: null }),
  setBarber: (barberId) => set({ barberId, time: null }),
  setTime: (time) => set({ time }),
  reset: () => set({ serviceId: null, date: null, barberId: null, time: null }),
  scrollToBooking: () => {
    document.getElementById('agendamento')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  },
}))
