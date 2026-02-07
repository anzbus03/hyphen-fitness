import Hero from '@/components/sections/Hero';
import { HeroBar } from '@/components/sections/Hero';
import About from '@/components/sections/About';

export default function Home() {
  return (
    <>
      <Hero />
      <HeroBar />
      <main
        className="bg-diamond-mesh text-white overflow-visible relative"
      >
        <About />
      </main>
    </>
  );
}