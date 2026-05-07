import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import Layanan from '@/components/sections/Layanan';
import Keunggulan from '@/components/sections/Keunggulan';
import Statistik from '@/components/sections/Statistik';
import Testimoni from '@/components/sections/Testimoni';
import FAQ from '@/components/sections/FAQ';
import CTASection from '@/components/sections/CTASection';
import Kontak from '@/components/sections/Kontak';
import Footer from '@/components/sections/Footer';
import WhatsAppFloat from '@/components/sections/WhatsAppFloat';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Layanan />
        <Keunggulan />
        <Statistik />
        <Testimoni />
        <FAQ />
        <CTASection />
        <Kontak />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
