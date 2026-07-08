# Content Migration Notes

Compiled from `C:\Dev\adams-farm-labradoodles\adams-farm` (Astro source).
Use this as the single reference when building inner pages in Next.js —
no need to re-derive copy from the Astro source.

---

## FACT-CHECK FINDINGS

### ❌ Litter parentage error in Astro source

`src/content/litters/spring-2026.md` lists:
```
sire: "Silas"
dam: "Macy"
```

**This is wrong.** The Spring 2026 / Lilo & Stitch May Litter is a co-breeding
litter with Legend Manor. The correct parents are:
- Sire: **Tarheel's Knox**
- Dam: **Legend Manor's Holly**

Adams Farm's own Silas × Macy pairing is a **separate, future litter**.

The Astro homepage (`index.astro`) correctly identifies the litter parents as
"Legend Manor's Holly and Tarheel's Knox" — this contradicts the litter MD file.

**Corrected in `src/data/litters.ts`.** The Astro source has NOT been touched.

---

### ✅ "Raised in loving homes" — no violations found

Every instance in the Astro source correctly reads "raised in loving homes" or
"in a loving home". No "raised in our home" language found.

### ✅ Health testing — no puppy-level test claims found

Health testing is consistently attributed to breeding pairs (Silas, Macy) only.
No language implies puppies themselves are health tested.

### ✅ ALAA Gold Paw (not Platinum) — confirmed correct throughout

### ✅ No personal home address found in any source file

---

## MISSING IMAGE NOTE

`macy.md` references `photo: "/images/dogs/macy.jpg"` but **no macy.jpg exists**
in `public/images/dogs/`. The directory contains silas and winnie photos only.
When building the Our Dogs page, use a placeholder or omit Macy's photo until
the image is provided.

---

## OUR STORY — Founder Narrative

**Source:** `index.astro` section ⑦ (also the canonical copy for a standalone page)

**Eyebrow:** Our Story  
**Heading:** How Adams Farm Began

**Body paragraph 1:**
> It started with our kids, Julian and Marie Claire, begging for a puppy. Instead
> of one, we decided to give them puppies — and set out to find the right breed.
> Our only real requirement was temperament: friendly, with no aggression toward
> people, dogs, or other animals. That search led us to Australian Labradoodles,
> and eventually to Mike and Pam Kirkpatrick of Legend Manor Labradoodles, and
> their dog Prancer — Winnie.

**Body paragraph 2:**
> From the moment we met her, Erika knew. Winnie approached each of us gently,
> and it was clear how loving she was — the kind of dog that becomes a healing
> presence for a family. She joined ours, and after her third litter, gave us
> eight healthy puppies. That's how Adams Farm began.

**Pull-quote:**
> "A great dog can be a healing presence for your whole family."
> — Erika Campbell

**Photo:** `/images/story/founder-story-portrait.jpg` (alt: Douglas and Erika Campbell with Winnie)

---

## GUARDIANS PAGE

**Source:** `guardians.astro`

**Eyebrow:** About our dogs  
**Heading:** Guardians  
**Intro:** Raised in loving homes — not a kennel.

**Body paragraphs (4):**

> Adams Farm's breeding dogs don't live in a kennel. They live as members of a
> family — in loving homes, with people who care for them every day, while
> remaining part of our breeding program.

> This is what makes the guardian model different: our dogs get to be dogs.
> They're loved, socialized, and part of daily life, not confined to a breeding
> facility. In return, guardian families give our program something a kennel
> never could — a dog raised the same way your puppy will be.

> Puppies are whelped in the Campbell home, where Douglas and Erika oversee
> everything from birth through early development. But the sires and dams
> themselves — the dogs who make each litter possible — live their lives in the
> homes of families who love them.

**Closing (italic pull-quote style):**
> It's a simple idea: dogs raised in love make better companions. That's true for
> our breeding dogs, and it's true for the puppies they bring into the world.

**CTA link:** Meet our dogs →  (href: /our-dogs)

---

## OUR PROGRAM PAGE

**Source:** `our-program.astro`

**Eyebrow:** `ALAA Gold Paw · 3 years breeding · 7 litters placed`  
**Heading:** Our Program  
**Intro:** Four commitments guide every litter we raise — and every family we work with.

### Four Pillars

**01 — Health & Integrity**
> Every breeding dog is health tested to ALAA Gold Paw standards before being
> bred. We stand behind every puppy with a 3-year health guarantee covering
> debilitating congenital defects.

**02 — Purposeful Raising**
> Every puppy goes through a structured early socialization program from birth,
> refined over 7 litters. The result is confident, well-adjusted dogs ready for
> family life.

