export type TdsModel = {
  model: string;
  title: string;
  href: string;
  filename: string;
  description: string;
};

export type TdsProductGroup = {
  product: string;
  summary: string;
  models: TdsModel[];
};

export const tdsProductGroups: TdsProductGroup[] = [
  {
    product: "Transparent Impact Modifier Granule",
    summary: "For transparent plastics that need impact strength, elongation and cold resistance.",
    models: [
      {
        model: "TIM-G80",
        title: "TIM-G80 Transparent Impact Modifier TDS",
        href: "/tds/tim-g80-transparent-impact-modifier-tds.pdf",
        filename: "tim-g80-transparent-impact-modifier-tds.pdf",
        description: "General transparent impact modifier grade for clear polymer modification.",
      },
      {
        model: "TIM-G90",
        title: "TIM-G90 High Transparency Impact Modifier TDS",
        href: "/tds/tim-g90-high-transparency-impact-modifier-tds.pdf",
        filename: "tim-g90-high-transparency-impact-modifier-tds.pdf",
        description: "Higher transparency support for demanding clear applications.",
      },
    ],
  },
  {
    product: "Plastic Stiffening Agent",
    summary: "For improving hardness, ring stiffness and dimensional stability.",
    models: [
      {
        model: "PSA-60",
        title: "PSA-60 Plastic Stiffening Agent TDS",
        href: "/tds/psa-60-plastic-stiffening-agent-tds.pdf",
        filename: "psa-60-plastic-stiffening-agent-tds.pdf",
        description: "Direct-add stiffening support for common plastic processing.",
      },
      {
        model: "PSA-80",
        title: "PSA-80 High Stiffness Plastic Additive TDS",
        href: "/tds/psa-80-high-stiffness-plastic-additive-tds.pdf",
        filename: "psa-80-high-stiffness-plastic-additive-tds.pdf",
        description: "Higher stiffness grade for stronger dimension control.",
      },
    ],
  },
  {
    product: "Plastic Flame Retardant",
    summary: "For PP, PE, ABS, PC and engineering plastic flame-retardant projects.",
    models: [
      {
        model: "PFR-PP",
        title: "PFR-PP Plastic Flame Retardant TDS",
        href: "/tds/pfr-pp-plastic-flame-retardant-tds.pdf",
        filename: "pfr-pp-plastic-flame-retardant-tds.pdf",
        description: "Flame-retardant support for PP-based applications.",
      },
      {
        model: "PFR-ABS",
        title: "PFR-ABS Plastic Flame Retardant TDS",
        href: "/tds/pfr-abs-plastic-flame-retardant-tds.pdf",
        filename: "pfr-abs-plastic-flame-retardant-tds.pdf",
        description: "Flame-retardant support for ABS and engineering plastic review.",
      },
    ],
  },
  {
    product: "Plastic Compatibilizer",
    summary: "For bonding between fillers, PP and polymer blends during compounding.",
    models: [
      {
        model: "PCP-35",
        title: "PCP-35 Plastic Compatibilizer TDS",
        href: "/tds/pcp-35-plastic-compatibilizer-tds.pdf",
        filename: "pcp-35-plastic-compatibilizer-tds.pdf",
        description: "Compatibilizer for filler and polymer interface improvement.",
      },
      {
        model: "PCP-50",
        title: "PCP-50 High Bonding Compatibilizer TDS",
        href: "/tds/pcp-50-high-bonding-compatibilizer-tds.pdf",
        filename: "pcp-50-high-bonding-compatibilizer-tds.pdf",
        description: "Higher bonding support for custom compounding needs.",
      },
    ],
  },
  {
    product: "Light Diffusion Agent",
    summary: "For lighting plastics that need LED hiding and high light transmittance.",
    models: [
      {
        model: "LDA-05",
        title: "LDA-05 Light Diffusion Agent TDS",
        href: "/tds/lda-05-light-diffusion-agent-tds.pdf",
        filename: "lda-05-light-diffusion-agent-tds.pdf",
        description: "General diffusion support for transparent lighting plastic.",
      },
      {
        model: "LDA-08",
        title: "LDA-08 High Transmittance Diffusion Agent TDS",
        href: "/tds/lda-08-high-transmittance-diffusion-agent-tds.pdf",
        filename: "lda-08-high-transmittance-diffusion-agent-tds.pdf",
        description: "Diffusion support focused on light transmittance balance.",
      },
    ],
  },
  {
    product: "Matting Agent",
    summary: "For matte surface control and optical appearance adjustment.",
    models: [
      {
        model: "MAT-20",
        title: "MAT-20 Matting Agent TDS",
        href: "/tds/mat-20-matting-agent-tds.pdf",
        filename: "mat-20-matting-agent-tds.pdf",
        description: "Matting support for surface gloss reduction.",
      },
      {
        model: "MAT-40",
        title: "MAT-40 High Efficiency Matting Agent TDS",
        href: "/tds/mat-40-high-efficiency-matting-agent-tds.pdf",
        filename: "mat-40-high-efficiency-matting-agent-tds.pdf",
        description: "Higher efficiency matte appearance adjustment.",
      },
    ],
  },
];

export function getAllTdsModels() {
  return tdsProductGroups.flatMap((group) =>
    group.models.map((model) => ({
      ...model,
      product: group.product,
    })),
  );
}

export function findTdsDocument(product: string, model?: string) {
  const models = getAllTdsModels();
  if (model) {
    const byModel = models.find((document) => document.model === model);
    if (byModel) {
      return byModel;
    }
  }

  return models.find((document) => document.product === product);
}
