# AutoBeres - Website Biro Jasa Kendaraan

Website resmi AutoBeres - Biro jasa STNK & BPKB modern, cepat, aman, terpercaya di Bandung.

## 🌐 Live Website

**https://autoberes-website.pages.dev/**

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: TailwindCSS 4 + shadcn/ui
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Cloudflare Pages
- **Repository**: GitHub (auto-deploy)

## 🚀 Cara Install & Run Local

```bash
# Clone repository
git clone https://github.com/qimonk/autoberes-website.git
cd autoberes-website

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 🔗 Connect GitHub

Repository sudah terhubung ke Cloudflare Pages. Setiap push ke branch `main` akan otomatis trigger deployment production.

## ☁️ Deploy ke Cloudflare Pages

### Otomatis (Recommended)
Setiap push ke branch `main` di GitHub akan otomatis deploy ke Cloudflare Pages.

### Manual
```bash
npm run build
npx wrangler pages deploy out --project-name=autoberes-website --branch=main
```

## 🔄 Auto Deploy Workflow

1. Edit code
2. Jalankan `bash auto-deploy.sh "pesan commit"`
3. Script akan otomatis:
   - `git add .`
   - `git commit -m "pesan commit"`
   - `git push origin main`
   - Cloudflare Pages auto-deploy production

## 📱 Fitur Website

- ✅ Responsive (mobile-first)
- ✅ SEO optimized (meta, OpenGraph, JSON-LD)
- ✅ Framer Motion animations
- ✅ Floating WhatsApp button
- ✅ Google Maps embed
- ✅ FAQ accordion
- ✅ Testimonial cards
- ✅ Animated statistics counter
- ✅ Smooth scroll navigation
- ✅ Glassmorphism navbar
- ✅ Dark mode ready

## 📞 Kontak

- **WhatsApp**: [0851-5069-0994](https://wa.me/6285150690994)
- **Email**: qimonk1989@gmail.com
- **Alamat**: Jl Negla Tengah No 74 Bandung
