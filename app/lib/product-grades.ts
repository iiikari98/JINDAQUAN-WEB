export type ProductGradeGroup = {
  product: string;
  productSlug: string;
  summary: string;
  grades: string[];
};

export const productGradeGroups: ProductGradeGroup[] = [
  {
    product: "Opaque Plastic Pellet Toughening Agents",
    productSlug: "opaque-impact-modifier-granule",
    summary: "Opaque pellet toughening grades for non-transparent plastic impact modification.",
    grades: [
      "A-656*",
      "A-658",
      "A-659",
      "A-6589",
      "6629",
      "A-662*",
      "A-688",
      "A-689",
      "A-664",
      "A-6648*",
      "A-6649",
      "A-698*",
      "A-698A*",
      "A-665",
      "A-6651",
      "A-6652*",
      "A-668",
      "A-669K",
      "A-669",
      "669S",
      "A-6699",
      "6699-3D",
      "A-8566",
      "8566C",
      "A-673",
      "A-680",
      "A-6801*",
      "6818",
      "A-653-3",
      "A-660",
      "A-6601*",
    ],
  },
  {
    product: "Transparent Plastic Pellet Toughening Agents",
    productSlug: "transparent-impact-modifier-granule",
    summary: "Transparent pellet toughening grades for clear plastic impact modification.",
    grades: ["A-861*", "A-863*", "A-865", "A-866", "A-868*", "A-8523*", "A-93022", "A-8528", "A-8666", "8668", "A-8688"],
  },
  {
    product: "Transparent Liquid Toughening Agents",
    productSlug: "transparent-impact-modifier-liquid",
    summary: "Transparent liquid toughening grades for low-dosage impact modification.",
    grades: ["A-602", "A-6028", "A-603", "A-606", "A-608*", "A-609", "A-608E*", "A-6091", "A-6098", "A-610", "A-612", "A-615", "A-618", "A-3108"],
  },
  {
    product: "Plastic Brighteners",
    productSlug: "plastic-shining-additive",
    summary: "Brightness and gloss improvement grades for plastic appearance modification.",
    grades: ["A-388", "A-3902", "A-390"],
  },
  {
    product: "Matting Agents / Matting Masterbatches",
    productSlug: "plastic-matting-agent",
    summary: "Matting and frosted-surface grades for gloss reduction.",
    grades: ["A-5381", "A-5388", "5383", "5366"],
  },
  {
    product: "Plastic Flame Retardants",
    productSlug: "plastic-flame-retardant",
    summary: "Masterbatch flame-retardant grades for plastic flame resistance projects.",
    grades: ["A-P19", "A-P23", "A-P24C", "284", "A-P25*", "A-P26", "A-P27", "A-286", "A-260", "A-280"],
  },
  {
    product: "Plastic Clarifying Agents",
    productSlug: "pp-clarifying-agent-masterbatch",
    summary: "Clarifying grades for PP and optical appearance improvement.",
    grades: ["A-930", "A-931", "A-933", "A-938"],
  },
  {
    product: "Cold-Resistant Agents",
    productSlug: "plastic-anti-cold-agent",
    summary: "Cold-resistance grade for low-temperature plastic toughness.",
    grades: ["A-940"],
  },
  {
    product: "Stiffening Agents",
    productSlug: "plastic-stiffening-agent",
    summary: "Stiffening grades for rigidity, hardness and dimensional stability.",
    grades: ["A-P30", "A-913", "A-P34A", "A-P60", "A-936"],
  },
  {
    product: "Plastic Heat-Resistant Agents",
    productSlug: "plastic-heat-stabilizer",
    summary: "Heat-resistant masterbatch grades for selected transparent plastic systems.",
    grades: ["A-7250", "A-7320"],
  },
  {
    product: "Compatibilizers",
    productSlug: "plastic-compatibilizer",
    summary: "Compatibilizer grades for filler, PP and polymer blend interface improvement.",
    grades: ["A-8510", "A-8520", "A-8521", "A-8524", "A-8525", "A-8530", "A-8531", "A-8590"],
  },
  {
    product: "Antistatic Agents",
    productSlug: "plastic-antistatic-agent",
    summary: "Antistatic grade for static control and dust reduction.",
    grades: ["A-440"],
  },
  {
    product: "Heat Stabilizers",
    productSlug: "plastic-heat-stabilizer",
    summary: "Heat stabilizer grade for thermal stability support.",
    grades: ["A-456"],
  },
  {
    product: "Light Diffusing Agents",
    productSlug: "light-diffusion-agent",
    summary: "Light diffusing grades for LED hiding and optical balance.",
    grades: ["A-682", "A-683", "A-685"],
  },
  {
    product: "Melt Flow Index Regulators",
    productSlug: "melt-flow-index-modifier",
    summary: "MFI regulation grade for processing flow adjustment.",
    grades: ["A-490"],
  },
  {
    product: "Anti-Scratch Agents for Hard Plastics",
    productSlug: "anti-scratch-slip-agent",
    summary: "Anti-scratch grade for hard plastic surface protection.",
    grades: ["A38200"],
  },
  {
    product: "Transparent Mold Release Powder",
    productSlug: "transparent-mold-release-masterbatch",
    summary: "Transparent mold-release powder grades for demolding support.",
    grades: ["A-399", "A-397"],
  },
  {
    product: "Antibacterial Masterbatches for Soft Plastics",
    productSlug: "antibacterial-mildew-inhibitor",
    summary: "Antibacterial masterbatch grade for soft plastic systems.",
    grades: ["A-990"],
  },
  {
    product: "Antibacterial Masterbatches for Hard Plastics",
    productSlug: "antibacterial-mildew-inhibitor",
    summary: "Antibacterial masterbatch grade for hard plastic systems.",
    grades: ["A-9901"],
  },
];

export function getGradeGroupsByProductSlug(slug: string) {
  return productGradeGroups.filter((group) => group.productSlug === slug);
}

export function getGradesByProductSlug(slug: string) {
  return getGradeGroupsByProductSlug(slug).flatMap((group) => group.grades);
}
