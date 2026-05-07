import Image from "next/image";
import { Calendar, Clock, MapPin, MessageCircle } from "lucide-react";

export default function EventInfo() {
  return (
    <section id="event" className="py-24 px-8 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        <div className="flex flex-col gap-7">
          <span className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-[0.25em] uppercase text-nyan-purple border border-[#ede8f5] rounded-full px-4 py-1.5 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-nyan-pink" />
            Collaboration Event
          </span>

          <div>
            <p className="text-[9px] font-medium tracking-[0.3em] uppercase text-nyan-purple mb-2">Presented by</p>
            <div className="flex items-center gap-4">
              <Image src="/nyanverie.png" alt="Nyanverie" width={160} height={80} className="object-contain h-14 w-auto" unoptimized />
              <span className="font-display text-3xl font-black text-nyan-pink">×</span>
              <Image src="/crownette.png" alt="Crownette" width={400} height={200} className="object-contain h-20 w-auto" unoptimized />
            </div>
          </div>

          <ul className="divide-y divide-[#f0eafa]">
            {[
              { icon: <Calendar size={16} className="text-nyan-purple" />, label: "Date", value: "10 Mei 2026" },
              { icon: <Clock size={16} className="text-nyan-purple" />, label: "Time", value: "14.00 – 20.20 WIB" },
              { icon: <MapPin size={16} className="text-nyan-purple" />, label: "Venue", value: "Hyde Cafe, Klojen – Malang" },
            ].map(({ icon, label, value }) => (
              <li key={label} className="flex items-center gap-4 py-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#f9f5ff] flex items-center justify-center shrink-0">{icon}</div>
                <div>
                  <span className="block text-[10px] font-medium tracking-[0.15em] uppercase text-nyan-purple mb-0.5">{label}</span>
                  <span className="text-sm font-medium text-nyan-dark">{value}</span>
                </div>
              </li>
            ))}
          </ul>

          <a href="https://wa.me/6289514393832" className="inline-flex items-center gap-3 bg-nyan-dark text-white px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide w-fit transition-all hover:-translate-y-0.5 hover:shadow-xl">
            <MessageCircle size={14} />
            Reservasi: 0895-1439-3832
          </a>
        </div>

        {/* Map — static image, klik buka Google Maps */}
        <a
          href="https://maps.app.goo.gl/HiHfYugPCsVShsKX8"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative rounded-[28px] overflow-hidden border border-[#ede8f5] shadow-2xl aspect-[4/3] block"
        >
          <Image
            src="hyde.jpeg"
            alt="Hyde Cafe Location"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            unoptimized
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-nyan-dark/0 group-hover:bg-nyan-dark/20 transition-all duration-300" />

          {/* Bottom bar */}
          <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-nyan-dark/85 to-transparent flex items-end justify-between">
            <div>
              <p className="font-display text-base font-bold text-white">Hyde Cafe</p>
              <p className="text-xs text-white/60 mt-0.5">Klojen, Malang</p>
            </div>
            <span className="flex items-center gap-1.5 bg-white/15 backdrop-blur border border-white/25 text-white text-[11px] font-semibold tracking-widest uppercase px-3.5 py-2 rounded-full group-hover:bg-white/30 transition-all">
              ↗ Open Maps
            </span>
          </div>
        </a>

      </div>
    </section>
  );
}