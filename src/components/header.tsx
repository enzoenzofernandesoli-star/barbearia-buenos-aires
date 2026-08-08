import { useBookingStore } from '@/store/booking-store'
import { Button } from '@/components/ui/button'

const NAV_LINKS = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#barbeiros', label: 'Barbeiros' },
  { href: '#localizacao', label: 'Localização' },
  { href: '#contato', label: 'Contato' },
]

export function Header() {
  const scrollToBooking = useBookingStore((s) => s.scrollToBooking)

  return (
    <header className="sticky top-0 z-40 border-b border-brand-gold/15 bg-brand-black/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#hero" className="font-heading text-lg font-semibold text-brand-cream">
          Buenos Aires
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-brand-cream/80 md:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-brand-gold">
              {link.label}
            </a>
          ))}
        </nav>
        <Button size="sm" onClick={scrollToBooking}>
          Agendar
        </Button>
      </div>
    </header>
  )
}
