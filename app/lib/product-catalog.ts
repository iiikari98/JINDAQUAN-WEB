import { getGradesByProductSlug } from "./product-grades";

export type ProductCatalogItem = {
  slug: string;
  name: string;
  meta: string;
  summary: string;
  image: string;
  category: string;
  description: string;
  applications: string[];
  benefits: string[];
  processing: string[];
  keywords: string[];
  materials?: string[];
  contentStatus?: "draft" | "catalog-reviewed" | "tds-reviewed" | "final";
  sourceRefs?: string[];
  documents?: {
    tds?: string;
    sds?: string;
  };
};

export const homepageProductSlugs = [
  "transparent-impact-modifier-granule",
  "plastic-stiffening-agent",
  "plastic-flame-retardant",
  "plastic-compatibilizer",
  "light-diffusion-agent",
  "modified-pvc-liquid-plastisol",
] as const;

export const productCategoryOrder = [
  "Transparent impact modification",
  "Impact and toughness modification",
  "Flame retardant modification",
  "Optical and lighting plastics",
  "Surface appearance modification",
  "Stiffness and dimension control",
  "Dimension control",
  "Low-temperature performance",
  "Hygiene and protection additives",
  "Static control additives",
  "Surface performance additives",
  "Heat resistance modification",
  "Processing and flow control",
  "Processing aid",
  "Compounding interface support",
  "PP optical modification",
  "Special engineering plastics",
  "Custom modification",
] as const;

const processNotes = [
  "Suitable for compounding, injection molding, extrusion, blow molding, film or sheet trials depending on the resin system.",
  "Share base resin, target performance, part thickness and process route before final grade selection.",
  "Use TDS/SDS and small-batch testing to confirm dosage, appearance and final performance before mass production.",
];

const broadPlasticMaterials = [
  "PP",
  "PE",
  "PVC",
  "TPU",
  "ABS",
  "PC",
  "PPS",
  "PA",
  "PET",
  "PETG",
  "POM",
  "PBT",
  "PMMA",
  "HIPS",
  "GPPS",
  "PPO",
  "AS",
  "PLA",
  "PBAT",
];

const commonTransparentMaterials = ["PP", "ABS", "PC", "PET", "PETG", "PMMA", "GPPS", "AS"];
const broadSurfaceMaterials = ["PP", "PE", "PVC", "TPU", "ABS", "PC", "PA", "PET", "PETG", "POM", "PBT", "PMMA", "HIPS", "GPPS", "AS", "PLA", "PBAT"];
const generalPurposeMaterials = ["General-purpose plastic systems"];
const materialSearchTokens = new Set([
  "PP",
  "PE",
  "PVC",
  "TPU",
  "ABS",
  "PC",
  "PPS",
  "PA",
  "PET",
  "PETG",
  "POM",
  "PBT",
  "PMMA",
  "HIPS",
  "GPPS",
  "PPO",
  "AS",
  "PLA",
  "PBAT",
  "PS",
  "EVA",
]);

