export default function Nav() {
  return (
    <nav className="flex items-center justify-between px-6 py-5 border-b border-warm-border">
      <span className="font-heading font-semibold text-[1.3rem] text-navy">
        Adams Farm Labradoodles
      </span>
      <div className="hidden md:flex gap-7 font-extrabold text-[0.9rem]">
        <a href="#" className="text-charcoal hover:text-navy transition-colors">Puppies</a>
        <a href="#" className="text-charcoal hover:text-navy transition-colors">Our Program</a>
        <a href="#" className="text-charcoal hover:text-navy transition-colors">Our Dogs</a>
        <a href="#" className="text-charcoal hover:text-navy transition-colors">FAQ</a>
        <a href="#" className="text-charcoal hover:text-navy transition-colors">Contact</a>
      </div>
    </nav>
  );
}
