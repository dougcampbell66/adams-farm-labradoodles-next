import Link from "next/link";

export default function Hero() {
  return (
    <div className="py-[72px] px-6 text-center bg-cream">
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
        Raised in Loving Homes.
        <br />
        Ready for Yours.
      </h1>
      <p className="text-[1.05rem] max-w-[560px] mx-auto mb-7 text-[#4A4A4A]">
        30–40 hours of hands-on socialization, structured early neurological
        stimulation, and a program built the way good preschools are —
        intentional, from day three.
      </p>
      <Link
        href="/puppies"
        className="inline-block bg-navy text-cream font-extrabold py-[14px] px-7 rounded-lg text-[0.95rem] hover:bg-[#253b5a] transition-colors"
      >
        Meet the Puppies
      </Link>
    </div>
  );
}
