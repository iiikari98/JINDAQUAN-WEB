import type { LanguageCode } from "./languages";

type MegaColumn = {
  title: string;
  links: string[];
};

export type Translation = {
  seo: {
    title: string;
    description: string;
  };
  nav: {
    products: string;
    applications: string;
    support: string;
    about: string;
    resources: string;
    blog: string;
    contact: string;
    getQuote: string;
    aria: string;
    language: string;
  };
  mega: {
    products: {
      kicker: string;
      title: string;
      body: string;
      cta: string;
      columns: MegaColumn[];
    };
    applications: {
      kicker: string;
      title: string;
      body: string;
      items: Array<{ title: string; body: string }>;
    };
    support: {
      kicker: string;
      title: string;
      body: string;
      actions: Array<{ title: string; body: string }>;
    };
    about: {
      kicker: string;
      title: string;
      body: string;
      proof: string[];
    };
    resources: {
      columns: MegaColumn[];
    };
  };
  hero: {
    brandLine: string;
    title: string;
    lede: string;
    quote: string;
    docs: string;
    trust: string[];
    visualAlt: {
      granules: string;
      liquid: string;
      matting: string;
    };
  };
  proof: Array<{ value: string; label: string }>;
  products: {
    kicker: string;
    title: string;
    body: string;
    cta: string;
    altSuffix: string;
    items: Array<{ name: string; summary: string; meta: string }>;
  };
  about: {
    kicker: string;
    title: string;
    body: string;
    advantages: Array<{ title: string; text: string }>;
    promise: {
      kicker: string;
      title: string;
      bullets: string[];
    };
  };
  applications: {
    kicker: string;
    title: string;
    body: string;
    imageAlt: string;
    items: string[];
  };
  support: {
    kicker: string;
    title: string;
    body: string;
    cta: string;
  };
  contact: {
    kicker: string;
    title: string;
    body: string;
    whatsapp: string;
    phone: string;
    factoryTitle: string;
    factoryAddress: string;
    mapTitle: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      company: string;
      companyPlaceholder: string;
      country: string;
      countryPlaceholder: string;
      product: string;
      productPlaceholder: string;
      productOptions: string[];
      message: string;
      messagePlaceholder: string;
      submit: string;
      note: string;
    };
  };
  footer: {
    company: string;
    body: string;
    office: string;
    officeAddress: string;
    factory: string;
    factoryAddress: string;
  };
};

const commonProductOptions = {
  en: [
    "Transparent Impact Modifier Granule",
    "Plastic Stiffening Agent",
    "Plastic Flame Retardant",
    "Plastic Compatibilizer",
    "Light Diffusion Agent",
    "Matting Agent",
    "Other functional additives",
  ],
  fr: [
    "Granule modificateur d'impact transparent",
    "Agent de rigidification plastique",
    "Retardateur de flamme plastique",
    "Compatibilisant plastique",
    "Agent de diffusion lumineuse",
    "Agent matant",
    "Autres additifs fonctionnels",
  ],
  es: [
    "Granulado modificador de impacto transparente",
    "Agente rigidizante para plásticos",
    "Retardante de llama para plásticos",
    "Compatibilizante plástico",
    "Agente difusor de luz",
    "Agente mateante",
    "Otros aditivos funcionales",
  ],
  pt: [
    "Granulado modificador de impacto transparente",
    "Agente de rigidez para plásticos",
    "Retardante de chama para plásticos",
    "Compatibilizante plástico",
    "Agente de difusão de luz",
    "Agente fosqueante",
    "Outros aditivos funcionais",
  ],
  it: [
    "Granulo modificatore d'impatto trasparente",
    "Agente irrigidente per plastica",
    "Ritardante di fiamma per plastica",
    "Compatibilizzante plastico",
    "Agente di diffusione luminosa",
    "Agente opacizzante",
    "Altri additivi funzionali",
  ],
  ru: [
    "Прозрачный гранулированный модификатор ударной прочности",
    "Добавка для повышения жесткости пластика",
    "Антипирен для пластика",
    "Совместитель для пластика",
    "Светорассеивающая добавка",
    "Матирующая добавка",
    "Другие функциональные добавки",
  ],
  ja: [
    "透明耐衝撃改質グラニュール",
    "プラスチック剛性向上剤",
    "プラスチック難燃剤",
    "プラスチック相溶化剤",
    "光拡散剤",
    "艶消し剤",
    "その他機能性添加剤",
  ],
};