export const productCatalog: ProductCatalogItem[] = [
  {
    slug: "transparent-impact-modifier-granule",
    name: "Transparent Impact Modifier Granule",
    meta: "Main product | 2-6% trial dosage",
    summary: "Improves toughness, impact strength and elongation while helping clear plastics keep their original transparency.",
    image: "/assets/transparent-impact-modifier-granules-angle.png",
    category: "Transparent impact modification",
    materials: commonTransparentMaterials,
    description:
      "A direct-add toughening granule for transparent or translucent plastics where buyers need better impact resistance without turning the part cloudy or changing the original appearance.",
    applications: [
      "Clear PP, ABS, PC, PET, PETG, PMMA, GPPS and AS products",
      "Transparent sheets, profiles, containers, covers and lighting parts",
      "Low-temperature or drop-impact applications where clarity still matters",
    ],
    benefits: [
      "Maintains colorless transparent appearance in suitable resin systems",
      "Improves impact strength, elongation and low-temperature toughness",
      "Direct addition helps reduce extra pelletizing steps during trials",
    ],
    processing: [
      "Start evaluation around 2-6% and adjust by resin, thickness and target impact level.",
      ...processNotes,
    ],
    keywords: [
      "transparent impact modifier",
      "clear plastic toughening agent",
      "transparent plastic additive",
      "impact modifier granule",
      "toughness modifier",
      "low temperature impact",
    ],
  },
  {
    slug: "plastic-stiffening-agent",
    name: "Plastic Stiffening Agent",
    meta: "Direct adding | dimension support",
    summary: "Enhances hardness, flexural modulus and ring stiffness while helping products maintain stable dimensions.",
    image: "/assets/plastic-stiffening-agent-colored-masterbatch.png",
    category: "Stiffness and dimension control",
    materials: ["PP", "PE"],
    description:
      "Designed for PP, PE and related plastic products that need higher rigidity, better dimensional stability and stronger structural feel without a complicated process change.",
    applications: [
      "Plastic profiles, containers, pipes and thin-wall molded parts",
      "Products requiring ring stiffness, hardness or shape retention",
      "Cost-sensitive PP and PE modification projects",
    ],
    benefits: [
      "Improves hardness, flexural modulus and structural stiffness",
      "Helps reduce deformation and dimensional drift",
      "Direct-add format supports practical production adjustment",
    ],
    processing: [
      "Confirm the target stiffness and acceptable toughness balance before grade selection.",
      ...processNotes,
    ],
    keywords: [
      "plastic stiffening agent",
      "rigidity additive",
      "ring stiffness additive",
      "flexural modulus modifier",
      "dimension stabilizer",
      "PP PE stiffness",
    ],
  },
  {
    slug: "plastic-flame-retardant",
    name: "Plastic Flame Retardant",
    meta: "High LOI | V0-V2 support",
    summary: "Flame-retardant additive support for PP, PE, ABS, PC, PET and PA applications, including glow-wire review.",
    image: "/assets/plastic-flame-retardant-burn-test.png",
    category: "Flame retardant modification",
    materials: ["PP", "PE", "ABS", "PC", "PET", "PETG", "PS", "PA"],
    description:
      "A practical flame-retardant solution for plastic parts where buyers need safety performance, processing fit and mechanical property balance reviewed together.",
    applications: [
      "PP, PE, ABS, PC, PET, PETG, PS and PA plastic parts",
      "Electrical, appliance, cable, component and industrial applications",
      "Projects targeting V0, V1, V2, high LOI or glow-wire performance",
    ],
    benefits: [
      "Supports high oxygen index and flame-retardant performance targets",
      "Can be reviewed for formulations needing toughness and flame resistance together",
      "Designed for direct-add evaluation without unnecessary process complexity",
    ],
    processing: [
      "Confirm target fire standard, wall thickness, resin grade and filler system before recommendation.",
      "Performance must be verified by formal flame testing under the buyer's exact formulation.",
      ...processNotes,
    ],
    keywords: [
      "plastic flame retardant",
      "PP flame retardant",
      "ABS flame retardant",
      "high LOI additive",
      "glow wire",
      "V0 V1 V2 flame retardance",
    ],
  },
  {
    slug: "plastic-compatibilizer",
    name: "Plastic Compatibilizer",
    meta: "Interface bonding | custom support",
    summary: "Supports interface bonding, filler dispersion and property balance in filled or blended polymer compounds.",
    image: "/assets/plastic-compatibilizer-powder-pellets-v3.png",
    category: "Compounding interface support",
    materials: ["PP", "filled compounds", "polymer blends", "recycled plastics"],
    description:
      "Used for filled compounds, polymer blends and recycled modification projects where the interface between resin, filler and additive package controls the final mechanical result.",
    applications: [
      "PP filled compounds, mineral-filled plastics and modified blends",
      "Recycled plastic compounding where dispersion and toughness matter",
      "Custom formulations requiring interface and processing support",
    ],
    benefits: [
      "Improves filler-polymer interface bonding and dispersion",
      "Supports mechanical property retention in modified compounds",
      "Can be selected around resin, filler type and loading level",
    ],
    processing: [
      "Share filler type, filler ratio, base resin and target property data before recommendation.",
      ...processNotes,
    ],
    keywords: [
      "plastic compatibilizer",
      "polymer compatibilizer",
      "PP filler compatibilizer",
      "interface bonding",
      "filler dispersion",
      "compound modifier",
    ],
  },
  {
    slug: "light-diffusion-agent",
    name: "Light Diffusion Agent",
    meta: "Optical additive | 0.5-0.8% trial",
    summary: "Balances LED hiding, haze and high light transmittance for transparent lighting plastics.",
    image: "/assets/light-diffusion-powder-diffuser.png",
    category: "Optical and lighting plastics",
    materials: ["PP", "PVC", "ABS", "PC", "PA", "PET", "PETG", "PMMA", "GPPS", "AS"],
    description:
      "An optical diffusion additive for transparent lighting materials that need smoother light output, reduced lamp-bead visibility and controlled haze without sacrificing too much transmission.",
    applications: [
      "LED covers, lampshades, diffuser sheets and optical plastic parts",
      "PP, PVC, ABS, PC, PA, PET, PETG, PMMA, GPPS and AS systems",
      "Lighting products needing visual uniformity and high transmission",
    ],
    benefits: [
      "Helps hide LED points and improve light uniformity",
      "Supports high-transmission transparent lighting designs",
      "High heat resistance helps reduce yellowing risk during processing trials",
    ],
    processing: [
      "Start around 0.5-0.8% and tune by part thickness, haze target and light transmission target.",
      ...processNotes,
    ],
    keywords: [
      "light diffusion agent",
      "LED diffuser additive",
      "plastic optical additive",
      "lamp bead hiding",
      "PMMA diffuser",
      "PC diffuser",
    ],
  },
  {
    slug: "modified-pvc-liquid-plastisol",
    name: "Modified PVC Liquid Plastisol",
    meta: "R&D product | low-temperature molding",
    summary: "Low-temperature molding plastisol for filter cartridges, gaskets, sealing strips and custom formed parts.",
    image: "/assets/modified-pvc-liquid-plastisol-closeup.png",
    category: "Special engineering plastics",
    materials: ["Modified PVC plastisol systems"],
    description:
      "A modified PVC plastisol solution for sealing and formed-part applications where lower-temperature processing, odor control and energy saving are important selection points.",
    applications: [
      "Vacuum cleaner filter cylinders and automotive air filter cartridges",
      "Gaskets, sealing rings, sealing strips and flexible molded parts",
      "Projects looking for alternatives to selected silicone rubber sealing parts",
    ],
    benefits: [
      "Supports lower-temperature molding and energy-saving production routes",
      "Useful for sealing structures that require formed liquid plastisol behavior",
      "Can be reviewed as a custom R&D material for special applications",
    ],
    processing: [
      "Typically evaluated through oven baking, heating extrusion or the buyer's formed-part process.",
      "Confirm viscosity, curing condition, bonding behavior and final sealing performance before procurement.",
      ...processNotes,
    ],
    keywords: [
      "modified PVC plastisol",
      "PVC liquid plastisol",
      "filter cartridge plastisol",
      "gasket material",
      "sealing strip material",
      "low temperature molding",
    ],
  },
  {
    slug: "transparent-impact-modifier-liquid",
    name: "Transparent Impact Modifier Liquid",
    meta: "Liquid additive | 0.2-0.6% trial",
    summary: "Low-dosage liquid toughening support for transparent and flame-retardant plastic modification.",
    image: "/assets/transparent-impact-modifier-granules-angle.png",
    category: "Transparent impact modification",
    materials: broadPlasticMaterials,
    description:
      "A liquid impact modifier for plastic systems that need improved toughness with very low addition levels and minimal influence on original transparency.",
    applications: [
      "PP, PE, PVC, TPU, ABS, PC, PPS, PA, PET, PETG and PMMA systems",
      "Transparent plastic parts requiring toughness improvement",
      "Flame-retardant plastics where impact strength also needs support",
    ],
    benefits: [
      "Low trial dosage helps reduce formula impact",
      "Helps maintain transparent appearance in suitable applications",
      "Liquid form can simplify mixing in selected production routes",
    ],
    processing: [
      "Start around 0.2-0.6% and check dispersion before performance testing.",
      ...processNotes,
    ],
    keywords: ["liquid impact modifier", "transparent toughening liquid", "low dosage toughening", "clear plastic impact"],
  },
  {
    slug: "opaque-impact-modifier-granule",
    name: "Opaque Impact Modifier Granule",
    meta: "Toughness | 2-6% trial",
    summary: "Improves impact strength, compatibility, lubrication and cold resistance in non-transparent plastic products.",
    image: "/assets/plastic-compatibilizer-powder-pellets-v3.png",
    category: "Impact and toughness modification",
    materials: broadPlasticMaterials,
    description:
      "A direct-add impact modifier for opaque plastics where toughness, low-temperature resistance and processing balance are more important than optical clarity.",
    applications: [
      "PP, PE, PVC, TPU, ABS, PC, PA, PET, PETG and recycled compounds",
      "Injection, extrusion, blow molding and sheet or profile applications",
      "Parts that need toughness improvement without strict transparency requirements",
    ],
    benefits: [
      "Improves impact strength and low-temperature toughness",
      "Can support compatibility and lubrication in modified compounds",
      "Direct addition supports efficient trial and production adjustment",
    ],
    processing: [
      "Start around 2-6% and compare impact, stiffness and appearance after trial molding.",
      ...processNotes,
    ],
    keywords: ["opaque impact modifier", "plastic toughening granule", "anti cold impact modifier", "recycled plastic toughening"],
  },
  {
    slug: "plastic-anti-cold-agent",
    name: "Plastic Anti Cold Agent",
    meta: "Low-temperature toughness | -40 C target review",
    summary: "Improves low-temperature toughness and anti-freeze performance for plastic products.",
    image: "/assets/transparent-impact-modifier-granules-angle.png",
    category: "Low-temperature performance",
    materials: broadPlasticMaterials,
    description:
      "An anti-cold modifier for products exposed to low temperature, shipping stress or cold climates where brittle failure needs to be reduced.",
    applications: [
      "PP, PE, PVC, TPU, ABS, PC, PA, PET, PETG and related materials",
      "Outdoor, cold-chain, transport and low-temperature plastic parts",
      "Products requiring impact performance review at sub-zero conditions",
    ],
    benefits: [
      "Improves toughness and impact resistance in cold environments",
      "Supports anti-freeze and low-temperature durability targets",
      "Direct-add evaluation keeps the trial process practical",
    ],
    processing: [
      "Confirm target test temperature and impact method before grade selection.",
      ...processNotes,
    ],
    keywords: ["plastic anti cold agent", "low temperature toughness", "anti freeze plastic additive", "cold resistance additive"],
  },
  {
    slug: "plastic-matting-agent",
    name: "Plastic Matting Agent",
    meta: "Matte effect | powder or masterbatch",
    summary: "Creates a durable frosted matte surface while preserving smooth feel and cleanability.",
    image: "/assets/plastic-stiffening-agent-colored-masterbatch.png",
    category: "Surface appearance modification",
    materials: broadSurfaceMaterials,
    description:
      "A matte additive for plastic surfaces that need lower gloss, higher haze and a premium frosted visual effect without paint or secondary surface treatment.",
    applications: [
      "PP, PE, PVC, TPU, ABS, PC, PA, PET, PETG, PMMA and GPPS parts",
      "Matte containers, consumer goods, profiles and decorative surfaces",
      "Applications needing gloss reduction and a frosted appearance",
    ],
    benefits: [
      "Reduces surface brightness and increases matte visual texture",
      "Can keep the surface smooth and easier to clean than rough coatings",
      "Matte effect is built into the plastic formulation",
    ],
    processing: [
      "Evaluate powder or masterbatch route based on feeding and dispersion needs.",
      "Typical trial range depends on required matte level and resin transparency.",
      ...processNotes,
    ],
    keywords: ["plastic matting agent", "matte additive", "flatting agent", "frosted plastic", "gloss reduction", "haze additive"],
  },
  {
    slug: "plastic-shining-additive",
    name: "Plastic Shining Additive",
    meta: "Gloss support | low dosage",
    summary: "Improves surface brightness, dispersion, flow and smooth feel for plastic products.",
    image: "/assets/light-diffusion-powder-diffuser.png",
    category: "Surface appearance modification",
    materials: generalPurposeMaterials,
    description:
      "A gloss and surface modifier for plastic products that need higher brightness, smoother feel and better processing without obvious loss of transparency.",
    applications: [
      "Transparent or colored plastic products requiring higher gloss",
      "Injection and extrusion products with surface appearance targets",
      "Applications that also need flow, dispersion or scratch-feel support",
    ],
    benefits: [
      "Improves brightness and surface gloss in suitable formulations",
      "Supports dispersion, flow and internal or external lubrication",
      "Helps maintain secondary printing or spraying compatibility after validation",
    ],
    processing: [
      "Start with a low-dose trial and verify gloss, printability and surface feel.",
      ...processNotes,
    ],
    keywords: ["plastic shining additive", "gloss additive", "brightness modifier", "surface gloss modifier", "flow and brightness"],
  },
  {
    slug: "pp-clarifying-agent-masterbatch",
    name: "PP Clarifying Agent Masterbatch",
    meta: "PP transparency | masterbatch",
    summary: "Improves PP transparency and light transmittance for clear polypropylene products.",
    image: "/assets/transparent-impact-modifier-granules-angle.png",
    category: "PP optical modification",
    materials: ["PP"],
    description:
      "A PP clarifying masterbatch for polypropylene products where higher transparency and cleaner visual appearance are key buyer requirements.",
    applications: [
      "Clear polypropylene containers, caps, household goods and molded parts",
      "PP products requiring improved light transmission",
      "Applications needing PP clarity without extra pelletizing during trial",
    ],
    benefits: [
      "Improves PP transparency and visual cleanliness",
      "Supports high light transmittance in suitable PP grades",
      "Masterbatch format helps feeding and production consistency",
    ],
    processing: [
      "Evaluate around the target clarity, haze and processing temperature of the PP grade.",
      ...processNotes,
    ],
    keywords: ["PP clarifying agent", "PP clarifier masterbatch", "transparent PP additive", "polypropylene transparency"],
  },
  {
    slug: "antibacterial-mildew-inhibitor",
    name: "Antibacterial Mould and Mildew Inhibitor",
    meta: "Hygiene additive | 2-6% trial",
    summary: "Adds antibacterial and anti-mildew performance for toys, household products, kitchenware and electronics.",
    image: "/assets/plastic-stiffening-agent-colored-masterbatch.png",
    category: "Hygiene and protection additives",
    materials: ["PP", "PE", "PVC", "TPU", "ABS", "PC", "PA", "PET", "PETG", "POM", "PMMA", "HIPS", "GPPS", "AS", "PLA", "PBAT"],
    description:
      "A functional additive for plastic products that need antibacterial or mould-resistant performance while keeping normal processing routes practical.",
    applications: [
      "Children's toys, household goods, kitchen and bathroom products",
      "Electronic housings, stationery and daily-use plastic items",
      "PP, PE, PVC, TPU, ABS, PC, PA, PET, PETG and related polymers",
    ],
    benefits: [
      "Supports antibacterial and mildew-resistance performance targets",
      "Can be evaluated against common bacteria, fungi and hygiene requirements",
      "Direct-add route helps practical production trials",
    ],
    processing: [
      "Confirm the target organism, test standard and product use environment before selection.",
      ...processNotes,
    ],
    keywords: ["antibacterial additive", "mildew inhibitor", "anti mould masterbatch", "hygiene plastic additive", "antifungal plastic"],
  },
  {
    slug: "melt-flow-index-modifier",
    name: "Melt Flow Index Modifier",
    meta: "Flow control | PP and PE",
    summary: "Adjusts melt flow, improves fluidity and helps solve weld-line or processing issues.",
    image: "/assets/modified-pvc-liquid-plastisol-closeup.png",
    category: "Processing and flow control",
    materials: ["PP", "PE"],
    description:
      "A flow-control additive for PP and PE projects where melt flow, gloss, weld-line cracking or extrusion behavior needs to be tuned.",
    applications: [
      "PP compounding and injection molding flow improvement",
      "HDPE extrusion pipes, boards and profiles",
      "Projects requiring melt flow adjustment and processing stability",
    ],
    benefits: [
      "Can increase PP flow or reduce PE flow depending on formulation direction",
      "Helps improve fluidity, gloss and selected weld-line issues",
      "Useful for production process troubleshooting and formulation tuning",
    ],
    processing: [
      "Confirm current MFI, target MFI and processing temperature before recommendation.",
      ...processNotes,
    ],
    keywords: ["melt flow index modifier", "MFI modifier", "PP flow modifier", "PE flow control", "weld line cracking"],
  },
  {
    slug: "anti-warping-stabilizer",
    name: "Anti-Bending Anti-Warping Stabilizer",
    meta: "Thin-wall stability | shrinkage control",
    summary: "Helps reduce warping, control shrinkage and stabilize dimensions in thin-wall plastic products.",
    image: "/assets/plastic-stiffening-agent-colored-masterbatch.png",
    category: "Dimension control",
    materials: ["PP", "PE", "general plastic systems"],
    description:
      "A stabilizing additive for molded plastic parts that suffer from warping, bending or shrinkage variation, especially in thin-wall structures.",
    applications: [
      "Thin-wall PP, PE and modified plastic products",
      "Molded parts requiring better dimensional stability",
      "Applications where shrinkage control affects assembly or appearance",
    ],
    benefits: [
      "Helps reduce warping deformation and shrinkage variation",
      "Supports higher dimensional stability and flexural modulus",
      "Direct-add evaluation can be paired with mold and process adjustment",
    ],
    processing: [
      "Review part design, gate position, cooling, filler and resin shrinkage before final recommendation.",
      ...processNotes,
    ],
    keywords: ["anti warping agent", "anti bending stabilizer", "shrinkage control", "thin wall plastic", "dimension stabilizer"],
  },
  {
    slug: "plastic-antistatic-agent",
    name: "Plastic Antistatic Agent",
    meta: "Static control | direct adding",
    summary: "Reduces static buildup, dust attraction and static-related handling risk in plastic products.",
    image: "/assets/plastic-stiffening-agent-colored-masterbatch.png",
    category: "Static control additives",
    materials: broadPlasticMaterials,
    description:
      "An antistatic additive for plastics where static electricity, dust absorption or handling safety creates quality and production concerns.",
    applications: [
      "PP, PE, PVC, TPU, ABS, PC, PA, PET, PETG and related polymers",
      "Packaging, electronics, industrial parts and dust-sensitive products",
      "Products requiring better surface activity and static dissipation",
    ],
    benefits: [
      "Helps reduce static buildup and dust attraction",
      "Supports safer handling in selected static-sensitive environments",
      "Direct-add format keeps production trials simple",
    ],
    processing: [
      "Confirm target surface resistance, humidity condition and long-term antistatic requirement.",
      ...processNotes,
    ],
    keywords: ["plastic antistatic agent", "anti static additive", "static dissipation", "dust absorption", "surface resistance"],
  },
  {
    slug: "anti-scratch-slip-agent",
    name: "Anti-Scratch Slip Agent",
    meta: "Surface feel | custom formula",
    summary: "Improves scratch resistance, slip feel and surface smoothness without obvious transparency loss.",
    image: "/assets/light-diffusion-powder-diffuser.png",
    category: "Surface performance additives",
    materials: broadSurfaceMaterials,
    description:
      "A surface modifier for plastic products where smooth hand feel, lower scratch visibility and surface durability matter to the final user experience.",
    applications: [
      "Consumer goods, packaging, profiles and plastic surface parts",
      "Transparent or colored PP, PE, ABS, PC, PETG and related products",
      "Applications requiring a smoother touch and better scratch feel",
    ],
    benefits: [
      "Improves surface smoothness and slip hand feel",
      "Supports anti-scratch performance targets after validation",
      "Can be customized around transparency and surface requirements",
    ],
    processing: [
      "Evaluate surface feel, printability, migration risk and transparency after trial molding.",
      ...processNotes,
    ],
    keywords: ["anti scratch additive", "slip agent", "surface smooth additive", "scratch resistance", "hand feel modifier"],
  },
  {
    slug: "plastic-heat-stabilizer",
    name: "Plastic Heat Stabilizer",
    meta: "Heat distortion support | transparent plastics",
    summary: "Improves heat resistance and dimensional stability for selected transparent plastic materials.",
    image: "/assets/plastic-flame-retardant-burn-test.png",
    category: "Heat resistance modification",
    materials: ["PET", "PMMA", "ABS", "AS", "GPPS"],
    description:
      "A heat stabilizing additive for transparent plastic applications that need higher heat distortion resistance while maintaining optical appearance as much as possible.",
    applications: [
      "PET, PMMA, ABS, AS, GPPS and other transparent plastic materials",
      "Heat-exposed transparent parts and formed products",
      "Applications requiring thermal stability and shape retention",
    ],
    benefits: [
      "Supports higher heat distortion performance in selected systems",
      "Helps maintain product dimensions under heat exposure",
      "Designed for transparent plastics where appearance must be reviewed",
    ],
    processing: [
      "Confirm HDT target, transparency requirement and processing temperature before trial.",
      ...processNotes,
    ],
    keywords: ["plastic heat stabilizer", "heat distortion temperature", "transparent plastic heat resistance", "HDT additive"],
  },
  {
    slug: "transparent-mold-release-masterbatch",
    name: "Transparent Mold-Release Masterbatch",
    meta: "Cycle efficiency | transparent plastics",
    summary: "Improves demolding performance and production efficiency while protecting transparent appearance.",
    image: "/assets/transparent-impact-modifier-granules-angle.png",
    category: "Processing aid",
    materials: broadPlasticMaterials,
    description:
      "A transparent mold-release masterbatch for plastic products that need easier demolding, shorter cycles and stable appearance without heavy external release agents.",
    applications: [
      "Injection, extrusion, blow molding and casting plastic processes",
      "Transparent or appearance-sensitive PP, PE, PVC, ABS, PC, PA and PETG products",
      "Molding projects where demolding efficiency affects output and surface quality",
    ],
    benefits: [
      "Improves mold-release behavior and production efficiency",
      "Can help shorten molding cycle after process validation",
      "Designed to reduce influence on original transparent appearance",
    ],
    processing: [
      "Evaluate demolding force, surface finish, printing or coating compatibility during trial.",
      ...processNotes,
    ],
    keywords: ["transparent mold release masterbatch", "mold release additive", "demolding additive", "cycle time reduction"],
  },
  {
    slug: "modified-eva-corrugated-hose-material",
    name: "Modified EVA Material for Corrugated Hose",
    meta: "Special engineering plastics | hose material",
    summary: "Modified EVA support for corrugated hoses requiring heat resistance and lower dust adhesion.",
    image: "/assets/modified-pvc-liquid-plastisol-closeup.png",
    category: "Special engineering plastics",
    materials: ["Modified EVA systems"],
    description:
      "A modified EVA material direction for hose, footwear, coil and profile applications where flexibility, heat resistance and surface cleanliness need to be balanced.",
    applications: [
      "Vacuum cleaner hoses, corrugated hoses, shoes, coils and profiles",
      "Injection, extrusion, blow molding and casting routes",
      "Projects needing heat resistance and reduced dust adhesion",
    ],
    benefits: [
      "Supports cost-effective EVA modification for hose-type products",
      "Helps improve heat resistance and anti-dust behavior after validation",
      "Can be reviewed as a customized material solution",
    ],
    processing: [
      "Confirm hose structure, flexibility target, heat exposure and surface requirement before recommendation.",
      ...processNotes,
    ],
    keywords: ["modified EVA", "corrugated hose material", "vacuum cleaner hose", "anti dust adhesion", "EVA modification"],
  },
  {
    slug: "transparent-resin-custom-modification",
    name: "Transparent Resin Custom Modification",
    meta: "Custom R&D | toughness and flame retardance",
    summary: "Custom modification for transparent resins needing toughness, heat resistance and flame retardance together.",
    image: "/assets/plastic-compatibilizer-powder-pellets-v3.png",
    category: "Custom modification",
    materials: commonTransparentMaterials,
    description:
      "A customized development route for transparent resin projects where standard additives are not enough and multiple performance targets must be balanced in one formulation.",
    applications: [
      "PP, AS, ABS, PET, PC, GPPS, PETG and PMMA transparent resin projects",
      "Products requiring super toughness, heat resistance or flame retardance",
      "Buyer-specific formulations for injection, extrusion, sheet, profile, film or casting processes",
    ],
    benefits: [
      "Supports multi-performance formula development rather than one additive only",
      "Useful when clarity, toughness and safety targets conflict",
      "Can be coordinated through sample testing and technical review",
    ],
    processing: [
      "Prepare resin data, current formula, performance target and sample failure information for review.",
      ...processNotes,
    ],
    keywords: ["transparent resin modification", "custom plastic additive", "tough flame retardant transparent resin", "engineering plastic modification"],
  },
];

