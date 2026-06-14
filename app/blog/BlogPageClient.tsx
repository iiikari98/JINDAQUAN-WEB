"use client";

import { ArrowRight, BookOpen, CheckCircle2, FileText, Mail } from "lucide-react";
import { useI18n } from "../i18n/I18nProvider";
import type { LanguageCode } from "../i18n/languages";

const postImages = [
  "/assets/transparent-impact-modifier-closeup.png",
  "/assets/flame-retardant.jpg",
  "/assets/light-diffusion-powder-diffuser.png",
];

type BlogCopy = {
  heroKicker: string;
  title: string;
  body: string;
  primaryCta: string;
  secondaryCta: string;
  panelTitle: string;
  panelBody: string;
  sectionKicker: string;
  sectionTitle: string;
  sectionBody: string;
  readBrief: string;
  targetKeywords: string;
  searchIntent: string;
  briefCta: string;
  finalKicker: string;
  finalTitle: string;
  finalBody: string;
  finalCta: string;
  posts: Array<{
    id: string;
    category: string;
    title: string;
    description: string;
    keywords: string[];
    intent: string;
  }>;
};

const blogCopy: Record<LanguageCode, BlogCopy> = {
  en: {
    heroKicker: "ARGIOPE Technical Blog",
    title: "Plastic Additives Insights for Global B2B Buyers",
    body:
      "Practical guides for procurement teams, compounders and plastic product manufacturers choosing functional additives for toughness, flame retardance, light diffusion, matte surfaces and polymer performance.",
    primaryCta: "Send Your Requirements",
    secondaryCta: "Request TDS / SDS",
    panelTitle: "Built for SEO, AI Overview and real procurement questions",
    panelBody:
      "Each topic is written around buyer intent: product selection, application scenarios, testing workflow, compliance review and RFQ preparation.",
    sectionKicker: "Featured Articles",
    sectionTitle: "Start with the topics most likely to generate qualified inquiries",
    sectionBody:
      "These articles are planned around overseas search behavior and can be expanded into individual long-form posts as the next content step.",
    readBrief: "Read topic brief",
    targetKeywords: "Target keywords",
    searchIntent: "Search intent",
    briefCta: "Send Requirements for This Topic",
    finalKicker: "Content to Inquiry",
    finalTitle: "Turn technical readers into RFQ leads",
    finalBody:
      "Add inline CTAs, catalog requests and sample-support forms to each article so buyers can send resin type, application, target performance and compliance requirements.",
    finalCta: "Get a Quote",
    posts: [
      {
        id: "transparent-impact-modifier",
        category: "Buyer Guide",
        title: "How to Choose a Transparent Impact Modifier for Clear Plastic Products",
        description:
          "A practical selection guide for clear plastic products where toughness, original color and transparency must be balanced before sample testing.",
        keywords: ["transparent impact modifier", "clear plastic toughness additive", "impact modifier for transparent plastics"],
        intent: "Procurement and sample selection for transparent plastic modification.",
      },
      {
        id: "halogen-free-flame-retardant",
        category: "Compliance & Testing",
        title: "Halogen-Free Flame Retardant Additives for PP, PE, PC and Engineering Plastics",
        description:
          "A buyer-focused overview of flame rating targets, sample thickness, glow wire testing, halogen-free requirements and shipment inspection.",
        keywords: ["halogen free flame retardant", "UL94 V-0 plastic additive", "flame retardant additive for PP"],
        intent: "Technical sourcing for flame retardant additive projects.",
      },
      {
        id: "light-diffusion-vs-matting",
        category: "Application Comparison",
        title: "Light Diffusion Agent vs Matting Agent: How to Select Surface and Optical Additives",
        description:
          "Compare optical diffusion and surface gloss control for LED covers, matte parts, appliance panels, cosmetics packaging and coatings.",
        keywords: ["light diffusion agent for plastics", "matting agent for plastic", "plastic surface additive"],
        intent: "Application-led comparison before sending product requirements.",
      },
    ],
  },
  fr: {
    heroKicker: "Blog technique ARGIOPE",
    title: "Informations sur les additifs plastiques pour acheteurs B2B mondiaux",
    body:
      "Guides pratiques pour les équipes achats, compounders et fabricants qui sélectionnent des additifs fonctionnels pour la ténacité, l'ignifugation, la diffusion lumineuse, les surfaces mates et la performance polymère.",
    primaryCta: "Envoyer vos exigences",
    secondaryCta: "Demander TDS / SDS",
    panelTitle: "Conçu pour le SEO, AI Overview et les vraies questions d'achat",
    panelBody:
      "Chaque sujet répond à une intention d'acheteur : sélection produit, applications, tests, conformité et préparation RFQ.",
    sectionKicker: "Articles à la une",
    sectionTitle: "Commencer par les sujets les plus susceptibles de générer des demandes qualifiées",
    sectionBody:
      "Ces articles suivent les comportements de recherche à l'international et peuvent devenir des contenus longs individuels.",
    readBrief: "Lire le brief",
    targetKeywords: "Mots-clés cibles",
    searchIntent: "Intention de recherche",
    briefCta: "Envoyer les exigences pour ce sujet",
    finalKicker: "Du contenu à la demande",
    finalTitle: "Transformer les lecteurs techniques en leads RFQ",
    finalBody:
      "Ajoutez CTA, demandes de catalogue et formulaires d'échantillons afin que les acheteurs envoient résine, application, performance cible et exigences de conformité.",
    finalCta: "Demander un devis",
    posts: [
      {
        id: "transparent-impact-modifier",
        category: "Guide acheteur",
        title: "Comment choisir un modificateur d'impact transparent pour produits plastiques clairs",
        description:
          "Guide pratique pour équilibrer ténacité, couleur d'origine et transparence avant les essais d'échantillons.",
        keywords: ["modificateur d'impact transparent", "additif de ténacité pour plastique clair", "modificateur d'impact pour plastiques transparents"],
        intent: "Achat et sélection d'échantillons pour modification de plastiques transparents.",
      },
      {
        id: "halogen-free-flame-retardant",
        category: "Conformité & tests",
        title: "Additifs ignifuges sans halogène pour PP, PE, PC et plastiques techniques",
        description:
          "Vue d'ensemble orientée acheteur : classement flamme, épaisseur d'échantillon, test au fil incandescent, conformité et inspection expédition.",
        keywords: ["ignifuge sans halogène", "additif plastique UL94 V-0", "additif ignifuge pour PP"],
        intent: "Sourcing technique pour projets d'additifs ignifuges.",
      },
      {
        id: "light-diffusion-vs-matting",
        category: "Comparaison d'applications",
        title: "Agent de diffusion lumineuse vs agent matant : sélectionner les additifs optiques et surface",
        description:
          "Comparer diffusion optique et réduction de gloss pour capots LED, pièces mates, panneaux d'appareils, packaging cosmétique et coatings.",
        keywords: ["agent de diffusion lumineuse plastique", "agent matant plastique", "additif de surface plastique"],
        intent: "Comparaison par application avant envoi des exigences produit.",
      },
    ],
  },
  es: {
    heroKicker: "Blog técnico ARGIOPE",
    title: "Conocimiento sobre aditivos plásticos para compradores B2B globales",
    body:
      "Guías prácticas para compras, compounders y fabricantes que seleccionan aditivos funcionales para tenacidad, retardancia de llama, difusión de luz, superficies mate y rendimiento polimérico.",
    primaryCta: "Enviar requisitos",
    secondaryCta: "Solicitar TDS / SDS",
    panelTitle: "Pensado para SEO, AI Overview y preguntas reales de compra",
    panelBody:
      "Cada tema se escribe según intención de compra: selección de producto, aplicaciones, pruebas, cumplimiento y preparación de RFQ.",
    sectionKicker: "Artículos destacados",
    sectionTitle: "Empiece por los temas con mayor potencial de consultas calificadas",
    sectionBody:
      "Estos artículos se planifican según búsquedas internacionales y pueden ampliarse a posts técnicos largos.",
    readBrief: "Leer resumen",
    targetKeywords: "Palabras clave",
    searchIntent: "Intención de búsqueda",
    briefCta: "Enviar requisitos para este tema",
    finalKicker: "Del contenido a la consulta",
    finalTitle: "Convertir lectores técnicos en oportunidades RFQ",
    finalBody:
      "Añada CTAs, solicitudes de catálogo y formularios de muestra para que los compradores envíen resina, aplicación, rendimiento objetivo y requisitos de cumplimiento.",
    finalCta: "Solicitar cotización",
    posts: [
      {
        id: "transparent-impact-modifier",
        category: "Guía de compra",
        title: "Cómo elegir un modificador de impacto transparente para productos plásticos claros",
        description:
          "Guía práctica para equilibrar tenacidad, color original y transparencia antes de probar muestras.",
        keywords: ["modificador de impacto transparente", "aditivo de tenacidad para plástico claro", "modificador de impacto para plásticos transparentes"],
        intent: "Compra y selección de muestras para modificación de plásticos transparentes.",
      },
      {
        id: "halogen-free-flame-retardant",
        category: "Cumplimiento y pruebas",
        title: "Aditivos retardantes de llama sin halógenos para PP, PE, PC y plásticos de ingeniería",
        description:
          "Resumen para compradores sobre clasificación de llama, espesor de muestra, glow wire, requisitos sin halógenos e inspección de envío.",
        keywords: ["retardante de llama sin halógenos", "aditivo plástico UL94 V-0", "retardante de llama para PP"],
        intent: "Sourcing técnico para proyectos de retardancia de llama.",
      },
      {
        id: "light-diffusion-vs-matting",
        category: "Comparación de aplicaciones",
        title: "Agente difusor de luz vs agente mateante: selección de aditivos ópticos y de superficie",
        description:
          "Compare difusión óptica y control de brillo para cubiertas LED, piezas mate, paneles, packaging cosmético y recubrimientos.",
        keywords: ["agente difusor de luz para plásticos", "agente mateante para plástico", "aditivo de superficie plástico"],
        intent: "Comparación por aplicación antes de enviar requisitos.",
      },
    ],
  },
  pt: {
    heroKicker: "Blog técnico ARGIOPE",
    title: "Insights sobre aditivos plásticos para compradores B2B globais",
    body:
      "Guias práticos para compras, compounders e fabricantes que selecionam aditivos funcionais para tenacidade, retardância de chama, difusão de luz, superfícies foscas e desempenho polimérico.",
    primaryCta: "Enviar requisitos",
    secondaryCta: "Solicitar TDS / SDS",
    panelTitle: "Criado para SEO, AI Overview e perguntas reais de compra",
    panelBody:
      "Cada tema segue a intenção do comprador: seleção de produto, aplicações, testes, conformidade e preparação de RFQ.",
    sectionKicker: "Artigos em destaque",
    sectionTitle: "Comece pelos temas com maior chance de gerar consultas qualificadas",
    sectionBody:
      "Estes artigos são planejados com base em buscas internacionais e podem virar posts técnicos longos.",
    readBrief: "Ler resumo",
    targetKeywords: "Palavras-chave",
    searchIntent: "Intenção de busca",
    briefCta: "Enviar requisitos para este tema",
    finalKicker: "Do conteúdo à consulta",
    finalTitle: "Transformar leitores técnicos em leads RFQ",
    finalBody:
      "Adicione CTAs, pedidos de catálogo e formulários de amostra para compradores enviarem resina, aplicação, desempenho alvo e conformidade.",
    finalCta: "Solicitar cotação",
    posts: [
      {
        id: "transparent-impact-modifier",
        category: "Guia de compra",
        title: "Como escolher um modificador de impacto transparente para plásticos claros",
        description:
          "Guia prático para equilibrar tenacidade, cor original e transparência antes dos testes de amostra.",
        keywords: ["modificador de impacto transparente", "aditivo de tenacidade para plástico claro", "modificador de impacto para plásticos transparentes"],
        intent: "Compra e seleção de amostras para modificação de plásticos transparentes.",
      },
      {
        id: "halogen-free-flame-retardant",
        category: "Conformidade e testes",
        title: "Aditivos retardantes de chama sem halogênio para PP, PE, PC e plásticos de engenharia",
        description:
          "Visão para compradores sobre classificação de chama, espessura, glow wire, requisitos halogen-free e inspeção de envio.",
        keywords: ["retardante de chama sem halogênio", "aditivo plástico UL94 V-0", "retardante de chama para PP"],
        intent: "Sourcing técnico para projetos com retardância de chama.",
      },
      {
        id: "light-diffusion-vs-matting",
        category: "Comparação de aplicações",
        title: "Agente de difusão de luz vs agente fosqueante: seleção de aditivos ópticos e de superfície",
        description:
          "Compare difusão óptica e controle de brilho para capas LED, peças foscas, painéis, embalagens cosméticas e coatings.",
        keywords: ["agente de difusão de luz para plásticos", "agente fosqueante para plástico", "aditivo de superfície plástico"],
        intent: "Comparação por aplicação antes de enviar requisitos.",
      },
    ],
  },
  it: {
    heroKicker: "Blog tecnico ARGIOPE",
    title: "Approfondimenti sugli additivi plastici per buyer B2B globali",
    body:
      "Guide pratiche per procurement, compounder e produttori che scelgono additivi funzionali per tenacità, ritardanza di fiamma, diffusione luminosa, superfici opache e prestazioni polimeriche.",
    primaryCta: "Invia requisiti",
    secondaryCta: "Richiedi TDS / SDS",
    panelTitle: "Pensato per SEO, AI Overview e vere domande d'acquisto",
    panelBody:
      "Ogni tema segue l'intento del buyer: selezione prodotto, applicazioni, test, conformità e preparazione RFQ.",
    sectionKicker: "Articoli in evidenza",
    sectionTitle: "Inizia dai temi più adatti a generare richieste qualificate",
    sectionBody:
      "Questi articoli seguono il comportamento di ricerca internazionale e possono diventare post tecnici lunghi.",
    readBrief: "Leggi brief",
    targetKeywords: "Keyword target",
    searchIntent: "Intento di ricerca",
    briefCta: "Invia requisiti per questo tema",
    finalKicker: "Dal contenuto alla richiesta",
    finalTitle: "Trasformare lettori tecnici in lead RFQ",
    finalBody:
      "Aggiungi CTA, richieste catalogo e form campioni per raccogliere resina, applicazione, target prestazionale e requisiti di conformità.",
    finalCta: "Richiedi offerta",
    posts: [
      {
        id: "transparent-impact-modifier",
        category: "Guida buyer",
        title: "Come scegliere un modificatore d'impatto trasparente per prodotti plastici chiari",
        description:
          "Guida pratica per bilanciare tenacità, colore originale e trasparenza prima dei test campione.",
        keywords: ["modificatore d'impatto trasparente", "additivo tenacizzante per plastica chiara", "modificatore d'impatto per plastiche trasparenti"],
        intent: "Procurement e selezione campioni per modifica di plastiche trasparenti.",
      },
      {
        id: "halogen-free-flame-retardant",
        category: "Conformità e test",
        title: "Additivi ritardanti di fiamma senza alogeni per PP, PE, PC e tecnopolimeri",
        description:
          "Panoramica per buyer su rating fiamma, spessore campione, glow wire, requisiti halogen-free e ispezione spedizione.",
        keywords: ["ritardante di fiamma senza alogeni", "additivo plastico UL94 V-0", "ritardante di fiamma per PP"],
        intent: "Sourcing tecnico per progetti ritardanti di fiamma.",
      },
      {
        id: "light-diffusion-vs-matting",
        category: "Confronto applicazioni",
        title: "Agente di diffusione luminosa vs agente opacizzante: scelta degli additivi ottici e superficie",
        description:
          "Confronta diffusione ottica e controllo gloss per cover LED, pezzi opachi, pannelli, packaging cosmetico e coating.",
        keywords: ["agente di diffusione luminosa per plastiche", "agente opacizzante per plastica", "additivo superficie plastica"],
        intent: "Confronto applicativo prima dell'invio requisiti.",
      },
    ],
  },
  ru: {
    heroKicker: "Технический блог ARGIOPE",
    title: "Материалы о пластиковых добавках для глобальных B2B-покупателей",
    body:
      "Практические руководства для закупок, компаундеров и производителей, выбирающих функциональные добавки для ударной прочности, огнестойкости, светорассеивания, матовой поверхности и свойств полимеров.",
    primaryCta: "Отправить требования",
    secondaryCta: "Запросить TDS / SDS",
    panelTitle: "Для SEO, AI Overview и реальных вопросов закупки",
    panelBody:
      "Каждая тема строится вокруг намерения покупателя: выбор продукта, применение, тестирование, соответствие и подготовка RFQ.",
    sectionKicker: "Рекомендуемые статьи",
    sectionTitle: "Начните с тем, которые лучше всего приводят к квалифицированным запросам",
    sectionBody:
      "Темы основаны на зарубежном поисковом поведении и могут быть расширены в полноценные технические статьи.",
    readBrief: "Читать кратко",
    targetKeywords: "Целевые ключевые слова",
    searchIntent: "Поисковое намерение",
    briefCta: "Отправить требования по теме",
    finalKicker: "От контента к запросу",
    finalTitle: "Превратить технических читателей в RFQ-лиды",
    finalBody:
      "Добавьте CTA, запрос каталога и формы образцов, чтобы покупатели отправляли тип смолы, применение, целевые свойства и требования соответствия.",
    finalCta: "Запросить цену",
    posts: [
      {
        id: "transparent-impact-modifier",
        category: "Руководство покупателя",
        title: "Как выбрать прозрачный модификатор ударной прочности для прозрачных пластиков",
        description:
          "Практическое руководство по балансу ударной прочности, исходного цвета и прозрачности до тестирования образцов.",
        keywords: ["прозрачный модификатор ударной прочности", "добавка для прочности прозрачного пластика", "модификатор для прозрачных пластиков"],
        intent: "Закупка и выбор образцов для модификации прозрачного пластика.",
      },
      {
        id: "halogen-free-flame-retardant",
        category: "Соответствие и тесты",
        title: "Безгалогенные антипирены для PP, PE, PC и инженерных пластиков",
        description:
          "Обзор для покупателей: огнестойкость, толщина образца, glow wire, безгалогенные требования и инспекция отгрузки.",
        keywords: ["безгалогенный антипирен", "добавка UL94 V-0 для пластика", "антипирен для PP"],
        intent: "Технический sourcing для проектов огнестойких добавок.",
      },
      {
        id: "light-diffusion-vs-matting",
        category: "Сравнение применений",
        title: "Светорассеивающая добавка или матирующая добавка: выбор оптических и поверхностных добавок",
        description:
          "Сравнение светорассеивания и контроля глянца для LED-крышек, матовых деталей, панелей, косметической упаковки и покрытий.",
        keywords: ["светорассеивающая добавка для пластика", "матирующая добавка для пластика", "поверхностная добавка для пластика"],
        intent: "Сравнение по применению перед отправкой требований.",
      },
    ],
  },
  ja: {
    heroKicker: "ARGIOPE 技術ブログ",
    title: "グローバルB2Bバイヤー向けプラスチック添加剤インサイト",
    body:
      "調達担当、コンパウンド工場、成形メーカー向けに、靭性、難燃、光拡散、艶消し表面、ポリマー性能のための機能性添加剤選定を解説します。",
    primaryCta: "要件を送信",
    secondaryCta: "TDS / SDS依頼",
    panelTitle: "SEO、AI Overview、実際の調達質問に対応",
    panelBody:
      "各テーマは、製品選定、用途、試験、コンプライアンス、RFQ準備といったバイヤー意図に基づいています。",
    sectionKicker: "注目記事",
    sectionTitle: "問い合わせにつながりやすいテーマから開始",
    sectionBody:
      "海外検索行動に基づき、次のステップで個別の長文記事へ展開できます。",
    readBrief: "概要を読む",
    targetKeywords: "対象キーワード",
    searchIntent: "検索意図",
    briefCta: "このテーマの要件を送信",
    finalKicker: "コンテンツから問い合わせへ",
    finalTitle: "技術読者をRFQリードへ変える",
    finalBody:
      "各記事にCTA、カタログ依頼、サンプルフォームを追加し、樹脂タイプ、用途、目標性能、規格要件を収集します。",
    finalCta: "見積依頼",
    posts: [
      {
        id: "transparent-impact-modifier",
        category: "バイヤーガイド",
        title: "透明プラスチック製品向け透明耐衝撃改質剤の選び方",
        description:
          "サンプル試験前に、靭性、元色、透明性をどうバランスするかを解説する実務ガイド。",
        keywords: ["透明耐衝撃改質剤", "透明プラスチック靭性添加剤", "透明プラスチック用改質剤"],
        intent: "透明プラスチック改質の調達とサンプル選定。",
      },
      {
        id: "halogen-free-flame-retardant",
        category: "規格・試験",
        title: "PP、PE、PC、エンプラ向けハロゲンフリー難燃添加剤",
        description:
          "難燃等級、試験片厚み、グローワイヤー、ハロゲンフリー要件、出荷検査をバイヤー視点で解説。",
        keywords: ["ハロゲンフリー難燃剤", "UL94 V-0プラスチック添加剤", "PP用難燃添加剤"],
        intent: "難燃添加剤プロジェクトの技術調達。",
      },
      {
        id: "light-diffusion-vs-matting",
        category: "用途比較",
        title: "光拡散剤と艶消し剤：光学・表面添加剤の選び方",
        description:
          "LEDカバー、艶消し部品、家電パネル、化粧品包装、コーティング向けに光拡散と低光沢を比較します。",
        keywords: ["プラスチック用光拡散剤", "プラスチック用艶消し剤", "プラスチック表面添加剤"],
        intent: "製品要件送信前の用途別比較。",
      },
    ],
  },
};

