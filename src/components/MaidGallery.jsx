"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import Image from "next/image";

const MEMBERS = [
  { name: "Shin",     img: "/maids/shin.png",     accent: "#f472b6" },
  { name: "Juliette", img: "/maids/juliette.png", accent: "#a78bfa" },
  { name: "Rinrin",   img: "/maids/rinrin.png",   accent: "#4ade80" },
  { name: "Meyme",    img: "/maids/meyme.png",    accent: "#fbbf24" },
  { name: "Elico",    img: "/maids/elico.png",    accent: "#60a5fa" },
];

export default function MaidGallery() {
  const [selected, setSelected] = useState(null);
  const [hovered, setHovered] = useState(null);

  const sel = selected !== null ? MEMBERS[selected] : null;

  const handleCard = (i) => setSelected((prev) => (prev === i ? null : i));
  const handleBackdrop = () => setSelected(null);

  return (
    <section
      id="maids"
      className="relative w-full flex flex-col"
      style={{
        fontFamily: "'DM Sans', sans-serif",
        minHeight: "100svh",
        background: "#fafaf9",
      }}
      onClick={handleBackdrop}
    >
      {/* ── BACKGROUND ACCENT ── */}
      <AnimatePresence>
        {sel && (
          <motion.div
            key={`bg-${selected}`}
            className="absolute inset-0 pointer-events-none z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              background: `radial-gradient(ellipse 60% 40% at 50% 0%, ${sel.accent}18 0%, transparent 70%)`,
            }}
          />
        )}
      </AnimatePresence>

      {/* ── HEADER ── */}
      <header
        className="relative z-20 flex flex-col items-center justify-center px-6 md:px-12 pt-12 pb-8"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-[10px] font-medium tracking-[0.35em] uppercase text-nyan-purple mb-3">
          Our Talents
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-black text-nyan-dark leading-tight">
          Meet the <em className="text-nyan-pink italic">Maids</em>
        </h2>
      </header>

      {/* ── PHOTO STRIP ── */}
      <div
        className="relative z-20 px-6 md:px-12"
        onClick={(e) => e.stopPropagation()}
        style={{
          display: "flex",
          alignItems: "stretch",
          gap: 6,
          flex: "1 0 auto",
          minHeight: "clamp(520px, 75svh, 860px)",
        }}
      >
        {MEMBERS.map((mbr, i) => {
          const isSel = selected === i;
          const isHov = hovered === i;
          const hasSel = selected !== null;

          return (
            <motion.button
              key={mbr.name}
              onClick={(e) => { e.stopPropagation(); handleCard(i); }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              aria-label={mbr.name}
              className="relative overflow-hidden focus:outline-none"
              style={{
                border: "none",
                padding: 0,
                cursor: "pointer",
                minWidth: 0,
                borderRadius: 12,
                boxShadow: isSel
                  ? `0 20px 60px -10px ${mbr.accent}55`
                  : "0 4px 20px rgba(0,0,0,0.08)",
                transition: "box-shadow 0.4s ease",
              }}
              // Card selected sedikit lebih lebar, sisanya menyempit
              animate={{
                flex: isSel ? 2.2 : hasSel ? 0.65 : 1,
              }}
              transition={{ duration: 0.55, ease: [0.77, 0, 0.175, 1] }}
            >
              {/* Photo — blur saat idle, jernih saat selected */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  filter: isSel
                    ? "blur(0px) saturate(1.1) brightness(1)"
                    : isHov
                    ? "blur(0.8px) saturate(0.85) brightness(0.92)"
                    : "blur(2px) saturate(0.7) brightness(0.88)",
                }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              >
                <Image
                  src={mbr.img}
                  alt={mbr.name}
                  fill
                  className="object-cover object-top"
                  sizes="100vw"
                  priority={i <= 1}
                />
              </motion.div>

              {/* Gradient overlay */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{
                  background: isSel
                    ? `linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 45%, transparent 75%)`
                    : `linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 55%)`,
                }}
                transition={{ duration: 0.4 }}
              />

              {/* Accent top bar */}
              <motion.div
                className="absolute top-0 inset-x-0 pointer-events-none"
                style={{ height: 3, backgroundColor: mbr.accent, borderRadius: "12px 12px 0 0", transformOrigin: "left" }}
                animate={{ scaleX: isSel ? 1 : 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              />

              {/* Vertical name — saat tidak selected */}
              <AnimatePresence>
                {!isSel && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <span style={{
                      fontFamily: "var(--font-playfair), serif",
                      color: "rgba(255,255,255,0.9)",
                      fontSize: 28,
                      fontWeight: 600,
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                      textShadow: "0 2px 12px rgba(0,0,0,0.5)",
                    }}>
                      {mbr.name}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Bottom info — saat selected */}
              <AnimatePresence>
                {isSel && (
                  <motion.div
                    className="absolute bottom-0 inset-x-0 pointer-events-none px-4 pb-5"
                    initial={{ y: 12, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 8, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div style={{
                      width: 24,
                      height: 2,
                      backgroundColor: mbr.accent,
                      borderRadius: 1,
                      marginBottom: 8,
                    }} />
                    <p style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 22,
                      fontWeight: 700,
                      color: "#fff",
                      margin: 0,
                      lineHeight: 1.1,
                      letterSpacing: "-0.01em",
                    }}>
                      {mbr.name}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          );
        })}
      </div>

      {/* ── NAMES ROW ── */}
      <div
        className="relative z-20 flex items-start px-6 md:px-12 pt-4 pb-8"
        style={{ gap: 6 }}
        onClick={(e) => e.stopPropagation()}
      >
        {MEMBERS.map((mbr, i) => {
          const isSel = selected === i;
          const hasSel = selected !== null;

          return (
            <button
              key={mbr.name}
              onClick={(e) => { e.stopPropagation(); handleCard(i); }}
              className="flex-1 flex flex-col items-center focus:outline-none"
              style={{ gap: 5, background: "none", border: "none", cursor: "pointer", padding: "4px 0" }}
            >
              <motion.div
                style={{ height: 2, backgroundColor: mbr.accent, borderRadius: 1 }}
                animate={{ width: isSel ? 20 : 0, opacity: isSel ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
              <span style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                color: isSel ? "#1a1614" : hasSel ? "#9c9188" : "#b8afa7",
                transition: "color 0.3s",
              }}>
                {mbr.name}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}