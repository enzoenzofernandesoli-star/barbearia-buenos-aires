import { Eyebrow } from '@/components/eyebrow'
import { Reveal } from '@/components/reveal'

export function Sobre() {
  return (
    <section id="sobre" className="bg-brand-black-deep px-5 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <Eyebrow align="center">Nossa história</Eyebrow>
          <h2 className="mt-4 font-heading text-3xl font-semibold text-brand-cream sm:text-4xl">
            Uma amizade que virou barbearia
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-brand-cream/75 sm:text-lg">
            <p>
              Nadson e Gringo são amigos de longa data, e foi dessa amizade que nasceu a Barbearia
              Buenos Aires — os dois se juntaram para abrir a casa juntos, cada um com seu jeito na
              tesoura e na navalha.
            </p>
            <p>
              De lá pra cá, o endereço mudou, mas o espírito continua o mesmo: navalha afiada,
              tesoura na mão certa e o mesmo cuidado de sempre com quem senta na cadeira. Sem
              frescura, sem enrolação — barbearia de bairro, do jeito que sempre foi.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
