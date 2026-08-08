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
              Antes de existir uma placa na porta, já existia o Nadson cortando cabelo no mesmo
              pedaço do centro de São Paulo — o tipo de barbeiro que sabe de cor o corte que cada
              cliente antigo gosta, sem precisar perguntar.
            </p>
            <p>
              Foi aí que chegou o Gringo, direto de Buenos Aires, trazendo na bagagem o estilo e a
              tradição das barbearias argentinas. A amizade entre os dois virou sociedade, e a
              sociedade virou a Barbearia Buenos Aires — nome que carrega, ao mesmo tempo, a origem
              do Gringo e a nova casa que os dois construíram juntos.
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
