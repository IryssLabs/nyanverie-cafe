import Image from "next/image";

export default function Schedule() {
  return (
    <section id="schedule" className="py-20 px-6 md:px-8 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Collaboration Badge */}
        <div className="flex justify-center mb-6">
          <span className="bg-gradient-to-r from-nyan-purple to-nyan-pink text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
            Special Collaboration
          </span>
        </div>

        {/* Main Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-black text-nyan-dark leading-tight mb-4">
            NyanVerie Universe
            <span className="block text-nyan-pink">× Crownette</span>
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            A magical one-day event bringing together the universe of maids and the elegance of Crownette
          </p>
        </div>

        {/* Event Card with Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gray-50 rounded-[2rem] p-6 md:p-10 border border-gray-100">
          
          {/* Left: Event Image/Poster */}
          <div className="relative aspect-[4/5] md:aspect-square rounded-[1.5rem] overflow-hidden shadow-2xl bg-gradient-to-br from-nyan-purple/20 to-nyan-pink/20">
            <Image
              src="/event-poster.jpg"
              alt="Nyanverie x Crownette Event"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              unoptimized
            />
            {/* Overlay badge */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow">
              <span className="text-[10px] font-bold uppercase tracking-widest text-nyan-dark">May 2026</span>
            </div>
          </div>

          {/* Right: Event Details */}
          <div className="space-y-6">
            {/* Date & Time */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-nyan-dark">
                <span className="text-2xl">📅</span>
                <div>
                  <p className="text-xs font-bold text-nyan-pink uppercase tracking-widest">Date</p>
                  <p className="text-xl font-bold">10 Mei 2026</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-nyan-dark">
                <span className="text-2xl">⏰</span>
                <div>
                  <p className="text-xs font-bold text-nyan-pink uppercase tracking-widest">Time</p>
                  <p className="text-xl font-bold">14.00 – 22.00 WIB</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-nyan-dark">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="text-xs font-bold text-nyan-pink uppercase tracking-widest">Location</p>
                  <p className="text-xl font-bold">Hyde Cafe, Klojen – Malang</p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gray-200"></div>

            {/* Ticket Info */}
            <div className="space-y-2">
              <p className="text-xs font-bold text-nyan-purple uppercase tracking-widest">Starting from</p>
              <p className="text-3xl font-black text-nyan-dark">Rp 80.000</p>
              <p className="text-sm text-gray-500">Multiple ticket tiers available including VIP & VVIP</p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="https://wa.me/6289514393832"
                className="flex-1 bg-nyan-dark text-white text-center px-6 py-4 rounded-full font-bold hover:bg-nyan-pink transition-all shadow-lg hover:shadow-xl"
              >
                RESERVE NOW
              </a>
              <a
                href="#pricing"
                className="flex-1 border-2 border-nyan-dark text-nyan-dark text-center px-6 py-4 rounded-full font-bold hover:bg-nyan-dark hover:text-white transition-all"
              >
                VIEW PRICING
              </a>
            </div>

            {/* WhatsApp Info */}
            <p className="text-xs text-gray-400 text-center">
              WhatsApp: 0895-1439-3832
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}