'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Berapa lama proses perpanjangan STNK?',
    answer:
      'Proses perpanjangan STNK biasanya memakan waktu 1-3 hari kerja. Untuk STNK 5 tahunan, proses bisa memakan waktu 3-7 hari kerja tergantung kondisi kendaraan dan pemeriksaan fisik.',
  },
  {
    question: 'Apakah saya perlu datang langsung ke kantor?',
    answer:
      'Tidak perlu! Anda cukup mengirimkan berkas melalui WhatsApp atau kurir kami. Semua proses kami yang urus, Anda tinggal terima hasilnya.',
  },
  {
    question: 'Berapa biaya jasa AutoBeres?',
    answer:
      'Biaya jasa kami bervariasi tergantung jenis layanan. Kami menjamin transparansi biaya tanpa biaya tersembunyi. Hubungi kami untuk mendapatkan estimasi biaya gratis.',
  },
  {
    question: 'Apakah prosesnya legal dan resmi?',
    answer:
      'Tentu saja! Semua proses pengurusan dokumen dilakukan melalui jalur resmi SAMSAT dan instansi terkait. Anda akan mendapatkan dokumen asli dan sah secara hukum.',
  },
  {
    question: 'Apa saja berkas yang perlu disiapkan?',
    answer:
      'Berkas yang diperlukan tergantung jenis layanan. Umumnya diperlukan KTP, STNK asli, BPKB asli, dan formulir yang kami sediakan. Tim kami akan membantu Anda mempersiapkan semua berkas.',
  },
  {
    question: 'Apakah melayani area di luar Bandung?',
    answer:
      'Ya, kami melayani area Jabodetabek dan beberapa kota besar di Jawa Barat. Untuk area di luar jangkauan, kami tetap bisa membantu proses yang tidak memerlukan kehadiran fisik kendaraan.',
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-slate-50 dark:bg-navy-900">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900 dark:text-white tracking-tight">
            Pertanyaan Umum
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Jawaban untuk pertanyaan yang sering diajukan
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border/50 bg-white dark:bg-navy-800/50 rounded-xl px-6 data-[state=open]:border-orange-500/30 data-[state=open]:shadow-md transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-base font-semibold text-navy-900 dark:text-white hover:text-orange-500 hover:no-underline py-5 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
