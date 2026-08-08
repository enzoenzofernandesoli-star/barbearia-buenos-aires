import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import { MapPin, ScissorsIcon } from 'lucide-react'
import { BarberPole } from '@/components/barber-pole'
import { BuenosAiresSkyline } from '@/components/buenos-aires-skyline'
import { SectionCut } from '@/components/section-cut'
import { Button } from '@/components/ui/button'
import { BUSINESS } from '@/data/business'
import { useBookingStore } from '@/store/booking-store'

export function Hero() {
  const scrollToBooking = useBookingStore((s) => s.scrollToBooking)
  const prefersReducedMotion = useReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const rawParallaxX = useTransform(scrollYProgress, [0, 1], [0, -180])
  const parallaxX = useSpring(rawParallaxX, { stiffness: 45, damping: 16, mass: 0.6 })

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative overflow-hidden bg-brand-black-deep px-5 pb-28 pt-16 sm:pb-32 sm:pt-24"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.09]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 15%, #d4af6a 0, transparent 45%), radial-gradient(circle at 85% 5%, #b0262c 0, transparent 40%), repeating-linear-gradient(115deg, #f4ecd8 0 1px, transparent 1px 64px)',
        }}
        aria-hidden="true"
      />

      {/*
        Horizonte de Buenos Aires: estende propositalmente até (e além) da
        base da seção, para que o corte diagonal (SectionCut, renderizado
        depois no DOM) "fatie" os prédios e dê sensação de profundidade.
        O deslocamento horizontal acompanha o scroll da página.
      */}
      <motion.div
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
        animate={{ opacity: 0.16, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
        style={{ x: prefersReducedMotion ? 0 : parallaxX }}
        className="pointer-events-none absolute inset-x-[-10%] bottom-0 h-32 text-brand-gold sm:h-44 lg:h-52"
      >
        <BuenosAiresSkyline className="h-full w-full" />
      </motion.div>

      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex items-center gap-4"
        >
          <BarberPole className="h-20 w-4" animated />
          <ScissorsIcon className="size-8 text-brand-gold/70" strokeWidth={1.5} />
          <BarberPole className="h-20 w-4" animated />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
          className="mt-6 text-xs font-semibold uppercase tracking-[0.35em] text-brand-gold-soft"
        >
          Tradição de bairro desde sempre
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
          className="mt-3 font-script text-6xl leading-none text-brand-gold sm:text-7xl"
        >
          Barbearia
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
          className="mt-1 font-heading text-4xl font-bold uppercase tracking-[0.12em] sm:text-5xl"
          style={{
            backgroundImage:
              'linear-gradient(to bottom, #9DC0DE 0%, #9DC0DE 32%, #F2EDE1 32%, #F2EDE1 68%, #9DC0DE 68%, #9DC0DE 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Buenos Aires
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
          className="mt-6 flex items-center gap-2 text-sm text-brand-cream/70"
        >
          <MapPin className="size-4 text-brand-gold" />
          <span>{BUSINESS.addressShort}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
          className="mt-9"
        >
          <Button size="lg" onClick={scrollToBooking}>
            Agendar horário
          </Button>
        </motion.div>
      </div>

      <SectionCut className="absolute inset-x-0 bottom-0 h-14 w-full sm:h-20" fill="#1a1210" />
    </section>
  )
}
