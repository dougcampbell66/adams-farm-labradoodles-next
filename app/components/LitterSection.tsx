export default function LitterSection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-[1080px] mx-auto">
        <div className="text-center max-w-[640px] mx-auto mb-10">
          <span className="block font-extrabold text-[0.75rem] tracking-[0.14em] uppercase text-navy mb-[14px]">
            Available Now
          </span>
          <h2 className="font-heading font-semibold text-[1.9rem] text-navy">
            Meet the Spring Litter
          </h2>
        </div>
        <div className="flex gap-7 items-center bg-warm-sand rounded-[18px] p-8 flex-wrap">
          <div className="w-[220px] h-[220px] rounded-[14px] bg-[#D8CBA8] shrink-0 flex items-center justify-center text-[#8a7c5c] text-[0.8rem] font-bold">
            Litter Photo
          </div>
          <div className="flex-1 min-w-[240px]">
            <div className="flex gap-[10px] flex-wrap mb-4">
              <span className="text-[0.72rem] font-extrabold px-3 py-[5px] rounded-full bg-[#DCEAF6] text-navy">
                2 Available
              </span>
              <span className="text-[0.72rem] font-extrabold px-3 py-[5px] rounded-full bg-[#E4EFE6] text-navy">
                4 Reserved
              </span>
            </div>
            <h3 className="font-heading font-semibold text-navy text-[1.4rem] mb-2">
              Jumba, Stitch, David, Lilo, Tutu &amp; Angel
            </h3>
            <p className="text-[0.92rem] text-[#4A4A4A] mb-[14px]">
              Sire: Tarheel&apos;s Knox · Dam: Legend Manor&apos;s Holly ·
              Expected adult size: large mini, 20–25 lbs
            </p>
            <a
              href="#"
              className="inline-block bg-navy text-cream font-extrabold py-[10px] px-5 rounded-lg text-[0.85rem] hover:bg-[#253b5a] transition-colors"
            >
              Meet the Litter →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