**03 — Transparency**
> Families are welcome to visit in person at 6 weeks. Every family receives
> weekly photos, videos, and live video calls from birth until go-home day —
> you'll watch your puppy grow before they're home.

**04 — Lifetime Support**
> Our relationship with your family doesn't end at pickup. We're here for
> questions, guidance, and support for the life of your dog.

### Health Guarantee Band

**Eyebrow:** Health guarantee  
**Heading:** We stand behind every puppy

**Body:**
> 3 years coverage on debilitating congenital defects present from birth —
> including severe hip/elbow dysplasia, PRA, and severe cardiac defects.
> If a covered condition is confirmed by a licensed veterinarian, we provide
> a replacement puppy of equal or lesser value from the next available litter.

**CTA:** View health testing results → (href: /our-dogs)

### What to Expect — 6 Steps

1. **Apply** — Fill out our contact form. We'll read it personally and reach out within 1–2 business days.
2. **Conversation** — We'll learn about your home, lifestyle, and what you're looking for — and make sure it's a great fit.
3. **Waitlist & deposit** — Once a litter is confirmed, we collect a deposit to hold your spot on the list.
4. **Weekly updates** — From birth through go-home day: weekly photos, videos, and live video calls.
5. **Visit at 6 weeks** — Families visit in person once puppies have had their initial vaccines. This is when we help match each puppy to the right family.
6. **Go home at 8 weeks** — Your puppy comes home with a full vet exam, vaccinations, microchip, health guarantee, and a care package.

**CTAs:** Start your application (href: /contact) · Read the FAQ (href: /faq)

---

## FAQ — All Questions & Answers

**Source:** `faq.astro`

**Page intro:** Everything you want to know about the breed, our health program, and how to get a puppy.

---

**Q: What is an Australian Labradoodle — and how is it different from a Labradoodle?**

A: An Australian Labradoodle is a purposefully developed breed, not simply a Labrador/Poodle cross. Multiple generations of selective breeding have stabilized coat type, temperament, and health traits. Adams Farm dogs are multi-generational (F3+) and ALAA registered, meaning their lineage is traceable and verified — very different from a first-generation "designer dog."

---

**Q: Is the non-shedding coat actually consistent?**

A: Our multi-generational dogs consistently produce fleece or wool coats that are low-to-non-shedding. Because our dogs are F3+ multi-generational, coat traits are highly stable — unlike early-generation crosses where coat type can vary significantly from puppy to puppy in the same litter.

---

**Q: Are Australian Labradoodles good for people with allergies?**

A: Many families with mild-to-moderate pet allergies do very well with Australian Labradoodles, thanks to the low-dander, non-shedding coat. No dog is truly hypoallergenic. If allergies are a concern, we recommend spending time with an adult dog before committing — we're happy to arrange a visit.

---

**Q: Are your breeding dogs health tested?**

A: Yes. Both Silas and Macy have completed OFA hip and elbow evaluations, OFA eye exams (CAER), and full DNA genetic panels through Orivet. Full test results are available on request and on each dog's profile page. Our protocols meet or exceed ALAA Gold Paw standards, and OFA results can be verified independently at ofa.org.

---

**Q: What does your health guarantee cover?**

A: We provide a 3-year guarantee covering debilitating congenital conditions present from birth — including severe hip/elbow dysplasia, PRA, and severe cardiac defects. If a covered condition is confirmed by a licensed veterinarian, we provide a replacement puppy of equal or lesser value from the next available litter.

---

**Q: Are you ALAA accredited?**

A: Yes. Adams Farm Labradoodles is an accredited breeder with the Australian Labradoodle Association of America. The ALAA is the only registering body that maintains a verified studbook for the Australian Labradoodle breed. Accreditation requires annual audits of health testing, facility standards, and breeding practices.

---

**Q: How does your waitlist work?**

A: Start by filling out our contact form. We'll connect to learn about your home and lifestyle, then add you to the waitlist once a litter is confirmed. We match families to puppies at 6–7 weeks based on temperament, energy level, and household fit — not strictly by signup order.

---

**Q: Can we visit and meet the parents before committing?**

A: Absolutely — and we encourage it. Families are welcome to visit in person to meet Silas and Macy before making any commitment. Just reach out through our contact form to schedule a time.

*(Note: "meet Silas and Macy" is the correct wording — refers to meeting our
breeding dogs, not the litter parents Knox/Holly who are co-owned with Legend Manor.)*

---

**Q: Where are you located, and when can we visit the puppies?**

