import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Puppies", href: "/puppies" },
  { label: "Our Program", href: "/our-program" },
  { label: "Our Dogs", href: "/our-dogs" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-warm-border bg-cream">
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
        {links.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className="text-charcoal hover:text-navy transition-colors"
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
