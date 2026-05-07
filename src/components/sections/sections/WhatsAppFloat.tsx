'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    const tooltipTimer = setTimeout(() => {
      setIsTooltipVisible(true);
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-50 flex items-end gap-3"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {isTooltipVisible && (
              <motion.div
                initial={{ opacity: 0, x: 10, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 10, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="hidden sm:block relative"
              >
                <div className="bg-white dark:bg-navy-800 rounded-xl px-4 py-2.5 shadow-lg border border-border/50">
                  <p className="text-sm font-medium text-foreground whitespace-nowrap">
                    Butuh bantuan? Chat kami!
                  </p>
                </div>
                <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-white dark:bg-navy-800 border-r border-b border-border/50 rotate-[-45deg]" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* WhatsApp Button */}
          <motion.a
            href="https://wa.me/6285150690994"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:scale-110 transition-all duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                '0 10px 25px -5px rgba(37, 211, 102, 0.3)',
                '0 10px 35px -5px rgba(37, 211, 102, 0.5)',
                '0 10px 25px -5px rgba(37, 211, 102, 0.3)',
              ],
            }}
            transition={{
              boxShadow: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
            }}
            aria-label="Chat WhatsApp"
          >
            <MessageCircle className="h-6 w-6" strokeWidth={2.5} />
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
