'use client';

import { motion } from 'framer-motion';
import {
  FileText,
  Receipt,
  RefreshCw,
  ArrowRightLeft,
  BookOpen,
  FolderOpen,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    icon: FileText,
    title: 'Perpanjang STNK',
    description:
      'Perpanjangan STNK tahunan & 5 tahunan. Proses cepat tanpa repot.',
  },
  {
    icon: Receipt,
    title: 'Pajak Kendaraan',
    description:
      'Pembayaran pajak kendaraan roda 2 & roda 4. Tepat waktu & transparan.',
  },
  {
    icon: RefreshCw,
    title: 'Balik Nama',
    description:
      'Proses balik nama kendaraan. Legal, aman, dan terjamin.',
  },
  {
    icon: ArrowRightLeft,
    title: 'Mutasi',
    description:
      'Mutasi kendaraan antar kota/provinsi. Prosedur resmi & hasil pasti.',
  },
  {
    icon: BookOpen,
    title: 'BPKB',
    description:
      'Pengurusan BPKB baru, hilang, atau rusak. Aman & terpercaya.',
  },
  {
    icon: FolderOpen,
    title: 'Cabut Berkas',
    description:
      'Pencabutan berkas kendaraan. Proses lancar tanpa hambatan.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function Layanan() {
  return (
    <section
      id="layanan"
      className="bg-white dark:bg-navy-950 py-20 md:py-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-14 md:mb-18"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900 dark:text-white tracking-tight">
            Layanan Kami
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Solusi lengkap untuk semua urusan kendaraan Anda
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.title} variants={cardVariants}>
                <Card className="group relative overflow-hidden border border-border/50 bg-background hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-xl h-full">
                  {/* Orange accent line on hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                  <CardContent className="p-6 md:p-8 flex flex-col items-start gap-4">
                    {/* Icon Circle */}
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-navy-800 to-navy-700 dark:from-navy-600 dark:to-navy-700 shadow-md shrink-0">
                      <Icon className="w-6 h-6 text-white" strokeWidth={1.8} />
                    </div>

                    {/* Text */}
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-navy-900 dark:text-white">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
