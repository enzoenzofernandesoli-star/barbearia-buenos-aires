export const BUSINESS = {
  name: 'Barbearia Buenos Aires',
  address: 'Rua Quirino de Andrade, 165, São Paulo - SP',
  addressShort: 'Rua Quirino de Andrade, 165 — São Paulo',
  whatsappNumber: '5511963755999',
  whatsappDisplay: '(11) 96375-5999',
  hours: 'Segunda a Sábado, 09:00 às 19:00',
  mapsEmbedSrc:
    'https://www.google.com/maps?q=Rua+Quirino+de+Andrade,+165,+S%C3%A3o+Paulo,+SP&output=embed',
  mapsDirectionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=Rua+Quirino+de+Andrade,+165,+S%C3%A3o+Paulo,+SP',
} as const

export function whatsappUrl(message: string) {
  return `https://api.whatsapp.com/send?phone=${BUSINESS.whatsappNumber}&text=${encodeURIComponent(message)}`
}