export function getProductBySlug(slug: string) {
  return productCatalog.find((product) => product.slug === slug);
}

export function getFeaturedProducts() {
  return homepageProductSlugs
    .map((slug) => getProductBySlug(slug))
    .filter((product): product is ProductCatalogItem => Boolean(product));
}

export function getProductsByCategory() {
  return productCategoryOrder
    .map((category) => ({
      category,
      products: productCatalog.filter((product) => product.category === category),
    }))
    .filter((group) => group.products.length > 0);
}

export function getCatalogStats() {
  return {
    totalProducts: productCatalog.length,
    totalCategories: getProductsByCategory().length,
    featuredProducts: homepageProductSlugs.length,
  };
}

export function validateProductCatalog() {
  const seen = new Set<string>();
  const issues: string[] = [];

  for (const product of productCatalog) {
    if (seen.has(product.slug)) {
      issues.push(`Duplicate product slug: ${product.slug}`);
    }
    seen.add(product.slug);

    if (!product.name || !product.summary || !product.description) {
      issues.push(`Missing public copy fields: ${product.slug}`);
    }

    if (!product.image.startsWith("/assets/")) {
      issues.push(`Product image should live under /assets: ${product.slug}`);
    }
  }

  for (const slug of homepageProductSlugs) {
    if (!getProductBySlug(slug)) {
      issues.push(`Homepage featured product is missing from catalog: ${slug}`);
    }
  }

  return issues;
}

export function searchProducts(query: string) {
  const rawQuery = query.trim();
  const normalized = rawQuery.toLowerCase();
  if (!normalized) {
    return productCatalog;
  }

  const materialToken = rawQuery.toUpperCase();
  if (materialSearchTokens.has(materialToken)) {
    return productCatalog.filter((product) =>
      (product.materials || generalPurposeMaterials).some((material) =>
        material
          .toUpperCase()
          .split(/[^A-Z0-9]+/)
          .includes(materialToken),
      ),
    );
  }

  return productCatalog.filter((product) =>
    [
      product.name,
      product.meta,
      product.summary,
      product.category,
      product.description,
      ...product.applications,
      ...product.benefits,
      ...product.processing,
      ...(product.materials || generalPurposeMaterials),
      ...getGradesByProductSlug(product.slug),
      ...product.keywords,
    ]
      .join(" ")
      .toLowerCase()
      .includes(normalized),
  );
}
