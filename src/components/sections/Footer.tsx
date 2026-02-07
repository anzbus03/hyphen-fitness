export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-8 md:py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4">
          <p className="text-white/50 text-sm md:text-base">
            © 2024 Hyphen Fitness. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 text-xs md:text-sm text-white/40">
            <a href="#" className="hover:text-[#ff6b35] transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-[#ff6b35] transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-[#ff6b35] transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}