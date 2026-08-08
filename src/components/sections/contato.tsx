import { MessageCircle } from 'lucide-react'
import { Eyebrow } from '@/components/eyebrow'
import { Reveal } from '@/components/reveal'
import { Button } from '@/components/ui/button'
import { BarberPole } from '@/components/barber-pole'
import { BUSINESS, whatsappUrl } from '@/data/business'

export function Contato() {
  return (
    <section id="contato" className="bg-brand-black-deep px-5 py-20">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <Reveal>
          <BarberPole className="mx-auto h-14 w-3" animated />
          <Eyebrow align="center" className="mt-6">
            Fale com a gente
          </Eyebrow>
          <h2 className="mt-4 font-heading text-3xl font-semibold text-brand-cream sm:text-4xl">
            Chama no WhatsApp
          </h2>
          <p className="mt-3 text-brand-cream/65">
            Dúvidas, horários especiais ou só pra confirmar o corte — fale direto com a Buenos Aires.
          </p>

          <Button variant="whatsapp" size="lg" className="mt-8" asChild>
            <a
              href={whatsappUrl('Olá! Gostaria de falar com a Barbearia Buenos Aires.')}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="size-5" />
              {BUSINESS.whatsappDisplay}
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