export const translations: Record<LanguageCode, Translation> = {
  en: {
    seo: {
      title: "Plastic Additives Manufacturer | ARGIOPE Jindaquan",
      description:
        "ARGIOPE Jindaquan manufactures functional plastic additives for global B2B buyers, with TDS/SDS, samples and technical support for polymer modification projects.",
    },
    nav: {
      products: "Products",
      applications: "Applications",
      support: "Technical Support",
      about: "About",
      resources: "Resources",
      blog: "Blog",
      contact: "Contact",
      getQuote: "Get a Quote",
      aria: "Main navigation",
      language: "Language",
    },
    mega: {
      products: {
        kicker: "Product Families",
        title: "Functional additives for polymer modification",
        body: "Browse by performance target, then send your material and application for technical selection support.",
        cta: "Start product selection",
        columns: [
          {
            title: "Main products",
            links: [
              "Transparent Impact Modifier Granule",
              "Plastic Stiffening Agent",
              "Plastic Flame Retardant",
              "Plastic Compatibilizer",
            ],
          },
          {
            title: "Optical & surface",
            links: [
              "Light Diffusion Agent",
              "Matting Agent",
              "Plastic Shining Additive",
              "Transparent Mold-Release Masterbatch",
            ],
          },
          {
            title: "Performance additives",
            links: [
              "Anti-Cold Agent",
              "Antibacterial Mould & Mildew Inhibitor",
              "Antistatic Agent",
              "Melt Flow Index Modifier",
            ],
          },
        ],
      },
      applications: {
        kicker: "Applications",
        title: "Find additives by production scenario",
        body: "Built for compounders, product manufacturers and recycling plants.",
        items: [
          { title: "Transparent plastics", body: "Packaging, sheets, profiles and lighting covers" },
          { title: "Flame retardant plastics", body: "PP, PE, PC, ABS and engineering plastic applications" },
          { title: "Injection / extrusion / blow molding", body: "Direct-adding additives for common processing routes" },
          { title: "Recycled plastic granulation", body: "Toughness, flow and compatibility support" },
        ],
      },
      support: {
        kicker: "Technical Support",
        title: "Turn material requirements into an RFQ",
        body: "Request documents, samples and formulation recommendations from the team.",
        actions: [
          { title: "Request TDS / SDS", body: "Use for compliance review and supplier evaluation." },
          { title: "Get sample support", body: "Share polymer, process and target performance." },
          { title: "Send RFQ", body: "Ask for quotation, MOQ and export supply support." },
        ],
      },
      about: {
        kicker: "About Jindaquan",
        title: "Source manufacturer since 1998",
        body: "R&D, production and export supply for plastic and rubber polymer functional additives.",
        proof: ["7000+ m² factory", "50+ elite team members", "30+ invention patents", "ISO9001 verified"],
      },
      resources: {
        columns: [
          { title: "Procurement", links: ["TDS / SDS request", "Sample inquiry", "Export quotation"] },
          {
            title: "SEO topics",
            links: [
              "Plastic additives supplier China",
              "Additives for PVC products",
              "REACH compliant plastic additives",
            ],
          },
        ],
      },
    },
    hero: {
      brandLine: "ARGIOPE / Shenzhen Jindaquan Technology Co, Ltd.",
      title: "Plastic Additives Manufacturer for Global B2B Buyers",
      lede:
        "Functional additives for transparent plastics, flame retardant modification, light diffusion, matte surfaces and custom polymer performance.",
      quote: "Get a Quote",
      docs: "Request TDS / SDS",
      trust: ["Since 1998", "7000+ m²", "30+ Invention Patents", "ISO9001", "FDA / ROHS / REACH"],
      visualAlt: {
        granules: "Transparent impact modifier masterbatch granules in clear staggered containers",
        liquid: "Liquid transparent impact modifier in clear containers",
        matting: "Matting agent powder in a clear container with matte plastic sheets",
      },
    },
    proof: [
      { value: "Since 1998", label: "Polymer additive R&D and manufacturing" },
      { value: "7000+ m²", label: "Factory and production support" },
      { value: "30+", label: "Invention patents" },
      { value: "Global", label: "EU, Americas and Southeast Asia markets" },
      { value: "ISO9001", label: "FDA / ROHS / REACH / PHTHALATES" },
    ],
    products: {
      kicker: "Product Categories",
      title: "High-performance additives for polymer modification",
      body:
        "Start with the main products below, or send your polymer material and application so the technical team can recommend a suitable additive route.",
      cta: "Discuss this product",
      altSuffix: "product visual",
      items: [
        {
          name: "Transparent Impact Modifier Granule",
          meta: "Main product · 2-6% dosage",
          summary: "Keeps original transparency while improving impact strength, elongation and cold resistance.",
        },
        {
          name: "Plastic Stiffening Agent",
          meta: "Main product · direct adding",
          summary: "Enhances hardness and ring stiffness while helping products maintain stable dimensions.",
        },
        {
          name: "Plastic Flame Retardant",
          meta: "Main product · high LOI",
          summary: "Non-toxic flame retardant support for PP, PE, ABS, PC and more, with glow wire performance.",
        },
        {
          name: "Plastic Compatibilizer",
          meta: "Main product · custom support",
          summary: "Supports interface bonding between PP, fillers and polymer blends for compounding needs.",
        },
        {
          name: "Light Diffusion Agent",
          meta: "0.5-0.8% dosage",
          summary: "Helps hide lamp beads with high light transmittance for transparent lighting plastics.",
        },
        {
          name: "Modified PVC Liquid Plastisol",
          meta: "R&D product",
          summary: "Low-temperature molding plastisol for filter cartridges, gaskets and sealing applications.",
        },
      ],
    },
    about: {
      kicker: "Why ARGIOPE",
      title: "Source manufacturer and professional compounding solution provider",
      body:
        "Jindaquan focuses on plastic and rubber high polymer functional additives for global compounders, product manufacturers, recyclers and end-use industry buyers.",
      advantages: [
        {
          title: "R&D leadership",
          text: "Focused on polymer functional additives since 1998, with independent R&D capability and technical partners.",
        },
        {
          title: "Eco-friendly compliance",
          text: "Products are positioned for FDA, ROHS, REACH, PHTHALATES and ISO9001-driven procurement requirements.",
        },
        {
          title: "Cost-effective performance",
          text: "Low-dosage additive solutions help improve target performance without unnecessary process complexity.",
        },
        {
          title: "Property protection",
          text: "Designed to improve toughness, flame retardance, gloss, diffusion or stability without compromising original properties.",
        },
      ],
      promise: {
        kicker: "Technical promise",
        title: "Improve target performance without losing the original material properties buyers care about.",
        bullets: [
          "Transparency and original color retention",
          "Direct adding for easier processing",
          "Low-dosage solutions for cost control",
          "Sample, TDS/SDS and formulation support",
        ],
      },
    },
    applications: {
      kicker: "Applications",
      title: "Built for real B2B production scenarios",
      body: "The homepage keeps application language practical for SEO, advertising landing pages and procurement conversations.",
      imageAlt: "Manufacturing partners application sectors for plastic additives",
      items: [
        "Plastics compounders and modification factories",
        "Injection, extrusion and blow molding product manufacturers",
        "Recycled plastic granulation plants",
        "End-use manufacturers with polymer modification needs",
        "Transparent packaging, lighting, profiles and household goods",
        "Flame-retardant and low-temperature performance applications",
      ],
    },
    support: {
      kicker: "Technical Support & Custom Solutions",
      title: "Request TDS/SDS, samples or formulation guidance",
      body:
        "Tell us your polymer material, production process and target performance. Our team can support product selection, sample testing and export quotation.",
      cta: "Start RFQ",
    },
    contact: {
      kicker: "Contact / RFQ",
      title: "Tell us your product requirement",
      body:
        "Submit your inquiry or contact Alex Gong directly by email or WhatsApp. Your information will only be used to process this inquiry.",
      whatsapp: "WhatsApp: 0086 18926013309",
      phone: "Phone: 0086 18926013309",
      factoryTitle: "Factory Address",
      factoryAddress: "Bld 7#, Wanyang Zhongchuang Cheng, Huidong County, Huizhou City, Guangdong Province, China",
      mapTitle: "Factory address on OpenStreetMap",
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "Email address",
        company: "Company Name",
        companyPlaceholder: "Company name",
        country: "Country",
        countryPlaceholder: "Country / region",
        product: "Product Requirement",
        productPlaceholder: "Select product interest",
        productOptions: commonProductOptions.en,
        message: "Message",
        messagePlaceholder: "Tell us your polymer material, application, process and target performance...",
        submit: "Send RFQ",
        note: "Thank you for your inquiry. Our team will contact you soon.",
      },
    },
    footer: {
      company: "Shenzhen Jindaquan Technology Co, Ltd.",
      body: "Plastic and rubber high polymer functional additives manufacturer for global B2B buyers.",
      office: "Office",
      officeAddress: "Longgang Road No.5002, Longgang District, Shenzhen, China",
      factory: "Factory",
      factoryAddress: "Bld 7#, Wanyang Zhongchuang Cheng, Huidong County, Huizhou City, Guangdong Province, China",
    },
  },
  fr: {
    seo: {
      title: "Fabricant d'additifs plastiques | ARGIOPE Jindaquan",
      description:
        "ARGIOPE Jindaquan fabrique des additifs plastiques fonctionnels pour les acheteurs B2B internationaux, avec TDS/SDS, échantillons et support technique.",
    },
    nav: {
      products: "Produits",
      applications: "Applications",
      support: "Support technique",
      about: "À propos",
      resources: "Ressources",
      blog: "Blog",
      contact: "Contact",
      getQuote: "Demander un devis",
      aria: "Navigation principale",
      language: "Langue",
    },
    mega: {
      products: {
        kicker: "Familles de produits",
        title: "Additifs fonctionnels pour la modification des polymères",
        body: "Choisissez par objectif de performance, puis envoyez votre matière et votre application pour une recommandation technique.",
        cta: "Démarrer la sélection produit",
        columns: [
          {
            title: "Produits principaux",
            links: commonProductOptions.fr.slice(0, 4),
          },
          {
            title: "Optique & surface",
            links: ["Agent de diffusion lumineuse", "Agent matant", "Additif de brillance plastique", "Masterbatch transparent de démoulage"],
          },
          {
            title: "Additifs de performance",
            links: ["Agent anti-froid", "Inhibiteur antibactérien et antimoisissure", "Agent antistatique", "Modificateur d'indice de fluidité"],
          },
        ],
      },
      applications: {
        kicker: "Applications",
        title: "Trouver l'additif selon le scénario de production",
        body: "Conçu pour les compounders, fabricants de produits et usines de recyclage.",
        items: [
          { title: "Plastiques transparents", body: "Emballages, plaques, profilés et capots d'éclairage" },
          { title: "Plastiques ignifugés", body: "Applications PP, PE, PC, ABS et plastiques techniques" },
          { title: "Injection / extrusion / soufflage", body: "Additifs à ajout direct pour les procédés courants" },
          { title: "Granulation de plastique recyclé", body: "Support de ténacité, fluidité et compatibilité" },
        ],
      },
      support: {
        kicker: "Support technique",
        title: "Transformer vos exigences matière en RFQ",
        body: "Demandez documents, échantillons et recommandations de formulation.",
        actions: [
          { title: "Demander TDS / SDS", body: "Pour l'évaluation fournisseur et la conformité." },
          { title: "Obtenir des échantillons", body: "Partagez polymère, procédé et performance cible." },
          { title: "Envoyer une RFQ", body: "Demandez prix, MOQ et support export." },
        ],
      },
      about: {
        kicker: "À propos de Jindaquan",
        title: "Fabricant source depuis 1998",
        body: "R&D, production et approvisionnement export d'additifs fonctionnels pour plastiques et caoutchoucs.",
        proof: ["Usine 7000+ m²", "Équipe 50+ personnes", "30+ brevets d'invention", "ISO9001 vérifié"],
      },
      resources: {
        columns: [
          { title: "Achat", links: ["Demande TDS / SDS", "Demande d'échantillon", "Devis export"] },
          { title: "Sujets SEO", links: ["Fournisseur d'additifs plastiques Chine", "Additifs pour PVC", "Additifs plastiques conformes REACH"] },
        ],
      },
    },
    hero: {
      brandLine: "ARGIOPE / Shenzhen Jindaquan Technology Co, Ltd.",
      title: "Fabricant d'additifs plastiques pour acheteurs B2B mondiaux",
      lede:
        "Additifs fonctionnels pour plastiques transparents, retardateurs de flamme, diffusion lumineuse, surfaces mates et performances polymères sur mesure.",
      quote: "Demander un devis",
      docs: "Demander TDS / SDS",
      trust: ["Depuis 1998", "7000+ m²", "30+ brevets d'invention", "ISO9001", "FDA / ROHS / REACH"],
      visualAlt: {
        granules: "Granulés modificateurs d'impact transparents dans des récipients clairs",
        liquid: "Modificateur d'impact liquide transparent en récipients clairs",
        matting: "Poudre matante en récipient clair avec plaques plastiques mates",
      },
    },
    proof: [
      { value: "Depuis 1998", label: "R&D et fabrication d'additifs polymères" },
      { value: "7000+ m²", label: "Usine et support de production" },
      { value: "30+", label: "Brevets d'invention" },
      { value: "Global", label: "Marchés UE, Amériques et Asie du Sud-Est" },
      { value: "ISO9001", label: "FDA / ROHS / REACH / PHTHALATES" },
    ],
    products: {
      kicker: "Catégories de produits",
      title: "Additifs haute performance pour modification polymère",
      body: "Commencez par les produits clés ou envoyez votre matière et application pour une recommandation adaptée.",
      cta: "Discuter ce produit",
      altSuffix: "visuel produit",
      items: [
        { name: commonProductOptions.fr[0], meta: "Produit principal · dosage 2-6%", summary: "Préserve la transparence tout en améliorant l'impact, l'allongement et la résistance au froid." },
        { name: commonProductOptions.fr[1], meta: "Produit principal · ajout direct", summary: "Améliore la dureté et la rigidité annulaire tout en maintenant les dimensions." },
        { name: commonProductOptions.fr[2], meta: "Produit principal · LOI élevé", summary: "Support ignifuge non toxique pour PP, PE, ABS, PC et plus, avec performance au fil incandescent." },
        { name: commonProductOptions.fr[3], meta: "Produit principal · support personnalisé", summary: "Favorise l'adhérence d'interface entre PP, charges et mélanges polymères." },
        { name: commonProductOptions.fr[4], meta: "Dosage 0,5-0,8%", summary: "Masque les points LED avec une bonne transmission lumineuse pour plastiques d'éclairage." },
        { name: "Plastisol liquide PVC modifié", meta: "Produit R&D", summary: "Plastisol à moulage basse température pour filtres, joints et applications d'étanchéité." },
      ],
    },
    about: {
      kicker: "Pourquoi ARGIOPE",
      title: "Fabricant source et fournisseur de solutions de compoundage",
      body: "Jindaquan se concentre sur les additifs fonctionnels pour polymères plastiques et caoutchouc destinés aux compounders, fabricants, recycleurs et acheteurs industriels.",
      advantages: [
        { title: "Leadership R&D", text: "Expertise en additifs fonctionnels polymères depuis 1998, avec capacité R&D indépendante." },
        { title: "Conformité responsable", text: "Produits alignés avec les exigences FDA, ROHS, REACH, PHTHALATES et ISO9001." },
        { title: "Performance économique", text: "Solutions à faible dosage pour améliorer la performance sans complexifier le procédé." },
        { title: "Protection des propriétés", text: "Améliore ténacité, flamme, brillance, diffusion ou stabilité sans sacrifier les propriétés d'origine." },
      ],
      promise: {
        kicker: "Promesse technique",
        title: "Améliorer la performance cible sans perdre les propriétés matière importantes pour les acheteurs.",
        bullets: ["Transparence et couleur d'origine", "Ajout direct pour simplifier le process", "Faible dosage pour contrôler les coûts", "Échantillons, TDS/SDS et support formulation"],
      },
    },
    applications: {
      kicker: "Applications",
      title: "Conçu pour les scénarios B2B réels",
      body: "Le langage applicatif reste pratique pour le SEO, les pages publicitaires et les échanges achat.",
      imageAlt: "Secteurs partenaires et applications des additifs plastiques",
      items: [
        "Compounders et usines de modification plastique",
        "Fabricants injection, extrusion et soufflage",
        "Usines de granulation de plastique recyclé",
        "Fabricants finaux avec besoins de modification polymère",
        "Emballage transparent, éclairage, profilés et articles ménagers",
        "Applications ignifuges et basse température",
      ],
    },
    support: {
      kicker: "Support technique & solutions personnalisées",
      title: "Demandez TDS/SDS, échantillons ou conseil formulation",
      body: "Indiquez polymère, procédé et performance cible. L'équipe peut soutenir la sélection, les essais et le devis export.",
      cta: "Démarrer la RFQ",
    },
    contact: {
      kicker: "Contact / RFQ",
      title: "Décrivez votre besoin produit",
      body: "Envoyez votre demande ou contactez Alex Gong par email ou WhatsApp. Vos informations servent uniquement à traiter cette demande.",
      whatsapp: "WhatsApp : 0086 18926013309",
      phone: "Téléphone : 0086 18926013309",
      factoryTitle: "Adresse usine",
      factoryAddress: "Bld 7#, Wanyang Zhongchuang Cheng, Huidong County, Huizhou City, Guangdong Province, Chine",
      mapTitle: "Adresse usine sur OpenStreetMap",
      form: {
        name: "Nom",
        namePlaceholder: "Votre nom",
        email: "Email",
        emailPlaceholder: "Adresse email",
        company: "Société",
        companyPlaceholder: "Nom de société",
        country: "Pays",
        countryPlaceholder: "Pays / région",
        product: "Besoin produit",
        productPlaceholder: "Sélectionnez le produit",
        productOptions: commonProductOptions.fr,
        message: "Message",
        messagePlaceholder: "Indiquez polymère, application, procédé et performance cible...",
        submit: "Envoyer la RFQ",
        note: "Merci pour votre demande. Notre équipe vous contactera rapidement.",
      },
    },
    footer: {
      company: "Shenzhen Jindaquan Technology Co, Ltd.",
      body: "Fabricant d'additifs fonctionnels pour polymères plastiques et caoutchouc destiné aux acheteurs B2B mondiaux.",
      office: "Bureau",
      officeAddress: "Longgang Road No.5002, Longgang District, Shenzhen, Chine",
      factory: "Usine",
      factoryAddress: "Bld 7#, Wanyang Zhongchuang Cheng, Huidong County, Huizhou City, Guangdong Province, Chine",
    },
  },
  es: {
    seo: {
      title: "Fabricante de aditivos plásticos | ARGIOPE Jindaquan",
      description:
        "ARGIOPE Jindaquan fabrica aditivos plásticos funcionales para compradores B2B globales, con TDS/SDS, muestras y soporte técnico.",
    },
    nav: {
      products: "Productos",
      applications: "Aplicaciones",
      support: "Soporte técnico",
      about: "Acerca de",
      resources: "Recursos",
      blog: "Blog",
      contact: "Contacto",
      getQuote: "Solicitar cotización",
      aria: "Navegación principal",
      language: "Idioma",
    },
    mega: {
      products: {
        kicker: "Familias de productos",
        title: "Aditivos funcionales para modificación de polímeros",
        body: "Explore por objetivo de rendimiento y envíe su material y aplicación para selección técnica.",
        cta: "Iniciar selección",
        columns: [
          { title: "Productos principales", links: commonProductOptions.es.slice(0, 4) },
          { title: "Óptica y superficie", links: ["Agente difusor de luz", "Agente mateante", "Aditivo de brillo plástico", "Masterbatch transparente desmoldante"] },
          { title: "Aditivos de rendimiento", links: ["Agente anti-frío", "Inhibidor antibacteriano y antimoho", "Agente antiestático", "Modificador de índice de fluidez"] },
        ],
      },
      applications: {
        kicker: "Aplicaciones",
        title: "Encuentre aditivos por escenario de producción",
        body: "Para compuestos, fabricantes de productos y plantas de reciclaje.",
        items: [
          { title: "Plásticos transparentes", body: "Envases, láminas, perfiles y cubiertas de iluminación" },
          { title: "Plásticos retardantes de llama", body: "Aplicaciones en PP, PE, PC, ABS y plásticos de ingeniería" },
          { title: "Inyección / extrusión / soplado", body: "Aditivos de adición directa para procesos comunes" },
          { title: "Granulación de plástico reciclado", body: "Soporte de tenacidad, fluidez y compatibilidad" },
        ],
      },
      support: {
        kicker: "Soporte técnico",
        title: "Convierta requisitos de material en una RFQ",
        body: "Solicite documentos, muestras y recomendaciones de formulación.",
        actions: [
          { title: "Solicitar TDS / SDS", body: "Para evaluación de proveedor y cumplimiento." },
          { title: "Soporte de muestras", body: "Comparta polímero, proceso y objetivo técnico." },
          { title: "Enviar RFQ", body: "Consulte precio, MOQ y soporte de exportación." },
        ],
      },
      about: {
        kicker: "Sobre Jindaquan",
        title: "Fabricante de origen desde 1998",
        body: "I+D, producción y suministro de exportación para aditivos funcionales de plástico y caucho.",
        proof: ["Fábrica 7000+ m²", "Equipo 50+ personas", "30+ patentes de invención", "ISO9001 verificado"],
      },
      resources: {
        columns: [
          { title: "Compras", links: ["Solicitud TDS / SDS", "Consulta de muestra", "Cotización de exportación"] },
          { title: "Temas SEO", links: ["Proveedor de aditivos plásticos China", "Aditivos para PVC", "Aditivos plásticos conformes REACH"] },
        ],
      },
    },
    hero: {
      brandLine: "ARGIOPE / Shenzhen Jindaquan Technology Co, Ltd.",
      title: "Fabricante de aditivos plásticos para compradores B2B globales",
      lede: "Aditivos funcionales para plásticos transparentes, retardancia de llama, difusión de luz, superficies mate y rendimiento polimérico personalizado.",
      quote: "Solicitar cotización",
      docs: "Solicitar TDS / SDS",
      trust: ["Desde 1998", "7000+ m²", "30+ patentes de invención", "ISO9001", "FDA / ROHS / REACH"],
      visualAlt: {
        granules: "Gránulos modificadores de impacto transparente en recipientes claros",
        liquid: "Modificador de impacto líquido transparente en recipientes claros",
        matting: "Polvo mateante en recipiente claro con placas plásticas mate",
      },
    },
    proof: [
      { value: "Desde 1998", label: "I+D y fabricación de aditivos poliméricos" },
      { value: "7000+ m²", label: "Soporte de fábrica y producción" },
      { value: "30+", label: "Patentes de invención" },
      { value: "Global", label: "Mercados de UE, Américas y Sudeste Asiático" },
      { value: "ISO9001", label: "FDA / ROHS / REACH / PHTHALATES" },
    ],
    products: {
      kicker: "Categorías de productos",
      title: "Aditivos de alto rendimiento para modificación de polímeros",
      body: "Comience con los productos principales o envíe su material y aplicación para recibir una ruta recomendada.",
      cta: "Consultar este producto",
      altSuffix: "imagen de producto",
      items: [
        { name: commonProductOptions.es[0], meta: "Producto principal · dosis 2-6%", summary: "Mantiene la transparencia y mejora resistencia al impacto, elongación y resistencia al frío." },
        { name: commonProductOptions.es[1], meta: "Producto principal · adición directa", summary: "Mejora dureza y rigidez manteniendo estabilidad dimensional." },
        { name: commonProductOptions.es[2], meta: "Producto principal · LOI alto", summary: "Soporte retardante de llama no tóxico para PP, PE, ABS, PC y más." },
        { name: commonProductOptions.es[3], meta: "Producto principal · soporte personalizado", summary: "Apoya la unión interfacial entre PP, cargas y mezclas poliméricas." },
        { name: commonProductOptions.es[4], meta: "Dosis 0.5-0.8%", summary: "Ayuda a ocultar LEDs con alta transmisión para plásticos de iluminación." },
        { name: "Plastisol líquido PVC modificado", meta: "Producto I+D", summary: "Plastisol de curado a baja temperatura para filtros, juntas y sellado." },
      ],
    },
    about: {
      kicker: "Por qué ARGIOPE",
      title: "Fabricante de origen y proveedor de soluciones de compounding",
      body: "Jindaquan se enfoca en aditivos funcionales para polímeros plásticos y de caucho para compounders, fabricantes, recicladores y compradores industriales.",
      advantages: [
        { title: "Liderazgo en I+D", text: "Enfoque en aditivos funcionales desde 1998, con capacidad independiente de I+D." },
        { title: "Cumplimiento ecológico", text: "Productos orientados a requisitos FDA, ROHS, REACH, PHTHALATES e ISO9001." },
        { title: "Rendimiento rentable", text: "Soluciones de baja dosificación para mejorar objetivos sin complejidad innecesaria." },
        { title: "Protección de propiedades", text: "Mejora tenacidad, llama, brillo, difusión o estabilidad sin comprometer propiedades originales." },
      ],
      promise: {
        kicker: "Promesa técnica",
        title: "Mejorar el rendimiento objetivo sin perder propiedades del material importantes para compras.",
        bullets: ["Transparencia y color original", "Adición directa para procesar con facilidad", "Baja dosificación para control de costos", "Muestras, TDS/SDS y soporte de formulación"],
      },
    },
    applications: {
      kicker: "Aplicaciones",
      title: "Diseñado para escenarios B2B reales",
      body: "El contenido de aplicación es práctico para SEO, landing pages de anuncios y conversaciones de compra.",
      imageAlt: "Sectores de aplicación y socios industriales de aditivos plásticos",
      items: [
        "Compounders y fábricas de modificación plástica",
        "Fabricantes de inyección, extrusión y soplado",
        "Plantas de granulación de plástico reciclado",
        "Fabricantes finales con necesidades de modificación polimérica",
        "Envases transparentes, iluminación, perfiles y artículos domésticos",
        "Aplicaciones retardantes de llama y baja temperatura",
      ],
    },
    support: {
      kicker: "Soporte técnico y soluciones personalizadas",
      title: "Solicite TDS/SDS, muestras o guía de formulación",
      body: "Indique polímero, proceso y rendimiento objetivo. El equipo puede apoyar selección, pruebas y cotización de exportación.",
      cta: "Iniciar RFQ",
    },
    contact: {
      kicker: "Contacto / RFQ",
      title: "Indique su requisito de producto",
      body: "Envíe su consulta o contacte a Alex Gong por email o WhatsApp. Sus datos solo se usarán para procesar esta consulta.",
      whatsapp: "WhatsApp: 0086 18926013309",
      phone: "Teléfono: 0086 18926013309",
      factoryTitle: "Dirección de fábrica",
      factoryAddress: "Bld 7#, Wanyang Zhongchuang Cheng, Huidong County, Huizhou City, Guangdong Province, China",
      mapTitle: "Dirección de fábrica en OpenStreetMap",
      form: {
        name: "Nombre",
        namePlaceholder: "Su nombre",
        email: "Email",
        emailPlaceholder: "Correo electrónico",
        company: "Empresa",
        companyPlaceholder: "Nombre de la empresa",
        country: "País",
        countryPlaceholder: "País / región",
        product: "Requisito de producto",
        productPlaceholder: "Seleccione producto de interés",
        productOptions: commonProductOptions.es,
        message: "Mensaje",
        messagePlaceholder: "Indique polímero, aplicación, proceso y rendimiento objetivo...",
        submit: "Enviar RFQ",
        note: "Gracias por su consulta. Nuestro equipo se pondrá en contacto pronto.",
      },
    },
    footer: {
      company: "Shenzhen Jindaquan Technology Co, Ltd.",
      body: "Fabricante de aditivos funcionales para polímeros plásticos y de caucho para compradores B2B globales.",
      office: "Oficina",
      officeAddress: "Longgang Road No.5002, Longgang District, Shenzhen, China",
      factory: "Fábrica",
      factoryAddress: "Bld 7#, Wanyang Zhongchuang Cheng, Huidong County, Huizhou City, Guangdong Province, China",
    },
  },
  pt: {
    seo: {
      title: "Fabricante de aditivos plásticos | ARGIOPE Jindaquan",
      description: "ARGIOPE Jindaquan fabrica aditivos plásticos funcionais para compradores B2B globais, com TDS/SDS, amostras e suporte técnico.",
    },
    nav: {
      products: "Produtos",
      applications: "Aplicações",
      support: "Suporte técnico",
      about: "Sobre",
      resources: "Recursos",
      blog: "Blog",
      contact: "Contato",
      getQuote: "Solicitar cotação",
      aria: "Navegação principal",
      language: "Idioma",
    },
    mega: {
      products: {
        kicker: "Famílias de produtos",
        title: "Aditivos funcionais para modificação de polímeros",
        body: "Procure por meta de desempenho e envie seu material e aplicação para suporte técnico de seleção.",
        cta: "Iniciar seleção",
        columns: [
          { title: "Produtos principais", links: commonProductOptions.pt.slice(0, 4) },
          { title: "Óptica e superfície", links: ["Agente de difusão de luz", "Agente fosqueante", "Aditivo de brilho plástico", "Masterbatch transparente desmoldante"] },
          { title: "Aditivos de desempenho", links: ["Agente anti-frio", "Inibidor antibacteriano e antimofo", "Agente antiestático", "Modificador de índice de fluidez"] },
        ],
      },
      applications: {
        kicker: "Aplicações",
        title: "Encontre aditivos por cenário de produção",
        body: "Feito para compounders, fabricantes de produtos e plantas de reciclagem.",
        items: [
          { title: "Plásticos transparentes", body: "Embalagens, chapas, perfis e coberturas de iluminação" },
          { title: "Plásticos retardantes de chama", body: "Aplicações PP, PE, PC, ABS e plásticos de engenharia" },
          { title: "Injeção / extrusão / sopro", body: "Aditivos de adição direta para rotas comuns" },
          { title: "Granulação de plástico reciclado", body: "Suporte de tenacidade, fluxo e compatibilidade" },
        ],
      },
      support: {
        kicker: "Suporte técnico",
        title: "Transforme requisitos de material em RFQ",
        body: "Solicite documentos, amostras e recomendações de formulação.",
        actions: [
          { title: "Solicitar TDS / SDS", body: "Para avaliação de fornecedor e conformidade." },
          { title: "Suporte de amostras", body: "Compartilhe polímero, processo e meta técnica." },
          { title: "Enviar RFQ", body: "Peça preço, MOQ e suporte de exportação." },
        ],
      },
      about: {
        kicker: "Sobre a Jindaquan",
        title: "Fabricante de origem desde 1998",
        body: "P&D, produção e fornecimento para exportação de aditivos funcionais para plásticos e borrachas.",
        proof: ["Fábrica 7000+ m²", "Equipe 50+ pessoas", "30+ patentes de invenção", "ISO9001 verificado"],
      },
      resources: {
        columns: [
          { title: "Compras", links: ["Solicitação TDS / SDS", "Consulta de amostra", "Cotação de exportação"] },
          { title: "Tópicos SEO", links: ["Fornecedor de aditivos plásticos China", "Aditivos para PVC", "Aditivos plásticos compatíveis com REACH"] },
        ],
      },
    },
    hero: {
      brandLine: "ARGIOPE / Shenzhen Jindaquan Technology Co, Ltd.",
      title: "Fabricante de aditivos plásticos para compradores B2B globais",
      lede: "Aditivos funcionais para plásticos transparentes, retardância de chama, difusão de luz, superfícies foscas e desempenho polimérico personalizado.",
      quote: "Solicitar cotação",
      docs: "Solicitar TDS / SDS",
      trust: ["Desde 1998", "7000+ m²", "30+ patentes de invenção", "ISO9001", "FDA / ROHS / REACH"],
      visualAlt: {
        granules: "Grânulos modificadores de impacto transparente em recipientes claros",
        liquid: "Modificador de impacto líquido transparente em recipientes claros",
        matting: "Pó fosqueante em recipiente claro com placas plásticas foscas",
      },
    },
    proof: [
      { value: "Desde 1998", label: "P&D e fabricação de aditivos poliméricos" },
      { value: "7000+ m²", label: "Suporte fabril e produtivo" },
      { value: "30+", label: "Patentes de invenção" },
      { value: "Global", label: "Mercados UE, Américas e Sudeste Asiático" },
      { value: "ISO9001", label: "FDA / ROHS / REACH / PHTHALATES" },
    ],
    products: {
      kicker: "Categorias de produtos",
      title: "Aditivos de alto desempenho para modificação de polímeros",
      body: "Comece pelos produtos principais ou envie seu material e aplicação para receber uma rota recomendada.",
      cta: "Discutir este produto",
      altSuffix: "visual do produto",
      items: [
        { name: commonProductOptions.pt[0], meta: "Produto principal · dosagem 2-6%", summary: "Mantém transparência enquanto melhora impacto, alongamento e resistência ao frio." },
        { name: commonProductOptions.pt[1], meta: "Produto principal · adição direta", summary: "Aumenta dureza e rigidez mantendo estabilidade dimensional." },
        { name: commonProductOptions.pt[2], meta: "Produto principal · alto LOI", summary: "Suporte retardante de chama não tóxico para PP, PE, ABS, PC e mais." },
        { name: commonProductOptions.pt[3], meta: "Produto principal · suporte customizado", summary: "Apoia ligação interfacial entre PP, cargas e blends poliméricos." },
        { name: commonProductOptions.pt[4], meta: "Dosagem 0,5-0,8%", summary: "Ajuda a ocultar pontos LED com alta transmissão para plásticos de iluminação." },
        { name: "Plastisol líquido de PVC modificado", meta: "Produto de P&D", summary: "Plastisol de cura em baixa temperatura para filtros, juntas e vedação." },
      ],
    },
    about: {
      kicker: "Por que ARGIOPE",
      title: "Fabricante de origem e fornecedor de soluções de compounding",
      body: "A Jindaquan foca em aditivos funcionais para polímeros plásticos e borracha para compounders, fabricantes, recicladores e compradores industriais.",
      advantages: [
        { title: "Liderança em P&D", text: "Foco em aditivos funcionais desde 1998, com capacidade própria de P&D." },
        { title: "Conformidade ambiental", text: "Produtos posicionados para requisitos FDA, ROHS, REACH, PHTHALATES e ISO9001." },
        { title: "Desempenho econômico", text: "Soluções de baixa dosagem para melhorar metas sem complexidade desnecessária." },
        { title: "Proteção de propriedades", text: "Melhora tenacidade, chama, brilho, difusão ou estabilidade sem comprometer propriedades originais." },
      ],
      promise: {
        kicker: "Promessa técnica",
        title: "Melhorar o desempenho alvo sem perder propriedades originais importantes para compras.",
        bullets: ["Transparência e cor original", "Adição direta para processamento mais simples", "Baixa dosagem para controle de custo", "Amostras, TDS/SDS e suporte de formulação"],
      },
    },
    applications: {
      kicker: "Aplicações",
      title: "Criado para cenários B2B reais",
      body: "A linguagem de aplicação é prática para SEO, páginas de anúncio e conversas de compras.",
      imageAlt: "Setores de aplicação e parceiros industriais de aditivos plásticos",
      items: [
        "Compounders e fábricas de modificação plástica",
        "Fabricantes de injeção, extrusão e sopro",
        "Plantas de granulação de plástico reciclado",
        "Fabricantes finais com necessidades de modificação polimérica",
        "Embalagens transparentes, iluminação, perfis e utilidades domésticas",
        "Aplicações retardantes de chama e baixa temperatura",
      ],
    },
    support: {
      kicker: "Suporte técnico e soluções personalizadas",
      title: "Solicite TDS/SDS, amostras ou orientação de formulação",
      body: "Informe polímero, processo e desempenho alvo. A equipe apoia seleção, testes e cotação de exportação.",
      cta: "Iniciar RFQ",
    },
    contact: {
      kicker: "Contato / RFQ",
      title: "Informe seu requisito de produto",
      body: "Envie sua consulta ou fale com Alex Gong por email ou WhatsApp. Seus dados serão usados apenas para esta consulta.",
      whatsapp: "WhatsApp: 0086 18926013309",
      phone: "Telefone: 0086 18926013309",
      factoryTitle: "Endereço da fábrica",
      factoryAddress: "Bld 7#, Wanyang Zhongchuang Cheng, Huidong County, Huizhou City, Guangdong Province, China",
      mapTitle: "Endereço da fábrica no OpenStreetMap",
      form: {
        name: "Nome",
        namePlaceholder: "Seu nome",
        email: "Email",
        emailPlaceholder: "Endereço de email",
        company: "Empresa",
        companyPlaceholder: "Nome da empresa",
        country: "País",
        countryPlaceholder: "País / região",
        product: "Requisito de produto",
        productPlaceholder: "Selecione o produto",
        productOptions: commonProductOptions.pt,
        message: "Mensagem",
        messagePlaceholder: "Informe polímero, aplicação, processo e desempenho alvo...",
        submit: "Enviar RFQ",
        note: "Obrigado pela consulta. Nossa equipe entrará em contato em breve.",
      },
    },
    footer: {
      company: "Shenzhen Jindaquan Technology Co, Ltd.",
      body: "Fabricante de aditivos funcionais para polímeros plásticos e borracha para compradores B2B globais.",
      office: "Escritório",
      officeAddress: "Longgang Road No.5002, Longgang District, Shenzhen, China",
      factory: "Fábrica",
      factoryAddress: "Bld 7#, Wanyang Zhongchuang Cheng, Huidong County, Huizhou City, Guangdong Province, China",
    },
  },
  it: {
    seo: {
      title: "Produttore di additivi plastici | ARGIOPE Jindaquan",
      description: "ARGIOPE Jindaquan produce additivi plastici funzionali per buyer B2B globali, con TDS/SDS, campioni e supporto tecnico.",
    },
    nav: {
      products: "Prodotti",
      applications: "Applicazioni",
      support: "Supporto tecnico",
      about: "Chi siamo",
      resources: "Risorse",
      blog: "Blog",
      contact: "Contatti",
      getQuote: "Richiedi offerta",
      aria: "Navigazione principale",
      language: "Lingua",
    },
    mega: {
      products: {
        kicker: "Famiglie prodotto",
        title: "Additivi funzionali per modifica dei polimeri",
        body: "Cerca per obiettivo prestazionale e invia materiale e applicazione per supporto tecnico.",
        cta: "Avvia selezione prodotto",
        columns: [
          { title: "Prodotti principali", links: commonProductOptions.it.slice(0, 4) },
          { title: "Ottica e superficie", links: ["Agente di diffusione luminosa", "Agente opacizzante", "Additivo lucidante plastico", "Masterbatch trasparente distaccante"] },
          { title: "Additivi prestazionali", links: ["Agente anti-freddo", "Inibitore antibatterico e antimuffa", "Agente antistatico", "Modificatore indice di fluidità"] },
        ],
      },
      applications: {
        kicker: "Applicazioni",
        title: "Trova additivi per scenario produttivo",
        body: "Per compounder, produttori e impianti di riciclo.",
        items: [
          { title: "Plastiche trasparenti", body: "Packaging, lastre, profili e coperture illuminazione" },
          { title: "Plastiche ritardanti di fiamma", body: "Applicazioni PP, PE, PC, ABS e tecnopolimeri" },
          { title: "Iniezione / estrusione / soffiaggio", body: "Additivi ad aggiunta diretta per processi comuni" },
          { title: "Granulazione plastica riciclata", body: "Supporto a tenacità, flusso e compatibilità" },
        ],
      },
      support: {
        kicker: "Supporto tecnico",
        title: "Trasforma i requisiti materiale in RFQ",
        body: "Richiedi documenti, campioni e raccomandazioni formulative.",
        actions: [
          { title: "Richiedi TDS / SDS", body: "Per conformità e valutazione fornitore." },
          { title: "Supporto campioni", body: "Condividi polimero, processo e target." },
          { title: "Invia RFQ", body: "Richiedi prezzo, MOQ e supporto export." },
        ],
      },
      about: {
        kicker: "Su Jindaquan",
        title: "Produttore diretto dal 1998",
        body: "R&D, produzione e fornitura export di additivi funzionali per plastica e gomma.",
        proof: ["Stabilimento 7000+ m²", "Team 50+ persone", "30+ brevetti d'invenzione", "ISO9001 verificato"],
      },
      resources: {
        columns: [
          { title: "Acquisti", links: ["Richiesta TDS / SDS", "Richiesta campioni", "Offerta export"] },
          { title: "Temi SEO", links: ["Fornitore additivi plastici Cina", "Additivi per PVC", "Additivi plastici conformi REACH"] },
        ],
      },
    },
    hero: {
      brandLine: "ARGIOPE / Shenzhen Jindaquan Technology Co, Ltd.",
      title: "Produttore di additivi plastici per buyer B2B globali",
      lede: "Additivi funzionali per plastiche trasparenti, ritardanza di fiamma, diffusione luminosa, superfici opache e prestazioni polimeriche personalizzate.",
      quote: "Richiedi offerta",
      docs: "Richiedi TDS / SDS",
      trust: ["Dal 1998", "7000+ m²", "30+ brevetti d'invenzione", "ISO9001", "FDA / ROHS / REACH"],
      visualAlt: {
        granules: "Granuli modificatori d'impatto trasparenti in contenitori chiari",
        liquid: "Modificatore d'impatto liquido trasparente in contenitori chiari",
        matting: "Polvere opacizzante in contenitore chiaro con lastre plastiche opache",
      },
    },
    proof: [
      { value: "Dal 1998", label: "R&D e produzione di additivi polimerici" },
      { value: "7000+ m²", label: "Supporto fabbrica e produzione" },
      { value: "30+", label: "Brevetti d'invenzione" },
      { value: "Global", label: "Mercati UE, Americhe e Sud-est asiatico" },
      { value: "ISO9001", label: "FDA / ROHS / REACH / PHTHALATES" },
    ],
    products: {
      kicker: "Categorie prodotto",
      title: "Additivi ad alte prestazioni per modifica polimerica",
      body: "Parti dai prodotti principali o invia materiale e applicazione per una raccomandazione tecnica.",
      cta: "Discuti il prodotto",
      altSuffix: "visuale prodotto",
      items: [
        { name: commonProductOptions.it[0], meta: "Prodotto principale · dosaggio 2-6%", summary: "Mantiene la trasparenza migliorando impatto, allungamento e resistenza al freddo." },
        { name: commonProductOptions.it[1], meta: "Prodotto principale · aggiunta diretta", summary: "Aumenta durezza e rigidità mantenendo stabilità dimensionale." },
        { name: commonProductOptions.it[2], meta: "Prodotto principale · LOI elevato", summary: "Supporto ritardante di fiamma non tossico per PP, PE, ABS, PC e altro." },
        { name: commonProductOptions.it[3], meta: "Prodotto principale · supporto custom", summary: "Supporta il legame d'interfaccia tra PP, cariche e blend polimerici." },
        { name: commonProductOptions.it[4], meta: "Dosaggio 0,5-0,8%", summary: "Aiuta a nascondere i LED con alta trasmittanza per plastiche da illuminazione." },
        { name: "Plastisol liquido PVC modificato", meta: "Prodotto R&D", summary: "Plastisol a bassa temperatura per filtri, guarnizioni e tenute." },
      ],
    },
    about: {
      kicker: "Perché ARGIOPE",
      title: "Produttore diretto e fornitore di soluzioni compound",
      body: "Jindaquan si concentra su additivi funzionali per polimeri plastici e gomma per compounder, produttori, riciclatori e buyer industriali.",
      advantages: [
        { title: "Leadership R&D", text: "Focus su additivi funzionali dal 1998, con capacità R&D indipendente." },
        { title: "Conformità ambientale", text: "Prodotti orientati a requisiti FDA, ROHS, REACH, PHTHALATES e ISO9001." },
        { title: "Prestazione efficiente", text: "Soluzioni a basso dosaggio per migliorare il target senza complessità inutili." },
        { title: "Protezione proprietà", text: "Migliora tenacità, fiamma, gloss, diffusione o stabilità senza compromettere le proprietà originali." },
      ],
      promise: {
        kicker: "Promessa tecnica",
        title: "Migliorare la prestazione target senza perdere le proprietà originali importanti per i buyer.",
        bullets: ["Trasparenza e colore originale", "Aggiunta diretta per processo più semplice", "Basso dosaggio per controllo costi", "Campioni, TDS/SDS e supporto formulativo"],
      },
    },
    applications: {
      kicker: "Applicazioni",
      title: "Pensato per scenari B2B reali",
      body: "Il linguaggio applicativo resta pratico per SEO, landing page ADV e trattative procurement.",
      imageAlt: "Settori applicativi e partner industriali per additivi plastici",
      items: [
        "Compounder e fabbriche di modifica plastica",
        "Produttori per iniezione, estrusione e soffiaggio",
        "Impianti di granulazione plastica riciclata",
        "Produttori finali con esigenze di modifica polimerica",
        "Packaging trasparente, illuminazione, profili e articoli domestici",
        "Applicazioni ritardanti di fiamma e basse temperature",
      ],
    },
    support: {
      kicker: "Supporto tecnico e soluzioni custom",
      title: "Richiedi TDS/SDS, campioni o guida formulativa",
      body: "Indica polimero, processo e target. Il team supporta selezione prodotto, test campione e offerta export.",
      cta: "Avvia RFQ",
    },
    contact: {
      kicker: "Contatti / RFQ",
      title: "Raccontaci il requisito prodotto",
      body: "Invia la richiesta o contatta Alex Gong via email o WhatsApp. I dati saranno usati solo per questa richiesta.",
      whatsapp: "WhatsApp: 0086 18926013309",
      phone: "Telefono: 0086 18926013309",
      factoryTitle: "Indirizzo fabbrica",
      factoryAddress: "Bld 7#, Wanyang Zhongchuang Cheng, Huidong County, Huizhou City, Guangdong Province, Cina",
      mapTitle: "Indirizzo fabbrica su OpenStreetMap",
      form: {
        name: "Nome",
        namePlaceholder: "Il tuo nome",
        email: "Email",
        emailPlaceholder: "Indirizzo email",
        company: "Azienda",
        companyPlaceholder: "Nome azienda",
        country: "Paese",
        countryPlaceholder: "Paese / regione",
        product: "Requisito prodotto",
        productPlaceholder: "Seleziona prodotto",
        productOptions: commonProductOptions.it,
        message: "Messaggio",
        messagePlaceholder: "Indica polimero, applicazione, processo e target prestazionale...",
        submit: "Invia RFQ",
        note: "Grazie per la richiesta. Il nostro team ti contatterà presto.",
      },
    },
    footer: {
      company: "Shenzhen Jindaquan Technology Co, Ltd.",
      body: "Produttore di additivi funzionali per polimeri plastici e gomma per buyer B2B globali.",
      office: "Ufficio",
      officeAddress: "Longgang Road No.5002, Longgang District, Shenzhen, Cina",
      factory: "Fabbrica",
      factoryAddress: "Bld 7#, Wanyang Zhongchuang Cheng, Huidong County, Huizhou City, Guangdong Province, Cina",
    },
  },
  ru: {
    seo: {
      title: "Производитель пластиковых добавок | ARGIOPE Jindaquan",
      description: "ARGIOPE Jindaquan производит функциональные добавки для пластика для B2B-покупателей, предоставляя TDS/SDS, образцы и техническую поддержку.",
    },
    nav: {
      products: "Продукты",
      applications: "Применения",
      support: "Техподдержка",
      about: "О компании",
      resources: "Ресурсы",
      blog: "Блог",
      contact: "Контакты",
      getQuote: "Запросить цену",
      aria: "Основная навигация",
      language: "Язык",
    },
    mega: {
      products: {
        kicker: "Линейки продуктов",
        title: "Функциональные добавки для модификации полимеров",
        body: "Выберите по целевому свойству и отправьте материал с применением для технического подбора.",
        cta: "Начать подбор",
        columns: [
          { title: "Основные продукты", links: commonProductOptions.ru.slice(0, 4) },
          { title: "Оптика и поверхность", links: ["Светорассеивающая добавка", "Матирующая добавка", "Добавка для блеска пластика", "Прозрачный мастербатч для разделения формы"] },
          { title: "Функциональные добавки", links: ["Морозостойкая добавка", "Антибактериальный и противогрибковый ингибитор", "Антистатик", "Модификатор индекса текучести"] },
        ],
      },
      applications: {
        kicker: "Применения",
        title: "Подбор добавок по производственному сценарию",
        body: "Для компаундеров, производителей изделий и переработчиков.",
        items: [
          { title: "Прозрачные пластики", body: "Упаковка, листы, профили и светотехнические рассеиватели" },
          { title: "Огнестойкие пластики", body: "Применения PP, PE, PC, ABS и инженерных пластиков" },
          { title: "Литье / экструзия / выдув", body: "Добавки прямого ввода для распространенных процессов" },
          { title: "Грануляция вторичного пластика", body: "Поддержка ударной прочности, текучести и совместимости" },
        ],
      },
      support: {
        kicker: "Техническая поддержка",
        title: "Преобразуйте требования к материалу в RFQ",
        body: "Запросите документы, образцы и рекомендации по рецептуре.",
        actions: [
          { title: "Запросить TDS / SDS", body: "Для оценки поставщика и соответствия требованиям." },
          { title: "Получить образцы", body: "Укажите полимер, процесс и целевые свойства." },
          { title: "Отправить RFQ", body: "Запрос цены, MOQ и экспортной поставки." },
        ],
      },
      about: {
        kicker: "О Jindaquan",
        title: "Производитель с 1998 года",
        body: "НИОКР, производство и экспорт функциональных добавок для пластика и резины.",
        proof: ["Завод 7000+ м²", "Команда 50+ специалистов", "30+ патентов", "ISO9001 подтверждено"],
      },
      resources: {
        columns: [
          { title: "Закупки", links: ["Запрос TDS / SDS", "Запрос образца", "Экспортная котировка"] },
          { title: "SEO темы", links: ["Поставщик пластиковых добавок Китай", "Добавки для PVC изделий", "Добавки для пластика REACH"] },
        ],
      },
    },
    hero: {
      brandLine: "ARGIOPE / Shenzhen Jindaquan Technology Co, Ltd.",
      title: "Производитель пластиковых добавок для глобальных B2B-покупателей",
      lede: "Функциональные добавки для прозрачных пластиков, огнестойкости, светорассеивания, матовых поверхностей и индивидуальных свойств полимеров.",
      quote: "Запросить цену",
      docs: "Запросить TDS / SDS",
      trust: ["С 1998 года", "7000+ м²", "30+ патентов", "ISO9001", "FDA / ROHS / REACH"],
      visualAlt: {
        granules: "Прозрачные гранулы модификатора ударной прочности в чистых емкостях",
        liquid: "Жидкий прозрачный модификатор ударной прочности в чистых емкостях",
        matting: "Матирующий порошок в прозрачной емкости с матовыми пластиковыми пластинами",
      },
    },
    proof: [
      { value: "С 1998", label: "НИОКР и производство полимерных добавок" },
      { value: "7000+ м²", label: "Заводская и производственная поддержка" },
      { value: "30+", label: "Патенты на изобретения" },
      { value: "Global", label: "Рынки ЕС, Америки и Юго-Восточной Азии" },
      { value: "ISO9001", label: "FDA / ROHS / REACH / PHTHALATES" },
    ],
    products: {
      kicker: "Категории продуктов",
      title: "Высокоэффективные добавки для модификации полимеров",
      body: "Начните с основных продуктов или отправьте материал и применение для рекомендации подходящей добавки.",
      cta: "Обсудить продукт",
      altSuffix: "изображение продукта",
      items: [
        { name: commonProductOptions.ru[0], meta: "Основной продукт · дозировка 2-6%", summary: "Сохраняет прозрачность, улучшая ударную прочность, удлинение и морозостойкость." },
        { name: commonProductOptions.ru[1], meta: "Основной продукт · прямой ввод", summary: "Повышает твердость и кольцевую жесткость при стабильных размерах." },
        { name: commonProductOptions.ru[2], meta: "Основной продукт · высокий LOI", summary: "Нетоксичная огнестойкая поддержка для PP, PE, ABS, PC и других материалов." },
        { name: commonProductOptions.ru[3], meta: "Основной продукт · индивидуальная поддержка", summary: "Поддерживает межфазное сцепление PP, наполнителей и полимерных смесей." },
        { name: commonProductOptions.ru[4], meta: "Дозировка 0,5-0,8%", summary: "Помогает скрыть светодиоды при высокой светопропускаемости для светотехники." },
        { name: "Модифицированный жидкий PVC пластизоль", meta: "НИОКР продукт", summary: "Низкотемпературный пластизоль для фильтров, прокладок и уплотнений." },
      ],
    },
    about: {
      kicker: "Почему ARGIOPE",
      title: "Производитель и поставщик решений для компаундирования",
      body: "Jindaquan специализируется на функциональных добавках для пластиковых и резиновых полимеров для компаундеров, производителей, переработчиков и промышленных покупателей.",
      advantages: [
        { title: "Лидерство в НИОКР", text: "Фокус на функциональных полимерных добавках с 1998 года и собственная R&D база." },
        { title: "Экологическое соответствие", text: "Продукты ориентированы на требования FDA, ROHS, REACH, PHTHALATES и ISO9001." },
        { title: "Экономичная эффективность", text: "Низкодозируемые решения улучшают целевые свойства без усложнения процесса." },
        { title: "Защита свойств", text: "Улучшает ударную прочность, огнестойкость, блеск, рассеивание или стабильность без потери исходных свойств." },
      ],
      promise: {
        kicker: "Техническое обещание",
        title: "Улучшить целевые свойства без потери исходных характеристик, важных для покупателей.",
        bullets: ["Сохранение прозрачности и цвета", "Прямой ввод для простоты процесса", "Низкая дозировка для контроля затрат", "Образцы, TDS/SDS и поддержка рецептур"],
      },
    },
    applications: {
      kicker: "Применения",
      title: "Для реальных B2B производственных задач",
      body: "Прикладные формулировки подходят для SEO, рекламных посадочных страниц и закупочных переговоров.",
      imageAlt: "Отрасли применения и партнеры для пластиковых добавок",
      items: [
        "Компаундеры и заводы по модификации пластика",
        "Производители литья, экструзии и выдува",
        "Заводы грануляции вторичного пластика",
        "Конечные производители с задачами модификации полимеров",
        "Прозрачная упаковка, освещение, профили и бытовые изделия",
        "Огнестойкие и низкотемпературные применения",
      ],
    },
    support: {
      kicker: "Техническая поддержка и индивидуальные решения",
      title: "Запросите TDS/SDS, образцы или рекомендации по рецептуре",
      body: "Укажите полимер, процесс и целевые свойства. Команда поможет с подбором, тестами и экспортной котировкой.",
      cta: "Начать RFQ",
    },
    contact: {
      kicker: "Контакты / RFQ",
      title: "Опишите требования к продукту",
      body: "Отправьте запрос или свяжитесь с Alex Gong по email или WhatsApp. Данные используются только для обработки запроса.",
      whatsapp: "WhatsApp: 0086 18926013309",
      phone: "Телефон: 0086 18926013309",
      factoryTitle: "Адрес завода",
      factoryAddress: "Bld 7#, Wanyang Zhongchuang Cheng, Huidong County, Huizhou City, Guangdong Province, China",
      mapTitle: "Адрес завода на OpenStreetMap",
      form: {
        name: "Имя",
        namePlaceholder: "Ваше имя",
        email: "Email",
        emailPlaceholder: "Email адрес",
        company: "Компания",
        companyPlaceholder: "Название компании",
        country: "Страна",
        countryPlaceholder: "Страна / регион",
        product: "Требование к продукту",
        productPlaceholder: "Выберите интересующий продукт",
        productOptions: commonProductOptions.ru,
        message: "Сообщение",
        messagePlaceholder: "Укажите полимер, применение, процесс и целевые свойства...",
        submit: "Отправить RFQ",
        note: "Спасибо за запрос. Наша команда скоро свяжется с вами.",
      },
    },
    footer: {
      company: "Shenzhen Jindaquan Technology Co, Ltd.",
      body: "Производитель функциональных добавок для пластиковых и резиновых полимеров для глобальных B2B-покупателей.",
      office: "Офис",
      officeAddress: "Longgang Road No.5002, Longgang District, Shenzhen, China",
      factory: "Завод",
      factoryAddress: "Bld 7#, Wanyang Zhongchuang Cheng, Huidong County, Huizhou City, Guangdong Province, China",
    },
  },
  ja: {
    seo: {
      title: "プラスチック添加剤メーカー | ARGIOPE Jindaquan",
      description: "ARGIOPE Jindaquan は、B2B向け機能性プラスチック添加剤を製造し、TDS/SDS、サンプル、技術サポートを提供します。",
    },
    nav: {
      products: "製品",
      applications: "用途",
      support: "技術サポート",
      about: "会社情報",
      resources: "資料",
      blog: "ブログ",
      contact: "お問い合わせ",
      getQuote: "見積依頼",
      aria: "メインナビゲーション",
      language: "言語",
    },
    mega: {
      products: {
        kicker: "製品ファミリー",
        title: "ポリマー改質向け機能性添加剤",
        body: "必要な性能から選び、材料と用途を共有いただければ技術選定をサポートします。",
        cta: "製品選定を始める",
        columns: [
          { title: "主力製品", links: commonProductOptions.ja.slice(0, 4) },
          { title: "光学・表面", links: ["光拡散剤", "艶消し剤", "プラスチック光沢添加剤", "透明離型マスターバッチ"] },
          { title: "性能添加剤", links: ["耐寒剤", "抗菌・防カビ剤", "帯電防止剤", "メルトフロー指数改質剤"] },
        ],
      },
      applications: {
        kicker: "用途",
        title: "生産シーン別に添加剤を探す",
        body: "コンパウンド工場、成形メーカー、リサイクル工場向けです。",
        items: [
          { title: "透明プラスチック", body: "包装、シート、プロファイル、照明カバー" },
          { title: "難燃プラスチック", body: "PP、PE、PC、ABS、エンプラ用途" },
          { title: "射出 / 押出 / ブロー成形", body: "一般加工向けの直接添加ソリューション" },
          { title: "再生プラスチック造粒", body: "靭性、流動性、相溶性をサポート" },
        ],
      },
      support: {
        kicker: "技術サポート",
        title: "材料要件をRFQへつなげる",
        body: "資料、サンプル、配合提案をご依頼ください。",
        actions: [
          { title: "TDS / SDS依頼", body: "コンプライアンス確認と仕入先評価に。" },
          { title: "サンプルサポート", body: "ポリマー、加工法、目標性能を共有してください。" },
          { title: "RFQ送信", body: "価格、MOQ、輸出供給について相談できます。" },
        ],
      },
      about: {
        kicker: "Jindaquanについて",
        title: "1998年からの源泉メーカー",
        body: "プラスチック・ゴム用機能性添加剤の研究開発、製造、輸出供給。",
        proof: ["7000+ m² 工場", "50+ 名の専門チーム", "30+ 発明特許", "ISO9001確認済み"],
      },
      resources: {
        columns: [
          { title: "調達", links: ["TDS / SDS依頼", "サンプル問い合わせ", "輸出見積"] },
          { title: "SEOトピック", links: ["中国プラスチック添加剤サプライヤー", "PVC製品向け添加剤", "REACH対応プラスチック添加剤"] },
        ],
      },
    },
    hero: {
      brandLine: "ARGIOPE / Shenzhen Jindaquan Technology Co, Ltd.",
      title: "グローバルB2B向けプラスチック添加剤メーカー",
      lede: "透明プラスチック、難燃改質、光拡散、艶消し表面、カスタムポリマー性能向けの機能性添加剤。",
      quote: "見積依頼",
      docs: "TDS / SDS依頼",
      trust: ["1998年創業", "7000+ m²", "30+ 発明特許", "ISO9001", "FDA / ROHS / REACH"],
      visualAlt: {
        granules: "透明容器に入った透明耐衝撃改質マスターバッチ粒子",
        liquid: "透明容器に入った液体透明耐衝撃改質剤",
        matting: "透明容器入り艶消し粉末と艶消しプラスチック板",
      },
    },
    proof: [
      { value: "1998年から", label: "ポリマー添加剤の研究開発と製造" },
      { value: "7000+ m²", label: "工場と生産サポート" },
      { value: "30+", label: "発明特許" },
      { value: "Global", label: "EU、米州、東南アジア市場" },
      { value: "ISO9001", label: "FDA / ROHS / REACH / PHTHALATES" },
    ],
    products: {
      kicker: "製品カテゴリ",
      title: "ポリマー改質向け高性能添加剤",
      body: "まず主力製品をご覧ください。材料と用途を共有いただければ、適切な添加剤ルートを提案します。",
      cta: "この製品を相談",
      altSuffix: "製品画像",
      items: [
        { name: commonProductOptions.ja[0], meta: "主力製品 · 2-6%添加", summary: "透明性を保ちながら、耐衝撃性、伸び、耐寒性を向上します。" },
        { name: commonProductOptions.ja[1], meta: "主力製品 · 直接添加", summary: "硬度とリング剛性を高め、寸法安定性をサポートします。" },
        { name: commonProductOptions.ja[2], meta: "主力製品 · 高LOI", summary: "PP、PE、ABS、PCなどに対応する非毒性難燃サポート。" },
        { name: commonProductOptions.ja[3], meta: "主力製品 · カスタム対応", summary: "PP、充填材、ポリマーブレンド間の界面接着をサポートします。" },
        { name: commonProductOptions.ja[4], meta: "0.5-0.8%添加", summary: "高い透光性を保ちつつLED粒感を抑える照明用添加剤です。" },
        { name: "改質PVC液状プラスチゾル", meta: "R&D製品", summary: "フィルター、ガスケット、シール用途向けの低温成形プラスチゾル。" },
      ],
    },
    about: {
      kicker: "ARGIOPEが選ばれる理由",
      title: "源泉メーカー兼コンパウンドソリューション提供者",
      body: "Jindaquan は、コンパウンド工場、製品メーカー、リサイクル企業、産業バイヤー向けにプラスチック・ゴム高分子機能性添加剤を提供します。",
      advantages: [
        { title: "R&D主導", text: "1998年からポリマー機能性添加剤に注力し、独自の研究開発力を備えています。" },
        { title: "環境・規格対応", text: "FDA、ROHS、REACH、PHTHALATES、ISO9001の調達要件を意識した製品設計。" },
        { title: "費用対効果", text: "低添加量で目標性能を高め、不要な工程負担を抑えます。" },
        { title: "物性保護", text: "靭性、難燃性、光沢、拡散、安定性を改善しながら元の物性を守ります。" },
      ],
      promise: {
        kicker: "技術的な約束",
        title: "バイヤーが重視する元の材料特性を損なわず、目標性能を向上します。",
        bullets: ["透明性と元色の保持", "加工しやすい直接添加", "コスト管理に適した低添加量", "サンプル、TDS/SDS、配合サポート"],
      },
    },
    applications: {
      kicker: "用途",
      title: "実際のB2B生産シーンに対応",
      body: "SEO、広告LP、調達商談に使いやすい実務的な用途表現にしています。",
      imageAlt: "プラスチック添加剤の用途分野と協力メーカー",
      items: [
        "プラスチックコンパウンド・改質工場",
        "射出、押出、ブロー成形メーカー",
        "再生プラスチック造粒工場",
        "ポリマー改質ニーズを持つ最終製品メーカー",
        "透明包装、照明、プロファイル、家庭用品",
        "難燃および低温性能用途",
      ],
    },
    support: {
      kicker: "技術サポート & カスタムソリューション",
      title: "TDS/SDS、サンプル、配合提案を依頼",
      body: "ポリマー材料、生産プロセス、目標性能をお知らせください。製品選定、サンプル試験、輸出見積をサポートします。",
      cta: "RFQを開始",
    },
    contact: {
      kicker: "お問い合わせ / RFQ",
      title: "製品要件をお知らせください",
      body: "お問い合わせフォーム、または Alex Gong へメール・WhatsAppでご連絡ください。情報は本件対応のみに使用します。",
      whatsapp: "WhatsApp: 0086 18926013309",
      phone: "電話: 0086 18926013309",
      factoryTitle: "工場住所",
      factoryAddress: "Bld 7#, Wanyang Zhongchuang Cheng, Huidong County, Huizhou City, Guangdong Province, China",
      mapTitle: "OpenStreetMap上の工場住所",
      form: {
        name: "氏名",
        namePlaceholder: "お名前",
        email: "メール",
        emailPlaceholder: "メールアドレス",
        company: "会社名",
        companyPlaceholder: "会社名",
        country: "国",
        countryPlaceholder: "国 / 地域",
        product: "製品要件",
        productPlaceholder: "関心のある製品を選択",
        productOptions: commonProductOptions.ja,
        message: "メッセージ",
        messagePlaceholder: "ポリマー材料、用途、加工方法、目標性能を入力してください...",
        submit: "RFQ送信",
        note: "お問い合わせありがとうございます。担当チームよりご連絡します。",
      },
    },
    footer: {
      company: "Shenzhen Jindaquan Technology Co, Ltd.",
      body: "グローバルB2Bバイヤー向けプラスチック・ゴム高分子機能性添加剤メーカー。",
      office: "オフィス",
      officeAddress: "Longgang Road No.5002, Longgang District, Shenzhen, China",
      factory: "工場",
      factoryAddress: "Bld 7#, Wanyang Zhongchuang Cheng, Huidong County, Huizhou City, Guangdong Province, China",
    },
  },
};
