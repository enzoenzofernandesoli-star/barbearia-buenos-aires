import { create } from 'zustand'
import type { BarberId, ServiceId } from '@/data/barbershop'

interface BookingState {
  serviceIds: ServiceId[]
  date: Date | null
  barberId: BarberId | null
  time: string | null
  toggleService: (id: ServiceId) => void
  setDate: (date: Date) => void
  setBarber: (id: BarberId) => void
  setTime: (time: string) => void
  reset: () => void
  scrollToBooking: () => void
}

export const useBookingStore = create<BookingState>((set) => ({
  serviceIds: [],
  date: null,
  barberId: null,
  time: null,
  toggleService: (id) =>
    set((state) => ({
      serviceIds: state.serviceIds.includes(id)
        ? state.serviceIds.filter((s) => s !== id)
        : [...state.serviceIds, id],
      time: null,
    })),
  setDate: (date) => set({ date, time: null }),
  setBarber: (barberId) => set({ barberId, time: null }),
  setTime: (time) => set({ time }),
  reset: () => set({ serviceIds: [], date: null, barberId: null, time: null }),
  scrollToBooking: () => {
    document.getElementById('agendamento')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  },
}))
