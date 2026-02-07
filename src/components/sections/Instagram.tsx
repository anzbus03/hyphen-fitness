"use client";

import Image from "next/image";

export default function Instagram() {
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Phone Mockup */}
          <div className="relative max-w-sm mx-auto lg:mx-0">
            <div className="relative aspect-[9/19.5]">
              <Image
                src="/3.png"
                alt="Instagram Feed - @thehyphenfitness"
                fill
                className="object-contain drop-shadow-2xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Instagram CTA */}
          <div className="flex flex-col items-center lg:items-start space-y-8">
            {/* Instagram Icon */}
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-[#FF6600] rounded-full flex items-center justify-center shadow-2xl">
                <svg 
                  className="w-20 h-20 md:w-24 md:h-24 text-white" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
            </div>

            {/* Text */}
            <div className="text-center lg:text-left space-y-3">
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                @thehyphenfitness
              </h3>
              <p className="text-[#FF6600] text-lg md:text-xl font-medium">
                Follow us on Instagram
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
