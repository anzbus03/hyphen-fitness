"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image Layer - edge to edge */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/7.png)',
        }}
      />

      {/* Subtle dark overlay */}
      <div className="absolute inset-0 z-[1] bg-black/30" />

      {/* Vignette Overlay - lighter */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0.85) 100%)',
        }}
      />

      {/* Hero Content - Centered */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full gap-6 md:gap-10 px-4">
        {/* Hero Logo */}
        <Image
          src="/logo.png"
          alt="Hyphen Fitness"
          width={600}
          height={200}
          className="w-[280px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-auto"
          priority
        />

        {/* Navigation below the title */}
        <nav className="w-full max-w-5xl px-4" style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}>
          <div className="flex flex-nowrap justify-center items-center gap-x-3 md:gap-x-5 text-[9px] sm:text-xs md:text-sm lg:text-base whitespace-nowrap">
            <a href="#fitness" className="text-white hover:text-[#FF6600] transition-colors duration-300 font-semibold tracking-[0.2em] uppercase">
              Elevated Fitness
            </a>
            <span className="text-white text-[6px] sm:text-[8px]">★</span>
            <a href="#wellness" className="text-white hover:text-[#FF6600] transition-colors duration-300 font-semibold tracking-[0.2em] uppercase">
              Elevated Wellness
            </a>
            <span className="text-white text-[6px] sm:text-[8px]">★</span>
            <a href="#nutrition" className="text-white hover:text-[#FF6600] transition-colors duration-300 font-semibold tracking-[0.2em] uppercase">
              Elevated Nutrition
            </a>
            <span className="text-white text-[6px] sm:text-[8px]">★</span>
            <a href="#drinks" className="text-white hover:text-[#FF6600] transition-colors duration-300 font-semibold tracking-[0.2em] uppercase">
              Elevated Drinks
            </a>
            <span className="text-white text-[6px] sm:text-[8px]">★</span>
            <a href="#sports" className="text-white hover:text-[#FF6600] transition-colors duration-300 font-semibold tracking-[0.2em] uppercase">
              Elevated Sports
            </a>
          </div>
        </nav>
      </div>

    </section>
  );
}

export function HeroBar() {
  return (
    <div className="w-full flex items-stretch">
      {/* Logo with diamond pattern background */}
      <div className="bg-diamond-mesh px-6 py-4 md:px-10 md:py-5 flex items-center shrink-0">
        <Image
          src="/logowithtext.png"
          alt="Hyphen Fitness"
          width={180}
          height={60}
          className="w-[120px] md:w-[160px] lg:w-[180px] h-auto"
        />
      </div>
      {/* Orange bar filling the rest */}
      <div className="bg-[#FF6600] grow" />
    </div>
  );
}
