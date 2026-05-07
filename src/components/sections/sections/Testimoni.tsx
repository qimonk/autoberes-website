'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Budi Santoso',
    role: 'Pegawai Swasta',
    quote: 'Perpanjang STNK jadi gampang banget. Cukup kirim berkas via WhatsApp, tinggal tunggu selesai. Recommended!',
    rating: 5,
    initials: 'BS',
  },
  {
    name: 'Siti Rahayu',
    role: 'Ibu Rumah Tangga',
    quote: 'Pelayanannya ramah dan profesional. Balik nama kendaraan saya selesai lebih cepat dari estimasi. Terima kasih AutoBeres!',
    rating: 5,
    initials: 'SR',
  },
  {
    name: 'Ahmad Fauzi',
    role: 'Pengusaha',
    quote: 'Sudah 3 kali pakai jasa AutoBeres untuk urusan pajak kendaraan. Selalu transparan soal biaya dan prosesnya.',
    rating: 5,
    initials: 'AF',
  },
  {
    name: 'Diana Putri',
    role: 'Dokter',
    quote: 'Mutasi kendaraan dari Jakarta ke Bandung lancar jaya. Tim AutoBeres sangat membantu dari awal sampai selesai.',
    rating: 5,
    initials: 'DP',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
  },
};

export default function Testimoni() {
  return (
    <section id="testimoni" className="py-20 md:py-28 bg-white dark:bg-navy-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900 dark:text-white tracking-tight">
            Apa Kata Mereka?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Testimoni pelanggan yang telah mempercayakan urusan kendaraan mereka kepada AutoBeres
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {testimonials.map((t) => (
            <motion.div key={t.name} variants={cardVariants}>
              <Card className="group h-full border border-border/50 bg-background rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6 md:p-8">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-orange-400 text-orange-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-base leading-relaxed text-foreground/80 mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-navy-700 to-navy-900 text-sm font-bold text-white shrink-0">
                      {t.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{t.name}</p>
                      <p className="text-sm text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
