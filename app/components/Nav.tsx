import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-warm-border">
      <Link href="/" className="shrink-0">
        <Image
          src="/images/logo/adams-farm-logo-horizontal.png"
          alt="Adams Farm Labradoodles"
          width={440}
          height={110}
          className="w-[200px] h-auto"
          priority
        />
      </Link>
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
