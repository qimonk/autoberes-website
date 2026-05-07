'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const contactInfo = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '0851-5069-0994',
    href: 'https://wa.me/6285150690994',
    color: 'bg-green-500/10 text-green-500',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'qimonk1989@gmail.com',
    href: 'mailto:qimonk1989@gmail.com',
    color: 'bg-blue-500/10 text-blue-500',
  },
  {
    icon: MapPin,
    label: 'Alamat',
    value: 'Jl Negla Tengah No 74 Bandung',
    href: 'https://maps.google.com/?q=Jl+Negla+Tengah+No+74+Bandung',
    color: 'bg-orange-500/10 text-orange-500',
  },
  {
    icon: Clock,
    label: 'Jam Operasional',
    value: 'Senin - Sabtu, 08:00 - 17:00',
    href: null,
    color: 'bg-purple-500/10 text-purple-500',
  },
];

export default function Kontak() {
  return (
    <section id="kontak" className="py-20 md:py-28 bg-white dark:bg-navy-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900 dark:text-white tracking-tight">
            Hubungi Kami
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Siap membantu Anda kapan saja. Jangan ragu untuk menghubungi kami!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {contactInfo.map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="group flex items-center gap-4 rounded-xl border border-border/50 bg-background p-5 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.color} shrink-0`}>
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-semibold text-foreground">{item.value}</p>
                  </div>
                </div>
              );

              if (item.href) {
                return (
                  <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                    {content}
                  </a>
                );
              }
              return <div key={item.label}>{content}</div>;
            })}

            <div className="pt-4">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-8 py-6 text-base rounded-xl shadow-lg shadow-green-500/20 hover:shadow-green-500/30 transition-all duration-300"
              >
                <a href="https://wa.me/6285150690994" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  Chat WhatsApp Sekarang
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Google Maps Embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-2xl overflow-hidden border border-border/50 shadow-lg h-[400px] lg:h-full min-h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.0!2d107.6191!3d-6.9175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6358!2sJl+Negla+Tengah+No+74+Bandung!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi AutoBeres - Jl Negla Tengah No 74 Bandung"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
