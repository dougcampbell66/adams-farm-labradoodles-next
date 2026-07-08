export type Testimonial = {
  id: string;
  family: string;
  year?: string;
  quote: string;
  featured: boolean;
};

export const testimonials: Testimonial[] = [
  {
    id: "deirdre",
    family: "Deirdre",
    quote:
      "We are smitten with our bright & adorable Australian Labradoodle from Adams Farm Labradoodles. Paisley is such a happy girl. She draws attention from people everywhere she goes. She adjusted seamlessly to our home, our routines, and older dog. From the beginning she showed good manners, confidence, and a loving temperament.",
    featured: true,
  },
  {
    id: "imani-grace",
    family: "Imani-Grace",
    quote:
      "An amazing family operated company. We love our dog, Samson, more than words can describe. He is calm and loving — we can tell he was born into an environment of care. Doug & Erika are awesome and provided us with all the information we needed as soon as we bought Samson.",
    featured: false,
  },
  {
    id: "serina",
    family: "Serina",
    quote:
      "We had just moved to the U.S. from Japan, and never expected to meet such a kind and wonderful breeder family so soon. It truly felt like fate. Thanks to Adams Farm, not only did we meet amazing people, but we also welcomed a new, loving member into our family.",
    featured: false,
  },
  {
    id: "robin",
    family: "Robin",
    quote:
      "It was clear he came from a breeder who truly cares. He's got a beautiful hair (no shedding), the kindest temperament, and has been easy to train, playful, and great with everyone he meets.",
    featured: false,
  },
  {
    id: "bennett-family",
    family: "The Bennett family",
    year: "2025",
    quote:
      "We drove four hours to meet the parents first. That told us everything we needed to know.",
    featured: false,
  },
  {
    id: "sherrie",
    family: "Sherrie",
    quote:
      "Dougie is such a joy and I'm so blessed to have him. He is so smart and will begin obedience training in June.",
    featured: false,
  },
];

export const featuredTestimonial = testimonials.find((t) => t.featured);
