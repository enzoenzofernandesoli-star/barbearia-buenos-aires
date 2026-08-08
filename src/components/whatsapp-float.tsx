import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { BUSINESS, whatsappUrl } from '@/data/business'

export function WhatsAppFloat() {
  return (
    <motion.a
      href={whatsappUrl('Olá! Gostaria de agendar um horário na Barbearia Buenos Aires.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chamar a Barbearia Buenos Aires no WhatsApp: ${BUSINESS.whatsappDisplay}`}
      className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-[#062712] shadow-[0_6px_20px_rgba(0,0,0,0.4)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
      initial={{ opacity: 0, y: 16, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.6, ease: 'easeOut' }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
    >
      <MessageCircle className="size-7" fill="#062712" strokeWidth={0} />
    </motion.a>
  )
}
