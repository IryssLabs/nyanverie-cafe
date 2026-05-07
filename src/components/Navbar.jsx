"use client";
import { useState, useEffect } from "react";
import { PiHouse, PiCalendarDots, PiCoffee, PiStarFour, PiTicket, PiSparkle } from "react-icons/pi";

const navItems = [
  { label: "Home",     href: "#hero",     icon: PiHouse },
  { label: "Event",    href: "#event",    icon: PiSparkle },
  { label: "Pricing",  href: "#pricing",  icon: PiTicket },
  { label: "Maids",    href: "#maids",    icon: PiStarFour },
];

const GRADIENT = "linear-gradient(135deg, #b6c8f2 0%, #c9b8f0 40%, #f9c6d1 100%)";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 px-6 py-4 ${
      isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <img src="/nyanverie.png" alt="Nyanverie" className="object-contain h-8 w-auto" />

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navItems.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              className="flex items-center gap-1.5 hover:opacity-70 transition-opacity duration-200"
            >
              {/* Icon: pakai gradient via SVG linearGradient */}
              <svg width="0" height="0" style={{ position: "absolute" }}>
                <defs>
                  <linearGradient id="icon-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%"   stopColor="#b6c8f2" />
                    <stop offset="40%"  stopColor="#c9b8f0" />
                    <stop offset="100%" stopColor="#f9c6d1" />
                  </linearGradient>
                </defs>
              </svg>
              <Icon size={17} style={{ color: "#c9b8f0", flexShrink: 0 }} />

              {/* Label gradient */}
              <span style={{
                background: GRADIENT,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontWeight: 700,
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                filter: !isScrolled ? "drop-shadow(0 1px 4px rgba(180,150,220,0.6))" : "none",
              }}>
                {label}
              </span>
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1"
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-6 h-[3px] rounded-full transition-all duration-300"
              style={{
                background: GRADIENT,
                opacity: isOpen && i === 1 ? 0 : 1,
                transform: isOpen
                  ? i === 0 ? "rotate(45deg) translate(3px, 5px)"
                  : i === 2 ? "rotate(-45deg) translate(3px, -5px)"
                  : "none"
                  : "none",
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-xl flex flex-col p-6 gap-1 md:hidden">
          {navItems.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              className="flex items-center gap-3 py-3 border-b border-purple-100 hover:opacity-70 transition-opacity"
              onClick={() => setIsOpen(false)}
            >
              <Icon size={20} style={{ color: "#c9b8f0", flexShrink: 0 }} />
              <span style={{
                background: GRADIENT,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontWeight: 700,
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}>
                {label}
              </span>
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}