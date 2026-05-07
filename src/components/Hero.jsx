"use client";
import { useState, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const handleToggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section
      id="hero"
      className="relative h-[85vh] w-full overflow-hidden bg-white"
    >
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
          style={{
            filter: "brightness(0.9)",
            transform: "translateZ(0)",
            backfaceVisibility: "hidden",
          }}
        >
          {/* Menggunakan file lokal dari folder public */}
          <source src="/video-bg.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Clickable overlay */}
      <button
        onClick={handleToggleMute}
        aria-label={isMuted ? "Unmute audio" : "Mute audio"}
        className="absolute inset-0 z-10 w-full h-full cursor-pointer bg-transparent"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-20 bg-gradient-to-r from-black/60 via-black/20 to-transparent pointer-events-none" />

      {/* Sound indicator — kanan bawah */}
      <div className="absolute bottom-6 right-6 z-30 flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3.5 py-2.5 rounded-full pointer-events-none">
        <div className="flex items-center gap-[2px] h-4">
          {[6, 10, 14, 10, 6].map((h, i) => (
            <span
              key={i}
              className={`block w-0.5 rounded-full transition-all duration-300 ${!isMuted ? "animate-wave" : ""}`}
              style={{
                height: isMuted ? "4px" : `${h}px`,
                opacity: isMuted ? 0.35 : 1,
                animationDelay: !isMuted ? `${i * 0.15}s` : undefined,
                background: "linear-gradient(180deg, #b6c8f2, #f9c6d1)",
              }}
            />
          ))}
        </div>
        <span
          className="text-[11px] font-semibold tracking-[0.1em] uppercase"
          style={{
            background:
              "linear-gradient(135deg, #b6c8f2 0%, #c9b8f0 40%, #f9c6d1 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {isMuted ? "Sound Off" : "Sound On"}
        </span>
      </div>

      {/* Content */}
      <div className="relative z-30 h-full flex flex-col justify-end p-8 md:p-20 max-w-4xl pointer-events-none">
        <div className="space-y-4 mb-10">
          <span className="inline-block bg-nyan-pink text-white px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase">
            Now Universe is Open
          </span>
          <Image
            src="/nyanverie.png"
            alt="Nyanverie"
            width={400}
            height={100}
            className="object-contain drop-shadow-lg"
            style={{ height: "64px", width: "auto" }}
            priority
            unoptimized
          />
          <p className="text-lg md:text-xl text-gray-100 max-w-md font-light leading-relaxed drop-shadow-md">
            Nikmati suasana maid cafe yang terinspirasi dari keajaiban
            bintang-bintang. Setiap momen adalah keajaiban.
          </p>
        </div>

        <div className="flex gap-4 pointer-events-auto">
          {/* Primary button — gradient fill, teks putih */}
          <button
            className="px-8 py-4 rounded-sm font-bold text-white shadow-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl active:scale-[0.98]"
            style={{
              background:
                "linear-gradient(135deg, #b6c8f2 0%, #c9b8f0 40%, #f9c6d1 100%)",
            }}
          >
            RESERVE NOW
          </button>

          {/* Secondary button — outline dengan teks putih, hover jadi gradient fill */}
          <button
            className="px-8 py-4 rounded-sm font-bold text-white border-2 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] group"
            style={{ borderColor: "rgba(201,184,240,0.7)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(135deg, #b6c8f2 0%, #c9b8f0 40%, #f9c6d1 100%)";
              e.currentTarget.style.borderColor = "transparent";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "rgba(201,184,240,0.7)";
            }}
          >
            OUR MAIDS
          </button>
        </div>
      </div>
    </section>
  );
}
