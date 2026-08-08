import { Navigation } from 'lucide-react'
import { Eyebrow } from '@/components/eyebrow'
import { Reveal } from '@/components/reveal'
import { Button } from '@/components/ui/button'
import { BUSINESS } from '@/data/business'

export function Localizacao() {
  return (
    <section id="localizacao" className="bg-brand-black px-5 py-20">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <Eyebrow align="center">Onde estamos</Eyebrow>
          <h2 className="mt-4 text-center font-heading text-3xl font-semibold text-brand-cream sm:text-4xl">
            {BUSINESS.address}
          </h2>
          <p className="mt-2 text-center text-sm text-brand-cream/60">{BUSINESS.hours}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 overflow-hidden rounded-xl border border-brand-gold/20">
            <iframe
              title="Mapa — Barbearia Buenos Aires"
              src={BUSINESS.mapsEmbedSrc}
              className="h-80 w-full grayscale-[30%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="mt-6 flex justify-center">
            <Button size="lg" asChild>
              <a href={BUSINESS.mapsDirectionsUrl} target="_blank" rel="noopener noreferrer">
                <Navigation className="size-5" />
                Como chegar
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
