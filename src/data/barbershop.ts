export type ServiceId = 'corte' | 'sobrancelha'

export interface Service {
  id: ServiceId
  name: string
  price: number
  durationMin: number
  description: string
}

export const SERVICES: Service[] = [
  {
    id: 'corte',
    name: 'Corte de cabelo',
    price: 35,
    durationMin: 30,
    description: 'Corte clássico, na régua ou na tesoura, com acabamento na navalha.',
  },
  {
    id: 'sobrancelha',
    name: 'Sobrancelha',
    price: 10,
    durationMin: 10,
    description: 'Design e acabamento na navalha, no estilo da casa.',
  },
]

export type BarberId = 'nadson' | 'gringo'

export interface Barber {
  id: BarberId
  name: string
  tagline: string
  bio: string
}

export const BARBERS: Barber[] = [
  {
    id: 'nadson',
    name: 'Nadson',
    tagline: 'Barbeiro fundador',
    bio: 'Nadson é um dos fundadores da Barbearia Buenos Aires. Dono da tesoura e da navalha há anos nesse mesmo pedaço do centro de São Paulo, conhece de cor o corte que cada cliente antigo gosta — muitos deles vêm sentando na cadeira dele desde a primeira vez que pisaram na barbearia.',
  },
  {
    id: 'gringo',
    name: 'Gringo',
    tagline: 'Barbeiro fundador',
    bio: 'Gringo é o outro fundador da Barbearia Buenos Aires. Parceiro de confiança do Nadson desde o primeiro dia, segue firme na tesoura com o mesmo jeito direto e caprichoso de sempre — cuidando de cada cliente como cuida da própria casa.',
  },
]
