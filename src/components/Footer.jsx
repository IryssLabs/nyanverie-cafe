import Image from "next/image";
import { PiInstagramLogo, PiTiktokLogo, PiMapPin, PiClock, PiPhone } from "react-icons/pi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0b] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Image
              src="/nyanverie.png"
              alt="Nyanverie"
              width={180}
              height={45}
              className="object-contain"
              style={{ height: "40px", width: "auto" }}
              unoptimized
            />
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              A magical maid cafe experience in collaboration with Crownette. 
              Creating unforgettable moments in Malang.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://instagram.com/nyanverie.universe" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-nyan-pink/20 hover:text-nyan-pink transition-all duration-300"
              >
                <PiInstagramLogo size={20} />
              </a>
              <a 
                href="https://tiktok.com/@nyanverie" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-nyan-pink/20 hover:text-nyan-pink transition-all duration-300"
              >
                <PiTiktokLogo size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500">Navigate</h4>
            <ul className="space-y-3">
              {["Home", "Event", "Pricing", "Maids"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <PiMapPin size={18} className="text-nyan-pink mt-0.5 shrink-0" />
                <span className="text-sm text-gray-400">Hyde Cafe, Klojen<br />Malang, Indonesia</span>
              </li>
              <li className="flex items-center gap-3">
                <PiPhone size={18} className="text-nyan-pink shrink-0" />
                <a href="https://wa.me/6289514393832" className="text-sm text-gray-400 hover:text-white transition-colors">
                  0895-1439-3832
                </a>
              </li>
              <li className="flex items-center gap-3">
                <PiClock size={18} className="text-nyan-pink shrink-0" />
                <span className="text-sm text-gray-400">10 Mei 2026<br />14.00 – 22.00 WIB</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">
              © {currentYear} Nyanverie Universe. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-xs text-gray-500">In collaboration with</span>
              <Image
                src="/crownette.png"
                alt="Crownette"
                width={100}
                height={30}
                className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                style={{ height: "24px", width: "auto" }}
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}