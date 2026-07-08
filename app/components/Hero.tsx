import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative py-[100px] px-6 text-center bg-cream overflow-hidden">
      {/* Decorative background bubbles — behind content */}
      <div className="absolute top-[12%] right-[7%] w-[120px] h-[120px] rounded-full bg-calm-blue opacity-20 pointer-events-none" />
      <div className="absolute bottom-[18%] left-[5%] w-[80px] h-[80px] rounded-full bg-focus-green opacity-25 pointer-events-none" />
      <div className="absolute top-[30%] left-[10%] w-[50px] h-[50px] rounded-full bg-excite-yellow opacity-35 pointer-events-none" />
      <div className="absolute bottom-[25%] right-[12%] w-[30px] h-[30px] rounded-full bg-feelings-red opacity-30 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        <div className="flex justify-center gap-[10px] mb-[22px]">
          <div className="w-3 h-3 rounded-full bg-calm-blue" />
          <div className="w-3 h-3 rounded-full bg-focus-green" />
          <div className="w-3 h-3 rounded-full bg-excite-yellow" />
          <div className="w-3 h-3 rounded-full bg-feelings-red" />
        </div>
        <span className="block font-extrabold text-[0.75rem] tracking-[0.14em] uppercase text-navy mb-[14px]">
          ALAA Gold Paw Accredited · Greensboro, NC
        </span>
        <h1 className="font-heading font-semibold text-[2.6rem] leading-[1.15] text-navy mb-[18px]">
          Puppies with a Purpose.
        </h1>
        <p className="text-[1.05rem] max-w-[560px] mx-auto mb-7 text-[#4A4A4A]">
          We raise Australian Labradoodle puppies with purpose and intention.
        </p>
        <Link
          href="/puppies"
          className="inline-block bg-navy text-cream font-extrabold py-[14px] px-7 rounded-lg text-[0.95rem] hover:bg-[#253b5a] transition-colors"
        >
          Meet the Puppies
        </Link>
      </div>
    </div>
  );
}
