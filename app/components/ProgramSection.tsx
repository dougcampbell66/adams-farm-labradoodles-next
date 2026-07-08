const cards = [
  {
    title: "ENS / Super Dog Program",
    body: "A structured neurological stimulation protocol applied from day three, based on the U.S. military's original Bio Sensor research.",
    stat: "Starts Day 3",
    borderColor: "border-calm-blue",
  },
  {
    title: "Advanced Socialization",
    body: "Real-world exposure to a wide range of people, sounds, surfaces, and environments — not just time in the whelping room.",
    stat: "30–40 Hours",
    borderColor: "border-focus-green",
  },
  {
    title: "Early Crate Training",
    body: "Puppies begin crate training before they leave, so your first nights home start from a foundation, not square one.",
    stat: "Begins Before Placement",
    borderColor: "border-excite-yellow",
  },
];

export default function ProgramSection() {
  return (
    <div className="bg-navy text-cream py-[72px] px-6">
      <div className="max-w-[1080px] mx-auto">
        <span className="block font-extrabold text-[0.75rem] tracking-[0.14em] uppercase text-excite-yellow mb-[14px]">
          Our Program
        </span>
        <h2 className="font-heading font-semibold text-[2.1rem] text-cream mb-4 max-w-[640px]">
          Two programs most breeders skip.
        </h2>
        <p className="text-[1.02rem] opacity-90 max-w-[620px] mb-11 leading-relaxed">
          Every Adams Farm puppy goes through a structured developmental program
          before they ever meet you — not vague &ldquo;well-socialized&rdquo;
          marketing language, but a specific, repeatable process.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map(({ title, body, stat, borderColor }) => (
            <div
              key={title}
              className={`bg-[rgba(255,255,255,0.06)] rounded-[14px] p-[26px] border-t-4 ${borderColor}`}
            >
              <h3 className="font-heading font-semibold text-[1.15rem] text-cream mb-[10px]">
                {title}
              </h3>
              <p className="text-[0.9rem] leading-relaxed opacity-85">{body}</p>
              <span className="block font-extrabold text-excite-yellow text-[0.85rem] mt-3">
                {stat}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