export function BlogPageClient() {
  const { language } = useI18n();
  const copy = blogCopy[language];

  return (
    <>
      <section className="blog-hero" id="top">
        <div>
          <p className="brand-line">{copy.heroKicker}</p>
          <h1>{copy.title}</h1>
          <p>{copy.body}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="/#contact">
              <Mail size={18} />
              {copy.primaryCta}
            </a>
            <a className="button button-secondary" href="/#support">
              <FileText size={18} />
              {copy.secondaryCta}
            </a>
          </div>
        </div>
        <div className="blog-hero-panel">
          <BookOpen size={34} />
          <strong>{copy.panelTitle}</strong>
          <span>{copy.panelBody}</span>
        </div>
      </section>

      <section className="blog-section">
        <div className="section-heading">
          <span>{copy.sectionKicker}</span>
          <h2>{copy.sectionTitle}</h2>
          <p>{copy.sectionBody}</p>
        </div>

        <div className="blog-grid">
          {copy.posts.map((post, index) => (
            <article className="blog-card" key={post.id}>
              <img src={postImages[index]} alt={`${post.title} visual`} />
              <div>
                <span>{post.category}</span>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <a href={`#${post.id}`}>
                  {copy.readBrief}
                  <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="blog-briefs">
        {copy.posts.map((post, index) => (
          <article className="blog-brief" id={post.id} key={post.id}>
            <div>
              <span>0{index + 1}</span>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
            </div>
            <div className="blog-brief-detail">
              <h3>{copy.targetKeywords}</h3>
              <ul>
                {post.keywords.map((keyword) => (
                  <li key={keyword}>
                    <CheckCircle2 size={18} />
                    {keyword}
                  </li>
                ))}
              </ul>
              <h3>{copy.searchIntent}</h3>
              <p>{post.intent}</p>
              <a className="button button-secondary" href="/#contact">
                {copy.briefCta}
                <ArrowRight size={18} />
              </a>
            </div>
          </article>
        ))}
      </section>

      <section className="support-band blog-cta">
        <div>
          <span>{copy.finalKicker}</span>
          <h2>{copy.finalTitle}</h2>
          <p>{copy.finalBody}</p>
        </div>
        <a className="button button-primary" href="/#contact">
          {copy.finalCta}
          <ArrowRight size={18} />
        </a>
      </section>
    </>
  );
}
