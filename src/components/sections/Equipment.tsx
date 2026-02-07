"use client";

import Image from "next/image";

export default function Equipment() {
  return (
    <section className="relative bg-black py-16 md:py-20 px-4 md:px-8">
      {/* Diamond Pattern Background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.03) 35px, rgba(255,255,255,0.03) 70px),
                              repeating-linear-gradient(-45deg, transparent, transparent 35px, rgba(255,255,255,0.03) 35px, rgba(255,255,255,0.03) 70px)`,
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {/* Weight Plate */}
          <div className="relative aspect-square bg-white/95 rounded-sm p-8 flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src="/2.png"
                alt="Weight Plate"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>

          {/* Dumbbell */}
          <div className="relative aspect-square bg-white/95 rounded-sm p-8 flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src="/4.png"
                alt="Dumbbell"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>

          {/* Additional Equipment Placeholder */}
          <div className="relative aspect-square bg-gradient-to-br from-zinc-900 to-black rounded-sm border border-zinc-800 flex items-center justify-center">
            <div className="text-center">
              <div className="text-[#FF6600] text-5xl font-bold mb-2">+</div>
              <p className="text-white/60 text-xs tracking-wider font-medium">MORE EQUIPMENT</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}