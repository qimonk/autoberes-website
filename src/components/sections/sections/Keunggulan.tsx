'use client';

import { motion } from 'framer-motion';
import { Zap, Shield, Eye, Award, Clock } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Image from 'next/image';

interface Advantage {
  icon: LucideIcon;
  title: string;
  description: string;
}

const advantages: Advantage[] = [
  {
    icon: Zap,
    title: 'Cepat',
    description:
      'Proses pengurusan dokumen kendaraan Anda diselesaikan dengan cepat dan tepat waktu, tanpa perlu menunggu lama.',
  },
  {
    icon: Shield,
    title: 'Aman',
    description:
      'Semua proses dilakukan secara legal dan resmi. Dokumen Anda aman di tangan kami dengan jaminan kepastian hukum.',
  },
  {
    icon: Eye,
    title: 'Transparan',
    description:
      'Biaya jelas tanpa biaya tersembunyi. Anda mendapatkan informasi lengkap sebelum proses dimulai.',
  },
  {
    icon: Award,
    title: 'Profesional',
    description:
      'Tim berpengalaman yang memahami seluk-beluk pengurusan dokumen kendaraan. Pelayanan ramah dan solutif.',
  },
  {
    icon: Clock,
    title: 'Berpengalaman',
    description:
      'Telah melayani ribuan pelanggan dengan tingkat keberhasilan tinggi. Dipercaya sejak tahun 2018.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const leftVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

function AdvantageItem({
  advantage,
  index,
}: {
  advantage: Advantage;
  index: number;
}) {
  const Icon = advantage.icon;

  return (
    <motion.div
      variants={itemVariants}
      className="group relative flex items-start gap-4 rounded-2xl p-5 transition-colors duration-300 hover:bg-white/60"
    >
      {/* Connector line for desktop */}
      {index < advantages.length - 1 && (
        <div className="absolute bottom-0 left-[2.5rem] top-[4.5rem] hidden w-px bg-gradient-to-b from-slate-200 to-transparent md:block" />
      )}

      {/* Icon */}
      <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-slate-800 to-slate-600 shadow-lg shadow-slate-900/20 transition-transform duration-300 group-hover:scale-110">
        <Icon className="h-5 w-5 text-white" strokeWidth={2} />
      </div>

      {/* Content */}
      <div className="min-w-0 pt-1">
        <h3 className="text-lg font-bold tracking-tight text-slate-900">
          {advantage.title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
          {advantage.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Keunggulan() {
  return (
    <section
      id="tentang"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50"
    >
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-slate-100/60 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-slate-100/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20"
        >
          {/* Left Column — Heading, Description & Image */}
          <motion.div variants={leftVariants} className="lg:sticky lg:top-32">
            <span className="inline-block rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-600 shadow-sm">
              Keunggulan Kami
            </span>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
              Mengapa{' '}
              <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                AutoBeres
              </span>
              ?
            </h2>

            <p className="mt-5 max-w-md text-lg leading-relaxed text-slate-500">
              Keunggulan yang menjadikan kami pilihan terbaik
            </p>

            <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-400">
              Kami memahami bahwa pengurusan dokumen kendaraan bisa menjadi
              proses yang memakan waktu dan rumit. Itulah mengapa AutoBeres hadir
              — untuk memberikan solusi yang simpel, andal, dan terpercaya.
            </p>

            {/* About illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-200/30 to-blue-200/30 rounded-2xl blur-2xl" />
              <Image
                src="/images/about-illustration.png"
                alt="AutoBeres - Tim Profesional"
                width={500}
                height={400}
                className="relative w-full max-w-md rounded-2xl"
              />
            </motion.div>

            {/* Stats row */}
            <div className="mt-8 flex flex-wrap gap-8">
              <div>
                <p className="text-3xl font-extrabold text-slate-900">5K+</p>
                <p className="mt-1 text-sm text-slate-400">Pelanggan Puas</p>
              </div>
              <div className="h-12 w-px bg-slate-200" />
              <div>
                <p className="text-3xl font-extrabold text-slate-900">98%</p>
                <p className="mt-1 text-sm text-slate-400">Tingkat Keberhasilan</p>
              </div>
              <div className="h-12 w-px bg-slate-200" />
              <div>
                <p className="text-3xl font-extrabold text-slate-900">7+</p>
                <p className="mt-1 text-sm text-slate-400">Tahun Pengalaman</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Advantage Items */}
          <div className="flex flex-col">
            {advantages.map((advantage, index) => (
              <AdvantageItem
                key={advantage.title}
                advantage={advantage}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
