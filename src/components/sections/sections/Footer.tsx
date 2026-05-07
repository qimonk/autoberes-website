'use client';

import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

const footerLinks = {
  layanan: [
    { label: 'Perpanjang STNK', href: '#layanan' },
    { label: 'Pajak Kendaraan', href: '#layanan' },
    { label: 'Balik Nama', href: '#layanan' },
    { label: 'Mutasi', href: '#layanan' },
    { label: 'BPKB', href: '#layanan' },
    { label: 'Cabut Berkas', href: '#layanan' },
  ],
  perusahaan: [
    { label: 'Tentang Kami', href: '#tentang' },
    { label: 'Testimoni', href: '#testimoni' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Kontak', href: '#kontak' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="#home" className="inline-flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg shadow-orange-500/20">
                <MessageCircle className="h-5 w-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-2xl font-extrabold tracking-tight">
                <span className="text-white">Auto</span>
                <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                  Beres
                </span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-gray-400 max-w-xs">
              Biro jasa STNK & BPKB terpercaya di Bandung. Semua urusan kendaraan Anda, Auto Beres!
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://wa.me/6285150690994"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-gray-400 transition-all hover:bg-[#25D366]/10 hover:text-[#25D366]"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href="mailto:qimonk1989@gmail.com"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-gray-400 transition-all hover:bg-blue-500/10 hover:text-blue-400"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="https://maps.google.com/?q=Jl+Negla+Tengah+No+74+Bandung"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-gray-400 transition-all hover:bg-orange-500/10 hover:text-orange-400"
                aria-label="Lokasi"
              >
                <MapPin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Layanan Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Layanan
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.layanan.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-orange-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Perusahaan Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Perusahaan
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.perusahaan.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-orange-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Kontak
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 shrink-0 text-orange-400" />
                <a
                  href="https://wa.me/6285150690994"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-orange-400 transition-colors"
                >
                  0851-5069-0994
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 shrink-0 text-orange-400" />
                <a
                  href="mailto:qimonk1989@gmail.com"
                  className="text-sm text-gray-400 hover:text-orange-400 transition-colors"
                >
                  qimonk1989@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-orange-400" />
                <span className="text-sm text-gray-400">
                  Jl Negla Tengah No 74 Bandung
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} AutoBeres. Semua hak dilindungi.
          </p>
          <p className="text-sm text-gray-600">
            Biro Jasa STNK & BPKB Terpercaya di Bandung
          </p>
        </div>
      </div>
    </footer>
  );
}
