import React from "react";
import { Mail, Phone, MapPin, ShoppingCart, BarChart3, Globe, Facebook, Instagram, Twitter } from "lucide-react";

// Roni Net - Single-file React landing page component with Lucide icons

export default function RoniNetLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white font-sans">
      {/* Top nav */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Inline logo */}
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-green-500 shadow-lg">
            <ShoppingCart className="w-7 h-7 text-white" />
          </div>
          <div className="leading-tight">
            <div className="text-xl font-bold">RONI NET <span className="ml-2 text-lg">📈</span></div>
            <div className="text-xs text-blue-200">E-Ticaret • Reklam • Sosyal Medya</div>
          </div>
        </div>

        <nav className="hidden md:flex gap-6 items-center text-blue-100">
          <a href="#services" className="hover:underline">Hizmetler</a>
          <a href="#work" className="hover:underline">Çözümler</a>
          <a href="#pricing" className="hover:underline">Paketler</a>
          <a href="#contact" className="px-4 py-2 rounded-md bg-white/10 hover:bg-white/20">İletişim</a>
        </nav>
      </header>

      {/* Hero */}
      <main className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <section>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">RONI NET — Dijitalde Zirveye Taşıyoruz</h1>
          <p className="mt-4 text-blue-100 max-w-xl">E-ticaret altyapısından reklam yönetimine, sosyal medya stratejisinden kreatif içerik üretimine kadar; markanız için uçtan uca dijital çözümler sunuyoruz. Kültürden ilham, veriden güç alıyoruz.</p>

          <div className="mt-8 flex gap-4">
            <a href="#contact" className="inline-flex items-center gap-3 px-6 py-3 bg-yellow-400 text-black rounded-lg font-semibold shadow-md"><Globe className="w-5 h-5" /> Hemen Başla</a>
            <a href="#services" className="inline-flex items-center gap-3 px-6 py-3 border border-white/20 rounded-lg"><BarChart3 className="w-5 h-5" /> Hizmetlerimizi Gör</a>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 text-sm text-blue-200">
            <span className="px-3 py-2 bg-white/5 rounded flex items-center gap-2">⚡ Hızlı kurulum</span>
            <span className="px-3 py-2 bg-white/5 rounded flex items-center gap-2">🔒 Güvenli Ödeme</span>
            <span className="px-3 py-2 bg-white/5 rounded flex items-center gap-2">☀️ Kültürel dokunuş</span>
          </div>
        </section>

        <aside className="relative">
          <div className="w-full rounded-2xl bg-gradient-to-tr from-white/5 to-white/3 p-6 shadow-2xl">
            {/* Mockup card */}
            <div className="bg-white/5 p-6 rounded-xl">
              <div className="h-48 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold">RONI NET</div>
                  <div className="text-sm text-white/80 mt-1">E-Ticaret • Reklam • Sosyal</div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="text-center">
                  <div className="text-xs text-blue-200">Aylık Büyüme</div>
                  <div className="text-lg font-semibold">+32%</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-blue-200">Dönüşüm</div>
                  <div className="text-lg font-semibold">+4.8x</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-blue-200">Memnuniyet</div>
                  <div className="text-lg font-semibold">98%</div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative ring with Kurdish colors */}
          <div className="absolute -right-8 -bottom-8 w-36 h-36 rounded-full flex items-center justify-center" aria-hidden>
            <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-green-500 opacity-90 shadow-inner" />
          </div>
        </aside>
      </main>

      {/* Services */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold">Hizmetlerimiz</h2>
        <p className="mt-2 text-blue-100 max-w-2xl">İhtiyaca göre paketlenmiş çözümler — startup'tan kurumsala kadar.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="p-6 rounded-xl bg-white/5">
            <h3 className="font-semibold flex items-center gap-2"><ShoppingCart className="w-5 h-5" /> E-Ticaret Kurulumu</h3>
            <p className="mt-2 text-blue-200 text-sm">Ürün yönetimi, ödeme entegrasyonu, kargo ve müşteri deneyimi optimizasyonu.</p>
          </article>

          <article className="p-6 rounded-xl bg-white/5">
            <h3 className="font-semibold flex items-center gap-2"><BarChart3 className="w-5 h-5" /> Dijital Reklamcılık</h3>
            <p className="mt-2 text-blue-200 text-sm">Google & Meta kampanyaları, performans odaklı B2C/B2B stratejileri.</p>
          </article>

          <article className="p-6 rounded-xl bg-white/5">
            <h3 className="font-semibold flex items-center gap-2"><Globe className="w-5 h-5" /> Sosyal Medya & İçerik</h3>
            <p className="mt-2 text-blue-200 text-sm">Kreatif içerik, büyüme stratejileri ve topluluk yönetimi.</p>
          </article>
        </div>
      </section>

      {/* Work / Case highlights */}
      <section id="work" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold">Öne Çıkan Çalışmalar</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <div key={i} className="rounded-xl overflow-hidden bg-white/4">
              <div className="h-40 bg-gradient-to-r from-blue-600 to-blue-500 flex items-center justify-center"> 
                <div className="text-center">
                  <div className="font-bold">Proje {i}</div>
                  <div className="text-sm text-white/80">Dönüşüm +{20+i}%</div>
                </div>
              </div>
              <div className="p-4 text-blue-200 text-sm">Kısa açıklama ve elde edilen sonuçların öne çıktığı bölüm.</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold">Paketler</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-white/5">
            <div className="text-lg font-semibold">Başlangıç</div>
            <div className="mt-2 text-blue-200">Küçük işletmeler için ideal</div>
            <div className="mt-4 font-bold">₺1.999 / ay</div>
            <button className="mt-6 w-full py-2 rounded bg-yellow-400 text-black font-semibold">Seç</button>
          </div>

          <div className="p-6 rounded-xl bg-white/5 border-2 border-yellow-400">
            <div className="text-lg font-semibold">Büyüme</div>
            <div className="mt-2 text-blue-200">Hızlı büyümek isteyenler</div>
            <div className="mt-4 font-bold">₺4.999 / ay</div>
            <button className="mt-6 w-full py-2 rounded bg-yellow-400 text-black font-semibold">Seç</button>
          </div>

          <div className="p-6 rounded-xl bg-white/5">
            <div className="text-lg font-semibold">Kurumsal</div>
            <div className="mt-2 text-blue-200">Özel çözümler</div>
            <div className="mt-4 font-bold">Özel fiyat</div>
            <button className="mt-6 w-full py-2 rounded bg-yellow-400 text-black font-semibold">Görüş</button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <footer id="contact" className="max-w-6xl mx-auto px-6 py-12">
        <div className="rounded-xl bg-white/6 p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-2xl font-bold">İletişim</h3>
            <p className="mt-2 text-blue-100">Projeni anlatalım. 48 saat içinde dönüş garantisi.</p>

            <div className="mt-6 space-y-3 text-blue-100">
              <div className="flex items-center gap-2"><Mail className="w-4 h-4" /> hello@roninet.example</div>
              <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> +90 5XX XXX XX XX</div>
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Türkiye / Kürdistan (temsilci)</div>
            </div>

            <div className="mt-6 flex gap-4">
              <a href="#" className="hover:text-yellow-400"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-yellow-400"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-yellow-400"><Twitter className="w-5 h-5" /></a>
            </div>

            <div className="mt-6">
              <a href="#" className="inline-block px-5 py-3 bg-yellow-400 text-black rounded font-semibold">Teklif Al</a>
            </div>
          </div>

          <form className="p-4 bg-white/5 rounded-lg">
            <label className="block text-sm text-blue-200">Adınız</label>
            <input className="w-full mt-1 p-2 rounded bg-white/6 text-white outline-none" placeholder="Adınız" />
            <label className="block text-sm text-blue-200 mt-3">E-posta</label>
            <input className="w-full mt-1 p-2 rounded bg-white/6 text-white outline-none" placeholder="mail@ornek.com" />
            <label className="block text-sm text-blue-200 mt-3">Mesaj</label>
            <textarea className="w-full mt-1 p-2 rounded bg-white/6 text-white outline-none" rows={4} placeholder="Kısa bir açıklama..." />
            <button type="submit" className="mt-4 w-full py-2 rounded bg-yellow-400 text-black font-semibold">Gönder</button>
          </form>
        </div>

        <div className="mt-6 text-center text-blue-200 text-sm">© {new Date().getFullYear()} RONI NET — Tüm hakları saklıdır.</div>
      </footer>
    </div>
  );
}
