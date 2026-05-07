'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle, Shield, Zap, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'

const floatingOrbs = [
  { size: 400, x: '10%', y: '20%', color: 'rgba(234, 88, 12, 0.08)', delay: 0 },
  { size: 300, x: '80%', y: '10%', color: 'rgba(59, 130, 246, 0.06)', delay: 1.5 },
  { size: 250, x: '70%', y: '70%', color: 'rgba(234, 88, 12, 0.05)', delay: 3 },
  { size: 350, x: '20%', y: '75%', color: 'rgba(37, 99, 235, 0.05)', delay: 2 },
]

const stats = [
  { icon: Shield, value: '1000+', label: 'Dokumen Selesai' },
  { icon: Users, value: '500+', label: 'Pelanggan Puas' },
  { icon: Zap, value: 'Respon', label: 'Cepat' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
}

const floatVariants = {
  animate: (delay: number) => ({
    y: [0, -20, 0],
    x: [0, 10, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: 'easeInOut',
      delay,
    },
  }),
}

const pulseVariants = {
  animate: {
    scale: [1, 1.03, 1],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #0a1628 0%, #0f1f35 50%, #0d1a2d 100%)',
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating gradient orbs */}
      {floatingOrbs.map((orb, i) => (
        <motion.div
          key={i}
          custom={orb.delay}
          variants={floatVariants}
          animate="animate"
          className="absolute rounded-full pointer-events-none"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            filter: 'blur(40px)',
          }}
        />
      ))}

      {/* Top decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Badge */}
          <motion.div variants={fadeUpVariants} className="mb-6 sm:mb-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-orange-400 backdrop-blur-sm">
              <Shield className="h-3.5 w-3.5" />
              Biro Jasa Terpercaya Sejak 2018
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUpVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-white"
          >
            Semua Urusan{' '}
            <br className="hidden sm:block" />
            Kendaraan,{' '}
            <span className="relative">
              <span className="relative z-10 bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                Auto Beres
              </span>
              <span className="absolute -bottom-1 left-0 right-0 h-3 bg-orange-500/20 rounded-sm" />
            </span>
            .
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUpVariants}
            className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed"
          >
            Biro jasa STNK &amp; BPKB cepat, aman, terpercaya.{' '}
            <span className="text-gray-400">
              Urus semua dokumen kendaraan Anda tanpa ribet, langsung dari mana saja.
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUpVariants}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <motion.div variants={pulseVariants} animate="animate">
              <Button
                asChild
                size="lg"
                className="group bg-orange-500 hover:bg-orange-600 text-white font-semibold px-7 py-6 text-base rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300"
              >
                <a href="#kontak">
                  Konsultasi Gratis
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </motion.div>

            <motion.div variants={pulseVariants} animate="animate">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="group border-green-500/40 bg-green-500/10 hover:bg-green-500/20 hover:border-green-500/60 text-green-400 font-semibold px-7 py-6 text-base rounded-xl backdrop-blur-sm transition-all duration-300"
              >
                <a
                  href="https://wa.me/6285150690994"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Hubungi WhatsApp
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1, ease: [0.25, 0.4, 0.25, 1] }}
        className="relative z-10 mt-auto"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12">
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-xl p-5 sm:p-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0 sm:divide-x sm:divide-white/10">
              {stats.map((stat, i) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 + i * 0.15 }}
                    className="flex items-center gap-3 sm:px-8"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-500/10">
                      <Icon className="h-5 w-5 text-orange-400" />
                    </div>
                    <div>
                      <p className="text-lg sm:text-xl font-bold text-white">
                        {stat.value}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-400">
                        {stat.label}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a1628] to-transparent pointer-events-none" />
    </section>
  )
}
