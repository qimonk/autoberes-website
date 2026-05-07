'use client';

import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function CTASection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #0a1628 0%, #172e4d 50%, #0f1f35 100%)',
        }}
      />

      {/* Decorative orbs */}
      <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: CTA Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-orange-500/5 rounded-3xl blur-3xl" />
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              <Image
                src="/images/cta-illustration.png"
                alt="AutoBeres - Hubungi Kami"
                width={420}
                height={380}
                className="w-full max-w-sm drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>

          {/* Right: Text & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1.5 text-sm font-medium text-orange-400 mb-6 lg:mb-8">
              <MessageCircle className="h-4 w-4" />
              Siap Membantu Anda
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
              Urus Kendaraan Anda{' '}
              <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                Sekarang
              </span>
            </h2>

            <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-xl leading-relaxed">
              Jangan biarkan urusan dokumen kendaraan menghambat aktivitas Anda.
              Konsultasikan kebutuhan Anda sekarang — gratis!
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row items-start gap-4"
            >
              <Button
                asChild
                size="lg"
                className="group bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300"
              >
                <a
                  href="https://wa.me/6285150690994"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat via WhatsApp
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold px-8 py-6 text-lg rounded-xl backdrop-blur-sm transition-all duration-300"
              >
                <a href="tel:+6285150690994">
                  Hubungi: 0851-5069-0994
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
