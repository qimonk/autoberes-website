'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#layanan', label: 'Layanan' },
  { href: '#tentang', label: 'Tentang' },
  { href: '#testimoni', label: 'Testimoni' },
  { href: '#faq', label: 'FAQ' },
  { href: '#kontak', label: 'Kontak' },
];

const WHATSAPP_URL = 'https://wa.me/6285150690994';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleSectionObserver = () => {
      const sections = navLinks.map((link) => link.href.replace('#', ''));
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        { rootMargin: '-40% 0px -60% 0px' }
      );

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });

      return observer;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    const observer = handleSectionObserver();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setIsMobileMenuOpen(false);

      const targetId = href.replace('#', '');
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        const navHeight = 80;
        const targetPosition = targetEl.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    },
    []
  );

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0a1628]/90 shadow-lg shadow-black/10 backdrop-blur-xl'
            : 'bg-[#0a1628]/60 backdrop-blur-md'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="relative z-10 flex items-center gap-2"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#f97316] to-[#ea580c] shadow-lg shadow-orange-500/20">
                <MessageCircle className="h-5 w-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-2xl font-extrabold tracking-tight">
                <span className="bg-gradient-to-r from-[#1e3a5f] via-[#3b6ea5] to-[#f97316] bg-clip-text text-transparent">
                  Auto
                </span>
                <span className="bg-gradient-to-r from-[#f97316] to-[#ea580c] bg-clip-text text-transparent">
                  Beres
                </span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? 'text-[#f97316]'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-[#f97316] to-[#ea580c]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA + WhatsApp */}
            <div className="hidden items-center gap-3 lg:flex">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  size="sm"
                  className="gap-2 rounded-full bg-[#25D366] px-5 font-semibold text-white shadow-lg shadow-green-500/25 transition-all duration-200 hover:bg-[#20bd5a] hover:shadow-green-500/40"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </Button>
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center gap-3 lg:hidden">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  size="sm"
                  className="gap-2 rounded-full bg-[#25D366] px-4 font-semibold text-white shadow-lg shadow-green-500/25 hover:bg-[#20bd5a]"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span className="hidden sm:inline">WhatsApp</span>
                </Button>
              </a>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative z-10 flex h-10 w-10 items-center justify-center rounded-lg text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <X className="h-6 w-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Menu className="h-6 w-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="fixed inset-x-0 top-20 z-40 mx-4 overflow-hidden rounded-2xl border border-white/10 bg-[#0a1628]/95 backdrop-blur-xl shadow-2xl shadow-black/40 lg:hidden"
            >
              <div className="p-4">
                <nav className="flex flex-col gap-1">
                  {navLinks.map((link, index) => {
                    const sectionId = link.href.replace('#', '');
                    const isActive = activeSection === sectionId;

                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.2 }}
                      >
                        <Link
                          href={link.href}
                          onClick={(e) => handleNavClick(e, link.href)}
                          className={`flex items-center rounded-xl px-4 py-3 text-base font-medium transition-all duration-200 ${
                            isActive
                              ? 'bg-[#f97316]/10 text-[#f97316]'
                              : 'text-gray-300 hover:bg-white/5 hover:text-white'
                          }`}
                        >
                          {link.label}
                          {isActive && (
                            <div className="ml-auto h-1.5 w-1.5 rounded-full bg-[#f97316]" />
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                <div className="mt-4 border-t border-white/10 pt-4">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex"
                  >
                    <Button
                      className="w-full gap-2 rounded-xl bg-[#25D366] py-6 text-base font-semibold text-white shadow-lg shadow-green-500/25 hover:bg-[#20bd5a]"
                    >
                      <MessageCircle className="h-5 w-5" />
                      Hubungi via WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
