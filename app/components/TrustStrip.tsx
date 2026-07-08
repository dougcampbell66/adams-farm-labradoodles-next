import { stats } from "@/src/data/stats";

const items = [
  { num: String(stats.yearsBreeding), label: "Years Breeding" },
  { num: String(stats.littersPlaced), label: "Litters Placed" },
  { num: String(stats.happyFamilies), label: "Families" },
  { num: "3-Yr", label: "Health Guarantee" },
];

export default function TrustStrip() {
  return (
    <div className="bg-warm-sand py-7 px-6 flex justify-center gap-10 flex-wrap border-t border-b border-warm-border">
      {items.map(({ num, label }) => (
        <div
          key={label}
          className="text-center font-extrabold text-[0.85rem] text-navy max-w-[160px]"
        >
          <span className="block font-heading font-bold text-[1.6rem]">{num}</span>
          {label}
        </div>
      ))}
    </div>
  );
}