A: We're located in Greensboro, NC. Families visit puppies in person at 6 weeks, once they've had their initial vaccines and dewormings. From birth through pickup day, you'll receive weekly photo and video updates — and we offer live video calls so you can watch your puppy grow.

---

**Q: When do puppies go home, and what's included?**

A: Puppies go home at 8 weeks. Each puppy comes with a full veterinary exam, initial vaccinations, deworming, microchip, health guarantee, and a puppy package that includes food, a familiar-scented item, and a care guide to help them settle in.

---

## HOME PAGE FAQ SECTION (shorter version)

**Source:** `index.astro` section ⑩ (5 condensed FAQs used on homepage)

These 5 items are the condensed homepage FAQ — different from the full FAQ page above.

1. **What is ALAA Gold Paw accreditation, and why does it matter?**
   Gold Paw is our highest health-testing standard under the Australian Labradoodle Association of America — the accrediting body that verifies pedigrees and sets the breed standard. It means every breeding dog in our program is health tested and verified, not just labeled "Australian Labradoodle."

2. **What makes an Australian Labradoodle different from other "doodle" breeds?**
   A true Australian Labradoodle is a multi-generational breed with both parents being Australian Labradoodles themselves — not a first-generation Lab and Poodle mix. Only dogs registered with ALAA, ALCA, or WALA are held to that standard.

3. **Are Adams Farm puppies allergy friendly?**
   Yes. Every puppy we place is guaranteed 100% non-shedding and allergy friendly. As ALAA notes, no dog is truly hypoallergenic, but a carefully bred, low-to-no-shedding coat makes the breed a strong option for allergy-sensitive families.

4. **What does "raised in loving homes" mean — do all your dogs live with you?**
   Puppies are whelped in the Campbell home. Some of our breeding dogs live with us, and others live with trusted guardian families — but every dog in our program is raised in a loving home, never a kennel.

5. **What health guarantee comes with my puppy?**
   We test breeding dogs for known congenital defects and back what can't be tested for with a 3-year written guarantee, so your family can adopt with real confidence.

---

## EXTERNAL LINKS TO PRESERVE

- Google reviews: `https://share.google/FmRRIkSGouEi3RIFT`
- ALAA breed standard: `https://alaa-labradoodles.com/for-breeders/breed-standard/`
- OFA verification: `ofa.org`

---

## IMAGE INVENTORY (migrated to public/images/)

```
credentials/
  Adams-Farm-ALAA-Logo-2026.png
  Adams-Farm-Gold-Paw-Badge-2026.png   ← correct filename (no trailing space)
  akc-reunite.png
  akc-reunite-badge.png
  badass-breeder.png
  baxter-bella.png
  better-breed-by-design-badge.png     ← lowercase; Astro refs as "Better-Breed-By-Design-Badge.png"
  revival-animal-health.png
  revival-animal-health-badge.png
  trupanion.png
  trupanion-badge.png

dogs/
  silas-main.jpg · silas-2.jpg · silas-3.jpg · silas-4.jpg
  winnie-main.jpg · winnie-2.jpg · winnie-3.jpg
  home-hero.jpg
  ⚠️  macy.jpg MISSING — no photo exists for Macy yet

families/
  355x328.png · Slot-2a.png · Slot-2b.png · Slot-3.jpg · Slot-4.png · Slot-5.png
  foreverfamily-1.jpg · -3.jpg · -4.jpg · -5.jpg · -6.jpg · -7.jpg · -8.jpg

hero/
  founder-hero-portrait.jpg
  founder-hero-wide.jpg

puppies/
  blue-collar-5-18-26.jpg   (Stitch)
  red-collar-5-18-26.jpg    (Jumba)
  light-blue-collar-5-18-26.jpg (Tutu)
  pink-collar-5-18-26.jpg   (Angel)
  yellow-collar-5-18-26.jpg (David)
  green-collar-5-18-26.jpg  (Lilo)

story/
  douglas-erika-winnie.jpg
  founder-family-close.jpg
  founder-family-wide.jpg
  founder-story-landscape.jpg
  founder-story-portrait.jpg
  julian-marieclaire-winnie.jpg

root-level:
  douglas-erika-winnie.jpg
  founder-family-close.jpg
  founder-family-wide.jpg
  julian-marieclaire-winnie.jpg
```

**Note on credentials badge casing:** Astro source references
`Better-Breed-By-Design-Badge.png` (mixed case) but the file on disk is
`better-breed-by-design-badge.png` (lowercase). Works on Windows (case-insensitive)
but will 404 on Vercel/Linux. Use the lowercase path in all Next.js page code:
`/images/credentials/better-breed-by-design-badge.png`
