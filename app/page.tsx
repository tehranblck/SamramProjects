import Image from "next/image";

export default function Home() {
  return (
    <div style={{ backgroundImage: 'url(/mn.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      className="min-h-screen bg-gradient-to-br from-stone-900/90 via-stone-800/90 to-stone-900/90">
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="max-w-3xl mx-auto text-center space-y-8 bg-white/10 backdrop-blur-md backdrop-brightness-50 rounded-3xl p-8 shadow-2xl border border-white/10">
          {/* Logo Container */}
          <div className="flex flex-col items-center space-y-6">
            <div className="relative w-40 h-40 mb-4 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/logo.jpg"
                alt="Samram Projects"
                width={160}
                height={160}
                className="object-cover"
              />
            </div>
            <div className="w-20 h-0.5 bg-gradient-to-r from-stone-400 via-stone-300 to-stone-400" />
          </div>

          {/* Main content */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-white font-[family-name:var(--font-geist-sans)]">
              Texniki Təkmilləşdirmə İşləri Aparılır
            </h1>

            <p className="text-xl text-stone-200">
              Hörmətli müştərilərimiz,
            </p>

            <p className="text-stone-300 max-w-2xl mx-auto leading-relaxed">
              Sizə daha keyfiyyətli xidmət göstərmək məqsədilə saytımızda yenilənmə işləri aparılır.
              Tezliklə daha müasir və funksional interfeys ilə xidmətinizdə olacağıq.
            </p>

            {/* Progress Bar */}
            <div className="max-w-md mx-auto mt-8">
              <div className="h-2 bg-stone-700/50 rounded-full overflow-hidden backdrop-blur-sm">
                <div className="h-full bg-gradient-to-r from-stone-400 to-stone-300 w-[75%] rounded-full 
                  animate-pulse transition-all duration-1000" />
              </div>
              <p className="text-stone-400 mt-4 text-sm">
                Təxmini bərpa vaxtı: <span className="font-semibold text-stone-200">24 saat</span>
              </p>
            </div>
          </div>

          {/* Contact info */}
          <div className="mt-12 grid md:grid-cols-3 gap-4">
            <div className="p-6 bg-stone-800/50 rounded-2xl backdrop-blur-sm border border-white/5 hover:bg-stone-800/70 transition-all duration-300">
              <h2 className="text-lg font-semibold text-stone-200 mb-4 flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email ilə Əlaqə
              </h2>
              <p className="text-stone-300">info@samramprojects.com</p>
            </div>

            <div className="p-6 bg-stone-800/50 rounded-2xl backdrop-blur-sm border border-white/5 hover:bg-stone-800/70 transition-all duration-300">
              <h2 className="text-lg font-semibold text-stone-200 mb-4 flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Telefon ilə Əlaqə
              </h2>
              <div className="space-y-2 text-stone-300">
                <p>+994 55 282 48 00</p>
                <p>+994 55 756 90 99</p>
              </div>
            </div>

            <div className="p-6 bg-stone-800/50 rounded-2xl backdrop-blur-sm border border-white/5 hover:bg-stone-800/70 transition-all duration-300">
              <h2 className="text-lg font-semibold text-stone-200 mb-4 flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                WhatsApp
              </h2>
              <a
                href="https://wa.me/994553091646"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-300 hover:text-stone-100 transition-colors inline-flex items-center gap-2 group"
              >
                <span>+994 55 309 16 46</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Company info */}
          <div className="mt-12 pt-8 border-t border-stone-700">
            <p className="text-stone-400">© 2024 Samram Projects MMC. Bütün hüquqlar qorunur.</p>
            <p className="text-stone-500 text-sm mt-2">
              Bakı şəhəri, Azərbaycan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
