import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppFloat } from '@/components/whatsapp-float'
import { Hero } from '@/components/sections/hero'
import { Sobre } from '@/components/sections/sobre'
import { Servicos } from '@/components/sections/servicos'
import { Barbeiros } from '@/components/sections/barbeiros'
import { Agendamento } from '@/components/sections/agendamento'
import { Localizacao } from '@/components/sections/localizacao'
import { Contato } from '@/components/sections/contato'

function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Servicos />
        <Sobre />
        <Barbeiros />
        <Agendamento />
        <Localizacao />
        <Contato />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}

export default App
