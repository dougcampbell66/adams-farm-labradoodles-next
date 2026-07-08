export type HealthTest = {
  test: string;
  date: string;
  result: string;
};

export type Dog = {
  id: string;
  name: string;
  role: "sire" | "dam";
  status: "active" | "retired";
  registeredName: string;
  regNumber: string;
  birthdate: string;
  color: string;
  microchip: string;
  parents: string;
  coi?: string;
  photo: string;
  gallery?: string[];
  description: string;
  healthTests?: HealthTest[];
};

export const dogs: Dog[] = [
  {
    id: "silas",
    name: "Silas",
    role: "sire",
    status: "active",
    registeredName: "Legend Manor's Silas",
    regNumber: "ALAA-128304",
    birthdate: "2023-08-15",
    color: "caramel/white",
    microchip: "992000001807086",
    parents: "Sire: Homestead Manor's Bailey · Dam: Joyful Hearts Dixie",
    coi: "1.9%",
    photo: "/images/dogs/silas-main.jpg",
    gallery: [
      "/images/dogs/silas-2.jpg",
      "/images/dogs/silas-3.jpg",
      "/images/dogs/silas-4.jpg",
    ],
    description:
      "Silas is Adams Farm's active sire, ALAA registered as Legend Manor's Silas.",
    healthTests: [
      {
        test: "OFA Elbows (preliminary)",
        date: "2024-04-19",
        result: "Negative for elbow dysplasia",
      },
      {
        test: "OFA Cardiac",
        date: "2024-04-19",
        result: "Normal, no evidence of heart disease",
      },
      {
        test: "CAER/OFA Eye Exam",
        date: "2025-11-19",
        result: "Normal, valid through Nov 2026 (OFA# LD-EYE9739/27M-VPI)",
      },
      {
        test: "DNA Health Panel (Orivet)",
        date: "2025-12-17",
        result:
          "Full panel complete; two findings flagged for breeding-pair review, all other conditions clear",
      },
    ],
  },
  {
    id: "macy",
    name: "Macy",
    role: "dam",
    status: "active",
    registeredName: "Adams Farm Macy",
    regNumber: "ALAA-136172",
    birthdate: "2024-07-08",
    color: "caramel",
    microchip: "956000017703575",
    parents:
      'Sire: Tarheel\'s May the Force B With U "Chewy" · Dam: Legend Manor\'s Prancer',
    photo: "/images/dogs/macy.jpg",
    description:
      "Macy is Adams Farm's active dam, ALAA registered as Adams Farm Macy.",
    healthTests: [
      {
        test: "OFA Hips (preliminary)",
        date: "2025-11-17",
        result: "Good conformation",
      },
      {
        test: "OFA Elbows (preliminary)",
        date: "2025-11-17",
        result: "Negative for elbow dysplasia",
      },
      {
        test: "CAER/OFA Eye Exam",
        date: "2025-11-19",
        result: "Normal, valid through Nov 2026 (OFA# LD-EYE12229/16F-VPI)",
      },
      {
        test: "DNA Health Panel (Orivet)",
        date: "2025-12-17",
        result:
          "Full panel complete; clear on all tested conditions including CDDY/IVDD and Copper Toxicosis",
      },
    ],
  },
  {
    id: "winnie",
    name: "Winnie",
    role: "dam",
    status: "retired",
    registeredName: "Legend Manor's Prancer",
    regNumber: "ALAA-096855",
    birthdate: "2020-12-19",
    color: "cream/apricot",
    microchip: "992000000659967",
    parents: "Sire: Shady Creek Good Luck Charlie · Dam: Legend Manor's Grace",
    coi: "0.8%",
    photo: "/images/dogs/winnie-main.jpg",
    gallery: [
      "/images/dogs/winnie-2.jpg",
      "/images/dogs/winnie-3.jpg",
    ],
    description:
      "Winnie (registered as Legend Manor's Prancer) is retired from breeding after producing several litters for Adams Farm.",
  },
];

export const activeDogs = dogs.filter((d) => d.status === "active");
export const retiredDogs = dogs.filter((d) => d.status === "retired");
