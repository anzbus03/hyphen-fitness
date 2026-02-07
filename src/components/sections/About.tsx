"use client";

import Image from "next/image";

export default function About() {
  return (
    <section className="relative pt-[3vw] pb-[4vw] px-[1vw] md:px-[2vw] lg:px-[3vw] overflow-x-clip overflow-y-visible">
      {/* Athlete Image - overlaps into hero section */}
      <div className="hidden lg:block absolute z-[2]" style={{ top: '-30vw', right: '-35vw' }}>
        <Image
          src="/1.png"
          alt="Athlete Training"
          width={2000}
          height={2600}
          className="object-contain h-auto max-w-none"
          style={{ width: '90vw' }}
          priority
          sizes="90vw"
        />
      </div>

      <div className="w-full relative">
        {/* Text Box with thin orange border */}
        <div className="w-full lg:w-[70%] border border-[#FF6600] p-[1vw] md:p-[1.5vw] bg-[#1a1a1a] relative z-[1]">
          <p
            className="text-white/90 leading-relaxed"
            style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif', fontSize: 'clamp(14px, 1.2vw, 22px)' }}
          >
            Hyphen Fitness Is Dubai&apos;s Largest Premium Facility, Offering A Holistic,
            Science-Backed Approach To Training. Members Follow Personalized
            Programs Curated By Expert Coaches And Nutritionists, Using High-End
            Imported Equipment To Achieve Focused Results. Built At An Incredible
            Scale, Every &quot;Meterage Is Deliberate And Accounted For, Making Fitness
            A Sustainable, Results-Driven Journey.
          </p>

          {/* POTENTIAL — orange bar — PERFORMANCE */}
          <div className="flex items-center justify-end gap-[1vw] mt-[1.5vw]">
            <span
              className="text-[#FF6600] font-bold tracking-[0.2em] uppercase shrink-0"
              style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif', fontSize: 'clamp(12px, 1vw, 20px)' }}
            >
              Potential
            </span>
            <div className="bg-[#FF6600]" style={{ width: '8vw', height: '0.4vw' }} />
            <span
              className="text-[#FF6600] font-bold tracking-[0.2em] uppercase shrink-0"
              style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif', fontSize: 'clamp(12px, 1vw, 20px)' }}
            >
              Performance
            </span>
          </div>
        </div>

        {/* Weight Plate next to first image */}
        <div className="absolute z-[50]" style={{ top: '16%', left: '-47vw' }}>
          <Image
            src="/2.png"
            alt="Weight Plate"
            width={800}
            height={800}
            className="h-auto object-contain max-w-none"
            style={{ width: '110vw' }}
            sizes="110vw"
          />
        </div>

        {/* Gym Image with orange box shadow */}
        <div className="w-full lg:w-[50%] relative z-[1]" style={{ marginTop: '1.5vw', boxShadow: '0.5vw 0.5vw 0px 0px #FF6600' }}>
          <Image
            src="/image copy 5.png"
            alt="Gym Interior - Cardio Equipment"
            width={800}
            height={450}
            className="w-full h-auto object-cover"
            sizes="50vw"
          />
        </div>
        {/* Training Image with orange box shadow left and bottom */}
        <div className="w-full lg:w-[50%] ml-auto relative z-[3]" style={{ marginTop: '-18vw', marginRight: '-5vw', boxShadow: '-0.5vw 0.5vw 0px 0px #FF6600' }}>
          <Image
            src="/image copy 7.png"
            alt="Personal Training Session"
            width={800}
            height={450}
            className="w-full h-auto object-cover"
            sizes="50vw"
          />
        </div>
        {/* Dumbbell Image */}
        <div className="w-full ml-auto relative z-[4]" style={{ marginTop: '-22vw', width: '120%', marginRight: '-28vw' }}>
          <Image
            src="/4.png"
            alt="Dumbbell"
            width={800}
            height={600}
            className="w-full h-auto object-contain"
            sizes="120vw"
          />
        </div>
        {/* Phone Image - between weight plate and dumbbell */}
        <div className="absolute z-[30]" style={{ bottom: '-15vw', left: '40%', transform: 'translateX(-50%)' }}>
          <Image
            src="/3.png"
            alt="Instagram - @thehyphenfitness"
            width={2000}
            height={2800}
            className="h-auto object-contain max-w-none"
            style={{ width: '100vw' }}
            sizes="100vw"
          />
        </div>
      </div>

      {/* Orange bar from right side */}
      <div className="absolute right-0 bg-[#FF6600] z-[1] flex items-center justify-end" style={{ bottom: '1.5vw', width: '78%', height: '18vw', paddingRight: '20%' }}>
        <a href="https://instagram.com/thehyphenfitness" target="_blank" rel="noopener noreferrer" className="flex items-center" style={{ gap: '1.5vw' }}>
          {/* Instagram icon with hand below */}
          <div className="relative shrink-0">
            <svg className="text-white" style={{ width: '6vw', height: '6vw' }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            {/* Hand pointing up + Tap Here */}
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center" style={{ bottom: '-3vw', right: '-2vw', gap: '0.5vw', fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}>
              <span style={{ fontSize: 'clamp(20px, 2.5vw, 40px)', color: 'transparent', WebkitTextStroke: '1.5px rgba(255,255,255,0.8)' }}>&#x1F446;</span>
              <span className="text-white/80 font-semibold tracking-wider uppercase whitespace-nowrap" style={{ fontSize: 'clamp(10px, 0.8vw, 16px)' }}>Tap Here</span>
            </div>
          </div>
          <p className="text-white font-bold" style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif', fontSize: 'clamp(16px, 2vw, 36px)' }}>@thehyphenfitness</p>
        </a>
      </div>
    </section>
  );
}
