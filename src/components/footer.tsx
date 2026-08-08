import { BUSINESS } from '@/data/business'

export function Footer() {
  return (
    <footer className="border-t border-brand-gold/10 bg-brand-black px-5 py-8 text-center">
      <p className="font-heading text-lg font-semibold text-brand-cream">Barbearia Buenos Aires</p>
      <p className="mt-1 text-xs text-brand-cream/50">{BUSINESS.address}</p>
      <p className="mt-4 text-xs text-brand-cream/35">
        © {new Date().getFullYear()} Barbearia Buenos Aires. Todos os direitos reservados.
      </p>
    </footer>
  )
}
